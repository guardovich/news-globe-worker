export const FEEDS_DB = {
  version: 2,

  defaults: {
    maxFeedsPerRequest: 6,
    maxItemsPerFeed: 12
  },

  /* ─── ALERTAS INTERNACIONALES ─────────────────── */
  alerts: {
    international_es: [
      { name: "EL PAÍS",      url: "https://elpais.com/rss/elpais/portada_america.xml", lang: "es", type: "general" },
      { name: "France 24 ES", url: "https://www.france24.com/es/rss",                  lang: "es", type: "international" },
      { name: "BBC Mundo",    url: "https://feeds.bbci.co.uk/mundo/rss.xml",            lang: "es", type: "international" },
      { name: "CNN ES",       url: "https://cnnespanol.cnn.com/feed/",                  lang: "es", type: "international" },
      { name: "DW Español",   url: "https://rss.dw.com/xml/rss-es-all",                lang: "es", type: "international" }
    ],
    international_en: [
      { name: "Al Jazeera",   url: "https://www.aljazeera.com/xml/rss/all.xml",         lang: "en", type: "international" },
      { name: "DW English",   url: "https://rss.dw.com/xml/rss-en-world",              lang: "en", type: "international" },
      { name: "France 24 EN", url: "https://www.france24.com/en/rss",                  lang: "en", type: "international" },
      { name: "BBC World",    url: "https://feeds.bbci.co.uk/news/world/rss.xml",       lang: "en", type: "international" },
      { name: "AP News",      url: "https://apnews.com/index.rss",                     lang: "en", type: "international" }
    ]
  },

  /* ─── TEMAS ───────────────────────────────────── */
  topics: {
    ia:             ["ia", "inteligencia artificial", "artificial intelligence", "ai", "llm", "openai", "chatgpt", "deepseek", "gemini"],
    energia:        ["energia", "energía", "energy", "oil", "gas", "lng", "renewables", "electricity", "petróleo", "nuclear"],
    otan:           ["otan", "nato", "alianza atlántica", "alliance"],
    ciberseguridad: ["ciberseguridad", "cybersecurity", "ransomware", "malware", "hack", "ciberataque"],
    defensa:        ["defensa", "defense", "military", "militar", "ejército", "army"],
    china:          ["china", "beijing", "taiwan", "xi jinping", "pcc"],
    rusia:          ["rusia", "russia", "kremlin", "putin", "ucrania", "ukraine"],
    economia:       ["economia", "economy", "inflation", "markets", "mercados", "inflación", "recession"],
    migracion:      ["migración", "migration", "refugees", "refugiados", "asylum", "border"],
    clima:          ["clima", "climate", "cambio climático", "emissions", "cop", "renewables"],
    conflicto:      ["conflicto", "conflict", "guerra", "war", "bombardeo", "bombing", "ceasefire"]
  },

  /* ─── PAÍSES ──────────────────────────────────── */
  countries: {

    /* ── Europa Occidental ── */
    spain: {
      label: "España", aliases: ["espana", "españa", "spain", "es"], lang: "es",
      feeds: [
        { name: "EL PAÍS",     url: "https://elpais.com/rss/elpais/portada.xml",           lang: "es", type: "general" },
        { name: "El Mundo",    url: "https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml", lang: "es", type: "general" },
        { name: "RTVE",        url: "https://www.rtve.es/api/rss/noticias/",                lang: "es", type: "general" },
        { name: "20 Minutos",  url: "https://www.20minutos.es/rss/",                        lang: "es", type: "general" },
        { name: "Europa Press", url: "https://www.europapress.es/rss/rss.aspx",             lang: "es", type: "general" }
      ]
    },
    portugal: {
      label: "Portugal", aliases: ["portugal", "pt"], lang: "pt",
      feeds: [
        { name: "RTP",         url: "https://www.rtp.pt/noticias/rss",                     lang: "pt", type: "general" },
        { name: "Observador",  url: "https://observador.pt/feed/",                         lang: "pt", type: "general" },
        { name: "Público",     url: "https://www.publico.pt/rss/ultimas",                  lang: "pt", type: "general" }
      ]
    },
    france: {
      label: "France", aliases: ["france", "francia", "fr"], lang: "fr",
      feeds: [
        { name: "Le Monde",    url: "http://www.lemonde.fr/rss/une.xml",                   lang: "fr", type: "general" },
        { name: "France 24",   url: "https://www.france24.com/fr/rss",                     lang: "fr", type: "general" },
        { name: "L'Express",   url: "https://www.lexpress.fr/rss/alaune.xml",              lang: "fr", type: "general" }
      ]
    },
    germany: {
      label: "Deutschland", aliases: ["alemania", "germany", "deutschland", "de"], lang: "de",
      feeds: [
        { name: "Tagesschau",  url: "https://www.tagesschau.de/xml/rss2",                  lang: "de", type: "general" },
        { name: "DW Deutsch",  url: "https://rss.dw.com/xml/rss-de-all",                   lang: "de", type: "general" },
        { name: "Spiegel Intl",url: "https://www.spiegel.de/international/index.rss",      lang: "en", type: "general" }
      ]
    },
    italy: {
      label: "Italia", aliases: ["italy", "italia", "it"], lang: "it",
      feeds: [
        { name: "ANSA",        url: "https://www.ansa.it/sito/notizie/mondo/mondo_rss.xml", lang: "it", type: "general" },
        { name: "Corriere",    url: "https://xml2.corriereobjects.it/rss/homepage.xml",    lang: "it", type: "general" },
        { name: "La Stampa",   url: "https://www.lastampa.it/rss.xml",                     lang: "it", type: "general" }
      ]
    },
    uk: {
      label: "United Kingdom", aliases: ["uk", "reino unido", "gb", "great britain"], lang: "en",
      feeds: [
        { name: "BBC",         url: "https://feeds.bbci.co.uk/news/rss.xml",               lang: "en", type: "general" },
        { name: "The Guardian",url: "https://www.theguardian.com/world/rss",               lang: "en", type: "general" },
        { name: "Sky News",    url: "https://feeds.skynews.com/feeds/rss/world.xml",       lang: "en", type: "general" }
      ]
    },
    netherlands: {
      label: "Nederland", aliases: ["netherlands", "paises bajos", "países bajos", "holanda", "nl"], lang: "nl",
      feeds: [
        { name: "DutchNews",   url: "https://www.dutchnews.nl/feed/",                      lang: "en", type: "general" },
        { name: "NOS",         url: "https://feeds.nos.nl/nosnieuwsalgemeen",               lang: "nl", type: "general" }
      ]
    },
    sweden: {
      label: "Sverige", aliases: ["sweden", "suecia", "se"], lang: "sv",
      feeds: [
        { name: "Local Sweden",url: "https://www.thelocal.se/feed/",                       lang: "en", type: "general" },
        { name: "SVT",         url: "https://www.svt.se/nyheter/rss.xml",                  lang: "sv", type: "general" }
      ]
    },
    poland: {
      label: "Polska", aliases: ["poland", "polonia", "pl"], lang: "pl",
      feeds: [
        { name: "TVN24",       url: "https://tvn24.pl/najnowsze.xml",                      lang: "pl", type: "general" },
        { name: "Notes Poland",url: "https://notesfrompoland.com/feed/",                   lang: "en", type: "general" }
      ]
    },
    ukraine: {
      label: "Україна", aliases: ["ukraine", "ucrania", "ua"], lang: "uk",
      feeds: [
        { name: "Ukrinform",   url: "https://www.ukrinform.net/rss/block-lastnews",        lang: "en", type: "general" },
        { name: "Kyiv Indep.", url: "https://kyivindependent.com/feed/",                   lang: "en", type: "general" }
      ]
    },
    greece: {
      label: "Ελλάδα", aliases: ["greece", "grecia", "gr"], lang: "el",
      feeds: [
        { name: "Ekathimerini",url: "https://www.ekathimerini.com/rss/?p=8",               lang: "en", type: "general" }
      ]
    },
    austria: {
      label: "Österreich", aliases: ["austria", "at"], lang: "de",
      feeds: [
        { name: "ORF",         url: "https://rss.orf.at/news.xml",                         lang: "de", type: "general" }
      ]
    },

    /* ── Europa del Este ── */
    russia: {
      label: "Russia", aliases: ["russia", "rusia", "ru"], lang: "ru",
      feeds: [
        { name: "TASS English",url: "https://tass.com/rss/v2.xml",                         lang: "en", type: "general" },
        { name: "Moscow Times",url: "https://www.themoscowtimes.com/rss/news",             lang: "en", type: "general" }
      ]
    },
    turkey: {
      label: "Türkiye", aliases: ["turkey", "turquia", "turquía", "tr"], lang: "tr",
      feeds: [
        { name: "Daily Sabah", url: "https://www.dailysabah.com/rss",                      lang: "en", type: "general" },
        { name: "TRT World",   url: "https://www.trtworld.com/rss",                        lang: "en", type: "general" }
      ]
    },
    serbia: {
      label: "Serbia", aliases: ["serbia", "rs"], lang: "sr",
      feeds: [
        { name: "N1 Serbia",   url: "https://n1info.rs/feed/",                             lang: "sr", type: "general" }
      ]
    },

    /* ── América del Norte ── */
    usa: {
      label: "United States", aliases: ["usa", "eeuu", "united states", "us", "estados unidos"], lang: "en",
      feeds: [
        { name: "AP News",     url: "https://apnews.com/index.rss",                        lang: "en", type: "general" },
        { name: "NYT",         url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", lang: "en", type: "general" },
        { name: "CNN",         url: "https://rss.cnn.com/rss/edition.rss",                 lang: "en", type: "general" },
        { name: "Politico",    url: "https://www.politico.com/rss/politicopicks.xml",      lang: "en", type: "general" }
      ]
    },
    canada: {
      label: "Canada", aliases: ["canada", "canadá", "ca"], lang: "en",
      feeds: [
        { name: "CBC",         url: "https://www.cbc.ca/cmlink/rss-topstories",            lang: "en", type: "general" },
        { name: "Globe & Mail",url: "https://www.theglobeandmail.com/arc/outboundfeeds/rss/", lang: "en", type: "general" }
      ]
    },
    mexico: {
      label: "México", aliases: ["mexico", "méxico", "mx"], lang: "es",
      feeds: [
        { name: "El Universal", url: "https://www.eluniversal.com.mx/rss/notashome.xml",  lang: "es", type: "general" },
        { name: "Milenio",      url: "https://www.milenio.com/rss",                        lang: "es", type: "general" },
        { name: "Reforma",      url: "https://www.reforma.com/rss/portada.xml",            lang: "es", type: "general" }
      ]
    },

    /* ── América del Sur ── */
    argentina: {
      label: "Argentina", aliases: ["argentina", "ar"], lang: "es",
      feeds: [
        { name: "Clarín",      url: "https://www.clarin.com/rss/",                         lang: "es", type: "general" },
        { name: "La Nación",   url: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/",  lang: "es", type: "general" },
        { name: "Infobae",     url: "https://www.infobae.com/feeds/rss/",                  lang: "es", type: "general" }
      ]
    },
    brazil: {
      label: "Brasil", aliases: ["brasil", "brazil", "br"], lang: "pt",
      feeds: [
        { name: "G1",          url: "https://g1.globo.com/rss/g1/",                        lang: "pt", type: "general" },
        { name: "Folha",       url: "https://feeds.folha.uol.com.br/emcimadahora/rss091.xml", lang: "pt", type: "general" }
      ]
    },
    colombia: {
      label: "Colombia", aliases: ["colombia", "co"], lang: "es",
      feeds: [
        { name: "El Tiempo",   url: "https://www.eltiempo.com/rss/",                       lang: "es", type: "general" },
        { name: "El Espectador",url: "https://www.elespectador.com/arc/outboundfeeds/rss/", lang: "es", type: "general" }
      ]
    },
    chile: {
      label: "Chile", aliases: ["chile", "cl"], lang: "es",
      feeds: [
        { name: "La Tercera",  url: "https://www.latercera.com/feed/",                     lang: "es", type: "general" },
        { name: "Emol",        url: "https://www.emol.com/rss/titulares.xml",              lang: "es", type: "general" }
      ]
    },
    peru: {
      label: "Perú", aliases: ["peru", "perú", "pe"], lang: "es",
      feeds: [
        { name: "El Comercio", url: "https://elcomercio.pe/arc/outboundfeeds/rss/",        lang: "es", type: "general" },
        { name: "RPP",         url: "https://rpp.pe/rss/ultimas-noticias.xml",             lang: "es", type: "general" }
      ]
    },
    venezuela: {
      label: "Venezuela", aliases: ["venezuela", "ve"], lang: "es",
      feeds: [
        { name: "El Nacional", url: "https://www.elnacional.com/feed/",                   lang: "es", type: "general" }
      ]
    },

    /* ── Asia Oriental ── */
    china: {
      label: "China", aliases: ["china", "cn"], lang: "zh",
      feeds: [
        { name: "China Daily",  url: "https://www.chinadaily.com.cn/rss/world_rss.xml",   lang: "en", type: "general" },
        { name: "CGTN",         url: "https://www.cgtn.com/subscribe/feeds/rss2.0.xml",   lang: "en", type: "general" },
        { name: "Xinhua",       url: "https://english.news.cn/rss/world.xml",             lang: "en", type: "general" }
      ]
    },
    japan: {
      label: "Japón", aliases: ["japan", "japon", "japón", "jp"], lang: "ja",
      feeds: [
        { name: "NHK",         url: "https://www3.nhk.or.jp/rss/news/cat0.xml",           lang: "ja", type: "general" },
        { name: "Japan Times", url: "https://www.japantimes.co.jp/feed/",                 lang: "en", type: "general" }
      ]
    },
    india: {
      label: "India", aliases: ["india", "in"], lang: "en",
      feeds: [
        { name: "The Hindu",   url: "https://www.thehindu.com/news/feeder/default.rss",   lang: "en", type: "general" },
        { name: "NDTV",        url: "https://feeds.feedburner.com/ndtvnews-latest",        lang: "en", type: "general" },
        { name: "Times India", url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms", lang: "en", type: "general" }
      ]
    },
    south_korea: {
      label: "South Korea", aliases: ["south korea", "corea del sur", "kr"], lang: "ko",
      feeds: [
        { name: "Korea Herald",url: "https://www.koreaherald.com/common/rss_xml.php?ct=020100000000", lang: "en", type: "general" },
        { name: "Yonhap",      url: "https://en.yna.co.kr/RSS/news.xml",                  lang: "en", type: "general" }
      ]
    },
    australia: {
      label: "Australia", aliases: ["australia", "au"], lang: "en",
      feeds: [
        { name: "ABC Australia",url: "https://www.abc.net.au/news/feed/52498/rss.xml",    lang: "en", type: "general" },
        { name: "SMH",         url: "https://www.smh.com.au/rss/feed.xml",                lang: "en", type: "general" }
      ]
    },
    indonesia: {
      label: "Indonesia", aliases: ["indonesia", "id"], lang: "id",
      feeds: [
        { name: "Jakarta Post",url: "https://www.thejakartapost.com/feed",                lang: "en", type: "general" }
      ]
    },

    /* ── Oriente Medio ── */
    israel: {
      label: "Israel", aliases: ["israel", "il"], lang: "he",
      feeds: [
        { name: "Times of Israel",url: "https://www.timesofisrael.com/feed/",             lang: "en", type: "general" },
        { name: "Haaretz",     url: "https://www.haaretz.com/srv/haaretz-en",             lang: "en", type: "general" }
      ]
    },
    iran: {
      label: "Iran", aliases: ["iran", "irán", "ir"], lang: "fa",
      feeds: [
        { name: "Press TV",    url: "https://www.presstv.ir/rss.xml",                     lang: "en", type: "general" },
        { name: "IRNA",        url: "https://en.irna.ir/rss",                             lang: "en", type: "general" }
      ]
    },
    saudi_arabia: {
      label: "Saudi Arabia", aliases: ["saudi arabia", "arabia saudita", "sa"], lang: "ar",
      feeds: [
        { name: "Arab News",   url: "https://www.arabnews.com/rss.xml",                   lang: "en", type: "general" },
        { name: "Saudi Gazette",url: "https://saudigazette.com.sa/feed/",                 lang: "en", type: "general" }
      ]
    },
    turkey_tr: {
      label: "Türkiye", aliases: ["turkey", "turquia", "turquía", "tr"], lang: "tr",
      feeds: [
        { name: "Daily Sabah", url: "https://www.dailysabah.com/rss",                     lang: "en", type: "general" },
        { name: "TRT World",   url: "https://www.trtworld.com/rss",                       lang: "en", type: "general" }
      ]
    },

    /* ── África ── */
    egypt: {
      label: "مصر", aliases: ["egypt", "egipto", "eg"], lang: "ar",
      feeds: [
        { name: "Ahram Online",url: "https://english.ahram.org.eg/~/RSS.aspx",            lang: "en", type: "general" }
      ]
    },
    south_africa: {
      label: "South Africa", aliases: ["south africa", "sudáfrica", "sudafrica", "za"], lang: "en",
      feeds: [
        { name: "Mail&Guardian",url: "https://mg.co.za/feed/",                            lang: "en", type: "general" },
        { name: "News24",       url: "https://feeds.news24.com/articles/news24/TopStories/rss", lang: "en", type: "general" }
      ]
    },
    nigeria: {
      label: "Nigeria", aliases: ["nigeria", "ng"], lang: "en",
      feeds: [
        { name: "Vanguard",    url: "https://www.vanguardngr.com/feed/",                  lang: "en", type: "general" },
        { name: "Punch",       url: "https://punchng.com/feed/",                          lang: "en", type: "general" }
      ]
    },
    morocco: {
      label: "المغرب", aliases: ["morocco", "marruecos", "ma"], lang: "fr",
      feeds: [
        { name: "Le360",       url: "https://fr.le360.ma/rss.xml",                        lang: "fr", type: "general" }
      ]
    },
    kenya: {
      label: "Kenya", aliases: ["kenya", "kenia", "ke"], lang: "en",
      feeds: [
        { name: "Nation Kenya", url: "https://nation.africa/kenya/rss",                   lang: "en", type: "general" }
      ]
    }
  }
};

/* ─── Helpers ─────────────────────────────────────── */

function normalizeKey(value = "") {
  return value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").trim();
}

export function getFeedsByCountry(place = "") {
  if (!place) return [];
  const normalized = normalizeKey(place);
  const countries = FEEDS_DB.countries || {};
  for (const [key, country] of Object.entries(countries)) {
    const aliases = (country.aliases || []).map(normalizeKey);
    if (normalizeKey(key) === normalized || aliases.includes(normalized)) {
      return country.feeds || [];
    }
  }
  return [];
}

export function getTopicKeywords(query = "") {
  if (!query) return [];
  const normalized = normalizeKey(query);
  const topics = FEEDS_DB.topics || {};
  if (topics[normalized]) return topics[normalized];
  for (const [, keywords] of Object.entries(topics)) {
    if (keywords.some(kw => normalizeKey(kw) === normalized)) return keywords;
  }
  return query.split(/[\s,]+/).map(w => w.trim()).filter(Boolean);
}

export function getAllAlertFeeds() {
  const alerts = FEEDS_DB.alerts || {};
  return [...(alerts.international_es || []), ...(alerts.international_en || [])];
}
