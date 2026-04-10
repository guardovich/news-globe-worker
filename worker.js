import {
  FEEDS_DB,
  getFeedsByCountry,
  getTopicKeywords
} from "./feeds.js";

const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: DEFAULT_HEADERS });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      if (path === "/health") {
        return json({
          ok: true,
          service: "geonews-monitor-worker",
          version: 2
        });
      }

      if (path === "/alerts") {
        const data = await getAlerts();
        return json({ ok: true, ...data });
      }

      if (path === "/briefing") {
        const topic = (url.searchParams.get("topic") || "").trim();
        const countries = (url.searchParams.get("countries") || "")
          .split(",")
          .map((v) => normalizeKey(v))
          .filter(Boolean);

        const data = await getBriefing(topic, countries);
        return json({ ok: true, ...data });
      }

      if (path === "/briefing-random") {
        const topic = (url.searchParams.get("topic") || "").trim();
        const data = await getRandomBriefing(topic);
        return json({ ok: true, ...data });
      }

      const q = (url.searchParams.get("q") || "").trim();
      const place = (url.searchParams.get("place") || "").trim();
      const hl = url.searchParams.get("hl") || "es-ES";
      const gl = url.searchParams.get("gl") || "ES";
      const ceid = url.searchParams.get("ceid") || "ES:es";

      const data = await getNewsCompat({ q, place, hl, gl, ceid });
      return json({ ok: true, ...data });

    } catch (error) {
      return json(
        {
          ok: false,
          error: error.message || "Unknown error"
        },
        500
      );
    }
  }
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: DEFAULT_HEADERS
  });
}

/* =========================
   HELPERS
========================= */

function normalizeKey(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function normalizeText(value = "") {
  return normalizeKey(value);
}

function stripTags(str = "") {
  return str.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/* =========================
   RSS PARSER
========================= */

function parseRssItems(xml = "", fallbackSource = "RSS") {
  const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)];

  return items.map((m) => {
    const block = m[1];

    const get = (tag) => {
      const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"));
      return match ? stripTags(match[1]) : "";
    };

    return {
      title: get("title") || "Sin título",
      link: get("link"),
      pubDate: get("pubDate"),
      source: get("source") || fallbackSource,
      summary: get("description").slice(0, 300)
    };
  }).filter(i => i.link && i.title);
}

/* =========================
   FEEDS SYSTEM (NUEVO)
========================= */

function topicMatches(item, keywords = []) {
  if (!keywords.length) return true;

  const text = normalizeText(`${item.title} ${item.summary}`);

  return keywords.some((kw) =>
    text.includes(normalizeText(kw))
  );
}

function dedupeItems(items = []) {
  const seen = new Set();

  return items.filter((item) => {
    const key = item.link || item.title;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function fetchSingleFeed(feed) {
  try {
    const res = await fetch(feed.url, {
      headers: { "User-Agent": "Mozilla/5.0 rss-worker" }
    });

    if (!res.ok) return [];

    const xml = await res.text();
    const items = parseRssItems(xml, feed.name);

    return items.map((item) => ({
      ...item,
      source: feed.name,
      lang: feed.lang || "en"
    }));

  } catch {
    return [];
  }
}

async function fetchFeedsByCountry(place, query = "") {
  const feeds = getFeedsByCountry(place);

  if (!feeds.length) {
    return { ok: false, items: [] };
  }

  const keywords = getTopicKeywords(query);

  const results = await Promise.all(
    feeds.map((f) => fetchSingleFeed(f))
  );

  const merged = results.flat();
  const filtered = merged.filter((i) => topicMatches(i, keywords));
  const clean = dedupeItems(filtered).slice(0, 30);

  return { ok: true, items: clean };
}

/* =========================
   GOOGLE FALLBACK
========================= */

async function fetchGoogle({ q, place, hl, gl, ceid }) {
  let url = "";

  if (q && place) {
    url = `https://news.google.com/rss/search?q=${encodeURIComponent(q + " " + place)}&hl=${hl}&gl=${gl}&ceid=${ceid}`;
  } else if (place) {
    url = `https://news.google.com/rss/search?q=${place}&hl=${hl}&gl=${gl}&ceid=${ceid}`;
  } else {
    url = `https://news.google.com/rss?q=${q}`;
  }

  const res = await fetch(url);
  const xml = await res.text();
  const items = parseRssItems(xml, "Google News");

  return {
    status: res.status,
    source: url,
    items
  };
}

/* =========================
   CORE LOGIC
========================= */

async function getNewsCompat({ q, place, hl, gl, ceid }) {
  // 1️⃣ intentar feeds propios
  const feedsResult = await fetchFeedsByCountry(place, q);

  if (feedsResult.ok && feedsResult.items.length) {
    return {
      mode: "feeds",
      count: feedsResult.items.length,
      items: feedsResult.items
    };
  }

  // 2️⃣ fallback google
  return await fetchGoogle({ q, place, hl, gl, ceid });
}

/* =========================
   ALERTS / BRIEFING
========================= */

async function getAlerts() {
  return {
    alerts_es: [],
    alerts_en: []
  };
}

async function getBriefing(topic, countryKeys) {
  const groups = [];

  for (const key of countryKeys) {
    const news = await getNewsCompat({
      q: topic,
      place: key
    });

    groups.push({
      country: key,
      count: news.items.length,
      items: news.items.slice(0, 5)
    });
  }

  return {
    topic,
    groups
  };
}

async function getRandomBriefing(topic) {
  const countries = Object.keys(FEEDS_DB.countries || {});
  const random = countries.sort(() => 0.5 - Math.random()).slice(0, 3);

  return getBriefing(topic, random);
}
