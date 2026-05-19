export const FEEDS_DB = {
  version: 3,

  defaults: {
    maxFeedsPerRequest: 8,
    maxItemsPerFeed: 15
  },

  /* ─── ALERTAS INTERNACIONALES ─────────────────── */
  alerts: {
    international_es: [
      { name: "EL PAÍS",       url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada", lang: "es", type: "general" },
      { name: "EL PAÍS América",url: "https://elpais.com/rss/elpais/portada_america.xml",               lang: "es", type: "general" },
      { name: "France 24 ES",  url: "https://www.france24.com/es/rss",                                  lang: "es", type: "international" },
      { name: "BBC Mundo",     url: "https://feeds.bbci.co.uk/mundo/rss.xml",                           lang: "es", type: "international" },
      { name: "CNN ES",        url: "https://cnnespanol.cnn.com/feed/",                                 lang: "es", type: "international" },
      { name: "DW Español",    url: "https://rss.dw.com/xml/rss-es-all",                               lang: "es", type: "international" },
      { name: "RT Español",    url: "https://actualidad.rt.com/rss",                                    lang: "es", type: "international" },
      { name: "Infobae",       url: "https://www.infobae.com/feeds/rss/",                              lang: "es", type: "international" }
    ],
    international_en: [
      { name: "Reuters",       url: "https://feeds.reuters.com/reuters/topNews",                        lang: "en", type: "international" },
      { name: "AP News",       url: "https://apnews.com/index.rss",                                    lang: "en", type: "international" },
      { name: "Al Jazeera",    url: "https://www.aljazeera.com/xml/rss/all.xml",                       lang: "en", type: "international" },
      { name: "DW English",    url: "https://rss.dw.com/xml/rss-en-world",                            lang: "en", type: "international" },
      { name: "France 24 EN",  url: "https://www.france24.com/en/rss",                                 lang: "en", type: "international" },
      { name: "BBC World",     url: "https://feeds.bbci.co.uk/news/world/rss.xml",                    lang: "en", type: "international" },
      { name: "The Guardian",  url: "https://www.theguardian.com/world/rss",                          lang: "en", type: "international" },
      { name: "Bloomberg",     url: "https://feeds.bloomberg.com/politics/news.rss",                   lang: "en", type: "international" }
    ]
  },

  /* ─── TEMAS ───────────────────────────────────── */
  topics: {
    ia:             ["inteligencia artificial", "artificial intelligence", "machine learning", "deep learning", "large language model", "generative ai", "llm", "openai", "chatgpt", "deepseek", "gemini", "modelo de lenguaje", "aprendizaje automatico", "gpt", "claude ai", "copilot", "mistral", "neural network", "red neuronal"],
    energia:        ["energía", "energy", "petróleo", "petroleum", "oil", "gas", "lng", "electricity", "electricidad", "gasoducto", "pipeline", "nuclear energy", "energia nuclear", "barrel", "barril", "renovables", "renewables", "solar", "eolica", "wind power", "coal", "carbon", "hidroelectrica"],
    otan:           ["otan", "nato", "alianza atlantica", "north atlantic treaty", "alianza militar", "expansion otan", "nato enlargement", "articulo 5", "article 5", "cumbre otan", "nato summit", "transatlantico", "transatlantic defense", "allied forces"],
    ciberseguridad: ["ciberseguridad", "cybersecurity", "ransomware", "malware", "hack", "ciberataque", "data breach", "brecha de datos", "phishing", "spyware", "vulnerabilidad", "vulnerability", "zero-day", "cyberattack"],
    defensa:        ["defensa", "defense", "military", "militar", "ejercito", "army", "weapon", "arma", "missile", "misil", "pentagon", "presupuesto defensa", "defense budget", "nato forces", "fuerzas otan", "armamento", "armament", "air force", "fuerza aerea", "navy", "armada", "bundeswehr", "mod uk", "fuerzas armadas", "armed forces", "drills", "maniobras militares"],
    china:          ["china", "beijing", "taiwan", "xi jinping", "pcc", "partido comunista chino", "hong kong", "xinjiang", "tibet", "south china sea", "mar del sur de china", "huawei", "byd", "pla"],
    rusia:          ["rusia", "russia", "kremlin", "putin", "ucrania", "ukraine", "donbas", "donbass", "zelensky", "zelenski", "kiev", "kyiv", "bielorrusia", "belarus", "wagner", "sancciones rusia"],
    economia:       ["economia", "economy", "inflation", "markets", "mercados", "inflación", "recession", "recesion", "pib", "gdp", "interest rates", "tipos de interes", "federal reserve", "fed", "banco central", "ecb", "bce", "deuda", "debt", "bolsa", "stock market", "trading", "inversión", "investment"],
    migracion:      ["migración", "migration", "refugees", "refugiados", "asylum", "border", "frontera", "desplazados", "displaced", "boat migrants", "patera", "inmigrantes", "immigration policy"],
    clima:          ["cambio climatico", "climate change", "global warming", "calentamiento global", "net zero", "carbon emissions", "greenhouse", "emisiones", "renovables", "renewables", "energia solar", "solar energy", "wind energy", "eolica", "climate conference", "conferencia climatica", "paris agreement", "acuerdo de paris", "cop30", "cop29", "sequía", "drought", "inundaciones", "floods"],
    conflicto:      ["conflicto", "conflict", "guerra", "war", "bombardeo", "bombing", "ceasefire", "alto el fuego", "nuclear weapon", "arma nuclear", "weapons of mass", "armas de destruccion", "misil balistico", "ballistic missile", "ofensiva militar", "military offensive", "bajas civiles", "civilian casualties", "ataque", "attack", "invasion", "ofensiva"]
  },

  /* ─── PAÍSES ──────────────────────────────────── */
  countries: {

    /* ══ EUROPA OCCIDENTAL ══ */
    spain: {
      label: "España", aliases: ["espana", "españa", "spain", "es"], lang: "es",
      feeds: [
        { name: "EL PAÍS",         url: "https://feeds.elpais.com/mrss-s/pages/ep/site/elpais.com/portada",   lang: "es", type: "general" },
        { name: "El Mundo",        url: "https://e00-elmundo.uecdn.es/elmundo/rss/portada.xml",               lang: "es", type: "general" },
        { name: "RTVE Noticias",   url: "https://www.rtve.es/api/rss/noticias.xml",                           lang: "es", type: "general" },
        { name: "La Vanguardia",   url: "https://www.lavanguardia.com/rss/home.xml",                          lang: "es", type: "general" },
        { name: "El Confidencial", url: "https://rss.elconfidencial.com/espana/",                             lang: "es", type: "general" },
        { name: "eldiario.es",     url: "https://www.eldiario.es/rss/",                                       lang: "es", type: "general" },
        { name: "ABC España",      url: "https://www.abc.es/rss/feeds/abc_ultima_hora.xml",                   lang: "es", type: "general" },
        { name: "20 Minutos",      url: "https://www.20minutos.es/rss/",                                      lang: "es", type: "general" },
        { name: "Europa Press",    url: "https://www.europapress.es/rss/rss.aspx",                            lang: "es", type: "general" },
        { name: "Cadena SER",      url: "https://cadenaser.com/feed/",                                        lang: "es", type: "general" },
        { name: "El Español",      url: "https://www.elespanol.com/rss/",                                     lang: "es", type: "general" },
        { name: "La Razón",        url: "https://www.larazon.es/rss/",                                        lang: "es", type: "general" },
        { name: "Expansión",       url: "https://e00-expansion.uecdn.es/rss/portada.xml",                     lang: "es", type: "general" },
        { name: "El Economista",   url: "https://www.eleconomista.es/rss/rss-portada.php",                    lang: "es", type: "general" }
      ]
    },
    portugal: {
      label: "Portugal", aliases: ["portugal", "pt"], lang: "pt",
      feeds: [
        { name: "RTP",             url: "https://www.rtp.pt/noticias/rss",                                    lang: "pt", type: "general" },
        { name: "Observador",      url: "https://observador.pt/feed/",                                        lang: "pt", type: "general" },
        { name: "Público",         url: "https://www.publico.pt/rss/ultimas",                                 lang: "pt", type: "general" },
        { name: "Jornal de Notícias",url: "https://www.jn.pt/rss/",                                          lang: "pt", type: "general" },
        { name: "Expresso",        url: "https://expresso.pt/rss",                                            lang: "pt", type: "general" },
        { name: "SIC Notícias",    url: "https://sicnoticias.pt/rss",                                         lang: "pt", type: "general" }
      ]
    },
    france: {
      label: "France", aliases: ["france", "francia", "fr"], lang: "fr",
      feeds: [
        { name: "Le Monde",        url: "http://www.lemonde.fr/rss/une.xml",                                  lang: "fr", type: "general" },
        { name: "France 24 FR",    url: "https://www.france24.com/fr/rss",                                    lang: "fr", type: "general" },
        { name: "Le Figaro",       url: "https://www.lefigaro.fr/rss/figaro_actualites.xml",                  lang: "fr", type: "general" },
        { name: "Libération",      url: "https://www.liberation.fr/arc/outboundfeeds/rss-all-content/",       lang: "fr", type: "general" },
        { name: "L'Express",       url: "https://www.lexpress.fr/rss/alaune.xml",                             lang: "fr", type: "general" },
        { name: "BFM TV",          url: "https://www.bfmtv.com/rss/news-24-7/",                               lang: "fr", type: "general" },
        { name: "RFI Français",    url: "https://www.rfi.fr/fr/rss",                                          lang: "fr", type: "general" }
      ]
    },
    germany: {
      label: "Deutschland", aliases: ["alemania", "germany", "deutschland", "de"], lang: "de",
      feeds: [
        { name: "Tagesschau",      url: "https://www.tagesschau.de/xml/rss2",                                 lang: "de", type: "general" },
        { name: "DW Deutsch",      url: "https://rss.dw.com/xml/rss-de-all",                                  lang: "de", type: "general" },
        { name: "Spiegel Online",  url: "https://www.spiegel.de/international/index.rss",                    lang: "en", type: "general" },
        { name: "Zeit Online",     url: "https://newsfeed.zeit.de/all",                                       lang: "de", type: "general" },
        { name: "FAZ",             url: "https://www.faz.net/rss/aktuell/",                                   lang: "de", type: "general" },
        { name: "Handelsblatt",    url: "https://www.handelsblatt.com/contentexport/feed/schlagzeilen",       lang: "de", type: "general" },
        { name: "Focus Online",    url: "https://rss.focus.de/fol/XML/rss_folnews.xml",                       lang: "de", type: "general" }
      ]
    },
    italy: {
      label: "Italia", aliases: ["italy", "italia", "it"], lang: "it",
      feeds: [
        { name: "ANSA",            url: "https://www.ansa.it/sito/notizie/mondo/mondo_rss.xml",               lang: "it", type: "general" },
        { name: "Corriere della Sera",url: "https://xml2.corriereobjects.it/rss/homepage.xml",               lang: "it", type: "general" },
        { name: "La Stampa",       url: "https://www.lastampa.it/rss.xml",                                    lang: "it", type: "general" },
        { name: "La Repubblica",   url: "https://www.repubblica.it/rss/homepage/rss2.0.xml",                 lang: "it", type: "general" },
        { name: "Il Sole 24 Ore",  url: "https://www.ilsole24ore.com/rss/mondo.xml",                         lang: "it", type: "general" },
        { name: "Sky TG24",        url: "https://tg24.sky.it/article/rss-news-2019.xml",                     lang: "it", type: "general" }
      ]
    },
    uk: {
      label: "United Kingdom", aliases: ["uk", "reino unido", "gb", "great britain"], lang: "en",
      feeds: [
        { name: "BBC UK",          url: "https://feeds.bbci.co.uk/news/rss.xml",                             lang: "en", type: "general" },
        { name: "The Guardian",    url: "https://www.theguardian.com/world/rss",                             lang: "en", type: "general" },
        { name: "Sky News",        url: "https://feeds.skynews.com/feeds/rss/world.xml",                     lang: "en", type: "general" },
        { name: "The Telegraph",   url: "https://www.telegraph.co.uk/news/rss.xml",                          lang: "en", type: "general" },
        { name: "The Independent", url: "https://www.independent.co.uk/news/rss",                            lang: "en", type: "general" },
        { name: "Reuters UK",      url: "https://feeds.reuters.com/reuters/UKdomesticNews",                  lang: "en", type: "general" },
        { name: "Financial Times", url: "https://www.ft.com/rss/home/uk",                                    lang: "en", type: "general" },
        { name: "The Economist",   url: "https://www.economist.com/the-world-this-week/rss.xml",             lang: "en", type: "general" }
      ]
    },
    netherlands: {
      label: "Nederland", aliases: ["netherlands", "paises bajos", "países bajos", "holanda", "nl"], lang: "nl",
      feeds: [
        { name: "NOS",             url: "https://feeds.nos.nl/nosnieuwsalgemeen",                            lang: "nl", type: "general" },
        { name: "DutchNews",       url: "https://www.dutchnews.nl/feed/",                                    lang: "en", type: "general" },
        { name: "NRC",             url: "https://www.nrc.nl/rss/",                                           lang: "nl", type: "general" },
        { name: "RTL Nieuws",      url: "https://www.rtlnieuws.nl/rss.xml",                                  lang: "nl", type: "general" }
      ]
    },
    sweden: {
      label: "Sverige", aliases: ["sweden", "suecia", "se"], lang: "sv",
      feeds: [
        { name: "SVT Nyheter",     url: "https://www.svt.se/nyheter/rss.xml",                                lang: "sv", type: "general" },
        { name: "SR",              url: "https://api.sr.se/api/rss/program/83",                               lang: "sv", type: "general" },
        { name: "The Local SE",    url: "https://www.thelocal.se/feed/",                                     lang: "en", type: "general" },
        { name: "Dagens Nyheter",  url: "https://www.dn.se/rss/",                                            lang: "sv", type: "general" }
      ]
    },
    norway: {
      label: "Norge", aliases: ["norway", "noruega", "no"], lang: "no",
      feeds: [
        { name: "NRK",             url: "https://www.nrk.no/nyheter/siste.rss",                              lang: "no", type: "general" },
        { name: "The Local NO",    url: "https://www.thelocal.no/feed/",                                     lang: "en", type: "general" },
        { name: "Aftenposten",     url: "https://www.aftenposten.no/rss/",                                   lang: "no", type: "general" }
      ]
    },
    denmark: {
      label: "Danmark", aliases: ["denmark", "dinamarca", "dk"], lang: "da",
      feeds: [
        { name: "DR Nyheder",      url: "https://www.dr.dk/nyheder/service/feeds/allenyheder",               lang: "da", type: "general" },
        { name: "The Local DK",    url: "https://www.thelocal.dk/feed/",                                     lang: "en", type: "general" }
      ]
    },
    finland: {
      label: "Suomi", aliases: ["finland", "finlandia", "fi"], lang: "fi",
      feeds: [
        { name: "YLE News",        url: "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET", lang: "fi", type: "general" },
        { name: "YLE English",     url: "https://yle.fi/uutiset/rss/uutiset.rss?osasto=news",               lang: "en", type: "general" }
      ]
    },
    ireland: {
      label: "Ireland", aliases: ["ireland", "irlanda", "ie"], lang: "en",
      feeds: [
        { name: "Irish Times",     url: "https://www.irishtimes.com/cmlink/the-irish-times-news-1.1319192",  lang: "en", type: "general" },
        { name: "RTE News",        url: "https://www.rte.ie/news/rss/news-headlines.xml",                   lang: "en", type: "general" },
        { name: "The Journal",     url: "https://feeds.thejournal.ie/thejournal.ie/",                        lang: "en", type: "general" }
      ]
    },
    switzerland: {
      label: "Schweiz", aliases: ["switzerland", "suiza", "ch"], lang: "de",
      feeds: [
        { name: "NZZ",             url: "https://www.nzz.ch/recent.rss",                                     lang: "de", type: "general" },
        { name: "SWI",             url: "https://www.swissinfo.ch/eng/rss/newsfeed",                         lang: "en", type: "general" },
        { name: "20 Minuten CH",   url: "https://www.20min.ch/rss/rss.tmpl?type=rubrik&get=1",               lang: "de", type: "general" }
      ]
    },
    belgium: {
      label: "Belgique", aliases: ["belgium", "belgica", "bélgica", "be"], lang: "fr",
      feeds: [
        { name: "RTBF",            url: "https://rss.rtbf.be/article/rss/rtbf_info_homepage.xml",            lang: "fr", type: "general" },
        { name: "Le Soir",         url: "https://www.lesoir.be/arc/outboundfeeds/rss/?outputType=xml",        lang: "fr", type: "general" },
        { name: "The Brussels Times",url: "https://www.brusselstimes.com/feed/",                             lang: "en", type: "general" }
      ]
    },
    poland: {
      label: "Polska", aliases: ["poland", "polonia", "pl"], lang: "pl",
      feeds: [
        { name: "TVN24",           url: "https://tvn24.pl/najnowsze.xml",                                    lang: "pl", type: "general" },
        { name: "Notes from Poland",url: "https://notesfrompoland.com/feed/",                               lang: "en", type: "general" },
        { name: "Gazeta Wyborcza", url: "https://wyborcza.pl/rss/wyborcza.xml",                              lang: "pl", type: "general" },
        { name: "Onet",            url: "https://wiadomosci.onet.pl/.feed",                                  lang: "pl", type: "general" }
      ]
    },
    czech_republic: {
      label: "Česká Republika", aliases: ["czech", "chequia", "czechia", "cz"], lang: "cs",
      feeds: [
        { name: "Czech Radio",     url: "https://english.radio.cz/export/articles/latest",                  lang: "en", type: "general" },
        { name: "Prague Morning",  url: "https://www.praguemorning.cz/feed/",                                lang: "en", type: "general" }
      ]
    },
    hungary: {
      label: "Magyarország", aliases: ["hungary", "hungria", "hungría", "hu"], lang: "hu",
      feeds: [
        { name: "HVG",             url: "https://hvg.hu/rss",                                               lang: "hu", type: "general" },
        { name: "Telex",           url: "https://telex.hu/rss",                                              lang: "hu", type: "general" }
      ]
    },
    romania: {
      label: "România", aliases: ["romania", "rumania", "ro"], lang: "ro",
      feeds: [
        { name: "Digi24",          url: "https://www.digi24.ro/rss",                                         lang: "ro", type: "general" },
        { name: "HotNews",         url: "https://www.hotnews.ro/rss/",                                       lang: "ro", type: "general" }
      ]
    },
    ukraine: {
      label: "Україна", aliases: ["ukraine", "ucrania", "ua"], lang: "uk",
      feeds: [
        { name: "Kyiv Independent",url: "https://kyivindependent.com/feed/",                                lang: "en", type: "general" },
        { name: "Ukrinform EN",    url: "https://www.ukrinform.net/rss/block-lastnews",                     lang: "en", type: "general" },
        { name: "Ukrinform UA",    url: "https://www.ukrinform.ua/rss/block-lastnews",                      lang: "uk", type: "general" },
        { name: "Ukrainska Pravda",url: "https://www.pravda.com.ua/rss/view_news/",                         lang: "uk", type: "general" },
        { name: "Interfax Ukraine",url: "https://en.interfax.com.ua/news/general.rss",                      lang: "en", type: "general" }
      ]
    },
    greece: {
      label: "Ελλάδα", aliases: ["greece", "grecia", "gr"], lang: "el",
      feeds: [
        { name: "Ekathimerini",    url: "https://www.ekathimerini.com/rss/?p=8",                             lang: "en", type: "general" },
        { name: "Greek Reporter",  url: "https://greekreporter.com/feed/",                                   lang: "en", type: "general" }
      ]
    },
    austria: {
      label: "Österreich", aliases: ["austria", "at"], lang: "de",
      feeds: [
        { name: "ORF",             url: "https://rss.orf.at/news.xml",                                       lang: "de", type: "general" },
        { name: "Der Standard",    url: "https://www.derstandard.at/rss",                                    lang: "de", type: "general" },
        { name: "Die Presse",      url: "https://www.diepresse.com/rss",                                     lang: "de", type: "general" }
      ]
    },
    serbia: {
      label: "Srbija", aliases: ["serbia", "rs"], lang: "sr",
      feeds: [
        { name: "N1 Serbia",       url: "https://n1info.rs/feed/",                                           lang: "sr", type: "general" },
        { name: "B92",             url: "https://www.b92.net/rss.php",                                       lang: "sr", type: "general" }
      ]
    },
    croatia: {
      label: "Hrvatska", aliases: ["croatia", "croacia", "hr"], lang: "hr",
      feeds: [
        { name: "Total Croatia",   url: "https://www.total-croatia-news.com/feed/",                         lang: "en", type: "general" },
        { name: "N1 Croatia",      url: "https://n1info.hr/feed/",                                           lang: "hr", type: "general" }
      ]
    },

    /* ══ EUROPA DEL ESTE ══ */
    russia: {
      label: "Russia", aliases: ["russia", "rusia", "ru"], lang: "ru",
      feeds: [
        { name: "TASS English",    url: "https://tass.com/rss/v2.xml",                                       lang: "en", type: "general" },
        { name: "Moscow Times",    url: "https://www.themoscowtimes.com/rss/news",                           lang: "en", type: "general" },
        { name: "Meduza EN",       url: "https://meduza.io/en/rss/all",                                      lang: "en", type: "general" }
      ]
    },
    turkey: {
      label: "Türkiye", aliases: ["turkey", "turquia", "turquía", "tr"], lang: "tr",
      feeds: [
        { name: "Daily Sabah",     url: "https://www.dailysabah.com/rss",                                    lang: "en", type: "general" },
        { name: "TRT World",       url: "https://www.trtworld.com/rss",                                      lang: "en", type: "general" },
        { name: "Hürriyet Daily",  url: "https://www.hurriyetdailynews.com/rss",                             lang: "en", type: "general" }
      ]
    },

    /* ══ NORTEAMÉRICA ══ */
    usa: {
      label: "United States", aliases: ["usa", "eeuu", "united states", "us", "estados unidos"], lang: "en",
      feeds: [
        { name: "AP News",         url: "https://apnews.com/index.rss",                                     lang: "en", type: "general" },
        { name: "Reuters",         url: "https://feeds.reuters.com/reuters/topNews",                         lang: "en", type: "general" },
        { name: "NYT",             url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",        lang: "en", type: "general" },
        { name: "Washington Post", url: "https://feeds.washingtonpost.com/rss/world",                        lang: "en", type: "general" },
        { name: "CNN",             url: "https://rss.cnn.com/rss/edition.rss",                               lang: "en", type: "general" },
        { name: "NPR",             url: "https://feeds.npr.org/1001/rss.xml",                                lang: "en", type: "general" },
        { name: "Politico",        url: "https://www.politico.com/rss/politicopicks.xml",                   lang: "en", type: "general" },
        { name: "The Hill",        url: "https://thehill.com/feed/",                                         lang: "en", type: "general" },
        { name: "Bloomberg",       url: "https://feeds.bloomberg.com/politics/news.rss",                    lang: "en", type: "general" },
        { name: "Fox News",        url: "https://moxie.foxnews.com/google-publisher/world.xml",             lang: "en", type: "general" }
      ]
    },
    canada: {
      label: "Canada", aliases: ["canada", "canadá", "ca"], lang: "en",
      feeds: [
        { name: "CBC",             url: "https://www.cbc.ca/cmlink/rss-topstories",                         lang: "en", type: "general" },
        { name: "Globe & Mail",    url: "https://www.theglobeandmail.com/arc/outboundfeeds/rss/",            lang: "en", type: "general" },
        { name: "National Post",   url: "https://nationalpost.com/feed/",                                   lang: "en", type: "general" },
        { name: "Toronto Star",    url: "https://www.thestar.com/content/thestar/feed.RSSManagerServlet.articles.topstories.rss", lang: "en", type: "general" },
        { name: "CTV News",        url: "https://www.ctvnews.ca/rss/ctvnews-ca-top-stories-public-rss-1.822009", lang: "en", type: "general" }
      ]
    },
    mexico: {
      label: "México", aliases: ["mexico", "méxico", "mx"], lang: "es",
      feeds: [
        { name: "El Universal",    url: "https://www.eluniversal.com.mx/rss/notashome.xml",                 lang: "es", type: "general" },
        { name: "Milenio",         url: "https://www.milenio.com/rss",                                      lang: "es", type: "general" },
        { name: "Proceso",         url: "https://www.proceso.com.mx/rss/",                                  lang: "es", type: "general" },
        { name: "Animal Político", url: "https://www.animalpolitico.com/feed/",                              lang: "es", type: "general" },
        { name: "Excélsior",       url: "https://www.excelsior.com.mx/rss",                                  lang: "es", type: "general" },
        { name: "La Jornada",      url: "https://www.jornada.com.mx/rss/politica.xml",                      lang: "es", type: "general" },
        { name: "El Economista MX",url: "https://www.eleconomista.com.mx/rss/",                              lang: "es", type: "general" }
      ]
    },

    /* ══ CENTROAMÉRICA Y CARIBE ══ */
    cuba: {
      label: "Cuba", aliases: ["cuba", "cu"], lang: "es",
      feeds: [
        { name: "14ymedio",        url: "https://www.14ymedio.com/feed/",                                    lang: "es", type: "general" },
        { name: "CiberCuba",       url: "https://www.cibercuba.com/feed",                                    lang: "es", type: "general" }
      ]
    },
    costa_rica: {
      label: "Costa Rica", aliases: ["costa rica", "cr"], lang: "es",
      feeds: [
        { name: "La Nación CR",    url: "https://www.nacion.com/feeds/",                                     lang: "es", type: "general" },
        { name: "Tico Times",      url: "https://ticotimes.net/feed/",                                       lang: "en", type: "general" }
      ]
    },
    guatemala: {
      label: "Guatemala", aliases: ["guatemala", "gt"], lang: "es",
      feeds: [
        { name: "Prensa Libre",    url: "https://www.prensalibre.com/feed/",                                 lang: "es", type: "general" }
      ]
    },
    panama: {
      label: "Panamá", aliases: ["panama", "panamá", "pa"], lang: "es",
      feeds: [
        { name: "La Prensa PA",    url: "https://www.prensa.com/feed/",                                      lang: "es", type: "general" }
      ]
    },
    dominican_republic: {
      label: "Rep. Dominicana", aliases: ["dominican republic", "republica dominicana", "república dominicana", "do"], lang: "es",
      feeds: [
        { name: "Listín Diario",   url: "https://listindiario.com/feed/",                                   lang: "es", type: "general" },
        { name: "Diario Libre",    url: "https://www.diariolibre.com/feed/",                                 lang: "es", type: "general" }
      ]
    },

    /* ══ SUDAMÉRICA ══ */
    argentina: {
      label: "Argentina", aliases: ["argentina", "ar"], lang: "es",
      feeds: [
        { name: "Clarín",          url: "https://www.clarin.com/rss/",                                      lang: "es", type: "general" },
        { name: "La Nación AR",    url: "https://www.lanacion.com.ar/arc/outboundfeeds/rss/",                lang: "es", type: "general" },
        { name: "Infobae AR",      url: "https://www.infobae.com/feeds/rss/",                               lang: "es", type: "general" },
        { name: "Página 12",       url: "https://www.pagina12.com.ar/rss/portada",                          lang: "es", type: "general" },
        { name: "Ámbito",          url: "https://www.ambito.com/rss/home.xml",                               lang: "es", type: "general" },
        { name: "Perfil",          url: "https://www.perfil.com/feed/",                                      lang: "es", type: "general" }
      ]
    },
    brazil: {
      label: "Brasil", aliases: ["brasil", "brazil", "br"], lang: "pt",
      feeds: [
        { name: "G1 Globo",        url: "https://g1.globo.com/rss/g1/",                                     lang: "pt", type: "general" },
        { name: "Folha de SP",     url: "https://feeds.folha.uol.com.br/emcimadahora/rss091.xml",            lang: "pt", type: "general" },
        { name: "O Globo",         url: "https://oglobo.globo.com/rss.xml",                                  lang: "pt", type: "general" },
        { name: "UOL Noticias",    url: "https://noticias.uol.com.br/ultnot/ultimas/brasil.rss",             lang: "pt", type: "general" },
        { name: "BBC Brasil",      url: "https://www.bbc.com/portuguese/index.xml",                          lang: "pt", type: "general" }
      ]
    },
    colombia: {
      label: "Colombia", aliases: ["colombia", "co"], lang: "es",
      feeds: [
        { name: "El Tiempo",       url: "https://www.eltiempo.com/rss/politica.xml",                        lang: "es", type: "general" },
        { name: "El Espectador",   url: "https://www.elespectador.com/arc/outboundfeeds/rss/",               lang: "es", type: "general" },
        { name: "Semana",          url: "https://www.semana.com/rss/",                                       lang: "es", type: "general" },
        { name: "RCN Radio",       url: "https://www.rcnradio.com/feed/",                                    lang: "es", type: "general" },
        { name: "Caracol Radio",   url: "https://caracol.com.co/feed/",                                      lang: "es", type: "general" },
        { name: "El Colombiano",   url: "https://www.elcolombiano.com/feed/",                                lang: "es", type: "general" },
        { name: "Blu Radio",       url: "https://www.bluradio.com/feed/",                                    lang: "es", type: "general" },
        { name: "La República CO", url: "https://www.larepublica.co/rss.xml",                                lang: "es", type: "general" },
        { name: "Infobae CO",      url: "https://www.infobae.com/feeds/colombia/",                           lang: "es", type: "general" }
      ]
    },
    chile: {
      label: "Chile", aliases: ["chile", "cl"], lang: "es",
      feeds: [
        { name: "La Tercera",      url: "https://www.latercera.com/feed/",                                   lang: "es", type: "general" },
        { name: "Emol",            url: "https://www.emol.com/rss/titulares.xml",                            lang: "es", type: "general" },
        { name: "El Mostrador",    url: "https://www.elmostrador.cl/feed/",                                  lang: "es", type: "general" },
        { name: "BioBioChile",     url: "https://www.biobiochile.cl/feed/",                                  lang: "es", type: "general" },
        { name: "CNN Chile",       url: "https://cnnchile.com/feed/",                                        lang: "es", type: "general" }
      ]
    },
    peru: {
      label: "Perú", aliases: ["peru", "perú", "pe"], lang: "es",
      feeds: [
        { name: "El Comercio PE",  url: "https://elcomercio.pe/arc/outboundfeeds/rss/",                     lang: "es", type: "general" },
        { name: "RPP Noticias",    url: "https://rpp.pe/rss/ultimas-noticias.xml",                           lang: "es", type: "general" },
        { name: "La República PE", url: "https://larepublica.pe/feed/",                                      lang: "es", type: "general" },
        { name: "Gestión",         url: "https://gestion.pe/feed/",                                          lang: "es", type: "general" }
      ]
    },
    venezuela: {
      label: "Venezuela", aliases: ["venezuela", "ve"], lang: "es",
      feeds: [
        { name: "El Nacional VE",  url: "https://www.elnacional.com/feed/",                                  lang: "es", type: "general" },
        { name: "Runrun.es",       url: "https://runrun.es/feed/",                                           lang: "es", type: "general" },
        { name: "Tal Cual",        url: "https://talcualdigital.com/feed/",                                   lang: "es", type: "general" }
      ]
    },
    ecuador: {
      label: "Ecuador", aliases: ["ecuador", "ec"], lang: "es",
      feeds: [
        { name: "El Comercio EC",  url: "https://www.elcomercio.com/feed/",                                  lang: "es", type: "general" },
        { name: "Primicias",       url: "https://www.primicias.ec/feed/",                                    lang: "es", type: "general" }
      ]
    },
    bolivia: {
      label: "Bolivia", aliases: ["bolivia", "bo"], lang: "es",
      feeds: [
        { name: "El Deber",        url: "https://eldeber.com.bo/feed/",                                      lang: "es", type: "general" },
        { name: "Los Tiempos",     url: "https://www.lostiempos.com/rss/feeds",                              lang: "es", type: "general" }
      ]
    },
    uruguay: {
      label: "Uruguay", aliases: ["uruguay", "uy"], lang: "es",
      feeds: [
        { name: "El País UY",      url: "https://www.elpais.com.uy/rss/",                                   lang: "es", type: "general" },
        { name: "La Diaria",       url: "https://ladiaria.com.uy/feed/",                                     lang: "es", type: "general" }
      ]
    },
    paraguay: {
      label: "Paraguay", aliases: ["paraguay", "py"], lang: "es",
      feeds: [
        { name: "ABC Color",       url: "https://www.abc.com.py/feed/",                                      lang: "es", type: "general" }
      ]
    },

    /* ══ ASIA ORIENTAL ══ */
    china: {
      label: "China", aliases: ["china", "cn"], lang: "zh",
      feeds: [
        { name: "China Daily",     url: "https://www.chinadaily.com.cn/rss/world_rss.xml",                  lang: "en", type: "general" },
        { name: "CGTN",            url: "https://www.cgtn.com/subscribe/feeds/rss2.0.xml",                  lang: "en", type: "general" },
        { name: "Xinhua",          url: "https://english.news.cn/rss/world.xml",                            lang: "en", type: "general" },
        { name: "Global Times",    url: "https://www.globaltimes.cn/rss/outbrain.xml",                      lang: "en", type: "general" },
        { name: "South China MP",  url: "https://www.scmp.com/rss/91/feed",                                 lang: "en", type: "general" }
      ]
    },
    japan: {
      label: "Japón", aliases: ["japan", "japon", "japón", "jp"], lang: "ja",
      feeds: [
        { name: "NHK World",       url: "https://www3.nhk.or.jp/rss/news/cat0.xml",                         lang: "ja", type: "general" },
        { name: "Japan Times",     url: "https://www.japantimes.co.jp/feed/",                               lang: "en", type: "general" },
        { name: "Kyodo News",      url: "https://english.kyodonews.net/rss/all.xml",                        lang: "en", type: "general" },
        { name: "Asahi Shimbun",   url: "https://www.asahi.com/rss/asahi/newsheadlines.rdf",                lang: "ja", type: "general" }
      ]
    },
    south_korea: {
      label: "South Korea", aliases: ["south korea", "corea del sur", "kr", "korea"], lang: "ko",
      feeds: [
        { name: "Korea Herald",    url: "https://www.koreaherald.com/common/rss_xml.php?ct=020100000000",   lang: "en", type: "general" },
        { name: "Yonhap",          url: "https://en.yna.co.kr/RSS/news.xml",                                lang: "en", type: "general" },
        { name: "JoongAng Daily",  url: "https://koreajoongangdaily.joins.com/rss/feeds/breaking-news.xml", lang: "en", type: "general" }
      ]
    },
    taiwan: {
      label: "Taiwan", aliases: ["taiwan", "tw"], lang: "zh",
      feeds: [
        { name: "Focus Taiwan",    url: "https://focustaiwan.tw/rss/aall.xml",                              lang: "en", type: "general" },
        { name: "Taipei Times",    url: "https://www.taipeitimes.com/xml/index.rss",                        lang: "en", type: "general" }
      ]
    },

    /* ══ ASIA MERIDIONAL ══ */
    india: {
      label: "India", aliases: ["india", "in"], lang: "en",
      feeds: [
        { name: "The Hindu",       url: "https://www.thehindu.com/news/feeder/default.rss",                 lang: "en", type: "general" },
        { name: "NDTV",            url: "https://feeds.feedburner.com/ndtvnews-latest",                     lang: "en", type: "general" },
        { name: "Times of India",  url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",       lang: "en", type: "general" },
        { name: "Indian Express",  url: "https://indianexpress.com/feed/",                                  lang: "en", type: "general" },
        { name: "Hindustan Times", url: "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",  lang: "en", type: "general" },
        { name: "The Wire",        url: "https://thewire.in/feed",                                          lang: "en", type: "general" }
      ]
    },
    pakistan: {
      label: "Pakistan", aliases: ["pakistan", "pakistán", "pk"], lang: "ur",
      feeds: [
        { name: "Dawn",            url: "https://www.dawn.com/feed",                                        lang: "en", type: "general" },
        { name: "The News Intl",   url: "https://www.thenews.com.pk/rss/1/6",                               lang: "en", type: "general" },
        { name: "Geo News",        url: "https://www.geo.tv/rss",                                           lang: "en", type: "general" }
      ]
    },
    bangladesh: {
      label: "Bangladesh", aliases: ["bangladesh", "bd"], lang: "bn",
      feeds: [
        { name: "Daily Star BD",   url: "https://www.thedailystar.net/frontpage/rss.xml",                   lang: "en", type: "general" },
        { name: "Dhaka Tribune",   url: "https://www.dhakatribune.com/feed/",                               lang: "en", type: "general" }
      ]
    },

    /* ══ ASIA SUDORIENTAL ══ */
    indonesia: {
      label: "Indonesia", aliases: ["indonesia", "id"], lang: "id",
      feeds: [
        { name: "Jakarta Post",    url: "https://www.thejakartapost.com/feed",                              lang: "en", type: "general" },
        { name: "Kompas",          url: "https://www.kompas.com/rss/",                                      lang: "id", type: "general" },
        { name: "Tempo EN",        url: "https://en.tempo.co/rss/news",                                     lang: "en", type: "general" }
      ]
    },
    philippines: {
      label: "Philippines", aliases: ["philippines", "filipinas", "ph"], lang: "en",
      feeds: [
        { name: "Inquirer",        url: "https://newsinfo.inquirer.net/feed",                               lang: "en", type: "general" },
        { name: "Manila Bulletin", url: "https://mb.com.ph/feed/",                                         lang: "en", type: "general" },
        { name: "Rappler",         url: "https://www.rappler.com/feed/",                                    lang: "en", type: "general" }
      ]
    },
    singapore: {
      label: "Singapore", aliases: ["singapore", "singapur", "sg"], lang: "en",
      feeds: [
        { name: "Straits Times",   url: "https://www.straitstimes.com/news/world/rss.xml",                  lang: "en", type: "general" },
        { name: "CNA",             url: "https://www.channelnewsasia.com/rssfeeds/8395986",                 lang: "en", type: "general" }
      ]
    },
    malaysia: {
      label: "Malaysia", aliases: ["malaysia", "malasia", "my"], lang: "ms",
      feeds: [
        { name: "Malaysiakini",    url: "https://www.malaysiakini.com/rss/all",                             lang: "en", type: "general" },
        { name: "Malay Mail",      url: "https://www.malaymail.com/feed/",                                  lang: "en", type: "general" }
      ]
    },
    vietnam: {
      label: "Việt Nam", aliases: ["vietnam", "vietnan", "vn"], lang: "vi",
      feeds: [
        { name: "VnExpress Intl",  url: "https://e.vnexpress.net/rss/news.rss",                             lang: "en", type: "general" },
        { name: "Vietnam News",    url: "https://vietnamnews.vn/rss/",                                      lang: "en", type: "general" }
      ]
    },
    thailand: {
      label: "Thailand", aliases: ["thailand", "tailandia", "th"], lang: "th",
      feeds: [
        { name: "Bangkok Post",    url: "https://www.bangkokpost.com/rss/data/topstories.xml",              lang: "en", type: "general" },
        { name: "The Nation TH",   url: "https://www.nationthailand.com/rss",                               lang: "en", type: "general" }
      ]
    },

    /* ══ OCEANÍA ══ */
    australia: {
      label: "Australia", aliases: ["australia", "au"], lang: "en",
      feeds: [
        { name: "ABC Australia",   url: "https://www.abc.net.au/news/feed/52498/rss.xml",                   lang: "en", type: "general" },
        { name: "SMH",             url: "https://www.smh.com.au/rss/feed.xml",                              lang: "en", type: "general" },
        { name: "The Australian",  url: "https://www.theaustralian.com.au/feed/",                           lang: "en", type: "general" },
        { name: "Guardian AU",     url: "https://www.theguardian.com/australia-news/rss",                   lang: "en", type: "general" }
      ]
    },
    new_zealand: {
      label: "New Zealand", aliases: ["new zealand", "nueva zelanda", "nz"], lang: "en",
      feeds: [
        { name: "RNZ",             url: "https://www.rnz.co.nz/rss/news.xml",                               lang: "en", type: "general" },
        { name: "NZ Herald",       url: "https://www.nzherald.co.nz/arc/outboundfeeds/rss/",                lang: "en", type: "general" }
      ]
    },

    /* ══ ORIENTE MEDIO ══ */
    israel: {
      label: "Israel", aliases: ["israel", "il"], lang: "he",
      feeds: [
        { name: "Times of Israel", url: "https://www.timesofisrael.com/feed/",                              lang: "en", type: "general" },
        { name: "Jerusalem Post",  url: "https://www.jpost.com/Rss/RssFeedsHeadlines.aspx",                lang: "en", type: "general" },
        { name: "Haaretz EN",      url: "https://www.haaretz.com/srv/haaretz-en",                           lang: "en", type: "general" },
        { name: "Ynet News",       url: "https://www.ynetnews.com/RSS/Category/3083",                       lang: "en", type: "general" }
      ]
    },
    iran: {
      label: "Iran", aliases: ["iran", "irán", "ir"], lang: "fa",
      feeds: [
        { name: "Press TV",        url: "https://www.presstv.ir/rss.xml",                                   lang: "en", type: "general" },
        { name: "IRNA English",    url: "https://en.irna.ir/rss",                                           lang: "en", type: "general" }
      ]
    },
    saudi_arabia: {
      label: "Saudi Arabia", aliases: ["saudi arabia", "arabia saudita", "arabia saudi", "sa"], lang: "ar",
      feeds: [
        { name: "Arab News",       url: "https://www.arabnews.com/rss.xml",                                 lang: "en", type: "general" },
        { name: "Saudi Gazette",   url: "https://saudigazette.com.sa/feed/",                                lang: "en", type: "general" }
      ]
    },
    uae: {
      label: "UAE", aliases: ["uae", "emirates", "emiratos", "emiratos arabes", "ae"], lang: "ar",
      feeds: [
        { name: "The National",    url: "https://www.thenationalnews.com/rss/",                              lang: "en", type: "general" },
        { name: "Gulf News",       url: "https://gulfnews.com/rss",                                         lang: "en", type: "general" },
        { name: "Khaleej Times",   url: "https://www.khaleejtimes.com/rss",                                  lang: "en", type: "general" }
      ]
    },
    qatar: {
      label: "Qatar", aliases: ["qatar", "qa"], lang: "ar",
      feeds: [
        { name: "Al Jazeera EN",   url: "https://www.aljazeera.com/xml/rss/all.xml",                        lang: "en", type: "general" },
        { name: "Qatar Tribune",   url: "https://www.qatar-tribune.com/feed/",                              lang: "en", type: "general" }
      ]
    },
    iraq: {
      label: "Iraq", aliases: ["iraq", "irak", "iq"], lang: "ar",
      feeds: [
        { name: "Rudaw",           url: "https://www.rudaw.net/rss/",                                       lang: "en", type: "general" },
        { name: "Iraq Oil Report",url: "https://www.iraqoilreport.com/feed/",                               lang: "en", type: "general" }
      ]
    },
    lebanon: {
      label: "Lebanon", aliases: ["lebanon", "libano", "líbano", "lb"], lang: "ar",
      feeds: [
        { name: "L'Orient Today",  url: "https://www.lorientlejour.com/rss.xml",                            lang: "en", type: "general" },
        { name: "Daily Star LB",   url: "https://www.dailystar.com.lb/rss/",                                lang: "en", type: "general" }
      ]
    },

    /* ══ AFRICA ══ */
    egypt: {
      label: "مصر", aliases: ["egypt", "egipto", "eg"], lang: "ar",
      feeds: [
        { name: "Ahram Online",    url: "https://english.ahram.org.eg/~/RSS.aspx",                          lang: "en", type: "general" },
        { name: "Egypt Independent",url: "https://egyptindependent.com/feed/",                              lang: "en", type: "general" }
      ]
    },
    south_africa: {
      label: "South Africa", aliases: ["south africa", "sudáfrica", "sudafrica", "za"], lang: "en",
      feeds: [
        { name: "Mail & Guardian", url: "https://mg.co.za/feed/",                                           lang: "en", type: "general" },
        { name: "News24",          url: "https://feeds.news24.com/articles/news24/TopStories/rss",          lang: "en", type: "general" },
        { name: "Daily Maverick",  url: "https://www.dailymaverick.co.za/feed/",                            lang: "en", type: "general" },
        { name: "IOL",             url: "https://www.iol.co.za/rss",                                        lang: "en", type: "general" }
      ]
    },
    nigeria: {
      label: "Nigeria", aliases: ["nigeria", "ng"], lang: "en",
      feeds: [
        { name: "Vanguard NG",     url: "https://www.vanguardngr.com/feed/",                                lang: "en", type: "general" },
        { name: "Punch",           url: "https://punchng.com/feed/",                                        lang: "en", type: "general" },
        { name: "The Nation NG",   url: "https://thenationonlineng.net/feed/",                               lang: "en", type: "general" },
        { name: "Premium Times",   url: "https://www.premiumtimesng.com/feed/",                             lang: "en", type: "general" }
      ]
    },
    ethiopia: {
      label: "Ethiopia", aliases: ["ethiopia", "etiopia", "etiopía", "et"], lang: "am",
      feeds: [
        { name: "The Reporter ET", url: "https://www.thereporterethiopia.com/feed/",                        lang: "en", type: "general" },
        { name: "Addis Standard",  url: "https://addisstandard.com/feed/",                                  lang: "en", type: "general" }
      ]
    },
    kenya: {
      label: "Kenya", aliases: ["kenya", "kenia", "ke"], lang: "en",
      feeds: [
        { name: "Nation Africa",   url: "https://nation.africa/kenya/rss",                                  lang: "en", type: "general" },
        { name: "Standard Media",  url: "https://www.standardmedia.co.ke/feed/rss",                         lang: "en", type: "general" },
        { name: "Daily Nation",    url: "https://www.nation.co.ke/kenya/rss",                               lang: "en", type: "general" }
      ]
    },
    ghana: {
      label: "Ghana", aliases: ["ghana", "gh"], lang: "en",
      feeds: [
        { name: "GhanaWeb",        url: "https://www.ghanaweb.com/GhanaHomePage/NewsArchive/rssfeed.php",   lang: "en", type: "general" },
        { name: "Joy News",        url: "https://www.myjoyonline.com/feed/",                                lang: "en", type: "general" }
      ]
    },
    morocco: {
      label: "المغرب", aliases: ["morocco", "marruecos", "maroc", "ma"], lang: "fr",
      feeds: [
        { name: "Le360",           url: "https://fr.le360.ma/rss.xml",                                      lang: "fr", type: "general" },
        { name: "Le Matin MA",     url: "https://lematin.ma/rss",                                           lang: "fr", type: "general" },
        { name: "Hespress FR",     url: "https://fr.hespress.com/feed/",                                     lang: "fr", type: "general" }
      ]
    },
    senegal: {
      label: "Sénégal", aliases: ["senegal", "sénégal", "sn"], lang: "fr",
      feeds: [
        { name: "RFI Afrique",     url: "https://www.rfi.fr/fr/afrique/rss",                                lang: "fr", type: "general" },
        { name: "Dakar Actu",      url: "https://dakaractu.com/feed/",                                      lang: "fr", type: "general" }
      ]
    },
    tanzania: {
      label: "Tanzania", aliases: ["tanzania", "tz"], lang: "en",
      feeds: [
        { name: "The Citizen TZ",  url: "https://www.thecitizen.co.tz/tanzania/rss",                        lang: "en", type: "general" }
      ]
    },
    angola: {
      label: "Angola", aliases: ["angola", "ao"], lang: "pt",
      feeds: [
        { name: "Jornal de Angola",url: "https://jornaldeangola.ao/feed/",                                  lang: "pt", type: "general" }
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
