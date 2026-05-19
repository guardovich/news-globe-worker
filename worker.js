import {
  FEEDS_DB,
  getFeedsByCountry,
  getTopicKeywords,
  getAllAlertFeeds
} from "./feeds.js";

const VERSION = "2.1.0";

const DEFAULT_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store"
};

export default {
  /* ── Scheduled ingesta (Cron Trigger) ─────────────────────────────── */
  async scheduled(event, env, ctx) {
    ctx.waitUntil(ingestAllFeeds(env));
  },

  /* ── HTTP handler ─────────────────────────────────────────────────── */
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: DEFAULT_HEADERS });
    }

    try {
      const url = new URL(request.url);
      const path = url.pathname;

      /* ── Health check ─────────────────────── */
      if (path === "/health") {
        return json({
          ok: true,
          service: "geonews-monitor-worker",
          version: VERSION,
          countries: Object.keys(FEEDS_DB.countries || {}).length,
          topics: Object.keys(FEEDS_DB.topics || {}).length
        });
      }

      /* ── Status de ingesta ────────────────── */
      if (path === "/status") {
        const data = await getStatus(env);
        return json({ ok: true, ...data });
      }

      /* ── List available countries ─────────── */
      if (path === "/countries") {
        const countries = Object.entries(FEEDS_DB.countries || {}).map(
          ([key, c]) => ({ key, label: c.label, lang: c.lang, feedCount: c.feeds.length })
        );
        return json({ ok: true, countries });
      }

      /* ── List available topics ────────────── */
      if (path === "/topics") {
        const topics = Object.keys(FEEDS_DB.topics || {});
        return json({ ok: true, topics });
      }

      /* ── International alerts ─────────────── */
      if (path === "/alerts") {
        const lang = url.searchParams.get("lang") || null;
        const data = await getAlerts(lang, env);
        return json({ ok: true, ...data });
      }

      /* ── Briefing by topic + countries ───── */
      if (path === "/briefing") {
        const topic = (url.searchParams.get("topic") || "").trim();
        const countries = (url.searchParams.get("countries") || "")
          .split(",")
          .map((v) => v.trim())
          .filter(Boolean);

        if (!countries.length) {
          return json({ ok: false, error: "Param 'countries' is required" }, 400);
        }

        const data = await getBriefing(topic, countries, env);
        return json({ ok: true, ...data });
      }

      /* ── Random briefing ──────────────────── */
      if (path === "/briefing-random") {
        const topic = (url.searchParams.get("topic") || "").trim();
        const count = Math.min(parseInt(url.searchParams.get("count") || "3", 10), 6);
        const data = await getRandomBriefing(topic, count);
        return json({ ok: true, ...data });
      }

      /* ── Default: search / country news ──── */
      const q = (url.searchParams.get("q") || "").trim();
      const place = (url.searchParams.get("place") || "").trim();
      const hl = url.searchParams.get("hl") || "es-ES";
      const gl = url.searchParams.get("gl") || "ES";
      const ceid = url.searchParams.get("ceid") || "ES:es";

      const data = await getNewsCompat({ q, place, hl, gl, ceid }, env);
      return json({ ok: true, ...data });

    } catch (error) {
      console.error("[geonews-worker]", error);
      return json(
        { ok: false, error: error.message || "Unknown error" },
        500
      );
    }
  }
};

/* =========================
   RESPONSE HELPER
========================= */

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: DEFAULT_HEADERS
  });
}

/* =========================
   TEXT HELPERS
========================= */

function normalizeText(value = "") {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

function stripTags(str = "") {
  return str.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
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

    // pubDate → ISO string when possible
    let pubDate = get("pubDate");
    try {
      if (pubDate) pubDate = new Date(pubDate).toISOString();
    } catch {
      // keep raw value
    }

    return {
      title: get("title") || "Sin título",
      link: get("link"),
      pubDate,
      source: get("source") || fallbackSource,
      summary: get("description").slice(0, 400)
    };
  }).filter((i) => i.link && i.title);
}

/* =========================
   FETCH SINGLE FEED
========================= */

async function fetchSingleFeed(feed) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(feed.url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; GeoNewsMonitor/2.1)" },
      signal: controller.signal
    });

    clearTimeout(timeout);

    if (!res.ok) return [];

    const xml = await res.text();
    const items = parseRssItems(xml, feed.name);

    return items.slice(0, FEEDS_DB.defaults.maxItemsPerFeed).map((item) => ({
      ...item,
      source: feed.name,
      lang: feed.lang || "en"
    }));

  } catch {
    return [];
  }
}

