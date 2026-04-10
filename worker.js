import { FEEDS_DB, getFeedsByCountry, getTopicKeywords } from "./feeds.js";

import feedsData from "./feeds.json";

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
          version: 1
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

      // Compatibilidad con tu frontend actual:
      // /?q=IA&place=España&hl=es-ES&gl=ES&ceid=ES:es
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
          error: error instanceof Error ? error.message : "Unknown error"
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
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function decodeXml(str = "") {
  return String(str)
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'");
}

function stripTags(str = "") {
  return decodeXml(str)
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTagValue(block, tagName) {
  const cdataRegex = new RegExp(
    `<${tagName}[^>]*><!\$begin:math:display$CDATA\\\\\[\(\[\\\\s\\\\S\]\*\?\)\\$end:math:display$\\]><\\/${tagName}>`,
    "i"
  );

  const normalRegex = new RegExp(
    `<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`,
    "i"
  );

  const cdataMatch = block.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  const normalMatch = block.match(normalRegex);
  if (normalMatch) return normalMatch[1].trim();

  return "";
}

function parseRssItems(xml = "", fallbackSource = "RSS") {
  const itemBlocks = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].map((m) => m[1]);

  return itemBlocks
    .slice(0, 50)
    .map((block) => {
      const title = stripTags(getTagValue(block, "title"));
      const link = stripTags(getTagValue(block, "link"));
      const pubDate = stripTags(getTagValue(block, "pubDate"));
      const description = stripTags(getTagValue(block, "description"));
      const source = stripTags(getTagValue(block, "source"));

      return {
        title: title || "Sin título",
        link,
        pubDate,
        source: source || fallbackSource,
        summary: description.slice(0, 300)
      };
    })
    .filter((item) => item.link && item.title);
}

function dedupeItems(items = []) {
  const seen = new Set();
  const clean = [];

  for (const item of items) {
    const key = normalizeKey(item.link || item.title);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    clean.push(item);
  }

  return clean;
}

function expandTopicTerms(query = "") {
  const normalized = normalizeKey(query);
  const topics = feedsData?.topics || {};

  if (topics[normalized]) return topics[normalized];

  return query
    .split(/\s+/)
    .map((v) => v.trim())
    .filter(Boolean);
}

function matchesQuery(item, query = "") {
  if (!query) return true;

  const haystack = `${item.title || ""} ${item.summary || ""}`.toLowerCase();
  const terms = expandTopicTerms(query);

  return terms.some((term) => haystack.includes(term.toLowerCase()));
}

function scoreItems(items = [], query = "", countryLabel = "") {
  const terms = expandTopicTerms(query);
  const countryLower = (countryLabel || "").toLowerCase();

  return items
    .map((item) => {
      const title = (item.title || "").toLowerCase();
      const body = `${item.title || ""} ${item.summary || ""}`.toLowerCase();

      let relevance = 0;

      for (const term of terms) {
        const t = term.toLowerCase();
        if (body.includes(t)) relevance += 10;
        if (title.includes(t)) relevance += 18;
      }

      if (countryLower && body.includes(countryLower)) relevance += 4;
      relevance += Math.round((item.sourceWeight || 1) * 10);

      return {
        ...item,
        relevance
      };
    })
    .sort((a, b) => b.relevance - a.relevance);
}

function resolveCountry(inputKey) {
  const countries = feedsData?.countries || {};

  for (const [key, value] of Object.entries(countries)) {
    if (normalizeKey(key) === inputKey) {
      return { key, ...value };
    }

    if ((value.aliases || []).map(normalizeKey).includes(inputKey)) {
      return { key, ...value };
    }
  }

  return null;
}

function buildGoogleRssUrl({ q = "", place = "", hl = "es-ES", gl = "ES", ceid = "ES:es" }) {
  if (q && place) {
    return `https://news.google.com/rss/search?q=${encodeURIComponent(`${q} ${place}`)}&hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
  }

  if (place) {
    return `https://news.google.com/rss/search?q=${encodeURIComponent(place)}&hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
  }

  if (q) {
    return `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
  }

  return `https://news.google.com/rss?hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
}

/* =========================
   FETCH RSS
========================= */

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0 geonews-monitor-worker"
    }
  });

  const text = await res.text();

  return {
    status: res.status,
    text
  };
}

async function fetchFeed(feed, query = "", limit = 12) {
  const { status, text } = await fetchText(feed.url);

  const items = parseRssItems(text, feed.name)
    .filter((item) => matchesQuery(item, query))
    .slice(0, limit)
    .map((item) => ({
      ...item,
      sourceWeight: feed.weight || 1
    }));

  return {
    status,
    source: feed.url,
    items
  };
}

async function fetchGoogleCompat(params) {
  const rssUrl = buildGoogleRssUrl(params);
  const { status, text } = await fetchText(rssUrl);
  const items = parseRssItems(text, "Google News");

  return {
    status,
    source: rssUrl,
    count: items.length,
    items,
    xmlPreview: text.slice(0, 500)
  };
}

/* =========================
   ENDPOINT COMPAT FRONT ACTUAL
========================= */

