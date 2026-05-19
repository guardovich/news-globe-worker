export const FEEDS_DB = {
  version: 1,

  defaults: {
    maxFeedsPerRequest: 6,
    maxItemsPerFeed: 12
  },

  /* =========================
     ALERTAS
  ========================= */

  alerts: {
    international_es: [
      {
        name: "EL PAÍS América",
        url: "https://elpais.com/rss/elpais/portada_america.xml",
        lang: "es",
        type: "general"
      },
      {
        name: "France 24 ES",
        url: "https://www.france24.com/es/rss",
        lang: "es",
        type: "international"
      },
      {
        name: "BBC Mundo",
        url: "https://feeds.bbci.co.uk/mundo/rss.xml",
        lang: "es",
        type: "international"
      },
      {
        name: "CNN en Español",
        url: "https://cnnespanol.cnn.com/feed/",
        lang: "es",
        type: "international"
      }
    ],

    international_en: [
      {
        name: "Reuters World",
        url: "https://feeds.reuters.com/Reuters/worldNews",
        lang: "en",
        type: "international"
      },
      {
        name: "AP News",
        url: "https://apnews.com/index.rss",
        lang: "en",
        type: "international"
      },
      {
        name: "BBC World",
        url: "https://feeds.bbci.co.uk/news/world/rss.xml",
        lang: "en",
        type: "international"
      },
      {
        name: "Euractiv",
        url: "https://www.euractiv.com/?feed=mcfeed",
        lang: "en",
        type: "international"
      }
    ]
  },

  /* =========================
     TOPICS
  ========================= */

  topics: {
    ia: ["ia", "inteligencia artificial", "artificial intelligence", "ai", "llm", "openai", "chatgpt"],
    energia: ["energia", "energía", "energy", "oil", "gas", "lng", "renewables", "electricity"],
    otan: ["otan", "nato"],
    ciberseguridad: ["ciberseguridad", "cybersecurity", "ransomware", "malware"],
    defensa: ["defensa", "defense", "military"],
    china: ["china", "beijing", "taiwan"],
    rusia: ["rusia", "russia", "kremlin"],
    economia: ["economia", "economy", "inflation", "markets"]
  },

  /* =========================
     COUNTRIES
  ========================= */

  countries: {
    spain: {
      label: "España",
      aliases: ["espana", "españa", "spain"],
      lang: "es",
      feeds: [
        { name: "EL PAÍS", url: "https://elpais.com/rss/elpais/portada.xml", lang: "es", type: "general" },
        { name: "El Mundo", url: "https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml", lang: "es", type: "general" },
        { name: "Europa Press", url: "https://www.europapress.es/rss/rss.aspx", lang: "es", type: "general" }
      ]
    },

    portugal: {
      label: "Portugal",
      aliases: ["portugal"],
      lang: "pt",
      feeds: [
        { name: "RTP", url: "https://www.rtp.pt/noticias/rss", lang: "pt", type: "general" },
        { name: "Observador", url: "https://observador.pt/feed/", lang: "pt", type: "general" }
      ]
    },

    mexico: {
      label: "México",
      aliases: ["mexico", "méxico"],
      lang: "es",
      feeds: [
        { name: "El Universal", url: "https://www.eluniversal.com.mx/rss/notashome.xml", lang: "es", type: "general" },
        { name: "Milenio", url: "https://www.milenio.com/rss", lang: "es", type: "general" }
      ]
    },

    argentina: {
      label: "Argentina",
      aliases: ["argentina"],
      lang: "es",
      feeds: [
        { name: "Clarín", url: "https://www.clarin.com/rss/", lang: "es", type: "general" },
        { name: "La Nación", url: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/", lang: "es", type: "general" }
      ]
    },

    brazil: {
      label: "Brasil",
      aliases: ["brasil", "brazil"],
      lang: "pt",
      feeds: [
        { name: "G1", url: "https://g1.globo.com/rss/g1/", lang: "pt", type: "general" },
        { name: "Folha", url: "https://feeds.folha.uol.com.br/emcimadahora/rss091.xml", lang: "pt", type: "general" }
      ]
    },

    usa: {
      label: "United States",
      aliases: ["usa", "eeuu", "united states"],
      lang: "en",
      feeds: [
        { name: "AP News", url: "https://apnews.com/index.rss", lang: "en", type: "general" },
        { name: "Reuters", url: "https://feeds.reuters.com/Reuters/worldNews", lang: "en", type: "international" },
        { name: "NYT", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml", lang: "en", type: "general" }
      ]
    },

    france: {
      label: "France",
      aliases: ["france", "francia"],
      lang: "fr",
      feeds: [
        { name: "Le Monde", url: "http://www.lemonde.fr/rss/une.xml", lang: "fr", type: "general" }
      ]
    },

    germany: {
      label: "Deutschland",
      aliases: ["alemania", "germany"],
      lang: "de",
      feeds: [
        { name: "Tagesschau", url: "https://www.tagesschau.de/xml/rss2", lang: "de", type: "general" }
      ]
    },

    uk: {
      label: "United Kingdom",
      aliases: ["uk", "reino unido"],
      lang: "en",
      feeds: [
        { name: "BBC", url: "https://feeds.bbci.co.uk/news/rss.xml", lang: "en", type: "general" }
      ]
    },

    japan: {
      label: "Japón",
      aliases: ["japan", "japon"],
      lang: "ja",
      feeds: [
        { name: "NHK", url: "https://www3.nhk.or.jp/rss/news/cat0.xml", lang: "ja", type: "general" }
      ]
    },

    india: {
      label: "India",
      aliases: ["india"],
      lang: "en",
      feeds: [
        { name: "The Hindu", url: "https://www.thehindu.com/news/feeder/default.rss", lang: "en", type: "general" }
      ]
    }
  }
};