/* =========================
   TOPIC FILTER
========================= */

function topicMatches(item, keywords = []) {
  if (!keywords.length) return true;
  const text = normalizeText(`${item.title} ${item.summary}`);
  // Match full keyword OR any individual word from multi-word keywords
  return keywords.some((kw) => {
    const normKw = normalizeText(kw);
    if (text.includes(normKw)) return true;
    // Also try splitting multi-word keywords
    return normKw.split(/\s+/).filter(w => w.length > 3).some(w => text.includes(w));
  });
}

/* =========================
   FETCH BY COUNTRY
========================= */

async function fetchFeedsByCountry(place, query = "") {
  const feeds = getFeedsByCountry(place);
  if (!feeds.length) return { ok: false, items: [] };

  const keywords = getTopicKeywords(query);
  const limit = FEEDS_DB.defaults.maxFeedsPerRequest;

  const results = await Promise.all(
    feeds.slice(0, limit).map((f) => fetchSingleFeed(f))
  );

  const merged = results.flat();
  const filtered = keywords.length
    ? merged.filter((i) => topicMatches(i, keywords))
    : merged;

  // Si el filtro vacía los resultados pero hay artículos, devolver sin filtrar
  const base = (keywords.length && filtered.length === 0 && merged.length > 0)
    ? merged
    : filtered;

  const clean = dedupeItems(base).slice(0, 30);
  return { ok: true, items: clean };
}

/* =========================
   GOOGLE NEWS FALLBACK
========================= */

async function fetchGoogle({ q, place, hl, gl, ceid }) {
  let url;

  if (q && place) {
    url = `https://news.google.com/rss/search?q=${encodeURIComponent(q + " " + place)}&hl=${hl}&gl=${gl}&ceid=${ceid}`;
  } else if (place) {
    url = `https://news.google.com/rss/search?q=${encodeURIComponent(place)}&hl=${hl}&gl=${gl}&ceid=${ceid}`;
  } else if (q) {
    url = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=${hl}&gl=${gl}&ceid=${ceid}`;
  } else {
    url = `https://news.google.com/rss?hl=${hl}&gl=${gl}&ceid=${ceid}`;
  }

  const res = await fetch(url);
  const xml = await res.text();
  const items = parseRssItems(xml, "Google News");

  return {
    mode: "google",
    source: url,
    count: items.length,
    items
  };
}

/* =========================
   CORE: getNewsCompat
========================= */

async function getNewsCompat({ q, place, hl, gl, ceid }, env = null) {
  // 1. Consultar D1 si está disponible
  if (env && place) {
    const countryKey = getCountryKey(place);
    if (countryKey) {
      const d1Items = await queryD1ByCountry(env, countryKey, q);
      if (d1Items.length) {
        return { mode: "d1", count: d1Items.length, items: d1Items };
      }
    }
  }

  // 2. Fallback: feeds RSS en tiempo real
  if (place) {
    const feedsResult = await fetchFeedsByCountry(place, q);
    if (feedsResult.ok && feedsResult.items.length) {
      return { mode: "feeds", count: feedsResult.items.length, items: feedsResult.items };
    }
  }

  // 3. Fallback final: Google News
  return fetchGoogle({ q, place, hl, gl, ceid });
}

/* =========================
   ALERTS
========================= */

async function getAlerts(lang = null, env = null) {
  // 1. Consultar D1 si está disponible
  if (env) {
    const d1Items = await queryD1Alerts(env, lang);
    if (d1Items.count > 0) return d1Items;
  }

  // 2. Fallback: feeds RSS en tiempo real
  const allFeeds = getAllAlertFeeds();
  const feeds = lang
    ? allFeeds.filter((f) => f.lang === lang)
    : allFeeds;

  const results = await Promise.all(
    feeds.slice(0, FEEDS_DB.defaults.maxFeedsPerRequest).map((f) => fetchSingleFeed(f))
  );

  const merged = dedupeItems(results.flat()).slice(0, 40);
  const es = merged.filter((i) => i.lang === "es");
  const en = merged.filter((i) => i.lang === "en");

  return { count: merged.length, alerts_es: es, alerts_en: en };
}

/* =========================
   BRIEFING
========================= */

