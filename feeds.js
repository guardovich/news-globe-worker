export const FEEDS_DB = {
  version: 1,

  defaults: {
    maxFeedsPerRequest: 6,
    maxItemsPerFeed: 12
  },

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
      }
    ]
  },

  topics: {
    ia: ["ia", "inteligencia artificial", "artificial intelligence", "ai", "llm", "openai", "chatgpt"],
    energia: ["energia", "energía", "energy", "oil", "gas", "lng", "renewables", "electricity"],
    otan: ["otan", "nato"],
    ciberseguridad: ["ciberseguridad", "cybersecurity", "ciberataque", "cyber attack", "ransomware", "malware"],
    defensa: ["defensa", "defence", "defense", "army", "navy", "air force", "military"],
    china: ["china", "beijing", "taiwan", "taiwán", "xi jinping"],
    rusia: ["rusia", "russia", "moscow", "moscu", "moscú", "kremlin"],
    economia: ["economia", "economía", "economy", "inflation", "inflacion", "inflación", "markets", "trade"]
  },

  countries: {
    spain: {
      label: "España",
      aliases: ["espana", "españa", "spain"],
      lang: "es",
      feeds: [
        {
          name: "EL PAÍS Portada",
          url: "https://elpais.com/rss/elpais/portada.xml",
          lang: "es",
          type: "general"
        },
        {
          name: "EL PAÍS América",
          url: "https://elpais.com/rss/elpais/portada_america.xml",
          lang: "es",
          type: "general"
        },
        {
          name: "Cinco Días",
          url: "https://cincodias.elpais.com/rss/cincodias/portada.xml",
          lang: "es",
          type: "economy"
        },
        {
          name: "Europa Press Internacional",
          url: "https://www.europapress.es/rss/rss.aspx?ch=69",
          lang: "es",
          type: "international"
        },
        {
          name: "Europa Press Economía",
          url: "https://www.europapress.es/rss/rss.aspx?ch=80",
          lang: "es",
          type: "economy"
        }
      ]
    },

    portugal: {
      label: "Portugal",
      aliases: ["portugal"],
      lang: "pt",
      feeds: [
        {
          name: "RTP Notícias",
          url: "https://www.rtp.pt/noticias/rss",
          lang: "pt",
          type: "general"
        },
        {
          name: "Observador",
          url: "https://observador.pt/feed/",
          lang: "pt",
          type: "general"
        },
        {
          name: "Jornal de Negócios",
          url: "https://www.jornaldenegocios.pt/rss",
          lang: "pt",
          type: "economy"
        }
      ]
    },

    chile: {
      label: "Chile",
      aliases: ["chile"],
      lang: "es",
      feeds: [
        {
          name: "La Tercera Portada",
          url: "https://www.latercera.com/arcio/rss/category/lo-ultimo/",
          lang: "es",
          type: "general"
        },
        {
          name: "La Tercera Mundo",
          url: "https://www.latercera.com/arcio/rss/category/mundo/",
          lang: "es",
          type: "international"
        },
        {
          name: "Diario Financiero",
          url: "https://www.df.cl/feed",
          lang: "es",
          type: "economy"
        },
        {
          name: "BioBioChile",
          url: "https://www.biobiochile.cl/lista/categoria/nacional/feed",
          lang: "es",
          type: "general"
        }
      ]
    },

    mexico: {
      label: "México",
      aliases: ["mexico", "méxico", "mexico city"],
      lang: "es",
      feeds: [
        {
          name: "El Universal",
          url: "https://www.eluniversal.com.mx/rss.xml",
          lang: "es",
          type: "general"
        },
        {
          name: "Milenio",
          url: "https://www.milenio.com/rss",
          lang: "es",
          type: "general"
        },
        {
          name: "El Economista",
          url: "https://www.eleconomista.com.mx/rss/portada.xml",
          lang: "es",
          type: "economy"
        },
        {
          name: "Aristegui Noticias",
          url: "https://aristeguinoticias.com/feed/",
          lang: "es",
          type: "general"
        }
      ]
    },

    argentina: {
      label: "Argentina",
      aliases: ["argentina"],
      lang: "es",
      feeds: [
        {
          name: "La Nación",
          url: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/",
          lang: "es",
          type: "general"
        },
        {
          name: "Clarín",
          url: "https://www.clarin.com/rss/lo-ultimo/",
          lang: "es",
          type: "general"
        },
        {
          name: "Ámbito",
          url: "https://www.ambito.com/contenidos/rss.html",
          lang: "es",
          type: "economy"
        }
      ]
    },

    colombia: {
      label: "Colombia",
      aliases: ["colombia"],
      lang: "es",
      feeds: [
        {
          name: "El Tiempo",
          url: "https://www.eltiempo.com/rss",
          lang: "es",
          type: "general"
        },
        {
          name: "Semana",
          url: "https://www.semana.com/rss",
          lang: "es",
          type: "general"
        },
        {
          name: "Portafolio",
          url: "https://www.portafolio.co/rss",
          lang: "es",
          type: "economy"
        }
      ]
    },

    peru: {
      label: "Perú",
      aliases: ["peru", "perú"],
      lang: "es",
      feeds: [
        {
          name: "El Comercio Perú",
          url: "https://elcomercio.pe/arc/outboundfeeds/rss/",
          lang: "es",
          type: "general"
        },
        {
          name: "Gestión",
          url: "https://gestion.pe/arc/outboundfeeds/rss/",
          lang: "es",
          type: "economy"
        },
        {
          name: "La República",
          url: "https://larepublica.pe/rss",
          lang: "es",
          type: "general"
        }
      ]
    },

    brazil: {
      label: "Brasil",
      aliases: ["brasil", "brazil"],
      lang: "pt",
      feeds: [
        {
          name: "Folha de S.Paulo",
          url: "https://feeds.folha.uol.com.br/emcimadahora/rss091.xml",
          lang: "pt",
          type: "general"
        },
        {
          name: "G1",
          url: "https://g1.globo.com/rss/g1/",
          lang: "pt",
          type: "general"
        },
        {
          name: "Valor Econômico",
          url: "https://valor.globo.com/rss/valor-economico/",
          lang: "pt",
          type: "economy"
        }
      ]
    },

    uk: {
      label: "United Kingdom",
      aliases: ["reino unido", "united kingdom", "uk"],
      lang: "en",
      feeds: [
        {
          name: "BBC World",
          url: "https://feeds.bbci.co.uk/news/world/rss.xml",
          lang: "en",
          type: "international"
        },
        {
          name: "BBC UK",
          url: "https://feeds.bbci.co.uk/news/uk/rss.xml",
          lang: "en",
          type: "general"
        },
        {
          name: "The Guardian World",
          url: "https://www.theguardian.com/world/rss",
          lang: "en",
          type: "international"
        },
        {
          name: "Financial Times World",
          url: "https://www.ft.com/world?format=rss",
          lang: "en",
          type: "economy"
        }
      ]
    },

    germany: {
      label: "Deutschland",
      aliases: ["alemania", "germany", "deutschland"],
      lang: "de",
      feeds: [
        {
          name: "Tagesschau",
          url: "https://www.tagesschau.de/xml/rss2",
          lang: "de",
          type: "general"
        },
        {
          name: "Der Spiegel",
          url: "https://www.spiegel.de/international/index.rss",
          lang: "de",
          type: "international"
        },
        {
          name: "Handelsblatt",
          url: "https://www.handelsblatt.com/contentexport/feed/schlagzeilen",
          lang: "de",
          type: "economy"
        }
      ]
    },

    france: {
      label: "France",
      aliases: ["france", "francia"],
      lang: "fr",
      feeds: [
        {
          name: "Le Monde International",
          url: "https://www.lemonde.fr/international/rss_full.xml",
          lang: "fr",
          type: "international"
        },
        {
          name: "Le Monde Économie",
          url: "https://www.lemonde.fr/economie/rss_full.xml",
          lang: "fr",
          type: "economy"
        },
        {
          name: "France 24 FR",
          url: "https://www.france24.com/fr/rss",
          lang: "fr",
          type: "international"
        },
        {
          name: "Les Echos",
          url: "https://www.lesechos.fr/rss/rss_une.xml",
          lang: "fr",
          type: "economy"
        }
      ]
    },

    italy: {
      label: "Italia",
      aliases: ["italia", "italy"],
      lang: "it",
      feeds: [
        {
          name: "ANSA",
          url: "https://www.ansa.it/sito/ansait_rss.xml",
          lang: "it",
          type: "general"
        },
        {
          name: "La Repubblica Esteri",
          url: "https://www.repubblica.it/rss/esteri/rss2.0.xml",
          lang: "it",
          type: "international"
        },
        {
          name: "Il Sole 24 Ore",
          url: "https://www.ilsole24ore.com/rss/home.xml",
          lang: "it",
          type: "economy"
        }
      ]
    },

    belgium: {
      label: "Belgique",
      aliases: ["belgica", "bélgica", "belgium"],
      lang: "fr",
      feeds: [
        {
          name: "Le Soir",
          url: "https://www.lesoir.be/rss/section/actu",
          lang: "fr",
          type: "general"
        },
        {
          name: "RTBF",
          url: "https://www.rtbf.be/rss",
          lang: "fr",
          type: "general"
        }
      ]
    },

    netherlands: {
      label: "Nederland",
      aliases: ["paises bajos", "países bajos", "netherlands", "holland"],
      lang: "nl",
      feeds: [
        {
          name: "NOS",
          url: "https://feeds.nos.nl/nosnieuwsalgemeen",
          lang: "nl",
          type: "general"
        },
        {
          name: "NRC",
          url: "https://www.nrc.nl/rss/",
          lang: "nl",
          type: "general"
        }
      ]
    },

    usa: {
      label: "United States",
      aliases: ["usa", "eeuu", "estados unidos", "united states"],
      lang: "en",
      feeds: [
        {
          name: "AP News",
          url: "https://apnews.com/index.rss",
          lang: "en",
          type: "general"
        },
        {
          name: "Reuters World",
          url: "https://feeds.reuters.com/Reuters/worldNews",
          lang: "en",
          type: "international"
        },
        {
          name: "NYT Home",
          url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
          lang: "en",
          type: "general"
        },
        {
          name: "WSJ World",
          url: "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
          lang: "en",
          type: "international"
        },
        {
          name: "CNBC",
          url: "https://www.cnbc.com/id/100003114/device/rss/rss.html",
          lang: "en",
          type: "economy"
        }
      ]
    },

    canada: {
      label: "Canada",
      aliases: ["canada"],
      lang: "en",
      feeds: [
        {
          name: "CBC Top Stories",
          url: "https://www.cbc.ca/webfeed/rss/rss-topstories",
          lang: "en",
          type: "general"
        },
        {
          name: "The Globe and Mail",
          url: "https://www.theglobeandmail.com/arc/outboundfeeds/rss/",
          lang: "en",
          type: "general"
        }
      ]
    },

    australia: {
      label: "Australia",
      aliases: ["australia"],
      lang: "en",
      feeds: [
        {
          name: "ABC News",
          url: "https://www.abc.net.au/news/feed/51120/rss.xml",
          lang: "en",
          type: "general"
        },
        {
          name: "Sydney Morning Herald",
          url: "https://www.smh.com.au/rss/feed.xml",
          lang: "en",
          type: "general"
        }
      ]
    },

    japan: {
      label: "Japón",
      aliases: ["japon", "japón", "japan"],
      lang: "ja",
      feeds: [
        {
          name: "NHK World",
          url: "https://www3.nhk.or.jp/rss/news/cat0.xml",
          lang: "ja",
          type: "general"
        },
        {
          name: "The Japan Times",
          url: "https://www.japantimes.co.jp/feed/",
          lang: "en",
          type: "general"
        }
      ]
    },

    india: {
      label: "India",
      aliases: ["india"],
      lang: "en",
      feeds: [
        {
          name: "The Hindu",
          url: "https://www.thehindu.com/news/feeder/default.rss",
          lang: "en",
          type: "general"
        },
        {
          name: "Indian Express",
          url: "https://indianexpress.com/feed/",
          lang: "en",
          type: "general"
        },
        {
          name: "Business Standard",
          url: "https://www.business-standard.com/rss/home_page_top_stories.rss",
          lang: "en",
          type: "economy"
        }
      ]
    }

    /*
      Añade aquí el resto de países de tu gazetteer con el mismo patrón:

      russia: {
        label: "Russia",
        aliases: ["rusia", "russia"],
        lang: "ru",
        feeds: [
          { name: "...", url: "...", lang: "ru", type: "general" }
        ]
      }
    */
  }
};

export function normalizeFeedKey(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getCountryByAlias(input = "") {
  const key = normalizeFeedKey(input);

  for (const [countryKey, country] of Object.entries(FEEDS_DB.countries)) {
    if (countryKey === key) return country;
    if ((country.aliases || []).map(normalizeFeedKey).includes(key)) {
      return country;
    }
  }

  return null;
}

export function getFeedsByCountry(input = "", options = {}) {
  const country = getCountryByAlias(input);
  if (!country) return [];

  const maxFeeds =
    Number(options.maxFeeds) > 0
      ? Number(options.maxFeeds)
      : FEEDS_DB.defaults.maxFeedsPerRequest;

  return (country.feeds || []).slice(0, maxFeeds);
}

export function getTopicKeywords(topic = "") {
  const key = normalizeFeedKey(topic);
  return FEEDS_DB.topics[key] || [topic].filter(Boolean);
}