async function getNewsCompat({ q, place, hl, gl, ceid }) {
  const countryKey = normalizeKey(place || "");
  const country = resolveCountry(countryKey);

  // Si no hay feeds definidos para el país, usa Google News RSS como hasta ahora
  if (!country || !country.feeds || !country.feeds.length) {
    return await fetchGoogleCompat({ q, place, hl, gl, ceid });
  }

  const maxFeedsPerRequest = feedsData?.defaults?.maxFeedsPerRequest || 4;
  const maxItemsPerFeed = feedsData?.defaults?.maxItemsPerFeed || 12;

  const selectedFeeds = country.feeds.slice(0, maxFeedsPerRequest);

  const settled = await Promise.allSettled(
    selectedFeeds.map((feed) => fetchFeed(feed, q, maxItemsPerFeed))
  );

  const rawItems = settled
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => r.value.items);

  const deduped = dedupeItems(rawItems);
  const scored = scoreItems(deduped, q, country.label || place);

  // fallback a Google si no sale nada
  if (!scored.length) {
    return await fetchGoogleCompat({ q, place, hl, gl, ceid });
  }

  return {
    status: 200,
    source: "country-feeds",
    country: country.label || place,
    count: scored.length,
    items: scored.slice(0, 20),
    xmlPreview: ""
  };
}

/* =========================
   ALERTAS INTERNACIONALES
========================= */

async function getAlerts() {
  const esFeeds = feedsData?.alerts?.international_es || [];
  const enFeeds = feedsData?.alerts?.international_en || [];

  const [esSettled, enSettled] = await Promise.all([
    Promise.allSettled(esFeeds.slice(0, 4).map((feed) => fetchFeed(feed, "", 8))),
    Promise.allSettled(enFeeds.slice(0, 4).map((feed) => fetchFeed(feed, "", 8)))
  ]);

  const alerts_es = dedupeItems(
    esSettled
      .filter((r) => r.status === "fulfilled")
      .flatMap((r) => r.value.items)
  ).slice(0, 10);

  const alerts_en = dedupeItems(
    enSettled
      .filter((r) => r.status === "fulfilled")
      .flatMap((r) => r.value.items)
  ).slice(0, 10);

  return {
    alerts_es,
    alerts_en
  };
}

/* =========================
   SCORING PAÍS
========================= */

function buildCountryScoring(items = []) {
  const text = items
    .map((i) => `${i.title || ""} ${i.summary || ""}`)
    .join(" ")
    .toLowerCase();

  const rules = {
    tension: ["war", "guerra", "conflict", "conflicto", "attack", "ataque", "crisis", "missile", "sanction", "sancion", "sanción"],
    economy: ["economy", "economia", "economía", "market", "mercado", "inflation", "inflacion", "inflación", "bank", "banco", "oil", "gas"],
    social: ["protest", "protesta", "migration", "migracion", "migración", "health", "sanidad", "education", "educacion", "educación"],
    security: ["security", "seguridad", "defense", "defensa", "army", "ejercito", "ejército", "nato", "otan", "cyber"],
    technology: ["ai", "ia", "chip", "software", "data", "digital", "ciberseguridad", "cybersecurity"]
  };

  const scoreBucket = (words) =>
    Math.min(
      100,
      words.reduce((acc, word) => acc + (text.includes(word) ? 18 : 0), 0)
    );

  const tension = scoreBucket(rules.tension);
  const economy = scoreBucket(rules.economy);
  const social = scoreBucket(rules.social);
  const security = scoreBucket(rules.security);
  const technology = scoreBucket(rules.technology);

  return {
    tension,
    economy,
    social,
    security,
    technology,
    defconLike:
      tension >= 80 ? "RED" :
      tension >= 60 ? "ORANGE" :
      tension >= 40 ? "YELLOW" :
      tension >= 20 ? "BLUE" :
      "GREEN"
  };
}

/* =========================
   BRIEFING
========================= */

async function getBriefing(topic, countryKeys) {
  if (!topic) throw new Error("Missing topic");
  if (!countryKeys.length) throw new Error("Missing countries");

  const groups = [];

  for (const key of countryKeys) {
    const country = resolveCountry(key);
    if (!country) continue;

    const news = await getNewsCompat({
      q: topic,
      place: country.label || key,
      hl: country.lang || "en",
      gl: "",
      ceid: ""
    });

    const items = news.items || [];
    const scoring = buildCountryScoring(items);

    groups.push({
      country: country.label || key,
      count: items.length,
      items: items.slice(0, 5),
      scoring
    });
  }

  const summary = buildBriefingSummary(topic, groups);

  return {
    topic,
    countries: groups.map((g) => g.country),
    groups,
    summary
  };
}

async function getRandomBriefing(topic) {
  if (!topic) throw new Error("Missing topic");

  const keys = Object.keys(feedsData?.countries || {});
  const selected = shuffle(keys).slice(0, 3);

  const briefing = await getBriefing(topic, selected);

  return {
    random: true,
    ...briefing
  };
}

function buildBriefingSummary(topic, groups) {
  const total = groups.reduce((acc, g) => acc + (g.count || 0), 0);
  const hottest = [...groups].sort(
    (a, b) => (b.scoring?.tension || 0) - (a.scoring?.tension || 0)
  )[0];

  return {
    executiveSummary: `Briefing generado sobre "${topic}" con ${groups.length} países y ${total} titulares agregados.`,
    hottestCountry: hottest?.country || null,
    highestTension: hottest?.scoring?.tension || 0
  };
}

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
