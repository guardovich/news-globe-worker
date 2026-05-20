export const FEEDS_DB = {
  version: 4,

  defaults: {
    maxFeedsPerRequest: 10,
    maxItemsPerFeed: 15,
    feedTimeoutMs: 8000
  },

  /* ─── ALERTAS INTERNACIONALES (solo EN / ES) ─── */
  alerts: {
    international_es: [
      { name: "EL PAÍS",        url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",       lang: "es" },
      { name: "EL PAÍS América",url: "https://elpais.com/rss/elpais/portada_america.xml",                      lang: "es" },
      { name: "BBC Mundo",      url: "https://feeds.bbci.co.uk/mundo/rss.xml",                                 lang: "es" },
      { name: "CNN Español",    url: "https://cnnespanol.cnn.com/feed/",                                       lang: "es" },
      { name: "DW Español",     url: "https://rss.dw.com/xml/rss-es-all",                                     lang: "es" },
      { name: "France 24 ES",   url: "https://www.france24.com/es/rss",                                       lang: "es" },
      { name: "RT Español",     url: "https://actualidad.rt.com/rss",                                         lang: "es" },
      { name: "Infobae",        url: "https://www.infobae.com/feeds/rss/",                                    lang: "es" },
      { name: "Univision",      url: "https://feeds.univision.com/feeds/noticias/noticias",                    lang: "es" },
      { name: "La Voz América", url: "https://www.vozdeamerica.com/api/zmgodpiqei",                            lang: "es" }
    ],
    international_en: [
      { name: "Reuters",        url: "https://feeds.reuters.com/reuters/topNews",                              lang: "en" },
      { name: "AP News",        url: "https://apnews.com/index.rss",                                          lang: "en" },
      { name: "Al Jazeera",     url: "https://www.aljazeera.com/xml/rss/all.xml",                             lang: "en" },
      { name: "BBC World",      url: "https://feeds.bbci.co.uk/news/world/rss.xml",                           lang: "en" },
      { name: "DW English",     url: "https://rss.dw.com/xml/rss-en-world",                                   lang: "en" },
      { name: "France 24 EN",   url: "https://www.france24.com/en/rss",                                       lang: "en" },
      { name: "The Guardian",   url: "https://www.theguardian.com/world/rss",                                 lang: "en" },
      { name: "Bloomberg",      url: "https://feeds.bloomberg.com/politics/news.rss",                         lang: "en" },
      { name: "Foreign Policy", url: "https://foreignpolicy.com/feed/",                                       lang: "en" },
      { name: "The Economist",  url: "https://www.economist.com/the-world-this-week/rss.xml",                 lang: "en" }
    ]
  },

  /* ─── TEMAS ─── */
  topics: {
    ia:             ["inteligencia artificial", "artificial intelligence", "machine learning", "deep learning", "large language model", "generative ai", "llm", "openai", "chatgpt", "deepseek", "gemini", "modelo de lenguaje", "aprendizaje automatico", "gpt", "claude ai", "copilot", "mistral", "neural network", "red neuronal"],
    energia:        ["energía", "energy", "petróleo", "petroleum", "oil", "gas", "lng", "electricity", "electricidad", "gasoducto", "pipeline", "nuclear energy", "energia nuclear", "barrel", "barril", "solar power", "wind power", "coal", "carbon", "hidroelectrica", "renewables", "renovables"],
    otan:           ["otan", "nato", "north atlantic treaty", "alianza atlantica", "nato enlargement", "article 5", "articulo 5", "nato summit", "transatlantic defense", "allied forces", "nato forces"],
    ciberseguridad: ["ciberseguridad", "cybersecurity", "ransomware", "malware", "hack", "ciberataque", "data breach", "brecha de datos", "phishing", "spyware", "zero-day", "cyberattack", "vulnerability", "vulnerabilidad"],
    defensa:        ["defensa", "defense", "military", "militar", "ejercito", "army", "weapon", "arma", "missile", "misil", "pentagon", "defense budget", "presupuesto defensa", "armament", "armamento", "air force", "fuerza aerea", "navy", "armada", "armed forces", "fuerzas armadas"],
    china:          ["china", "beijing", "taiwan", "xi jinping", "partido comunista chino", "hong kong", "xinjiang", "south china sea", "mar del sur de china", "huawei", "pla", "byd"],
    rusia:          ["rusia", "russia", "kremlin", "putin", "ucrania", "ukraine", "donbas", "zelensky", "kyiv", "bielorrusia", "belarus", "sanciones rusia", "russia sanctions"],
    economia:       ["economia", "economy", "inflation", "inflación", "markets", "mercados", "recession", "recesion", "gdp", "pib", "interest rates", "tipos de interes", "federal reserve", "fed", "banco central", "ecb", "debt", "deuda", "bolsa", "stock market", "investment", "inversión"],
    migracion:      ["migración", "migration", "refugees", "refugiados", "asylum", "border", "frontera", "desplazados", "displaced", "immigration", "inmigración", "patera", "boat migrants"],
    clima:          ["cambio climatico", "climate change", "global warming", "calentamiento global", "net zero", "carbon emissions", "greenhouse", "emisiones", "renewables", "renovables", "solar energy", "wind energy", "cop30", "cop29", "drought", "sequía", "floods", "inundaciones", "paris agreement"],
    conflicto:      ["conflicto", "conflict", "guerra", "war", "bombardeo", "bombing", "ceasefire", "alto el fuego", "nuclear weapon", "arma nuclear", "ballistic missile", "misil balistico", "military offensive", "ofensiva militar", "civilian casualties", "bajas civiles", "invasion", "ataque", "attack"]
  },

  /* ─── PAÍSES (solo feeds EN / ES) ─── */
  countries: {

    /* ══ EUROPA OCCIDENTAL ══ */
    spain: {
      label: "España", aliases: ["espana", "españa", "spain", "es"], lang: "es",
      feeds: [
        { name: "EL PAÍS",         url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",    lang: "es" },
        { name: "El Mundo",        url: "https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml",                lang: "es" },
        { name: "RTVE Noticias",   url: "https://www.rtve.es/api/rss/noticias.xml",                            lang: "es" },
        { name: "La Vanguardia",   url: "https://www.lavanguardia.com/rss/home.xml",                           lang: "es" },
        { name: "El Confidencial", url: "https://rss.elconfidencial.com/espana/",                              lang: "es" },
        { name: "eldiario.es",     url: "https://www.eldiario.es/rss/",                                        lang: "es" },
        { name: "ABC España",      url: "https://www.abc.es/rss/feeds/abc_ultima_hora.xml",                    lang: "es" },
        { name: "20 Minutos",      url: "https://www.20minutos.es/rss/",                                       lang: "es" },
        { name: "Europa Press",    url: "https://www.europapress.es/rss/rss.aspx",                             lang: "es" },
        { name: "Cadena SER",      url: "https://cadenaser.com/feed/",                                         lang: "es" },
        { name: "El Español",      url: "https://www.elespanol.com/rss/",                                      lang: "es" },
        { name: "La Razón",        url: "https://www.larazon.es/rss/",                                         lang: "es" },
        { name: "Expansión ES",    url: "https://e00-expansion.uecdn.es/rss/portada.xml",                      lang: "es" },
        { name: "El Economista ES",url: "https://www.eleconomista.es/rss/rss-portada.php",                     lang: "es" },
        { name: "Público ES",      url: "https://www.publico.es/rss/",                                         lang: "es" }
      ]
    },
    portugal: {
      label: "Portugal", aliases: ["portugal", "pt"], lang: "en",
      feeds: [
        { name: "Portugal News",   url: "https://www.theportugalnews.com/feed",                                lang: "en" },
        { name: "Observador EN",   url: "https://observador.pt/feed/",                                         lang: "en" },
        { name: "Portugal Resident",url: "https://www.portugalnews.com/feed/",                                 lang: "en" }
      ]
    },
    france: {
      label: "France", aliases: ["france", "francia", "fr"], lang: "en",
      feeds: [
        { name: "France 24 EN",    url: "https://www.france24.com/en/france/rss",                              lang: "en" },
        { name: "RFI English",     url: "https://www.rfi.fr/en/rss",                                           lang: "en" },
        { name: "The Local FR",    url: "https://www.thelocal.fr/feed/",                                       lang: "en" }
      ]
    },
    germany: {
      label: "Deutschland", aliases: ["alemania", "germany", "deutschland", "de"], lang: "en",
      feeds: [
        { name: "DW English",      url: "https://rss.dw.com/xml/rss-en-all",                                   lang: "en" },
        { name: "Spiegel Intl",    url: "https://www.spiegel.de/international/index.rss",                     lang: "en" },
        { name: "The Local DE",    url: "https://www.thelocal.de/feed/",                                       lang: "en" }
      ]
    },
    italy: {
      label: "Italia", aliases: ["italy", "italia", "it"], lang: "en",
      feeds: [
        { name: "ANSA English",    url: "https://www.ansa.it/english/news/general_news/rss.xml",               lang: "en" },
        { name: "The Local IT",    url: "https://www.thelocal.it/feed/",                                       lang: "en" }
      ]
    },
    uk: {
      label: "United Kingdom", aliases: ["uk", "reino unido", "gb", "great britain", "england"], lang: "en",
      feeds: [
        { name: "BBC UK",          url: "https://feeds.bbci.co.uk/news/rss.xml",                              lang: "en" },
        { name: "The Guardian",    url: "https://www.theguardian.com/uk/rss",                                 lang: "en" },
        { name: "Sky News",        url: "https://feeds.skynews.com/feeds/rss/world.xml",                      lang: "en" },
        { name: "The Independent", url: "https://www.independent.co.uk/news/rss",                             lang: "en" },
        { name: "Reuters UK",      url: "https://feeds.reuters.com/reuters/UKdomesticNews",                   lang: "en" },
        { name: "The Telegraph",   url: "https://www.telegraph.co.uk/news/rss.xml",                           lang: "en" },
        { name: "Financial Times", url: "https://www.ft.com/rss/home/uk",                                     lang: "en" },
        { name: "The Economist",   url: "https://www.economist.com/the-world-this-week/rss.xml",              lang: "en" }
      ]
    },
    netherlands: {
      label: "Netherlands", aliases: ["netherlands", "paises bajos", "países bajos", "holanda", "nl"], lang: "en",
      feeds: [
        { name: "DutchNews",       url: "https://www.dutchnews.nl/feed/",                                     lang: "en" },
        { name: "NL Times",        url: "https://nltimes.nl/rssfeed.xml",                                     lang: "en" }
      ]
    },
    sweden: {
      label: "Sweden", aliases: ["sweden", "suecia", "se"], lang: "en",
      feeds: [
        { name: "The Local SE",    url: "https://www.thelocal.se/feed/",                                      lang: "en" },
        { name: "Radio Sweden EN", url: "https://sverigesradio.se/topnews/rss.aspx?programid=2054",            lang: "en" }
      ]
    },
    norway: {
      label: "Norway", aliases: ["norway", "noruega", "no"], lang: "en",
      feeds: [
        { name: "The Local NO",    url: "https://www.thelocal.no/feed/",                                      lang: "en" },
        { name: "Norway Today",    url: "https://norwaytoday.info/feed/",                                     lang: "en" }
      ]
    },
    denmark: {
      label: "Denmark", aliases: ["denmark", "dinamarca", "dk"], lang: "en",
      feeds: [
        { name: "The Local DK",    url: "https://www.thelocal.dk/feed/",                                      lang: "en" },
        { name: "CPH Post",        url: "https://cphpost.dk/?feed=rss2",                                      lang: "en" }
      ]
    },
    finland: {
      label: "Finland", aliases: ["finland", "finlandia", "fi"], lang: "en",
      feeds: [
        { name: "YLE English",     url: "https://yle.fi/uutiset/rss/uutiset.rss?osasto=news",                 lang: "en" },
        { name: "Helsinki Times",  url: "https://www.helsinkitimes.fi/feed/",                                  lang: "en" }
      ]
    },
    ireland: {
      label: "Ireland", aliases: ["ireland", "irlanda", "ie"], lang: "en",
      feeds: [
        { name: "Irish Times",     url: "https://www.irishtimes.com/cmlink/the-irish-times-news-1.1319192",   lang: "en" },
        { name: "RTE News",        url: "https://www.rte.ie/news/rss/news-headlines.xml",                    lang: "en" },
        { name: "The Journal",     url: "https://feeds.thejournal.ie/thejournal.ie/",                         lang: "en" }
      ]
    },
    switzerland: {
      label: "Switzerland", aliases: ["switzerland", "suiza", "ch"], lang: "en",
      feeds: [
        { name: "SWI",             url: "https://www.swissinfo.ch/eng/rss/newsfeed",                          lang: "en" },
        { name: "The Local CH",    url: "https://www.thelocal.ch/feed/",                                      lang: "en" }
      ]
    },
    belgium: {
      label: "Belgium", aliases: ["belgium", "belgica", "bélgica", "be"], lang: "en",
      feeds: [
        { name: "Brussels Times",  url: "https://www.brusselstimes.com/feed/",                                lang: "en" },
        { name: "Politico EU",     url: "https://www.politico.eu/feed/",                                      lang: "en" }
      ]
    },
    poland: {
      label: "Poland", aliases: ["poland", "polonia", "pl"], lang: "en",
      feeds: [
        { name: "Notes from Poland",url: "https://notesfrompoland.com/feed/",                                 lang: "en" },
        { name: "Polandin",        url: "https://www.polandin.com/feed/",                                     lang: "en" }
      ]
    },
    czech_republic: {
      label: "Czech Republic", aliases: ["czech", "chequia", "czechia", "cz"], lang: "en",
      feeds: [
        { name: "Prague Morning",  url: "https://www.praguemorning.cz/feed/",                                 lang: "en" },
        { name: "Czech Radio EN",  url: "https://english.radio.cz/export/articles/latest",                   lang: "en" }
      ]
    },
    hungary: {
      label: "Hungary", aliases: ["hungary", "hungria", "hungría", "hu"], lang: "en",
      feeds: [
        { name: "Budapest Beacon", url: "https://budapestbeacon.com/feed/",                                   lang: "en" },
        { name: "Daily News HU",   url: "https://dailynewshungary.com/feed/",                                 lang: "en" }
      ]
    },
    romania: {
      label: "Romania", aliases: ["romania", "rumania", "ro"], lang: "en",
      feeds: [
        { name: "Romania Insider",  url: "https://www.romania-insider.com/feed/",                             lang: "en" },
        { name: "G4Media EN",       url: "https://www.g4media.ro/feed",                                       lang: "en" }
      ]
    },
    ukraine: {
      label: "Ukraine", aliases: ["ukraine", "ucrania", "ua"], lang: "en",
      feeds: [
        { name: "Kyiv Independent",url: "https://kyivindependent.com/feed/",                                  lang: "en" },
        { name: "Ukrinform EN",    url: "https://www.ukrinform.net/rss/block-lastnews",                      lang: "en" },
        { name: "Interfax Ukraine",url: "https://en.interfax.com.ua/news/general.rss",                       lang: "en" },
        { name: "Ukrainska Pravda EN",url: "https://www.pravda.com.ua/eng/rss/",                             lang: "en" }
      ]
    },
    greece: {
      label: "Greece", aliases: ["greece", "grecia", "gr"], lang: "en",
      feeds: [
        { name: "Ekathimerini",    url: "https://www.ekathimerini.com/rss/?p=8",                              lang: "en" },
        { name: "Greek Reporter",  url: "https://greekreporter.com/feed/",                                    lang: "en" }
      ]
    },
    austria: {
      label: "Austria", aliases: ["austria", "at"], lang: "en",
      feeds: [
        { name: "Austria Today",   url: "https://austriatoday.at/feed/",                                     lang: "en" },
        { name: "Vienna Online",   url: "https://www.vienna.at/rss/",                                         lang: "en" }
      ]
    },
    serbia: {
      label: "Serbia", aliases: ["serbia", "rs"], lang: "en",
      feeds: [
        { name: "N1 Serbia EN",    url: "https://n1info.rs/english/feed/",                                    lang: "en" },
        { name: "Serbia Tribune",  url: "https://www.serbiatribune.com/feed/",                                lang: "en" }
      ]
    },

    /* ══ EUROPA DEL ESTE ══ */
    russia: {
      label: "Russia", aliases: ["russia", "rusia", "ru"], lang: "en",
      feeds: [
        { name: "TASS English",    url: "https://tass.com/rss/v2.xml",                                        lang: "en" },
        { name: "Moscow Times",    url: "https://www.themoscowtimes.com/rss/news",                            lang: "en" },
        { name: "Meduza EN",       url: "https://meduza.io/en/rss/all",                                       lang: "en" }
      ]
    },
    turkey: {
      label: "Turkey", aliases: ["turkey", "turquia", "turquía", "tr"], lang: "en",
      feeds: [
        { name: "Daily Sabah",     url: "https://www.dailysabah.com/rss",                                     lang: "en" },
        { name: "TRT World",       url: "https://www.trtworld.com/rss",                                       lang: "en" },
        { name: "Hürriyet Daily",  url: "https://www.hurriyetdailynews.com/rss",                              lang: "en" }
      ]
    },

    /* ══ NORTEAMÉRICA ══ */
    usa: {
      label: "United States", aliases: ["usa", "eeuu", "united states", "us", "estados unidos"], lang: "en",
      feeds: [
        { name: "AP News",         url: "https://apnews.com/index.rss",                                      lang: "en" },
        { name: "Reuters US",      url: "https://feeds.reuters.com/reuters/topNews",                          lang: "en" },
        { name: "NYT",             url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",         lang: "en" },
        { name: "Washington Post", url: "https://feeds.washingtonpost.com/rss/world",                         lang: "en" },
        { name: "CNN",             url: "https://rss.cnn.com/rss/edition.rss",                                lang: "en" },
        { name: "NPR",             url: "https://feeds.npr.org/1001/rss.xml",                                 lang: "en" },
        { name: "Politico",        url: "https://www.politico.com/rss/politicopicks.xml",                    lang: "en" },
        { name: "The Hill",        url: "https://thehill.com/feed/",                                          lang: "en" },
        { name: "Bloomberg Pol",   url: "https://feeds.bloomberg.com/politics/news.rss",                     lang: "en" },
        { name: "Foreign Affairs", url: "https://www.foreignaffairs.com/rss.xml",                            lang: "en" }
      ]
    },
    canada: {
      label: "Canada", aliases: ["canada", "canadá", "ca"], lang: "en",
      feeds: [
        { name: "CBC",             url: "https://www.cbc.ca/cmlink/rss-topstories",                          lang: "en" },
        { name: "Globe & Mail",    url: "https://www.theglobeandmail.com/arc/outboundfeeds/rss/",             lang: "en" },
        { name: "National Post",   url: "https://nationalpost.com/feed/",                                    lang: "en" },
        { name: "CTV News",        url: "https://www.ctvnews.ca/rss/ctvnews-ca-top-stories-public-rss-1.822009", lang: "en" }
      ]
    },
    mexico: {
      label: "México", aliases: ["mexico", "méxico", "mx"], lang: "es",
      feeds: [
        { name: "El Universal",    url: "https://www.eluniversal.com.mx/rss/notashome.xml",                  lang: "es" },
        { name: "Milenio",         url: "https://www.milenio.com/rss",                                       lang: "es" },
        { name: "Proceso",         url: "https://www.proceso.com.mx/rss/",                                   lang: "es" },
        { name: "Animal Político", url: "https://www.animalpolitico.com/feed/",                               lang: "es" },
        { name: "Excélsior",       url: "https://www.excelsior.com.mx/rss",                                   lang: "es" },
        { name: "La Jornada",      url: "https://www.jornada.com.mx/rss/politica.xml",                       lang: "es" },
        { name: "El Economista MX",url: "https://www.eleconomista.com.mx/rss/",                               lang: "es" }
      ]
    },

    /* ══ CENTROAMÉRICA ══ */
    cuba: {
      label: "Cuba", aliases: ["cuba", "cu"], lang: "es",
      feeds: [
        { name: "14ymedio",        url: "https://www.14ymedio.com/feed/",                                     lang: "es" },
        { name: "CiberCuba",       url: "https://www.cibercuba.com/feed",                                     lang: "es" }
      ]
    },
    costa_rica: {
      label: "Costa Rica", aliases: ["costa rica", "cr"], lang: "es",
      feeds: [
        { name: "La Nación CR",    url: "https://www.nacion.com/feeds/",                                      lang: "es" },
        { name: "Tico Times",      url: "https://ticotimes.net/feed/",                                        lang: "en" }
      ]
    },
    guatemala: {
      label: "Guatemala", aliases: ["guatemala", "gt"], lang: "es",
      feeds: [
        { name: "Prensa Libre",    url: "https://www.prensalibre.com/feed/",                                  lang: "es" }
      ]
    },
    panama: {
      label: "Panamá", aliases: ["panama", "panamá", "pa"], lang: "es",
      feeds: [
        { name: "La Prensa PA",    url: "https://www.prensa.com/feed/",                                       lang: "es" }
      ]
    },
    dominican_republic: {
      label: "Rep. Dominicana", aliases: ["dominican republic", "republica dominicana", "república dominicana", "do"], lang: "es",
      feeds: [
        { name: "Listín Diario",   url: "https://listindiario.com/feed/",                                    lang: "es" },
        { name: "Diario Libre",    url: "https://www.diariolibre.com/feed/",                                  lang: "es" }
      ]
    },

    /* ══ SUDAMÉRICA ══ */
    argentina: {
      label: "Argentina", aliases: ["argentina", "ar"], lang: "es",
      feeds: [
        { name: "Clarín",          url: "https://www.clarin.com/rss/",                                       lang: "es" },
        { name: "La Nación AR",    url: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/",                 lang: "es" },
        { name: "Infobae AR",      url: "https://www.infobae.com/feeds/rss/",                                 lang: "es" },
        { name: "Página 12",       url: "https://www.pagina12.com.ar/rss/portada",                           lang: "es" },
        { name: "Ámbito",          url: "https://www.ambito.com/rss/home.xml",                                lang: "es" },
        { name: "Perfil",          url: "https://www.perfil.com/feed/",                                       lang: "es" }
      ]
    },
    brazil: {
      label: "Brasil", aliases: ["brasil", "brazil", "br"], lang: "en",
      feeds: [
        { name: "Brazil Reports",  url: "https://brazilreports.com/feed/",                                    lang: "en" },
        { name: "Rio Times",       url: "https://riotimesonline.com/feed/",                                   lang: "en" },
        { name: "The Brazilian Report",url: "https://brazilian.report/feed/",                                 lang: "en" }
      ]
    },
    colombia: {
      label: "Colombia", aliases: ["colombia", "co"], lang: "es",
      feeds: [
        { name: "El Tiempo",       url: "https://www.eltiempo.com/rss/politica.xml",                         lang: "es" },
        { name: "El Espectador",   url: "https://www.elespectador.com/arc/outboundfeeds/rss/",                lang: "es" },
        { name: "Semana",          url: "https://www.semana.com/rss/",                                        lang: "es" },
        { name: "RCN Radio",       url: "https://www.rcnradio.com/feed/",                                     lang: "es" },
        { name: "Caracol Radio",   url: "https://caracol.com.co/feed/",                                       lang: "es" },
        { name: "El Colombiano",   url: "https://www.elcolombiano.com/feed/",                                 lang: "es" },
        { name: "Blu Radio",       url: "https://www.bluradio.com/feed/",                                     lang: "es" },
        { name: "La República CO", url: "https://www.larepublica.co/rss.xml",                                 lang: "es" },
        { name: "Infobae CO",      url: "https://www.infobae.com/feeds/colombia/",                            lang: "es" }
      ]
    },
    chile: {
      label: "Chile", aliases: ["chile", "cl"], lang: "es",
      feeds: [
        { name: "La Tercera",      url: "https://www.latercera.com/feed/",                                    lang: "es" },
        { name: "Emol",            url: "https://www.emol.com/rss/titulares.xml",                             lang: "es" },
        { name: "El Mostrador",    url: "https://www.elmostrador.cl/feed/",                                   lang: "es" },
        { name: "BioBioChile",     url: "https://www.biobiochile.cl/feed/",                                   lang: "es" },
        { name: "CNN Chile",       url: "https://cnnchile.com/feed/",                                         lang: "es" }
      ]
    },
    peru: {
      label: "Perú", aliases: ["peru", "perú", "pe"], lang: "es",
      feeds: [
        { name: "El Comercio PE",  url: "https://elcomercio.pe/arc/outboundfeeds/rss/",                      lang: "es" },
        { name: "RPP Noticias",    url: "https://rpp.pe/rss/ultimas-noticias.xml",                            lang: "es" },
        { name: "La República PE", url: "https://larepublica.pe/feed/",                                       lang: "es" },
        { name: "Gestión",         url: "https://gestion.pe/feed/",                                           lang: "es" }
      ]
    },
    venezuela: {
      label: "Venezuela", aliases: ["venezuela", "ve"], lang: "es",
      feeds: [
        { name: "El Nacional VE",  url: "https://www.elnacional.com/feed/",                                   lang: "es" },
        { name: "Runrun.es",       url: "https://runrun.es/feed/",                                            lang: "es" },
        { name: "Tal Cual",        url: "https://talcualdigital.com/feed/",                                    lang: "es" }
      ]
    },
    ecuador: {
      label: "Ecuador", aliases: ["ecuador", "ec"], lang: "es",
      feeds: [
        { name: "El Comercio EC",  url: "https://www.elcomercio.com/feed/",                                   lang: "es" },
        { name: "Primicias",       url: "https://www.primicias.ec/feed/",                                     lang: "es" }
      ]
    },
    bolivia: {
      label: "Bolivia", aliases: ["bolivia", "bo"], lang: "es",
      feeds: [
        { name: "El Deber",        url: "https://eldeber.com.bo/feed/",                                       lang: "es" },
        { name: "Los Tiempos",     url: "https://www.lostiempos.com/rss/feeds",                               lang: "es" }
      ]
    },
    uruguay: {
      label: "Uruguay", aliases: ["uruguay", "uy"], lang: "es",
      feeds: [
        { name: "El País UY",      url: "https://www.elpais.com.uy/rss/",                                    lang: "es" },
        { name: "La Diaria",       url: "https://ladiaria.com.uy/feed/",                                      lang: "es" }
      ]
    },
    paraguay: {
      label: "Paraguay", aliases: ["paraguay", "py"], lang: "es",
      feeds: [
        { name: "ABC Color",       url: "https://www.abc.com.py/feed/",                                       lang: "es" }
      ]
    },

    /* ══ ASIA ORIENTAL ══ */
    china: {
      label: "China", aliases: ["china", "cn"], lang: "en",
      feeds: [
        { name: "China Daily EN",  url: "https://www.chinadaily.com.cn/rss/world_rss.xml",                   lang: "en" },
        { name: "CGTN EN",         url: "https://www.cgtn.com/subscribe/feeds/rss2.0.xml",                   lang: "en" },
        { name: "Xinhua EN",       url: "https://english.news.cn/rss/world.xml",                             lang: "en" },
        { name: "South China MP",  url: "https://www.scmp.com/rss/91/feed",                                  lang: "en" },
        { name: "Global Times EN", url: "https://www.globaltimes.cn/rss/outbrain.xml",                       lang: "en" }
      ]
    },
    japan: {
      label: "Japan", aliases: ["japan", "japon", "japón", "jp"], lang: "en",
      feeds: [
        { name: "NHK World EN",    url: "https://www3.nhk.or.jp/rss/news/cat0.xml",                          lang: "en" },
        { name: "Japan Times",     url: "https://www.japantimes.co.jp/feed/",                                lang: "en" },
        { name: "Kyodo News EN",   url: "https://english.kyodonews.net/rss/all.xml",                         lang: "en" }
      ]
    },
    south_korea: {
      label: "South Korea", aliases: ["south korea", "corea del sur", "kr", "korea"], lang: "en",
      feeds: [
        { name: "Korea Herald",    url: "https://www.koreaherald.com/common/rss_xml.php?ct=020100000000",    lang: "en" },
        { name: "Yonhap EN",       url: "https://en.yna.co.kr/RSS/news.xml",                                 lang: "en" },
        { name: "JoongAng Daily",  url: "https://koreajoongangdaily.joins.com/rss/feeds/breaking-news.xml",  lang: "en" }
      ]
    },
    taiwan: {
      label: "Taiwan", aliases: ["taiwan", "tw"], lang: "en",
      feeds: [
        { name: "Focus Taiwan",    url: "https://focustaiwan.tw/rss/aall.xml",                               lang: "en" },
        { name: "Taipei Times",    url: "https://www.taipeitimes.com/xml/index.rss",                         lang: "en" }
      ]
    },

    /* ══ ASIA MERIDIONAL ══ */
    india: {
      label: "India", aliases: ["india", "in"], lang: "en",
      feeds: [
        { name: "The Hindu",       url: "https://www.thehindu.com/news/feeder/default.rss",                  lang: "en" },
        { name: "NDTV",            url: "https://feeds.feedburner.com/ndtvnews-latest",                      lang: "en" },
        { name: "Times of India",  url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",        lang: "en" },
        { name: "Indian Express",  url: "https://indianexpress.com/feed/",                                   lang: "en" },
        { name: "The Wire",        url: "https://thewire.in/feed",                                           lang: "en" }
      ]
    },
    pakistan: {
      label: "Pakistan", aliases: ["pakistan", "pakistán", "pk"], lang: "en",
      feeds: [
        { name: "Dawn",            url: "https://www.dawn.com/feed",                                         lang: "en" },
        { name: "Geo News",        url: "https://www.geo.tv/rss",                                            lang: "en" },
        { name: "The News Intl",   url: "https://www.thenews.com.pk/rss/1/6",                                lang: "en" }
      ]
    },

    /* ══ ASIA SUDORIENTAL ══ */
    indonesia: {
      label: "Indonesia", aliases: ["indonesia", "id"], lang: "en",
      feeds: [
        { name: "Jakarta Post",    url: "https://www.thejakartapost.com/feed",                               lang: "en" },
        { name: "Tempo EN",        url: "https://en.tempo.co/rss/news",                                      lang: "en" }
      ]
    },
    philippines: {
      label: "Philippines", aliases: ["philippines", "filipinas", "ph"], lang: "en",
      feeds: [
        { name: "Inquirer",        url: "https://newsinfo.inquirer.net/feed",                                lang: "en" },
        { name: "Rappler",         url: "https://www.rappler.com/feed/",                                     lang: "en" }
      ]
    },
    singapore: {
      label: "Singapore", aliases: ["singapore", "singapur", "sg"], lang: "en",
      feeds: [
        { name: "Straits Times",   url: "https://www.straitstimes.com/news/world/rss.xml",                   lang: "en" },
        { name: "CNA",             url: "https://www.channelnewsasia.com/rssfeeds/8395986",                  lang: "en" }
      ]
    },
    malaysia: {
      label: "Malaysia", aliases: ["malaysia", "malasia", "my"], lang: "en",
      feeds: [
        { name: "Malaysiakini EN", url: "https://www.malaysiakini.com/rss/all",                              lang: "en" },
        { name: "Malay Mail",      url: "https://www.malaymail.com/feed/",                                   lang: "en" }
      ]
    },
    vietnam: {
      label: "Vietnam", aliases: ["vietnam", "vietnan", "vn"], lang: "en",
      feeds: [
        { name: "VnExpress Intl",  url: "https://e.vnexpress.net/rss/news.rss",                              lang: "en" },
        { name: "Vietnam News",    url: "https://vietnamnews.vn/rss/",                                       lang: "en" }
      ]
    },
    thailand: {
      label: "Thailand", aliases: ["thailand", "tailandia", "th"], lang: "en",
      feeds: [
        { name: "Bangkok Post",    url: "https://www.bangkokpost.com/rss/data/topstories.xml",               lang: "en" },
        { name: "The Nation TH",   url: "https://www.nationthailand.com/rss",                                lang: "en" }
      ]
    },

    /* ══ OCEANÍA ══ */
    australia: {
      label: "Australia", aliases: ["australia", "au"], lang: "en",
      feeds: [
        { name: "ABC Australia",   url: "https://www.abc.net.au/news/feed/52498/rss.xml",                    lang: "en" },
        { name: "SMH",             url: "https://www.smh.com.au/rss/feed.xml",                               lang: "en" },
        { name: "The Australian",  url: "https://www.theaustralian.com.au/feed/",                            lang: "en" },
        { name: "Guardian AU",     url: "https://www.theguardian.com/australia-news/rss",                   lang: "en" }
      ]
    },
    new_zealand: {
      label: "New Zealand", aliases: ["new zealand", "nueva zelanda", "nz"], lang: "en",
      feeds: [
        { name: "RNZ",             url: "https://www.rnz.co.nz/rss/news.xml",                                lang: "en" },
        { name: "NZ Herald",       url: "https://www.nzherald.co.nz/arc/outboundfeeds/rss/",                 lang: "en" }
      ]
    },

    /* ══ ORIENTE MEDIO ══ */
    israel: {
      label: "Israel", aliases: ["israel", "il"], lang: "en",
      feeds: [
        { name: "Times of Israel", url: "https://www.timesofisrael.com/feed/",                               lang: "en" },
        { name: "Jerusalem Post",  url: "https://www.jpost.com/Rss/RssFeedsHeadlines.aspx",                 lang: "en" },
        { name: "Haaretz EN",      url: "https://www.haaretz.com/srv/haaretz-en",                            lang: "en" }
      ]
    },
    iran: {
      label: "Iran", aliases: ["iran", "irán", "ir"], lang: "en",
      feeds: [
        { name: "Press TV EN",     url: "https://www.presstv.ir/rss.xml",                                    lang: "en" },
        { name: "IRNA English",    url: "https://en.irna.ir/rss",                                            lang: "en" }
      ]
    },
    saudi_arabia: {
      label: "Saudi Arabia", aliases: ["saudi arabia", "arabia saudita", "arabia saudi", "sa"], lang: "en",
      feeds: [
        { name: "Arab News",       url: "https://www.arabnews.com/rss.xml",                                  lang: "en" },
        { name: "Saudi Gazette",   url: "https://saudigazette.com.sa/feed/",                                 lang: "en" }
      ]
    },
    uae: {
      label: "UAE", aliases: ["uae", "emirates", "emiratos", "emiratos arabes", "ae"], lang: "en",
      feeds: [
        { name: "The National",    url: "https://www.thenationalnews.com/rss/",                               lang: "en" },
        { name: "Gulf News",       url: "https://gulfnews.com/rss",                                          lang: "en" },
        { name: "Khaleej Times",   url: "https://www.khaleejtimes.com/rss",                                   lang: "en" }
      ]
    },
    qatar: {
      label: "Qatar", aliases: ["qatar", "qa"], lang: "en",
      feeds: [
        { name: "Al Jazeera EN",   url: "https://www.aljazeera.com/xml/rss/all.xml",                         lang: "en" },
        { name: "Qatar Tribune",   url: "https://www.qatar-tribune.com/feed/",                               lang: "en" }
      ]
    },
    iraq: {
      label: "Iraq", aliases: ["iraq", "irak", "iq"], lang: "en",
      feeds: [
        { name: "Rudaw EN",        url: "https://www.rudaw.net/rss/",                                        lang: "en" },
        { name: "Al Monitor Iraq", url: "https://www.al-monitor.com/rss.xml",                                lang: "en" }
      ]
    },
    lebanon: {
      label: "Lebanon", aliases: ["lebanon", "libano", "líbano", "lb"], lang: "en",
      feeds: [
        { name: "L'Orient Today",  url: "https://www.lorientlejour.com/rss.xml",                             lang: "en" },
        { name: "Naharnet",        url: "https://www.naharnet.com/stories/en/rss/latest",                    lang: "en" }
      ]
    },

    /* ══ AFRICA ══ */
    egypt: {
      label: "Egypt", aliases: ["egypt", "egipto", "eg"], lang: "en",
      feeds: [
        { name: "Ahram Online",    url: "https://english.ahram.org.eg/~/RSS.aspx",                           lang: "en" },
        { name: "Egypt Independent",url: "https://egyptindependent.com/feed/",                               lang: "en" }
      ]
    },
    south_africa: {
      label: "South Africa", aliases: ["south africa", "sudáfrica", "sudafrica", "za"], lang: "en",
      feeds: [
        { name: "Mail & Guardian", url: "https://mg.co.za/feed/",                                            lang: "en" },
        { name: "News24",          url: "https://feeds.news24.com/articles/news24/TopStories/rss",           lang: "en" },
        { name: "Daily Maverick",  url: "https://www.dailymaverick.co.za/feed/",                             lang: "en" }
      ]
    },
    nigeria: {
      label: "Nigeria", aliases: ["nigeria", "ng"], lang: "en",
      feeds: [
        { name: "Vanguard NG",     url: "https://www.vanguardngr.com/feed/",                                 lang: "en" },
        { name: "Premium Times",   url: "https://www.premiumtimesng.com/feed/",                              lang: "en" },
        { name: "Punch NG",        url: "https://punchng.com/feed/",                                         lang: "en" }
      ]
    },
    kenya: {
      label: "Kenya", aliases: ["kenya", "kenia", "ke"], lang: "en",
      feeds: [
        { name: "Nation Africa",   url: "https://nation.africa/kenya/rss",                                   lang: "en" },
        { name: "Standard Media",  url: "https://www.standardmedia.co.ke/feed/rss",                          lang: "en" }
      ]
    },
    ethiopia: {
      label: "Ethiopia", aliases: ["ethiopia", "etiopia", "etiopía", "et"], lang: "en",
      feeds: [
        { name: "Addis Standard",  url: "https://addisstandard.com/feed/",                                   lang: "en" },
        { name: "The Reporter ET", url: "https://www.thereporterethiopia.com/feed/",                         lang: "en" }
      ]
    },
    ghana: {
      label: "Ghana", aliases: ["ghana", "gh"], lang: "en",
      feeds: [
        { name: "Joy News GH",     url: "https://www.myjoyonline.com/feed/",                                 lang: "en" },
        { name: "GhanaWeb",        url: "https://www.ghanaweb.com/GhanaHomePage/NewsArchive/rssfeed.php",    lang: "en" }
      ]
    },
    morocco: {
      label: "Morocco", aliases: ["morocco", "marruecos", "maroc", "ma"], lang: "en",
      feeds: [
        { name: "Morocco World News",url: "https://www.moroccoworldnews.com/feed/",                          lang: "en" },
        { name: "Yabiladi EN",     url: "https://en.yabiladi.com/rss.xml",                                   lang: "en" }
      ]
    },
    tanzania: {
      label: "Tanzania", aliases: ["tanzania", "tz"], lang: "en",
      feeds: [
        { name: "The Citizen TZ",  url: "https://www.thecitizen.co.tz/tanzania/rss",                         lang: "en" }
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