async function getBriefing(topic, countryKeys, env = null) {
  const groups = await Promise.all(
    countryKeys.map(async (key) => {
      const news = await getNewsCompat({ q: topic, place: key }, env);
      return {
        country: key,
        count: news.items.length,
        items: news.items.slice(0, 5)
      };
    })
  );

  return { topic, groups };
}

async function getRandomBriefing(topic, count = 3, env = null) {
  const keys = Object.keys(FEEDS_DB.countries || {});
  const random = keys.sort(() => Math.random() - 0.5).slice(0, count);
  return getBriefing(topic, random, env);
}

/* =========================
   D1 — STATUS
========================= */

async function getStatus(env) {
  if (!env || !env.DB) {
    return { error: "D1 no disponible", db: false };
  }

  // Últimos 5 ciclos de ingesta
  const logsResult = await env.DB.prepare(
    `SELECT * FROM ingest_log ORDER BY ran_at DESC LIMIT 5`
  ).all();

  // Feeds con errores en las últimas 2 horas
  const errCutoff = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
  const errorsResult = await env.DB.prepare(
    `SELECT feed_name, feed_url, country, error_msg, failed_at
     FROM feed_errors WHERE failed_at > ? ORDER BY failed_at DESC LIMIT 20`
  ).bind(errCutoff).all();

  // Total de artículos y conteo por país
  const totalResult = await env.DB.prepare(
    `SELECT COUNT(*) as total FROM articles`
  ).first();

  const byCountryResult = await env.DB.prepare(
    `SELECT country, COUNT(*) as count, MAX(fetched_at) as last_fetch
     FROM articles GROUP BY country ORDER BY count DESC`
  ).all();

  // Artículo más reciente
  const latestResult = await env.DB.prepare(
    `SELECT fetched_at FROM articles ORDER BY fetched_at DESC LIMIT 1`
  ).first();

  return {
    db: true,
    total_articles: totalResult?.total || 0,
    last_ingest:    latestResult?.fetched_at || null,
    ingest_log:     logsResult.results  || [],
    feed_errors:    errorsResult.results || [],
    by_country:     byCountryResult.results || []
  };
}

/* =========================
   D1 — HELPERS
========================= */

function getCountryKey(place = "") {
  if (!place) return null;
  const norm = (v) => v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const normalized = norm(place);
  for (const [key, country] of Object.entries(FEEDS_DB.countries || {})) {
    const aliases = (country.aliases || []).map(norm);
    if (norm(key) === normalized || aliases.includes(normalized)) return key;
  }
  return null;
}

function mapD1Item(row) {
  return {
    title:   row.title,
    link:    row.link,
    pubDate: row.pub_date,
    source:  row.source,
    summary: row.summary,
    lang:    row.lang
  };
}

async function queryD1ByCountry(env, countryKey, query = "") {
  // Artículos de las últimas 6 horas
  const cutoff = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();

  const normalizedQ = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

  // Buscar topic predefinido
  let matchedTopic = null;
  const topics = FEEDS_DB.topics || {};
  if (topics[normalizedQ]) {
    matchedTopic = normalizedQ;
  } else {
    for (const [key, keywords] of Object.entries(topics)) {
      const norm = (v) => v.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      if (keywords.some((kw) => norm(kw) === normalizedQ)) { matchedTopic = key; break; }
    }
  }

  let result;
  if (matchedTopic) {
    result = await env.DB.prepare(
      `SELECT * FROM articles WHERE country = ? AND fetched_at > ? AND topic_tags LIKE ?
       ORDER BY pub_date DESC LIMIT 30`
    ).bind(countryKey, cutoff, `%"${matchedTopic}"%`).all();
  } else if (query) {
    result = await env.DB.prepare(
      `SELECT * FROM articles WHERE country = ? AND fetched_at > ? AND (title LIKE ? OR summary LIKE ?)
       ORDER BY pub_date DESC LIMIT 30`
    ).bind(countryKey, cutoff, `%${query}%`, `%${query}%`).all();
  } else {
    result = await env.DB.prepare(
      `SELECT * FROM articles WHERE country = ? AND fetched_at > ?
       ORDER BY pub_date DESC LIMIT 30`
    ).bind(countryKey, cutoff).all();
  }

  return (result.results || []).map(mapD1Item);
}

