export default {
  async fetch(request) {
    const url = new URL(request.url);

    const q = (url.searchParams.get("q") || "").trim();
    const place = (url.searchParams.get("place") || "").trim();
    const hl = url.searchParams.get("hl") || "es-ES";
    const gl = url.searchParams.get("gl") || "ES";
    const ceid = url.searchParams.get("ceid") || "ES:es";

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    let rssUrl = "";

    if (q && place) {
      rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(`${q} ${place}`)}&hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
    } else if (place) {
      rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(place)}&hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
    } else if (q) {
      rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
    } else {
      rssUrl = `https://news.google.com/rss?hl=${encodeURIComponent(hl)}&gl=${encodeURIComponent(gl)}&ceid=${encodeURIComponent(ceid)}`;
    }

    try {
      const rssRes = await fetch(rssUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 news-globe-worker"
        }
      });

      const xml = await rssRes.text();
      const items = parseRssItems(xml);

      return new Response(
        JSON.stringify({
          ok: true,
          status: rssRes.status,
          source: rssUrl,
          count: items.length,
          items,
          xmlPreview: xml.slice(0, 500)
        }),
        { status: 200, headers }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: error.message
        }),
        { status: 500, headers }
      );
    }
  }
};

function decodeXml(str = "") {
  return str
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

function stripTags(str = "") {
  return decodeXml(str).replace(/<[^>]+>/g, "").trim();
}

function getTagValue(block, tagName) {
  const cdataMatch = block.match(
    new RegExp(`<${tagName}><!\$begin:math:display$CDATA\\\\\[\(\[\\\\s\\\\S\]\*\?\)\\$end:math:display$\\]><\\/${tagName}>`, "i")
  );
  if (cdataMatch) return cdataMatch[1].trim();

  const normalMatch = block.match(
    new RegExp(`<${tagName}>([\\s\\S]*?)<\\/${tagName}>`, "i")
  );
  if (normalMatch) return normalMatch[1].trim();

  return "";
}

function parseRssItems(xml = "") {
  const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map((m) => m[1]);

  return itemBlocks
    .slice(0, 20)
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
        source: source || "Google News",
        summary: description.slice(0, 240)
      };
    })
    .filter((item) => item.link && item.title);
}