async function queryD1Alerts(env, lang = null) {
  const cutoff = new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString();

  let result;
  if (lang) {
    result = await env.DB.prepare(
      `SELECT * FROM articles WHERE country = 'international' AND lang = ? AND fetched_at > ?
       ORDER BY pub_date DESC LIMIT 40`
    ).bind(lang, cutoff).all();
  } else {
    result = await env.DB.prepare(
      `SELECT * FROM articles WHERE country = 'international' AND fetched_at > ?
       ORDER BY pub_date DESC LIMIT 40`
    ).bind(cutoff).all();
  }

  const items = (result.results || []).map(mapD1Item);
  return {
    count:     items.length,
    alerts_es: items.filter((i) => i.lang === "es"),
    alerts_en: items.filter((i) => i.lang === "en")
  };
}

/* =========================
   INGESTA — SHA-1 ID
========================= */

async function hashId(str) {
  const buf = await crypto.subtle.digest(
    "SHA-1",
    new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/* =========================
   INGESTA — DETECCIÓN DE TEMAS
========================= */

function detectTopics(item) {
  const tags = [];
  const text = normalizeText(`${item.title} ${item.summary}`);
  for (const [topic, keywords] of Object.entries(FEEDS_DB.topics || {})) {
    if (keywords.some((kw) => text.includes(normalizeText(kw)))) {
      tags.push(topic);
    }
  }
  return tags;
}

/* =========================
   INGESTA — FETCH + STORE
========================= */

async function fetchAndStore(feed, env) {
  let inserted = 0;

  try {
    const items = await fetchSingleFeed(feed);

    for (const item of items) {
      const id = await hashId(item.link);
      const topicTags = detectTopics(item);

      const result = await env.DB.prepare(`
        INSERT OR IGNORE INTO articles
          (id, title, link, summary, source, country, lang, pub_date, fetched_at, topic_tags)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        id,
        item.title,
        item.link,
        item.summary || "",
        item.source || feed.name,
        feed.country,
        item.lang || feed.lang || "en",
        item.pubDate || null,
        new Date().toISOString(),
        JSON.stringify(topicTags)
      ).run();

      if (result.meta.changes > 0) inserted++;
    }

    return { inserted };

  } catch (err) {
    // Registrar el fallo en feed_errors
    try {
      await env.DB.prepare(`
        INSERT INTO feed_errors (feed_name, feed_url, country, error_msg, failed_at)
        VALUES (?, ?, ?, ?, ?)
      `).bind(
        feed.name,
        feed.url,
        feed.country,
        err.message || "Unknown error",
        new Date().toISOString()
      ).run();
    } catch {
      // No romper el flujo si el log también falla
    }
    throw err;
  }
}

/* =========================
   INGESTA — ORQUESTADOR
========================= */

async function ingestAllFeeds(env) {
  const startTime = Date.now();
  let feedsOk = 0;
  let feedsFail = 0;
  let articlesInserted = 0;

  // Recopilar todos los feeds: países + alertas internacionales
  const allFeeds = [];

  for (const [countryKey, country] of Object.entries(FEEDS_DB.countries || {})) {
    for (const feed of country.feeds || []) {
      allFeeds.push({ ...feed, country: countryKey });
    }
  }

  for (const feed of getAllAlertFeeds()) {
    allFeeds.push({ ...feed, country: "international" });
  }

  // Procesar en lotes de 8 para no saturar la red
  const BATCH = 8;
  for (let i = 0; i < allFeeds.length; i += BATCH) {
    const batch = allFeeds.slice(i, i + BATCH);
    const results = await Promise.allSettled(
      batch.map((f) => fetchAndStore(f, env))
    );

    for (const r of results) {
      if (r.status === "fulfilled") {
        feedsOk++;
        articlesInserted += r.value.inserted;
      } else {
        feedsFail++;
      }
    }
  }

  // Limpiar artículos con más de 7 días
  const cutoff = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
  await env.DB.prepare(`DELETE FROM articles WHERE fetched_at < ?`)
    .bind(cutoff)
    .run();

  // Registrar el ciclo en ingest_log
  const duration = Date.now() - startTime;
  await env.DB.prepare(`
    INSERT INTO ingest_log (ran_at, feeds_ok, feeds_fail, articles_inserted, duration_ms)
    VALUES (?, ?, ?, ?, ?)
  `).bind(
    new Date().toISOString(),
    feedsOk,
    feedsFail,
    articlesInserted,
    duration
  ).run();

  console.log(
    `[ingest] ok=${feedsOk} fail=${feedsFail} inserted=${articlesInserted} (${duration}ms)`
  );
}
