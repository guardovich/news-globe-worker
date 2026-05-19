console.log("APP JS CARGADO OK");

const geoBtn = document.getElementById("geoBtn");
const WORKER_URL = "https://news-globe-worker.davidguardopuertas.workers.dev";

const countryInput = document.getElementById("country");
const queryInput = document.getElementById("query");
const searchBtn = document.getElementById("searchBtn");
const spinBtn = document.getElementById("spinBtn");
const statusEl = document.getElementById("status");
const resultsEl = document.getElementById("results");

const briefTopicInput = document.getElementById("briefTopic");
const briefCountriesInput = document.getElementById("briefCountries");
const briefBtn = document.getElementById("briefBtn");
const clearBriefBtn = document.getElementById("clearBriefBtn");
const briefStatusEl = document.getElementById("briefStatus");
const briefingResultsEl = document.getElementById("briefingResults");

const activeTopicEl = document.getElementById("activeTopic");
const activeCountriesEl = document.getElementById("activeCountries");
const headlineCountEl = document.getElementById("headlineCount");
const lastUpdateEl = document.getElementById("lastUpdate");
const geoTickerEl = document.getElementById("geoTicker");
const marketBoardEl = document.getElementById("marketBoard");
const retroTickerTrackEl = document.getElementById("retroTickerTrack");

const clockMadridEl = document.getElementById("clockMadrid");
const clockLondonEl = document.getElementById("clockLondon");
const clockNewYorkEl = document.getElementById("clockNewYork");
const clockBeijingEl = document.getElementById("clockBeijing");
const clockTokyoEl = document.getElementById("clockTokyo");
const clockMoscowEl = document.getElementById("clockMoscow");

const tensionIndexEl = document.getElementById("tensionIndex");
const mediaMoodEl = document.getElementById("mediaMood");
const defconSignalEl = document.getElementById("defconSignal");
const narrativeBiasEl = document.getElementById("narrativeBias");
const hotspotsBoardEl = document.getElementById("hotspotsBoard");

/* 
  PEGA AQUÍ TU GAZETTEER COMPLETO
  Puedes ampliar esta lista cuando quieras.
*/

const gazetteer = {
  espana: { name: "España", center: [-3.7038, 40.4168], gl: "ES", hl: "es-ES", ceid: "ES:es" },
  españa: { name: "España", center: [-3.7038, 40.4168], gl: "ES", hl: "es-ES", ceid: "ES:es" },
  spain: { name: "España", center: [-3.7038, 40.4168], gl: "ES", hl: "es-ES", ceid: "ES:es" },

  portugal: { name: "Portugal", center: [-9.1393, 38.7223], gl: "PT", hl: "pt-PT", ceid: "PT:pt-150" },

  chile: { name: "Chile", center: [-70.6693, -33.4489], gl: "CL", hl: "es-419", ceid: "CL:es-419" },

  mexico: { name: "México", center: [-99.1332, 19.4326], gl: "MX", hl: "es-419", ceid: "MX:es-419" },
  méxico: { name: "México", center: [-99.1332, 19.4326], gl: "MX", hl: "es-419", ceid: "MX:es-419" },

  argentina: { name: "Argentina", center: [-58.3816, -34.6037], gl: "AR", hl: "es-419", ceid: "AR:es-419" },

  colombia: { name: "Colombia", center: [-74.0721, 4.711], gl: "CO", hl: "es-419", ceid: "CO:es-419" },

  peru: { name: "Perú", center: [-77.0428, -12.0464], gl: "PE", hl: "es-419", ceid: "PE:es-419" },
  perú: { name: "Perú", center: [-77.0428, -12.0464], gl: "PE", hl: "es-419", ceid: "PE:es-419" },

  brasil: { name: "Brasil", center: [-47.8825, -15.7942], gl: "BR", hl: "pt-BR", ceid: "BR:pt-419" },
  brazil: { name: "Brasil", center: [-47.8825, -15.7942], gl: "BR", hl: "pt-BR", ceid: "BR:pt-419" },

  "reino unido": { name: "United Kingdom", center: [-0.1276, 51.5072], gl: "GB", hl: "en-GB", ceid: "GB:en" },
  "united kingdom": { name: "United Kingdom", center: [-0.1276, 51.5072], gl: "GB", hl: "en-GB", ceid: "GB:en" },
  uk: { name: "United Kingdom", center: [-0.1276, 51.5072], gl: "GB", hl: "en-GB", ceid: "GB:en" },

  alemania: { name: "Deutschland", center: [13.405, 52.52], gl: "DE", hl: "de", ceid: "DE:de" },
  germany: { name: "Deutschland", center: [13.405, 52.52], gl: "DE", hl: "de", ceid: "DE:de" },
  deutschland: { name: "Deutschland", center: [13.405, 52.52], gl: "DE", hl: "de", ceid: "DE:de" },

  italia: { name: "Italia", center: [12.4964, 41.9028], gl: "IT", hl: "it", ceid: "IT:it" },
  italy: { name: "Italia", center: [12.4964, 41.9028], gl: "IT", hl: "it", ceid: "IT:it" },

  france: { name: "France", center: [2.3522, 48.8566], gl: "FR", hl: "fr", ceid: "FR:fr" },
  francia: { name: "France", center: [2.3522, 48.8566], gl: "FR", hl: "fr", ceid: "FR:fr" },

  belgica: { name: "Belgique", center: [4.3517, 50.8503], gl: "BE", hl: "fr", ceid: "BE:fr" },
  bélgica: { name: "Belgique", center: [4.3517, 50.8503], gl: "BE", hl: "fr", ceid: "BE:fr" },
  belgium: { name: "Belgique", center: [4.3517, 50.8503], gl: "BE", hl: "fr", ceid: "BE:fr" },

  "paises bajos": { name: "Nederland", center: [4.9041, 52.3676], gl: "NL", hl: "nl", ceid: "NL:nl" },
  "países bajos": { name: "Nederland", center: [4.9041, 52.3676], gl: "NL", hl: "nl", ceid: "NL:nl" },
  netherlands: { name: "Nederland", center: [4.9041, 52.3676], gl: "NL", hl: "nl", ceid: "NL:nl" },
  holland: { name: "Nederland", center: [4.9041, 52.3676], gl: "NL", hl: "nl", ceid: "NL:nl" },

  japon: { name: "Japón", center: [139.6917, 35.6895], gl: "JP", hl: "ja", ceid: "JP:ja" },
  japón: { name: "Japón", center: [139.6917, 35.6895], gl: "JP", hl: "ja", ceid: "JP:ja" },
  japan: { name: "Japón", center: [139.6917, 35.6895], gl: "JP", hl: "ja", ceid: "JP:ja" },

  china: { name: "China", center: [116.4074, 39.9042], gl: "CN", hl: "zh-CN", ceid: "CN:zh-Hans" },
  india: { name: "India", center: [77.209, 28.6139], gl: "IN", hl: "en-IN", ceid: "IN:en" },
  australia: { name: "Australia", center: [151.2093, -33.8688], gl: "AU", hl: "en-AU", ceid: "AU:en" },
  canada: { name: "Canada", center: [-75.6972, 45.4215], gl: "CA", hl: "en-CA", ceid: "CA:en" },

  usa: { name: "United States", center: [-77.0369, 38.9072], gl: "US", hl: "en-US", ceid: "US:en" },
  eeuu: { name: "United States", center: [-77.0369, 38.9072], gl: "US", hl: "en-US", ceid: "US:en" },
  "estados unidos": { name: "United States", center: [-77.0369, 38.9072], gl: "US", hl: "en-US", ceid: "US:en" },
  "united states": { name: "United States", center: [-77.0369, 38.9072], gl: "US", hl: "en-US", ceid: "US:en" },

  rusia: { name: "Russia", center: [37.6173, 55.7558], gl: "RU", hl: "ru", ceid: "RU:ru" },
  russia: { name: "Russia", center: [37.6173, 55.7558], gl: "RU", hl: "ru", ceid: "RU:ru" },

  turquia: { name: "Türkiye", center: [32.8597, 39.9334], gl: "TR", hl: "tr", ceid: "TR:tr" },
  turquía: { name: "Türkiye", center: [32.8597, 39.9334], gl: "TR", hl: "tr", ceid: "TR:tr" },
  turkey: { name: "Türkiye", center: [32.8597, 39.9334], gl: "TR", hl: "tr", ceid: "TR:tr" },

  austria: { name: "Österreich", center: [16.3738, 48.2082], gl: "AT", hl: "de", ceid: "AT:de" },
  suiza: { name: "Schweiz", center: [7.4474, 46.948], gl: "CH", hl: "de", ceid: "CH:de" },
  switzerland: { name: "Schweiz", center: [7.4474, 46.948], gl: "CH", hl: "de", ceid: "CH:de" },

  suecia: { name: "Sverige", center: [18.0686, 59.3293], gl: "SE", hl: "sv", ceid: "SE:sv" },
  sweden: { name: "Sverige", center: [18.0686, 59.3293], gl: "SE", hl: "sv", ceid: "SE:sv" },

  noruega: { name: "Norge", center: [10.7522, 59.9139], gl: "NO", hl: "no", ceid: "NO:no" },
  norway: { name: "Norge", center: [10.7522, 59.9139], gl: "NO", hl: "no", ceid: "NO:no" },

  dinamarca: { name: "Danmark", center: [12.5683, 55.6761], gl: "DK", hl: "da", ceid: "DK:da" },
  denmark: { name: "Danmark", center: [12.5683, 55.6761], gl: "DK", hl: "da", ceid: "DK:da" },

  finlandia: { name: "Suomi", center: [24.9384, 60.1699], gl: "FI", hl: "fi", ceid: "FI:fi" },
  finland: { name: "Suomi", center: [24.9384, 60.1699], gl: "FI", hl: "fi", ceid: "FI:fi" },

  polonia: { name: "Polska", center: [21.0122, 52.2297], gl: "PL", hl: "pl", ceid: "PL:pl" },
  poland: { name: "Polska", center: [21.0122, 52.2297], gl: "PL", hl: "pl", ceid: "PL:pl" },

  chequia: { name: "Česko", center: [14.4378, 50.0755], gl: "CZ", hl: "cs", ceid: "CZ:cs" },
  "republica checa": { name: "Česko", center: [14.4378, 50.0755], gl: "CZ", hl: "cs", ceid: "CZ:cs" },
  "república checa": { name: "Česko", center: [14.4378, 50.0755], gl: "CZ", hl: "cs", ceid: "CZ:cs" },
  czechia: { name: "Česko", center: [14.4378, 50.0755], gl: "CZ", hl: "cs", ceid: "CZ:cs" },

  eslovaquia: { name: "Slovensko", center: [17.1077, 48.1486], gl: "SK", hl: "sk", ceid: "SK:sk" },
  slovakia: { name: "Slovensko", center: [17.1077, 48.1486], gl: "SK", hl: "sk", ceid: "SK:sk" },

  hungria: { name: "Magyarország", center: [19.0402, 47.4979], gl: "HU", hl: "hu", ceid: "HU:hu" },
  hungría: { name: "Magyarország", center: [19.0402, 47.4979], gl: "HU", hl: "hu", ceid: "HU:hu" },
  hungary: { name: "Magyarország", center: [19.0402, 47.4979], gl: "HU", hl: "hu", ceid: "HU:hu" },

  rumania: { name: "România", center: [26.1025, 44.4268], gl: "RO", hl: "ro", ceid: "RO:ro" },
  rumanía: { name: "România", center: [26.1025, 44.4268], gl: "RO", hl: "ro", ceid: "RO:ro" },
  romania: { name: "România", center: [26.1025, 44.4268], gl: "RO", hl: "ro", ceid: "RO:ro" },

  bulgaria: { name: "България", center: [23.3219, 42.6977], gl: "BG", hl: "bg", ceid: "BG:bg" },

  grecia: { name: "Ελλάδα", center: [23.7275, 37.9838], gl: "GR", hl: "el", ceid: "GR:el" },
  greece: { name: "Ελλάδα", center: [23.7275, 37.9838], gl: "GR", hl: "el", ceid: "GR:el" },

  irlanda: { name: "Ireland", center: [-6.2603, 53.3498], gl: "IE", hl: "en-IE", ceid: "IE:en" },
  ireland: { name: "Ireland", center: [-6.2603, 53.3498], gl: "IE", hl: "en-IE", ceid: "IE:en" },

  ucrania: { name: "Україна", center: [30.5234, 50.4501], gl: "UA", hl: "uk", ceid: "UA:uk" },
  ukraine: { name: "Україна", center: [30.5234, 50.4501], gl: "UA", hl: "uk", ceid: "UA:uk" },

  israel: { name: "Israel", center: [34.7818, 32.0853], gl: "IL", hl: "he", ceid: "IL:he" },

  egipto: { name: "مصر", center: [31.2357, 30.0444], gl: "EG", hl: "ar", ceid: "EG:ar" },
  egypt: { name: "مصر", center: [31.2357, 30.0444], gl: "EG", hl: "ar", ceid: "EG:ar" },

  sudafrica: { name: "South Africa", center: [28.0473, -26.2041], gl: "ZA", hl: "en-ZA", ceid: "ZA:en" },
  "sudáfrica": { name: "South Africa", center: [28.0473, -26.2041], gl: "ZA", hl: "en-ZA", ceid: "ZA:en" },
  "south africa": { name: "South Africa", center: [28.0473, -26.2041], gl: "ZA", hl: "en-ZA", ceid: "ZA:en" },

  nigeria: { name: "Nigeria", center: [7.3986, 9.0765], gl: "NG", hl: "en-NG", ceid: "NG:en" },

  kenia: { name: "Kenya", center: [36.8219, -1.2921], gl: "KE", hl: "en-KE", ceid: "KE:en" },
  kenya: { name: "Kenya", center: [36.8219, -1.2921], gl: "KE", hl: "en-KE", ceid: "KE:en" },

  marruecos: { name: "المغرب", center: [-6.8498, 34.0209], gl: "MA", hl: "fr", ceid: "MA:fr" },
  morocco: { name: "المغرب", center: [-6.8498, 34.0209], gl: "MA", hl: "fr", ceid: "MA:fr" },

  argelia: { name: "الجزائر", center: [3.0588, 36.7538], gl: "DZ", hl: "fr", ceid: "DZ:fr" },
  algeria: { name: "الجزائر", center: [3.0588, 36.7538], gl: "DZ", hl: "fr", ceid: "DZ:fr" },

  tunez: { name: "تونس", center: [10.1815, 36.8065], gl: "TN", hl: "fr", ceid: "TN:fr" },
  túnez: { name: "تونس", center: [10.1815, 36.8065], gl: "TN", hl: "fr", ceid: "TN:fr" },
  tunisia: { name: "تونس", center: [10.1815, 36.8065], gl: "TN", hl: "fr", ceid: "TN:fr" },

  "arabia saudita": { name: "السعودية", center: [46.6753, 24.7136], gl: "SA", hl: "ar", ceid: "SA:ar" },
  "saudi arabia": { name: "السعودية", center: [46.6753, 24.7136], gl: "SA", hl: "ar", ceid: "SA:ar" },

  "emiratos arabes unidos": { name: "الإمارات", center: [55.2708, 25.2048], gl: "AE", hl: "ar", ceid: "AE:ar" },
  "emiratos árabes unidos": { name: "الإمارات", center: [55.2708, 25.2048], gl: "AE", hl: "ar", ceid: "AE:ar" },
  uae: { name: "الإمارات", center: [55.2708, 25.2048], gl: "AE", hl: "ar", ceid: "AE:ar" },

  qatar: { name: "قطر", center: [51.531, 25.2854], gl: "QA", hl: "ar", ceid: "QA:ar" },
  iran: { name: "Iran", center: [51.389, 35.6892], gl: "IR", hl: "fa", ceid: "IR:fa" },
  pakistan: { name: "Pakistan", center: [73.0479, 33.6844], gl: "PK", hl: "en-PK", ceid: "PK:en" },
  bangladesh: { name: "Bangladesh", center: [90.4125, 23.8103], gl: "BD", hl: "en-BD", ceid: "BD:en" },
  indonesia: { name: "Indonesia", center: [106.8456, -6.2088], gl: "ID", hl: "id", ceid: "ID:id" },

  malasia: { name: "Malaysia", center: [101.6869, 3.139], gl: "MY", hl: "en-MY", ceid: "MY:en" },
  malaysia: { name: "Malaysia", center: [101.6869, 3.139], gl: "MY", hl: "en-MY", ceid: "MY:en" },

  singapur: { name: "Singapore", center: [103.8198, 1.3521], gl: "SG", hl: "en-SG", ceid: "SG:en" },
  singapore: { name: "Singapore", center: [103.8198, 1.3521], gl: "SG", hl: "en-SG", ceid: "SG:en" },

  "corea del sur": { name: "대한민국", center: [126.978, 37.5665], gl: "KR", hl: "ko", ceid: "KR:ko" },
  "south korea": { name: "대한민국", center: [126.978, 37.5665], gl: "KR", hl: "ko", ceid: "KR:ko" },

  tailandia: { name: "ไทย", center: [100.5018, 13.7563], gl: "TH", hl: "th", ceid: "TH:th" },
  thailand: { name: "ไทย", center: [100.5018, 13.7563], gl: "TH", hl: "th", ceid: "TH:th" },

  vietnam: { name: "Việt Nam", center: [105.8342, 21.0278], gl: "VN", hl: "vi", ceid: "VN:vi" },

  filipinas: { name: "Philippines", center: [120.9842, 14.5995], gl: "PH", hl: "en-PH", ceid: "PH:en" },
  philippines: { name: "Philippines", center: [120.9842, 14.5995], gl: "PH", hl: "en-PH", ceid: "PH:en" },

  "nueva zelanda": { name: "New Zealand", center: [174.7762, -41.2866], gl: "NZ", hl: "en-NZ", ceid: "NZ:en" },
  "new zealand": { name: "New Zealand", center: [174.7762, -41.2866], gl: "NZ", hl: "en-NZ", ceid: "NZ:en" },

  "mexico city": { name: "México", center: [-99.1332, 19.4326], gl: "MX", hl: "es-419", ceid: "MX:es-419" },

  cuba: { name: "Cuba", center: [-82.3666, 23.1136], gl: "CU", hl: "es-419", ceid: "CU:es-419" },
  venezuela: { name: "Venezuela", center: [-66.9036, 10.4806], gl: "VE", hl: "es-419", ceid: "VE:es-419" },
  colombia: { name: "Colombia", center: [-74.0721, 4.711], gl: "CO", hl: "es-419", ceid: "CO:es-419" },

  serbia: { name: "Serbia", center: [20.4612, 44.8125], gl: "RS", hl: "sr", ceid: "RS:sr" },
  croacia: { name: "Hrvatska", center: [15.9819, 45.8150], gl: "HR", hl: "hr", ceid: "HR:hr" },
  croatia: { name: "Hrvatska", center: [15.9819, 45.8150], gl: "HR", hl: "hr", ceid: "HR:hr" },
  eslovenia: { name: "Slovenija", center: [14.5058, 46.0511], gl: "SI", hl: "sl", ceid: "SI:sl" },
  albania: { name: "Shqipëri", center: [19.8187, 41.3317], gl: "AL", hl: "sq", ceid: "AL:sq" },
  bielorusia: { name: "Belarus", center: [27.5615, 53.9006], gl: "BY", hl: "be", ceid: "BY:be" },
  belarus: { name: "Belarus", center: [27.5615, 53.9006], gl: "BY", hl: "be", ceid: "BY:be" },
  moldavia: { name: "Moldova", center: [28.8638, 47.0105], gl: "MD", hl: "ro", ceid: "MD:ro" },
  moldova: { name: "Moldova", center: [28.8638, 47.0105], gl: "MD", hl: "ro", ceid: "MD:ro" },

  "corea del norte": { name: "North Korea", center: [125.7625, 39.0392], gl: "KP", hl: "ko", ceid: "KP:ko" },
  "north korea": { name: "North Korea", center: [125.7625, 39.0392], gl: "KP", hl: "ko", ceid: "KP:ko" },
  "corea del sur": { name: "South Korea", center: [126.978, 37.5665], gl: "KR", hl: "ko", ceid: "KR:ko" },
  "south korea": { name: "South Korea", center: [126.978, 37.5665], gl: "KR", hl: "ko", ceid: "KR:ko" },
  taiwan: { name: "Taiwan", center: [121.5654, 25.0330], gl: "TW", hl: "zh-TW", ceid: "TW:zh-Hant" },
  myanmar: { name: "Myanmar", center: [96.1951, 19.7633], gl: "MM", hl: "my", ceid: "MM:my" },
  filipinas: { name: "Philippines", center: [120.9842, 14.5995], gl: "PH", hl: "en-PH", ceid: "PH:en" },
  philippines: { name: "Philippines", center: [120.9842, 14.5995], gl: "PH", hl: "en-PH", ceid: "PH:en" },
  "nueva zelanda": { name: "New Zealand", center: [174.7762, -41.2866], gl: "NZ", hl: "en-NZ", ceid: "NZ:en" },
  "new zealand": { name: "New Zealand", center: [174.7762, -41.2866], gl: "NZ", hl: "en-NZ", ceid: "NZ:en" },

  jordania: { name: "Jordania", center: [35.9239, 31.9539], gl: "JO", hl: "ar", ceid: "JO:ar" },
  jordan: { name: "Jordania", center: [35.9239, 31.9539], gl: "JO", hl: "ar", ceid: "JO:ar" },
  libano: { name: "Liban", center: [35.4960, 33.8886], gl: "LB", hl: "ar", ceid: "LB:ar" },
  lebanon: { name: "Liban", center: [35.4960, 33.8886], gl: "LB", hl: "ar", ceid: "LB:ar" },
  siria: { name: "Syria", center: [36.2765, 33.5102], gl: "SY", hl: "ar", ceid: "SY:ar" },
  syria: { name: "Syria", center: [36.2765, 33.5102], gl: "SY", hl: "ar", ceid: "SY:ar" },
  irak: { name: "Iraq", center: [44.3661, 33.3152], gl: "IQ", hl: "ar", ceid: "IQ:ar" },
  iraq: { name: "Iraq", center: [44.3661, 33.3152], gl: "IQ", hl: "ar", ceid: "IQ:ar" },
  afganistan: { name: "Afghanistan", center: [69.2075, 34.5553], gl: "AF", hl: "ps", ceid: "AF:ps" },
  afghanistan: { name: "Afghanistan", center: [69.2075, 34.5553], gl: "AF", hl: "ps", ceid: "AF:ps" },

  etiopia: { name: "Ethiopia", center: [38.7578, 9.0054], gl: "ET", hl: "am", ceid: "ET:am" },
  ethiopia: { name: "Ethiopia", center: [38.7578, 9.0054], gl: "ET", hl: "am", ceid: "ET:am" },
  kenia: { name: "Kenya", center: [36.8219, -1.2921], gl: "KE", hl: "en-KE", ceid: "KE:en" },
  kenya: { name: "Kenya", center: [36.8219, -1.2921], gl: "KE", hl: "en-KE", ceid: "KE:en" },
  ghana: { name: "Ghana", center: [-0.1969, 5.5600], gl: "GH", hl: "en-GH", ceid: "GH:en" },
  tanzania: { name: "Tanzania", center: [39.2083, -6.3690], gl: "TZ", hl: "sw", ceid: "TZ:sw" },
  mozambique: { name: "Mozambique", center: [35.5296, -17.2683], gl: "MZ", hl: "pt", ceid: "MZ:pt" },
  angola: { name: "Angola", center: [13.2344, -8.8368], gl: "AO", hl: "pt", ceid: "AO:pt" },
  libia: { name: "Libya", center: [13.1913, 32.8872], gl: "LY", hl: "ar", ceid: "LY:ar" },
  libya: { name: "Libya", center: [13.1913, 32.8872], gl: "LY", hl: "ar", ceid: "LY:ar" },

  // ── Bálticos ──
  lituania: { name: "Lietuva", center: [25.2798, 54.6872], gl: "LT", hl: "lt", ceid: "LT:lt" },
  lithuania: { name: "Lietuva", center: [25.2798, 54.6872], gl: "LT", hl: "lt", ceid: "LT:lt" },
  letonia: { name: "Latvija", center: [24.1052, 56.9496], gl: "LV", hl: "lv", ceid: "LV:lv" },
  latvia: { name: "Latvija", center: [24.1052, 56.9496], gl: "LV", hl: "lv", ceid: "LV:lv" },
  estonia: { name: "Eesti", center: [24.7536, 59.4370], gl: "EE", hl: "et", ceid: "EE:et" },

  // ── Más Europa ──
  "macedonia del norte": { name: "Macedònia del Nord", center: [21.7453, 41.9981], gl: "MK", hl: "mk", ceid: "MK:mk" },
  "north macedonia": { name: "Macedònia del Nord", center: [21.7453, 41.9981], gl: "MK", hl: "mk", ceid: "MK:mk" },
  bosnia: { name: "Bosnia i Hercegovina", center: [18.4131, 43.8563], gl: "BA", hl: "bs", ceid: "BA:bs" },
  "bosnia herzegovina": { name: "Bosnia i Hercegovina", center: [18.4131, 43.8563], gl: "BA", hl: "bs", ceid: "BA:bs" },
  montenegro: { name: "Crna Gora", center: [19.2595, 42.7087], gl: "ME", hl: "sr", ceid: "ME:sr" },
  portugal: { name: "Portugal", center: [-9.1393, 38.7223], gl: "PT", hl: "pt-PT", ceid: "PT:pt-150" },

  // ── Centroamérica ──
  guatemala: { name: "Guatemala", center: [-90.5328, 14.6407], gl: "GT", hl: "es-419", ceid: "GT:es-419" },
  "costa rica": { name: "Costa Rica", center: [-84.0907, 9.9281], gl: "CR", hl: "es-419", ceid: "CR:es-419" },
  panama: { name: "Panamá", center: [-79.5197, 8.9936], gl: "PA", hl: "es-419", ceid: "PA:es-419" },
  panamá: { name: "Panamá", center: [-79.5197, 8.9936], gl: "PA", hl: "es-419", ceid: "PA:es-419" },
  honduras: { name: "Honduras", center: [-87.2068, 14.0818], gl: "HN", hl: "es-419", ceid: "HN:es-419" },
  "el salvador": { name: "El Salvador", center: [-89.1872, 13.6929], gl: "SV", hl: "es-419", ceid: "SV:es-419" },
  nicaragua: { name: "Nicaragua", center: [-86.2819, 12.1328], gl: "NI", hl: "es-419", ceid: "NI:es-419" },
  ecuador: { name: "Ecuador", center: [-78.4678, -0.1807], gl: "EC", hl: "es-419", ceid: "EC:es-419" },
  bolivia: { name: "Bolivia", center: [-68.1193, -16.5000], gl: "BO", hl: "es-419", ceid: "BO:es-419" },
  uruguay: { name: "Uruguay", center: [-56.1882, -34.9011], gl: "UY", hl: "es-419", ceid: "UY:es-419" },
  paraguay: { name: "Paraguay", center: [-57.6359, -25.2867], gl: "PY", hl: "es-419", ceid: "PY:es-419" },

  // ── Asia Central / Cáucaso ──
  kazajistan: { name: "Қазақстан", center: [71.4460, 51.1801], gl: "KZ", hl: "ru", ceid: "KZ:ru" },
  kazakhstan: { name: "Қазақстан", center: [71.4460, 51.1801], gl: "KZ", hl: "ru", ceid: "KZ:ru" },
  uzbekistan: { name: "Oʻzbekiston", center: [69.2401, 41.2995], gl: "UZ", hl: "uz", ceid: "UZ:uz" },
  azerbaiyan: { name: "Azərbaycan", center: [49.8671, 40.4093], gl: "AZ", hl: "az", ceid: "AZ:az" },
  azerbaijan: { name: "Azərbaycan", center: [49.8671, 40.4093], gl: "AZ", hl: "az", ceid: "AZ:az" },
  georgia: { name: "საქართველო", center: [44.8271, 41.6941], gl: "GE", hl: "ka", ceid: "GE:ka" },
  armenia: { name: "Հայաստան", center: [44.5010, 40.1872], gl: "AM", hl: "hy", ceid: "AM:hy" },
  mongolia: { name: "Монгол Улс", center: [106.9057, 47.8864], gl: "MN", hl: "mn", ceid: "MN:mn" },

  // ── Más Oriente Medio ──
  kuwait: { name: "الكويت", center: [47.9774, 29.3759], gl: "KW", hl: "ar", ceid: "KW:ar" },
  bahrain: { name: "البحرين", center: [50.5860, 26.1542], gl: "BH", hl: "ar", ceid: "BH:ar" },
  bahrein: { name: "البحرين", center: [50.5860, 26.1542], gl: "BH", hl: "ar", ceid: "BH:ar" },
  yemen: { name: "اليمن", center: [44.1910, 15.5527], gl: "YE", hl: "ar", ceid: "YE:ar" },
  oman: { name: "عُمان", center: [58.5922, 23.5880], gl: "OM", hl: "ar", ceid: "OM:ar" },
  omán: { name: "عُمان", center: [58.5922, 23.5880], gl: "OM", hl: "ar", ceid: "OM:ar" },

  // ── Más Asia Meridional / SE Asia ──
  bangladesh: { name: "বাংলাদেশ", center: [90.4125, 23.8103], gl: "BD", hl: "bn", ceid: "BD:bn" },
  nepal: { name: "नेपाल", center: [85.3240, 27.7172], gl: "NP", hl: "ne", ceid: "NP:ne" },
  "sri lanka": { name: "ශ්‍රී ලංකාව", center: [80.6337, 7.8731], gl: "LK", hl: "si", ceid: "LK:si" },
  filipinas: { name: "Philippines", center: [120.9842, 14.5995], gl: "PH", hl: "en-PH", ceid: "PH:en" },
  philippines: { name: "Philippines", center: [120.9842, 14.5995], gl: "PH", hl: "en-PH", ceid: "PH:en" },
  camboya: { name: "Cambodia", center: [104.9160, 11.5564], gl: "KH", hl: "km", ceid: "KH:km" },
  cambodia: { name: "Cambodia", center: [104.9160, 11.5564], gl: "KH", hl: "km", ceid: "KH:km" },
  laos: { name: "ລາວ", center: [102.4955, 17.9757], gl: "LA", hl: "lo", ceid: "LA:lo" },

  // ── Más África ──
  senegal: { name: "Sénégal", center: [-14.4524, 14.4974], gl: "SN", hl: "fr", ceid: "SN:fr" },
  ghana: { name: "Ghana", center: [-0.1969, 5.5600], gl: "GH", hl: "en-GH", ceid: "GH:en" },
  camerun: { name: "Cameroun", center: [11.5021, 3.8480], gl: "CM", hl: "fr", ceid: "CM:fr" },
  cameroon: { name: "Cameroun", center: [11.5021, 3.8480], gl: "CM", hl: "fr", ceid: "CM:fr" },
  mali: { name: "Mali", center: [-8.0029, 12.6392], gl: "ML", hl: "fr", ceid: "ML:fr" },
  niger: { name: "Niger", center: [2.1098, 13.5137], gl: "NE", hl: "fr", ceid: "NE:fr" },
  burkina: { name: "Burkina Faso", center: [-1.5616, 12.3641], gl: "BF", hl: "fr", ceid: "BF:fr" },
  sudan: { name: "السودان", center: [32.5599, 15.5007], gl: "SD", hl: "ar", ceid: "SD:ar" },
  somalia: { name: "Soomaaliya", center: [45.3418, 2.0469], gl: "SO", hl: "so", ceid: "SO:so" },
  angola: { name: "Angola", center: [13.2344, -8.8368], gl: "AO", hl: "pt", ceid: "AO:pt" },
  mozambique: { name: "Moçambique", center: [35.5296, -17.2683], gl: "MZ", hl: "pt", ceid: "MZ:pt" },
  tanzania: { name: "Tanzania", center: [39.2083, -6.3690], gl: "TZ", hl: "sw", ceid: "TZ:sw" },
  rwanda: { name: "Rwanda", center: [30.0587, -1.9441], gl: "RW", hl: "fr", ceid: "RW:fr" },
  congo: { name: "Congo RDC", center: [24.6860, -4.3217], gl: "CD", hl: "fr", ceid: "CD:fr" },
  "republica democratica del congo": { name: "Congo RDC", center: [24.6860, -4.3217], gl: "CD", hl: "fr", ceid: "CD:fr" }
};

/* =========================
   ESTADO GLOBAL
========================= */

/* =========================
   ESTADO GLOBAL
========================= */
// ── D3 Globe state ──────────────────────────────
let _globeRotation  = [10, -20, 0];   // [λ, φ, γ]
let _globeMarkers   = [];
let _globeWorldData = null;
let _globeSpinning  = true;
let _globeRenderRAF = null;
let _globeDragging  = false;
let _globeDragStart = null;
let _globeDragRot   = null;

// Caché local de datos de mercado (se rellena desde /markets)
let _marketData = [
  { label: "IBEX",   value: "—", change: "—" },
  { label: "S&P",    value: "—", change: "—" },
  { label: "NASDAQ", value: "—", change: "—" },
  { label: "BRENT",  value: "—", change: "—" },
  { label: "ORO",    value: "—", change: "—" },
  { label: "BTC",    value: "—", change: "—" },
  { label: "EUR/USD",value: "—", change: "—" }
];

async function fetchMarkets() {
  try {
    const res = await fetch(`${WORKER_URL}/markets`);
    if (!res.ok) return;
    const data = await res.json();
    if (data.ok && Array.isArray(data.markets)) {
      _marketData = data.markets;
      renderMarketBoard();
    }
  } catch (e) {
    console.warn("[markets] fetch error:", e);
  }
}

const tensionKeywords = [
  // Conflicto armado
  "guerra", "war", "conflict", "conflicto", "ataque", "attack",
  "bombardeo", "bombing", "airstrike", "misil", "missile", "drone", "dron",
  "explosion", "explosión", "detonation", "detonacion",
  "invasion", "invasión", "offensive", "ofensiva", "assault",
  "casualty", "casualties", "muertos", "heridos", "bajas",
  "soldier", "soldado", "troops", "tropas",
  // Diplomacia de tensión
  "sancion", "sanción", "sanciones", "sanctions", "embargo",
  "escalada", "escalation", "ruptura", "breakdown",
  "ultimatum", "ultimátum", "veto", "standoff", "confrontacion",
  "expulsion", "expulsión", "ruptura diplomática",
  // Seguridad y amenazas
  "terrorismo", "terrorism", "terrorist", "terrorista",
  "cyberattack", "ciberataque", "hack", "breach", "malware",
  "espionaje", "espionage", "spy", "espía", "sabotage", "sabotaje",
  "threat", "amenaza", "riesgo", "risk", "alert", "alerta", "emergency",
  // Militar
  "military", "militar", "nato", "otan", "ejercito", "ejército",
  "navy", "armada", "fuerza aerea", "air force",
  "nuclear", "armas", "weapons", "arsenal", "arms race",
  "despliegue", "deploy", "movilización", "mobilization",
  // Inestabilidad política
  "bloqueo", "blockade", "frontera", "border", "incidente", "incident",
  "provocacion", "provocation", "represalia", "retaliation",
  "coup", "golpe", "golpe de estado", "revolt", "revuelta",
  "protest", "protesta", "unrest", "disturbio", "riot",
  "secession", "secesion", "independencia forzada"
];

const negativeKeywords = [
  // Conflicto armado
  "guerra", "war", "conflict", "conflicto", "ataque", "attack", "bombardeo",
  "invasion", "invasión", "casualty", "casualties", "muertos", "killed", "dead",
  "herido", "wounded", "injured", "víctima", "victima", "victim",
  "masacre", "massacre", "ejecución", "execution", "golpe", "coup",
  "ofensiva", "offensive", "asalto", "assault", "emboscada", "ambush",
  "guerrilla", "insurgency", "insurgencia", "milicia", "militia",
  // Economía negativa
  "crisis", "crash", "colapso", "collapse", "caída", "caida", "desplome",
  "recesion", "recesión", "recession", "inflacion", "inflación", "inflation",
  "quiebra", "bankruptcy", "default", "impago", "deuda impagable",
  "desempleo", "unemployment", "despidos", "layoffs", "cierre masivo",
  "contraccion", "contracción", "contraction", "estanflacion", "stagflation",
  "escasez", "shortage", "desabastecimiento", "desvalorización",
  // Seguridad y represión
  "sancion", "sanción", "amenaza", "bloqueo", "ciberataque", "cyberattack",
  "terrorismo", "terrorism", "violencia", "violence", "represion", "represión",
  "tension", "tensión", "escalada", "escalation", "secuestro", "kidnapping",
  "arresto", "arrest", "detencion", "detención", "prisionero", "prisoner",
  "tortura", "torture", "censura", "censorship", "purga", "purge",
  "represalia", "retaliation", "embargo", "aislamiento", "isolation",
  // Desastres naturales y humanitarios
  "accidente", "accident", "incendio", "fire", "inundacion", "flood",
  "terremoto", "earthquake", "huracán", "huracan", "tornado", "tifón",
  "epidemia", "epidemic", "pandemia", "pandemic", "brote", "outbreak",
  "hambruna", "famine", "desplazados", "displaced", "refugiados", "refugees",
  "contaminación", "contamination", "vertido", "spill", "catástrofe",
  // Escándalos e inestabilidad
  "escándalo", "scandal", "corrupcion", "corruption", "fraude", "fraud",
  "manipulación", "manipulacion", "desinformacion", "disinformation",
  "protesta violenta", "riot", "disturbio", "unrest", "revuelta", "revolt",
  "implosión", "implosion", "fractura", "rift", "ruptura", "breakdown"
];

const positiveKeywords = [
  // ── Diplomacia y paz (frases específicas) ──────────────────────────────
  "acuerdo de paz", "peace agreement", "peace deal", "peace talks",
  "alto el fuego", "ceasefire", "alto al fuego", "tregua firmada",
  "tratado firmado", "treaty signed", "acuerdo firmado", "deal signed",
  "fin de la guerra", "end of war", "fin del conflicto", "end of conflict",
  "cese de hostilidades", "hostilities ended",
  "diálogo de paz", "peace dialogue", "negociaciones de paz",
  "normalización diplomática", "diplomatic normalization",
  "reunificación", "reconciliación", "reconciliation",
  "liberación de rehenes", "hostages freed", "presos liberados",
  "retirada de tropas", "troops withdrawal", "desmilitarización",
  "acuerdo histórico", "historic agreement", "historic deal",
  // ── Economía positiva (frases, no palabras sueltas) ────────────────────
  "crecimiento económico", "economic growth", "economic expansion",
  "máximo histórico", "all-time high", "record de empleo",
  "inversión extranjera", "foreign investment", "atrae inversión",
  "pleno empleo", "full employment", "creación de empleo", "job creation",
  "superávit presupuestario", "budget surplus",
  "rebote económico", "economic rebound", "recuperación económica",
  "acuerdo comercial", "trade agreement", "trade deal",
  "libre comercio", "free trade", "exportaciones récord",
  "prosperidad", "prosperity", "auge económico",
  // ── Estabilidad y desescalada ──────────────────────────────────────────
  "desescalada", "de-escalation", "tensión reducida", "tension reduced",
  "estabilidad política", "political stability",
  "elecciones libres", "free elections", "democracia restaurada",
  "reformas aprobadas", "reforms approved",
  // ── Humanitario y científico (frases) ─────────────────────────────────
  "ayuda humanitaria", "humanitarian aid", "corredor humanitario",
  "vacuna aprobada", "vaccine approved", "cura encontrada",
  "avance médico", "medical breakthrough", "avance científico",
  "rescate exitoso", "successful rescue",
  "solidaridad internacional", "international solidarity",
  "derechos garantizados", "rights guaranteed",
  "libertad de prensa", "press freedom"
];

/* =========================
   D3 GLOBE — NÚCLEO
========================= */
function initGlobe() {
  const canvas = document.getElementById("globe-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  // ── Cached geometry (computed once when world data arrives) ────────────────
  let _land      = null;   // topojson land feature
  let _borders   = null;   // topojson country mesh
  let _graticule = null;   // d3 graticule path

  // ── Cached projection (reused every frame, only .rotate() changes) ─────────
  let _proj      = null;
  let _path      = null;

  // ── Cached gradients (rebuilt only on resize) ──────────────────────────────
  let _oceanGrad = null;
  let _glowGrad  = null;

  // ── Stars (fixed positions, reused) ────────────────────────────────────────
  const STAR_COUNT = 130;
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x:  Math.random(),
    y:  Math.random(),
    r:  Math.random() * 1.2 + 0.3,
    o:  Math.random() * 0.50 + 0.12,
    tw: Math.random() * Math.PI * 2
  }));

  // ── Dirty flag — only redraw when state changes ────────────────────────────
  let _dirty     = true;
  let _lastRot0  = null;   // track rotation changes

  // ── Frame timing — cap at ~30 fps ─────────────────────────────────────────
  const FPS_CAP  = 30;
  const FRAME_MS = 1000 / FPS_CAP;
  let   _lastTs  = 0;

  // ── Single unified RAF handle ──────────────────────────────────────────────
  let _raf       = null;

  // ── Drag buffering (apply in RAF, not in mousemove) ────────────────────────
  let _pendingDrag = null;

  // ──────────────────────────────────────────────────────────────────────────
  // RESIZE — rebuild projection + gradients
  // ──────────────────────────────────────────────────────────────────────────
  let _resizeTimer = null;
  function resize() {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(_doResize, 60);
  }
  function _doResize() {
    const wrap = canvas.parentElement;
    const w    = wrap ? wrap.offsetWidth : 800;
    const h    = Math.max(w * 0.55, 320);
    canvas.width  = w;
    canvas.height = h;
    _rebuildProjection();
    _rebuildGradients();
    _dirty = true;
  }

  function _rebuildProjection() {
    const w = canvas.width  || 800;
    const h = canvas.height || 480;
    const scale = Math.min(w, h) * 0.46;
    _proj = d3.geoOrthographic()
      .scale(scale)
      .translate([w / 2, h / 2])
      .clipAngle(90)
      .rotate(_globeRotation);
    _path = d3.geoPath(_proj, ctx);
  }

  function _rebuildGradients() {
    if (!_proj) return;
    const w  = canvas.width;
    const h  = canvas.height;
    const r  = _proj.scale();
    const cx = w / 2, cy = h / 2;

    _glowGrad  = ctx.createRadialGradient(cx, cy, r * 0.88, cx, cy, r * 1.28);
    _glowGrad.addColorStop(0,   "rgba(59,120,246,0.25)");
    _glowGrad.addColorStop(0.5, "rgba(30,70,180,0.10)");
    _glowGrad.addColorStop(1,   "rgba(5,12,40,0)");

    _oceanGrad = ctx.createRadialGradient(cx - r * 0.28, cy - r * 0.28, 0, cx, cy, r);
    _oceanGrad.addColorStop(0,   "#1a3d72");
    _oceanGrad.addColorStop(0.5, "#0c1d46");
    _oceanGrad.addColorStop(1,   "#06101e");
  }

  // ──────────────────────────────────────────────────────────────────────────
  // WORLD DATA — cache features once
  // ──────────────────────────────────────────────────────────────────────────
  function _cacheWorldData(world) {
    _globeWorldData = world;
    _land      = topojson.feature(world, world.objects.land);
    _borders   = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
    _graticule = d3.geoGraticule()();
    _dirty     = true;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // DRAW
  // ──────────────────────────────────────────────────────────────────────────
  function _draw(ts) {
    if (!_proj) return;

    // Apply buffered drag
    if (_pendingDrag) {
      const { dx, dy } = _pendingDrag;
      _pendingDrag = null;
      _globeRotation[0] = _globeDragRot[0] + dx * 0.32;
      _globeRotation[1] = Math.max(-85, Math.min(85, _globeDragRot[1] - dy * 0.32));
      _dirty = true;
    }

    // Spin step
    if (_globeSpinning) {
      _globeRotation[0] = (_globeRotation[0] + 0.10) % 360;
      _dirty = true;
    }

    if (!_dirty) return;
    _dirty = false;

    // Update projection rotation (no object recreation)
    _proj.rotate(_globeRotation);

    const w  = canvas.width;
    const h  = canvas.height;
    const r  = _proj.scale();
    const cx = w / 2, cy = h / 2;
    const sphere = { type: "Sphere" };

    ctx.clearRect(0, 0, w, h);

    // Stars (batched by similar opacity to reduce state changes)
    for (let i = 0; i < stars.length; i++) {
      const s  = stars[i];
      const op = s.o * (0.65 + 0.35 * Math.sin(ts * 0.0007 + s.tw));
      ctx.beginPath();
      ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210,225,255,${op.toFixed(2)})`;
      ctx.fill();
    }

    // Atmosphere glow
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.28, 0, Math.PI * 2);
    ctx.fillStyle = _glowGrad;
    ctx.fill();

    // Ocean
    ctx.beginPath();
    _path(sphere);
    ctx.fillStyle = _oceanGrad;
    ctx.fill();

    // Land + borders (pre-cached features)
    if (_land) {
      ctx.beginPath();
      _path(_land);
      ctx.fillStyle = "#1e3e60";
      ctx.fill();

      ctx.beginPath();
      _path(_land);
      ctx.strokeStyle = "rgba(50,120,200,0.20)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }

    if (_borders) {
      ctx.beginPath();
      _path(_borders);
      ctx.strokeStyle = "rgba(80,160,255,0.26)";
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }

    // Graticule
    if (_graticule) {
      ctx.beginPath();
      _path(_graticule);
      ctx.strokeStyle = "rgba(59,130,246,0.07)";
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }

    // Globe outline
    ctx.beginPath();
    _path(sphere);
    ctx.strokeStyle = "rgba(100,168,255,0.38)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Markers
    const RAD = Math.PI / 180;
    for (let i = 0; i < _globeMarkers.length; i++) {
      const m = _globeMarkers[i];
      const coords = _proj([m.lon, m.lat]);
      if (!coords) continue;
      const [px, py] = coords;

      // Visibility check
      const dLon = (m.lon - (-_globeRotation[0])) * RAD;
      const dLat = (m.lat - (-_globeRotation[1])) * RAD;
      if (Math.cos(dLat) * Math.cos(dLon) < 0.08) continue;

      const size = m.count >= 10 ? 10 : m.count >= 5 ? 8 : 6;

      // Glow halo
      const mg = ctx.createRadialGradient(px, py, 0, px, py, size * 2.6);
      mg.addColorStop(0, "rgba(59,130,246,0.50)");
      mg.addColorStop(1, "rgba(59,130,246,0)");
      ctx.beginPath();
      ctx.arc(px, py, size * 2.6, 0, Math.PI * 2);
      ctx.fillStyle = mg;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(59,130,246,0.92)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.90)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // MAIN LOOP — single RAF, 30fps cap, pauses when idle
  // ──────────────────────────────────────────────────────────────────────────
  function _loop(ts) {
    const dt = ts - _lastTs;
    if (dt >= FRAME_MS) {
      _lastTs = ts - (dt % FRAME_MS);
      _draw(ts);
    }
    // Keep looping only while spinning, dragging, or dirty
    if (_globeSpinning || _globeDragging || _dirty || _pendingDrag) {
      _raf = requestAnimationFrame(_loop);
    } else {
      _raf = null;
    }
  }

  function _scheduleFrame() {
    if (!_raf) _raf = requestAnimationFrame(_loop);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // DRAG INTERACTION
  // ──────────────────────────────────────────────────────────────────────────
  function _beginDrag(cx, cy) {
    _globeDragging  = true;
    _globeDragStart = [cx, cy];
    _globeDragRot   = [..._globeRotation];
    if (_globeSpinning) stopSpin();
    _scheduleFrame();
  }
  function _moveDrag(cx, cy) {
    if (!_globeDragging || !_globeDragStart) return;
    // Buffer — applied in RAF, not here
    _pendingDrag = {
      dx: cx - _globeDragStart[0],
      dy: cy - _globeDragStart[1]
    };
    _scheduleFrame();
  }
  function _endDrag() { _globeDragging = false; }

  canvas.addEventListener("mousedown",  e => _beginDrag(e.clientX, e.clientY));
  canvas.addEventListener("mousemove",  e => _moveDrag(e.clientX, e.clientY));
  canvas.addEventListener("mouseup",    _endDrag);
  canvas.addEventListener("mouseleave", _endDrag);
  canvas.addEventListener("touchstart", e => {
    if (e.touches.length === 1) _beginDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  canvas.addEventListener("touchmove",  e => {
    if (e.touches.length === 1) _moveDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  canvas.addEventListener("touchend",   _endDrag);

  // ──────────────────────────────────────────────────────────────────────────
  // CLICK — marker popup or reverse geocode
  // ──────────────────────────────────────────────────────────────────────────
  let _wasDragging = false;
  canvas.addEventListener("mousedown",  () => { _wasDragging = false; });
  canvas.addEventListener("mousemove",  e => {
    if (_globeDragging) _wasDragging = true;
  });

  canvas.addEventListener("click", async e => {
    if (_wasDragging || !_proj) return;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width  / rect.width);
    const my = (e.clientY - rect.top)  * (canvas.height / rect.height);

    // Marker hit-test
    for (const m of _globeMarkers) {
      const coords = _proj([m.lon, m.lat]);
      if (!coords) continue;
      if (Math.hypot(mx - coords[0], my - coords[1]) < 16) {
        _showGlobePopup(m, e.clientX, e.clientY);
        return;
      }
    }

    // Reverse geocode
    const inv = _proj.invert([mx, my]);
    if (!inv) return;
    const [lon, lat] = inv;
    setStatus("Detectando zona del clic...");
    try {
      const resp = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=3&accept-language=es`,
        { cache: "no-store" }
      );
      const data = await resp.json();
      const country = data?.address?.country || data?.name || "";
      if (country) {
        if (countryInput) countryInput.value = country;
        setStatus(`Zona detectada: ${country}.`);
      } else {
        setStatus("No pude identificar ese país.");
      }
    } catch {
      setStatus("No pude resolver la zona del clic.");
    }
  });

  // Expose _scheduleFrame so startSpin/stopSpin can wake the loop
  window._globeScheduleFrame = _scheduleFrame;
  window._globeRebuildProjection = _rebuildProjection;

  // ──────────────────────────────────────────────────────────────────────────
  // INIT — start immediately with ocean, add land when fetch completes
  // ──────────────────────────────────────────────────────────────────────────
  _doResize();   // sets canvas size + builds projection + gradients
  _scheduleFrame();  // start rendering ocean sphere right away

  new ResizeObserver(resize).observe(canvas.parentElement || canvas);
  window.addEventListener("resize", resize);

  // Fetch world data — globe already spinning while this loads
  fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
    .then(r => r.json())
    .then(_cacheWorldData)
    .catch(() => { /* ocean-only mode */ });
}



function _showGlobePopup(marker, clientX, clientY) {
  document.getElementById("globe-popup")?.remove();
  const html = buildCountryPopup(marker.place, marker.count, marker.topic, marker.items);
  const div  = document.createElement("div");
  div.id = "globe-popup";
  div.className = "globe-popup-wrap";
  div.innerHTML = `<button class="globe-popup-close"
    onclick="document.getElementById('globe-popup')?.remove()">×</button>${html}`;

  const wrap = document.querySelector(".map-wrap");
  if (!wrap) return;
  wrap.appendChild(div);

  const wRect = wrap.getBoundingClientRect();
  let left = clientX - wRect.left + 16;
  let top  = clientY - wRect.top  - 20;
  const pw = 260, ph = 220;
  if (left + pw > wRect.width)  left = clientX - wRect.left - pw - 8;
  if (top  + ph > wRect.height) top  = wRect.height - ph - 10;
  if (top < 4) top = 4;
  div.style.left = left + "px";
  div.style.top  = top  + "px";
}

/* =========================
   HELPERS
========================= */
function setStatus(text) {
  if (statusEl) statusEl.textContent = text;
}

function setBriefStatus(text) {
  if (briefStatusEl) briefStatusEl.textContent = text;
}

function normalizeKey(value = "") {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLocalTime(timeZone) {
  return new Intl.DateTimeFormat("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone
  }).format(new Date());
}

function clampRadarValue(value) {
  return Math.max(0, Math.min(100, Math.round(value || 0)));
}

/* =========================
   DASHBOARD
========================= */
function updateDashboardStatus({ topic = "Sin tema", countries = 0, headlines = 0 } = {}) {
  if (activeTopicEl) activeTopicEl.textContent = topic;
  if (activeCountriesEl) activeCountriesEl.textContent = String(countries);
  if (headlineCountEl) headlineCountEl.textContent = String(headlines);
  if (lastUpdateEl) lastUpdateEl.textContent = getLocalTime("Europe/Madrid");
}

function updateWorldClocks() {
  if (clockMadridEl) clockMadridEl.textContent = getLocalTime("Europe/Madrid");
  if (clockLondonEl) clockLondonEl.textContent = getLocalTime("Europe/London");
  if (clockNewYorkEl) clockNewYorkEl.textContent = getLocalTime("America/New_York");
  if (clockBeijingEl) clockBeijingEl.textContent = getLocalTime("Asia/Shanghai");
  if (clockTokyoEl) clockTokyoEl.textContent = getLocalTime("Asia/Tokyo");
  if (clockMoscowEl) clockMoscowEl.textContent = getLocalTime("Europe/Moscow");
}

function renderMarketBoard() {
  if (!marketBoardEl) return;

  marketBoardEl.innerHTML = _marketData
    .map((item) => {
      const isNegative = item.change.startsWith("-");
      const color = isNegative ? "#ff8e8e" : "#86efac";

      return `
        <div class="hud-metric">
          <span class="hud-label">${escapeHtml(item.label)}</span>
          <span class="hud-value">${escapeHtml(item.value)}</span>
          <span class="hud-change" style="color:${color};font-size:12px;font-weight:700;">
            ${escapeHtml(item.change)}
          </span>
        </div>
      `;
    })
    .join("");
}

function updateGeoTicker(items = []) {
  if (!geoTickerEl) return;

  const cleanItems = items.filter(Boolean).slice(0, 8);

  if (!cleanItems.length) {
    geoTickerEl.innerHTML = `<span class="ticker-item">Sin flujo geopolítico disponible.</span>`;
    return;
  }

  geoTickerEl.innerHTML = cleanItems
    .map((item) => `<span class="ticker-item">${escapeHtml(item)}</span>`)
    .join("");
}

function updateRetroTicker(items = []) {
  if (!retroTickerTrackEl) return;

  const cleanItems = items
    .filter(Boolean)
    .map((item) => String(item).trim())
    .filter(Boolean)
    .slice(0, 12);

  if (!cleanItems.length) {
    retroTickerTrackEl.innerHTML = `
      <span class="retro-ticker-item">SIN NOVEDADES EN FLUJO GLOBAL</span>
      <span class="retro-ticker-item">GEONEWS MONITOR EN ESPERA</span>
    `;
    return;
  }

  const repeatedItems = [...cleanItems, ...cleanItems];

  retroTickerTrackEl.innerHTML = repeatedItems
    .map((item) => `<span class="retro-ticker-item">${escapeHtml(item)}</span>`)
    .join("");
}

/* =========================
   MARCADORES GLOBO
========================= */
function clearMapMarkers() {
  _globeMarkers = [];
  document.getElementById("globe-popup")?.remove();
}

function buildCountryPopup(place, itemCount = 0, topic = "", items = []) {
  const tensionIndex = calculateTensionIndex(items);
  const mediaMood = detectMediaMood(items);
  const defcon = getDefconLikeSignal(tensionIndex);
  const themeCounters = detectThemesFromItems(items);
  const narrativeBias = topThemeFromCounters(themeCounters).toUpperCase();

  return `
    <div class="country-popup">
      <div class="country-popup-head">
        <div class="country-popup-title">${escapeHtml(place.name)}</div>
        <div class="country-popup-badge">${escapeHtml(place.gl || "GLOBAL")}</div>
      </div>

      <div class="country-popup-grid">
        <div class="country-popup-metric">
          <span class="country-popup-label">Titulares</span>
          <span class="country-popup-value">${escapeHtml(String(itemCount))}</span>
        </div>

        <div class="country-popup-metric">
          <span class="country-popup-label">Tensión</span>
          <span class="country-popup-value">${escapeHtml(String(tensionIndex))}/100</span>
        </div>

        <div class="country-popup-metric">
          <span class="country-popup-label">Mood</span>
          <span class="country-popup-value">${escapeHtml(mediaMood)}</span>
        </div>

        <div class="country-popup-metric">
          <span class="country-popup-label">Bias</span>
          <span class="country-popup-value">${escapeHtml(narrativeBias)}</span>
        </div>

        <div class="country-popup-metric">
          <span class="country-popup-label">Defcon-like</span>
          <span class="country-popup-value">${escapeHtml(defcon)}</span>
        </div>

        <div class="country-popup-metric">
          <span class="country-popup-label">Idioma feed</span>
          <span class="country-popup-value">${escapeHtml(place.hl || "--")}</span>
        </div>
      </div>

      <div class="country-popup-topic">
        <strong>Tema activo:</strong> ${escapeHtml(topic || place.name)}
      </div>
    </div>
  `;
}

function addCountryMarker(place, itemCount = 0, topic = "", items = []) {
  if (!place || !place.center) return;
  _globeMarkers.push({
    lon: place.center[0],
    lat: place.center[1],
    count: itemCount,
    place,
    topic,
    items
  });
}

function fitMapToPlaces(places = []) {
  const valid = places.filter(p => p && Array.isArray(p.center));
  if (!valid.length) return;
  const lon = valid.reduce((s, p) => s + p.center[0], 0) / valid.length;
  const lat = valid.reduce((s, p) => s + p.center[1], 0) / valid.length;
  // Animate globe rotation to centre on these places
  _globeFlyTo(lon, lat);
}

function _globeFlyTo(lon, lat) {
  stopSpin();
  const target = [-lon, -lat, 0];
  const start  = [..._globeRotation];
  const t0     = performance.now();
  const dur    = 900;
  function step(now) {
    const t    = Math.min((now - t0) / dur, 1);
    const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    _globeRotation[0] = start[0] + (target[0] - start[0]) * ease;
    _globeRotation[1] = start[1] + (target[1] - start[1]) * ease;
    if (typeof window._globeScheduleFrame === "function") window._globeScheduleFrame();
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* =========================
   RENDER NOTICIAS
========================= */
function renderResults(items = []) {
  resultsEl.innerHTML = "";

  if (!items.length) {
    resultsEl.innerHTML = `<div class="card"><div class="summary">Sin resultados.</div></div>`;
    return;
  }

  for (const item of items) {
    const title = item.title || "Sin título";
    const link = item.link || "#";
    const source = item.source || "Fuente desconocida";
    const pubDate = item.pubDate || "";
    const summary = item.summary || "";

    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h3><a href="${link}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a></h3>
      <div class="meta">${escapeHtml(source)}${pubDate ? " · " + escapeHtml(pubDate) : ""}</div>
      <div class="summary">${escapeHtml(summary)}</div>
    `;

    resultsEl.appendChild(card);
  }
}

/* =========================
   ANÁLISIS TEMÁTICO
========================= */
function detectThemesFromItems(items = []) {
  const text = items
    .map((item) => `${item.title || ""} ${item.summary || ""}`)
    .join(" ")
    .toLowerCase();

  const counters = {
    institucional: 0,
    economico: 0,
    seguridad: 0,
    regulatorio: 0,
    social: 0,
    tecnologico: 0
  };

  const rules = {
    institucional: ["gobierno", "ministerio", "presidente", "parlamento", "estado", "ejecutivo"],
    economico: ["econom", "mercado", "banco", "empresa", "industr", "inflacion", "inflación", "bolsa", "finanza"],
    seguridad: ["ejercito", "ejército", "defensa", "otan", "misil", "seguridad", "guerra", "frontera", "crisis"],
    regulatorio: ["ley", "regul", "norma", "ue", "comision", "comisión", "tribunal", "decreto"],
    social: ["migr", "mujer", "educ", "sanidad", "vivienda", "protesta", "empleo"],
    tecnologico: ["ia", "inteligencia artificial", "chip", "tecnolog", "digital", "datos", "ciber", "software"]
  };

  for (const [theme, words] of Object.entries(rules)) {
    for (const word of words) {
      if (text.includes(word)) counters[theme] += 1;
    }
  }

  return counters;
}

function topThemeFromCounters(counters) {
  const entries = Object.entries(counters).sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || "general";
}

function inferCountryAnalysis(country, items, topic) {
  if (!items || !items.length) {
    return `No se han encontrado suficientes noticias sobre ${topic} en ${country}.`;
  }

  const joined = items
    .map((item) => `${item.title || ""} ${item.summary || ""}`)
    .join(" ")
    .toLowerCase();

  let angle = "cobertura general y diversa";
  let tone = "enfoque informativo";
  let emphasis = "impacto político y social";

  if (joined.includes("gobierno") || joined.includes("ministerio") || joined.includes("presidente")) {
    angle = "cobertura institucional";
  }

  if (
    joined.includes("econom") ||
    joined.includes("mercado") ||
    joined.includes("empresa") ||
    joined.includes("banco") ||
    joined.includes("industr")
  ) {
    emphasis = "impacto económico";
  }

  if (
    joined.includes("ejercito") ||
    joined.includes("ejército") ||
    joined.includes("defensa") ||
    joined.includes("otan") ||
    joined.includes("misil") ||
    joined.includes("seguridad")
  ) {
    emphasis = "seguridad y estrategia";
    tone = "marco estratégico";
  }

  if (
    joined.includes("ley") ||
    joined.includes("regul") ||
    joined.includes("norma") ||
    joined.includes("ue") ||
    joined.includes("comision") ||
    joined.includes("comisión")
  ) {
    angle = "cobertura regulatoria";
  }

  if (
    joined.includes("china") ||
    joined.includes("rusia") ||
    joined.includes("eeuu") ||
    joined.includes("estados unidos") ||
    joined.includes("geopol")
  ) {
    tone = "lectura internacional";
  }

  return `En ${country}, el tema "${topic}" aparece con ${angle}, un ${tone} y énfasis en ${emphasis}.`;
}

function buildStructuredBriefing(topic, groups) {
  const validGroups = groups.filter((group) => group.items && group.items.length > 0);

  if (!validGroups.length) {
    return {
      executiveSummary: `No hay base suficiente para elaborar un briefing sólido sobre "${topic}".`,
      commonPatterns: "La muestra es insuficiente.",
      countryDifferences: "No se aprecian diferencias comparables.",
      geopoliticalReading: "No se puede extraer una lectura geopolítica consistente.",
      risks: "Sin datos suficientes para estimar escenarios."
    };
  }

  const analyses = validGroups.map((group) => {
    const counters = detectThemesFromItems(group.items);
    const dominantTheme = topThemeFromCounters(counters);

    return {
      country: group.country,
      dominantTheme,
      counters,
      itemCount: group.items.length
    };
  });

  const dominantThemes = analyses.map((a) => a.dominantTheme);
  const themeFrequency = {};

  dominantThemes.forEach((theme) => {
    themeFrequency[theme] = (themeFrequency[theme] || 0) + 1;
  });

  const mostCommonTheme =
    Object.entries(themeFrequency).sort((a, b) => b[1] - a[1])[0]?.[0] || "general";

  const executiveSummary = `El briefing sobre "${topic}" indica que la cobertura se concentra principalmente en un marco ${mostCommonTheme}. La muestra combina ${validGroups.length} países con enfoques distintos, aunque aparece una dimensión internacional compartida.`;

  const commonPatterns = `Se observan patrones comunes en la forma de tratar "${topic}": varios países lo conectan con implicaciones políticas, efectos sociales y proyección internacional. El volumen agregado de titulares sugiere que no se trata de una cuestión aislada, sino de un asunto con múltiples capas.`;

  const differencesText = analyses
    .map((a) => `${a.country}: predominio ${a.dominantTheme}`)
    .join("; ");

  const geopoliticalReading = `La comparación sugiere que "${topic}" no se interpreta igual en todos los contextos nacionales. Algunos medios lo presentan desde marcos institucionales o regulatorios, mientras otros lo empujan hacia la seguridad, la economía o la tecnología. Esto apunta a agendas nacionales diferentes y a prioridades geopolíticas distintas según el país.`;

  const risks = `Si la cobertura sigue evolucionando en esta línea, los principales escenarios pasan por una mayor politización del tema, más fricción regulatoria entre bloques y una posible intensificación del enfoque estratégico en los países que lo vinculan con seguridad o competencia internacional.`;

  return {
    executiveSummary,
    commonPatterns,
    countryDifferences: differencesText,
    geopoliticalReading,
    risks
  };
}

/* =========================
   RADAR
========================= */
function getRadarScores(groups = []) {
  const validGroups = groups.filter((group) => group.items && group.items.length > 0);
  const allItems = validGroups.flatMap((group) => group.items || []);

  if (!allItems.length) {
    return {
      tension: 0,
      economy: 0,
      social: 0,
      security: 0,
      coverage: 0
    };
  }

  const allThemeCounters = validGroups.reduce(
    (acc, group) => {
      const counters = detectThemesFromItems(group.items || []);
      acc.institucional += counters.institucional || 0;
      acc.economico += counters.economico || 0;
      acc.seguridad += counters.seguridad || 0;
      acc.regulatorio += counters.regulatorio || 0;
      acc.social += counters.social || 0;
      acc.tecnologico += counters.tecnologico || 0;
      return acc;
    },
    {
      institucional: 0,
      economico: 0,
      seguridad: 0,
      regulatorio: 0,
      social: 0,
      tecnologico: 0
    }
  );

  const totalCoverageBase = validGroups.reduce((acc, group) => acc + (group.items?.length || 0), 0);

  const tension = calculateTensionIndex(allItems);
  const economy = clampRadarValue((allThemeCounters.economico * 10) + (allThemeCounters.regulatorio * 4));
  const social = clampRadarValue(allThemeCounters.social * 12);
  const security = clampRadarValue(allThemeCounters.seguridad * 12);
  const coverage = clampRadarValue(totalCoverageBase * 6);

  return { tension, economy, social, security, coverage };
}

function getSingleCountryRadarScores(items = []) {
  if (!items.length) {
    return {
      tension: 0,
      economy: 0,
      social: 0,
      security: 0,
      coverage: 0
    };
  }

  const counters = detectThemesFromItems(items);

  return {
    tension: calculateTensionIndex(items),
    economy: clampRadarValue((counters.economico * 14) + (counters.regulatorio * 6)),
    social: clampRadarValue(counters.social * 18),
    security: clampRadarValue(counters.seguridad * 18),
    coverage: clampRadarValue(items.length * 10)
  };
}

function polarToCartesian(cx, cy, radius, angleDeg) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad)
  };
}

function buildRadarSVG(scores, options = {}) {
  const size = options.size || 220;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = options.maxR || Math.round(size * 0.345);
  const labelOffset = options.labelOffset || 22;
  const labelSize = options.labelSize || 11;
  const dotRadius = options.dotRadius || 3.5;

  const axes = [
    { key: "tension", label: "Tensión", angle: 0 },
    { key: "economy", label: "Economía", angle: 72 },
    { key: "social", label: "Social", angle: 144 },
    { key: "security", label: "Seguridad", angle: 216 },
    { key: "coverage", label: "Cobertura", angle: 288 }
  ];

  const rings = [20, 40, 60, 80, 100];

  const ringPolygons = rings
    .map((value) => {
      const radius = (value / 100) * maxR;
      const points = axes
        .map((axis) => {
          const p = polarToCartesian(cx, cy, radius, axis.angle);
          return `${p.x},${p.y}`;
        })
        .join(" ");
      return `<polygon points="${points}" fill="none" stroke="rgba(143,192,255,0.16)" stroke-width="1" />`;
    })
    .join("");

  const axisLines = axes
    .map((axis) => {
      const p = polarToCartesian(cx, cy, maxR, axis.angle);
      return `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(143,192,255,0.20)" stroke-width="1" />`;
    })
    .join("");

  const labels = axes
    .map((axis) => {
      const p = polarToCartesian(cx, cy, maxR + labelOffset, axis.angle);
      return `<text x="${p.x}" y="${p.y}" fill="rgba(219,232,255,0.92)" font-size="${labelSize}" text-anchor="middle" dominant-baseline="middle">${axis.label}</text>`;
    })
    .join("");

  const scorePoints = axes
    .map((axis) => {
      const value = clampRadarValue(scores[axis.key]);
      const radius = (value / 100) * maxR;
      const p = polarToCartesian(cx, cy, radius, axis.angle);
      return `${p.x},${p.y}`;
    })
    .join(" ");

  const scoreDots = axes
    .map((axis) => {
      const value = clampRadarValue(scores[axis.key]);
      const radius = (value / 100) * maxR;
      const p = polarToCartesian(cx, cy, radius, axis.angle);
      return `<circle cx="${p.x}" cy="${p.y}" r="${dotRadius}" fill="rgba(255,59,59,0.95)" stroke="rgba(255,255,255,0.8)" stroke-width="1" />`;
    })
    .join("");

  return `
    <svg class="radar-svg" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" aria-label="Signal Radar">
      <circle cx="${cx}" cy="${cy}" r="${maxR + 8}" fill="rgba(255,255,255,0.015)" stroke="rgba(143,192,255,0.08)" stroke-width="1" />
      ${ringPolygons}
      ${axisLines}
      <polygon points="${scorePoints}" fill="rgba(255,59,59,0.18)" stroke="rgba(255,90,90,0.95)" stroke-width="2" />
      ${scoreDots}
      ${labels}
    </svg>
  `;
}

function buildRadarLegend(scores) {
  const items = [
    { label: "Tensión",   key: "tension",   color: "rgba(239,68,68,.85)"  },
    { label: "Economía",  key: "economy",   color: "rgba(245,158,11,.85)" },
    { label: "Social",    key: "social",    color: "rgba(14,165,233,.85)" },
    { label: "Seguridad", key: "security",  color: "rgba(168,85,247,.85)" },
    { label: "Cobertura", key: "coverage",  color: "rgba(16,185,129,.85)" }
  ];

  return items.map(({ label, key, color }) => {
    const val = clampRadarValue(scores[key]);
    return `
      <div style="display:flex;flex-direction:column;gap:3px;">
        <div style="display:flex;justify-content:space-between;align-items:baseline;">
          <span style="font-size:9px;text-transform:uppercase;letter-spacing:.7px;color:var(--muted);font-family:var(--mono);">${label}</span>
          <span style="font-size:11px;font-weight:700;font-family:var(--mono);color:var(--text);">${val}</span>
        </div>
        <div style="height:3px;background:var(--border);border-radius:2px;overflow:hidden;">
          <div style="height:100%;width:${val}%;background:${color};border-radius:2px;transition:width .4s ease;"></div>
        </div>
      </div>
    `;
  }).join("");
}

function renderCountryRadarCard(group) {
  const items = group.items || [];
  const scores = getSingleCountryRadarScores(items);
  const svg = buildRadarSVG(scores, {
    size: 170,
    maxR: 55,
    labelOffset: 17,
    labelSize: 9,
    dotRadius: 2.8
  });

  const tension = calculateTensionIndex(items);
  const mood = detectMediaMood(items);
  const bias = topThemeFromCounters(detectThemesFromItems(items)).toUpperCase();

  // Get ISO code for flag
  const isoCode = (group.place?.gl || '').toLowerCase();
  const flagSpan = isoCode ? `<span class="fi fi-${isoCode}"></span>` : '';

  // Sentiment badge
  const sentimentBadges = {
    'MUY NEG ▼▼': '#ef4444', 'NEGATIVO ▼': '#f97316', 'TENSO ↘': '#eab308',
    'NEUTRAL →': '#64748b', 'ESTABLE ↗': '#22c55e', 'POSITIVO ▲': '#10b981', 'MUY POS ▲▲': '#34d399'
  };
  const moodColor = sentimentBadges[mood] || '#64748b';

  return `
    <article class="country-radar-card">
      <div class="country-radar-head">
        <h4 class="country-radar-title">${flagSpan}${escapeHtml(group.country)}</h4>
        <div class="country-radar-meta">
          ${escapeHtml(String(items.length))} titulares
        </div>
      </div>

      <div class="country-radar-layout">
        <div class="country-radar-visual">
          ${svg}
        </div>

        <div class="country-radar-stats">
          <div class="radar-stat">
            <span class="radar-stat-label">Tensión</span>
            <span class="radar-stat-value">${clampRadarValue(tension)}/100</span>
          </div>
          <div class="radar-stat">
            <span class="radar-stat-label">Mood</span>
            <span class="radar-stat-value">${escapeHtml(mood)}</span>
          </div>
          <div class="radar-stat">
            <span class="radar-stat-label">Bias</span>
            <span class="radar-stat-value">${escapeHtml(bias)}</span>
          </div>
          <div class="radar-stat">
            <span class="radar-stat-label">Cobertura</span>
            <span class="radar-stat-value">${clampRadarValue(scores.coverage)}/100</span>
          </div>
        </div>
      </div>
    </article>
  `;
}

/* =========================
   RENDER BRIEFING
========================= */
function renderBriefing(groups = [], analysis = null) {
  briefingResultsEl.innerHTML = "";

  if (!groups.length) {
    briefingResultsEl.innerHTML = `<div class="card"><div class="summary">Todavía no se ha generado ningún briefing.</div></div>`;
    return;
  }

  const radarScores = getRadarScores(groups);
  const radarSvg = buildRadarSVG(radarScores);
  const radarLegend = buildRadarLegend(radarScores);

  if (analysis) {
    const analysisCard = document.createElement("article");
    analysisCard.className = "card";
    analysisCard.innerHTML = `
      <h3 style="display:flex;align-items:center;gap:8px;"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="var(--accent)" stroke-width="1.5" style="flex-shrink:0"><circle cx="7.5" cy="7.5" r="6"/><path d="M7.5 1.5 Q5 7.5 7.5 13.5 M7.5 1.5 Q10 7.5 7.5 13.5" stroke-opacity=".6"/><ellipse cx="7.5" cy="7.5" rx="6" ry="2.5" stroke-opacity=".5"/></svg> Resumen ejecutivo</h3>
      <div class="summary">${escapeHtml(analysis.executiveSummary || "Sin resumen.")}</div>

      <div class="brief-list">
        <div class="brief-item">
          <strong>Coincidencias</strong>
          <div class="summary">${escapeHtml(analysis.commonPatterns || "Sin coincidencias claras.")}</div>
        </div>

        <div class="brief-item">
          <strong>Diferencias por país</strong>
          <div class="summary">${escapeHtml(analysis.countryDifferences || "Sin diferencias destacadas.")}</div>
        </div>

        <div class="brief-item">
          <strong>Lectura geopolítica</strong>
          <div class="summary">${escapeHtml(analysis.geopoliticalReading || "Sin lectura geopolítica suficiente.")}</div>
        </div>

        <div class="brief-item">
          <strong>Riesgos o escenarios</strong>
          <div class="summary">${escapeHtml(analysis.risks || "No se detectan riesgos claros con la muestra actual.")}</div>
        </div>
      </div>

      <div class="radar-wrap">
        <div class="radar-title">Signal Radar</div>
        <div class="radar-box">
          ${radarSvg}
          <div class="radar-meta">
            ${radarLegend}
          </div>
        </div>
      </div>
    `;
    briefingResultsEl.appendChild(analysisCard);
  }

  const validCountryGroups = groups.filter((group) => (group.items || []).length > 0);
  if (validCountryGroups.length) {
    const comparisonCard = document.createElement("article");
    comparisonCard.className = "card";
    comparisonCard.innerHTML = `
      <h3 style="display:flex;align-items:center;gap:8px;"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="var(--accent2)" stroke-width="1.4" style="flex-shrink:0"><circle cx="7.5" cy="7.5" r="5.5"/><circle cx="7.5" cy="7.5" r="3.2"/><circle cx="7.5" cy="7.5" r="1.2" fill="var(--accent2)" stroke="none"/><line x1="7.5" y1="2" x2="7.5" y2="4.3" stroke-opacity=".5"/><line x1="7.5" y1="10.7" x2="7.5" y2="13" stroke-opacity=".5"/><line x1="2" y1="7.5" x2="4.3" y2="7.5" stroke-opacity=".5"/><line x1="10.7" y1="7.5" x2="13" y2="7.5" stroke-opacity=".5"/></svg> Radar comparado por país</h3>
      <div class="summary">Perfil de cobertura por país en cinco ejes: tensión, economía, social, seguridad y cobertura.</div>
      <div class="brief-list">
        ${validCountryGroups.map((group) => renderCountryRadarCard(group)).join("")}
      </div>
    `;
    briefingResultsEl.appendChild(comparisonCard);
  }

  groups.forEach((group) => {
    const card = document.createElement("article");
    card.className = "card";

    const itemsHtml = (group.items || [])
      .slice(0, 5)
      .map((item) => {
        const title = item.title || "Sin título";
        const link = item.link || "#";
        const source = item.source || "Google News";

        return `
          <div class="brief-item">
            <a href="${link}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a>
            <div class="meta">${escapeHtml(source)}</div>
          </div>
        `;
      })
      .join("");

    card.innerHTML = `
      <h3>${escapeHtml(group.country)}</h3>
      <div class="summary">${escapeHtml(group.analysis)}</div>
      <div class="brief-list">${itemsHtml || '<div class="summary">Sin titulares suficientes.</div>'}</div>
    `;

    briefingResultsEl.appendChild(card);
  });
}

/* =========================
   SENTIMIENTO Y RIESGO
========================= */
/* ── Intensificadores y patrones de negación ── */
const _INTENSIFIERS = [
  "muy", "extremadamente", "crítico", "grave", "severo", "urgente", "masivo",
  "brutal", "dramatically", "severely", "critically", "acute",
  "unprecedented", "sin precedentes", "profundo", "agudo", "intenso",
  "fuerte", "gran", "enorme", "catastrófico", "catastrophic", "record", "récord"
];
const _NEGATIONS = [
  "no ", "sin ", "nunca ", "jamás ", "never ", "without ", "not ",
  "fails to", "fracasa", "rechaza", "niega", "descarta", "evita", "excluye"
];

/* Comprueba si 'word' aparece como palabra completa en 'text' */
function _matchWord(text, word) {
  // Para palabras cortas (<=3 chars) o con espacios usamos includes directo
  if (word.length <= 2 || word.includes(" ")) return text.includes(word);
  // Para el resto usamos regex con límite de palabra (funciona bien en ASCII)
  try {
    return new RegExp("(?<![a-záéíóúüñ])" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![a-záéíóúüñ])", "i").test(text);
  } catch {
    return text.includes(word);
  }
}

function _hasNearContext(text, word, patterns) {
  const idx = text.indexOf(word);
  if (idx < 0) return false;
  const before = text.substring(Math.max(0, idx - 50), idx);
  return patterns.some(p => before.includes(p));
}

function scoreSentiment(items = []) {
  let positiveWeight = 0;
  let negativeWeight = 0;

  items.forEach(item => {
    const title   = (item.title   || '').toLowerCase();
    const summary = (item.summary || '').toLowerCase();

    const scoreText = (text, titleWeight) => {
      const intensified = _INTENSIFIERS.some(i => text.includes(i));
      const mult = intensified ? 1.35 : 1.0;

      positiveKeywords.forEach(word => {
        if (_matchWord(text, word)) {
          const neg = _hasNearContext(text, word, _NEGATIONS) ? -0.4 : 1;
          positiveWeight += titleWeight * mult * neg;
        }
      });
      negativeKeywords.forEach(word => {
        if (_matchWord(text, word)) {
          const neg = _hasNearContext(text, word, _NEGATIONS) ? -0.4 : 1;
          negativeWeight += titleWeight * mult * neg;
        }
      });
    };

    scoreText(title, 3);    // títulos pesan 3×
    scoreText(summary, 1);  // sumarios pesan 1×
  });

  const pW = Math.max(0, positiveWeight);
  const nW = Math.max(0, negativeWeight);
  return { positive: pW, negative: nW, positiveWeight: pW, negativeWeight: nW, score: pW - nW };
}

function detectMediaMood(items = []) {
  if (!items.length) return 'NEUTRAL';
  const { positiveWeight, negativeWeight } = scoreSentiment(items);
  const total = positiveWeight + negativeWeight;
  if (total === 0) return 'SIN DATOS';
  if (total < 1.0) return 'NEUTRAL →';
  // Normalización suavizada: divide entre el total real para evitar extremos
  const ratio = (positiveWeight - negativeWeight) / (total + 4);

  if (ratio <= -0.45) return 'MUY NEG ▼▼';
  if (ratio <= -0.18) return 'NEGATIVO ▼';
  if (ratio <= -0.06) return 'TENSO ↘';
  if (ratio <   0.06) return 'NEUTRAL →';
  if (ratio <   0.18) return 'ESTABLE ↗';
  if (ratio <   0.45) return 'POSITIVO ▲';
  return 'MUY POS ▲▲';
}

function calculateTensionIndex(items = []) {
  if (!items.length) return 0;

  const text = items
    .map(item => `${item.title || ""} ${item.summary || ""}`)
    .join(" ")
    .toLowerCase();

  // Nivel crítico: 22 pts
  const critical = [
    "guerra", "war", "invasion", "invasión", "nuclear", "bombardeo", "bombing",
    "coup", "golpe de estado", "casualties", "muertos en combate", "terrorism",
    "terrorismo", "cyberattack", "ciberataque", "masacre", "massacre",
    "misil nuclear", "arma química", "genocide", "genocidio", "colapso estatal"
  ];
  // Nivel alto: 13 pts
  const highImpact = [
    "ataque", "attack", "misil", "missile", "drone", "dron", "explosion",
    "crisis", "sanciones severas", "escalada", "escalation", "ultimatum",
    "standoff", "confrontacion", "guerra civil", "civil war", "guerrilla",
    "operación militar", "military operation", "muertos", "killed"
  ];
  // Nivel medio: los tensionKeywords restantes, 7 pts
  const mediumImpact = tensionKeywords.filter(
    kw => !critical.includes(kw) && !highImpact.includes(kw)
  );

  // Bonus por intensificadores: escalable, máx +15
  const intensCount = _INTENSIFIERS.filter(i => text.includes(i)).length;
  const intensBonus = Math.min(intensCount * 3, 15);

  let score = 0;
  // Scoring por artículo con cap individual para evitar saturación
  let totalScore = 0;
  items.forEach(item => {
    const t = `${item.title || ""} ${item.summary || ""}`.toLowerCase();
    let s = 0;
    critical.forEach(kw    => { if (_matchWord(t, kw)) s += 22; });
    highImpact.forEach(kw  => { if (_matchWord(t, kw)) s += 13; });
    mediumImpact.forEach(kw => { if (_matchWord(t, kw)) s +=  7; });
    totalScore += Math.min(s, 30); // Cap por artículo
  });

  const avg = totalScore / Math.max(items.length, 1);
  return Math.min(100, Math.round(avg + intensBonus));
}

function getDefconLikeSignal(tensionIndex) {
  if (tensionIndex >= 80) return "RED";
  if (tensionIndex >= 60) return "ORANGE";
  if (tensionIndex >= 40) return "YELLOW";
  if (tensionIndex >= 20) return "BLUE";
  return "GREEN";
}

function detectNarrativeBias(groups = []) {
  const themeCount = {
    institucional: 0,
    economico: 0,
    seguridad: 0,
    regulatorio: 0,
    social: 0,
    tecnologico: 0
  };

  groups.forEach((group) => {
    const counters = detectThemesFromItems(group.items || []);
    Object.keys(themeCount).forEach((key) => {
      themeCount[key] += counters[key] || 0;
    });
  });

  return topThemeFromCounters(themeCount).toUpperCase();
}

function buildHotspots(groups = []) {
  return groups
    .map((group) => ({
      country: group.country,
      count: group.items?.length || 0
    }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function renderHotspots(hotspots = []) {
  if (!hotspotsBoardEl) return;

  if (!hotspots.length) {
    hotspotsBoardEl.innerHTML = `
      <div class="hud-metric">
        <span class="hud-label">HOTSPOTS</span>
        <span class="hud-value">Sin datos</span>
      </div>
    `;
    return;
  }

  hotspotsBoardEl.innerHTML = hotspots
    .map(
      (item) => `
        <div class="hud-metric">
          <span class="hud-label">${escapeHtml(item.country)}</span>
          <span class="hud-value">${escapeHtml(String(item.count))} titulares</span>
        </div>
      `
    )
    .join("");
}

const MOOD_COLORS = {
  'SIN DATOS':   '#475569',
  'MUY NEG ▼▼': '#ef4444',
  'NEGATIVO ▼':  '#f97316',
  'TENSO ↘':     '#eab308',
  'NEUTRAL →':   '#94a3b8',
  'ESTABLE ↗':   '#22c55e',
  'POSITIVO ▲':  '#10b981',
  'MUY POS ▲▲':  '#34d399'
};

const DEFCON_COLORS = {
  RED:    '#ef4444', ORANGE: '#f97316',
  YELLOW: '#eab308', BLUE:   '#3b82f6', GREEN: '#10b981'
};

function updateRiskSignals({
  tensionIndex = 0,
  mediaMood = "NEUTRAL →",
  defcon = "GREEN",
  narrativeBias = "GENERAL",
  hotspots = []
} = {}) {
  if (tensionIndexEl) {
    tensionIndexEl.textContent = `${tensionIndex}/100`;
    const t = tensionIndex;
    tensionIndexEl.style.color = t >= 70 ? '#ef4444' : t >= 45 ? '#f97316' : t >= 25 ? '#eab308' : '#10b981';
  }
  if (mediaMoodEl) {
    mediaMoodEl.textContent = mediaMood;
    mediaMoodEl.style.color = MOOD_COLORS[mediaMood] || '#94a3b8';
  }
  if (defconSignalEl) {
    defconSignalEl.textContent = defcon;
    defconSignalEl.style.color = DEFCON_COLORS[defcon] || '#10b981';
  }
  if (narrativeBiasEl) narrativeBiasEl.textContent = narrativeBias;
  renderHotspots(hotspots);
}

/* =========================
   FETCH WORKER ROBUSTO
========================= */
async function fetchNewsForPlace(place, query = "") {
  const url = new URL(WORKER_URL);
  url.searchParams.set("place", place.name);
  url.searchParams.set("gl", place.gl);
  url.searchParams.set("hl", place.hl);
  url.searchParams.set("ceid", place.ceid);

  if (query) {
    url.searchParams.set("q", query);
  }

  console.log("Consultando Worker:", url.toString());

  let res;
  try {
    res = await fetch(url.toString(), {
      method: "GET",
      cache: "no-store"
    });
  } catch (fetchError) {
    console.error("Fallo de red al llamar al Worker:", fetchError);
    throw new Error("No se pudo conectar con el Worker");
  }

  console.log("Status Worker:", res.status);

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("Respuesta no OK:", text);
    throw new Error(`HTTP ${res.status}`);
  }

  let data;
  try {
    data = await res.json();
  } catch (jsonError) {
    console.error("JSON inválido del Worker:", jsonError);
    throw new Error("Respuesta JSON inválida del Worker");
  }

  console.log("Respuesta Worker:", data);

  if (!data.ok) {
    throw new Error(data.error || "El Worker devolvió error");
  }

  return Array.isArray(data.items) ? data.items : [];
}

/* =========================
   BÚSQUEDA SIMPLE
========================= */
async function searchNews() {
  const rawCountry = countryInput.value.trim();
  const query = queryInput.value.trim();
  const key = normalizeKey(rawCountry);

  if (!rawCountry) {
    setStatus("Escribe un país o zona.");
    renderResults([]);
    clearMapMarkers();
    updateDashboardStatus({ topic: "Sin tema", countries: 0, headlines: 0 });
    updateGeoTicker([]);
    updateRetroTicker([]);
    updateRiskSignals({
      tensionIndex: 0,
      mediaMood: "NEUTRAL",
      defcon: "GREEN",
      narrativeBias: "GENERAL",
      hotspots: []
    });
    return;
  }

  const place = gazetteer[key];
  if (!place) {
    setStatus("País no encontrado todavía.");
    renderResults([]);
    clearMapMarkers();
    updateDashboardStatus({ topic: "Sin tema", countries: 0, headlines: 0 });
    updateGeoTicker([]);
    updateRetroTicker([]);
    updateRiskSignals({
      tensionIndex: 0,
      mediaMood: "NEUTRAL",
      defcon: "GREEN",
      narrativeBias: "GENERAL",
      hotspots: []
    });
    return;
  }

  setStatus(`Buscando noticias para ${place.name}...`);

  try {
    const items = await fetchNewsForPlace(place, query);
    renderResults(items);

    clearMapMarkers();
    addCountryMarker(place, items.length, query || place.name, items);
    fitMapToPlaces([place]);

    updateDashboardStatus({
      topic: query || place.name,
      countries: 1,
      headlines: items.length
    });

    updateGeoTicker(items.map((item) => item.title));
    updateRetroTicker(items.map((item) => item.title));

    const tensionIndex = calculateTensionIndex(items);
    const mediaMood = detectMediaMood(items);
    const defcon = getDefconLikeSignal(tensionIndex);
    const narrativeBias = topThemeFromCounters(detectThemesFromItems(items)).toUpperCase();
    const hotspots = [{ country: place.name, count: items.length }];

    updateRiskSignals({
      tensionIndex,
      mediaMood,
      defcon,
      narrativeBias,
      hotspots
    });

    if (!items.length) {
      setStatus(`No llegaron noticias para ${place.name}. Prueba otro país o cambia el tema.`);
      return;
    }

    setStatus(`Mostrando ${items.length} noticias de ${place.name}.`);
  } catch (err) {
    console.error(err);
    setStatus(`Error cargando noticias: ${err.message}`);
    renderResults([]);
    clearMapMarkers();
    updateDashboardStatus({ topic: "Error", countries: 0, headlines: 0 });
    updateGeoTicker([]);
    updateRetroTicker([]);
    updateRiskSignals({
      tensionIndex: 0,
      mediaMood: "ERROR",
      defcon: "GREEN",
      narrativeBias: "GENERAL",
      hotspots: []
    });
  }
}

/* =========================
   BRIEFING
========================= */
async function generateBriefing() {
  const topic = briefTopicInput.value.trim();
  const rawCountries = briefCountriesInput.value
    .split(",")
    .map((country) => country.trim())
    .filter(Boolean);

  if (!topic) {
    setBriefStatus("Escribe un tema para generar el briefing.");
    renderBriefing([]);
    return;
  }

  if (!rawCountries.length) {
    setBriefStatus("Escribe al menos un país.");
    renderBriefing([]);
    return;
  }

  setBriefStatus("Generando briefing geopolítico...");

  const groups = [];
  const placesToMap = [];

  for (const rawCountry of rawCountries) {
    const key = normalizeKey(rawCountry);
    const place = gazetteer[key];

    if (!place) {
      groups.push({
        country: rawCountry,
        analysis: "País no reconocido en esta versión.",
        items: [],
        place: null
      });
      continue;
    }

    try {
      const items = await fetchNewsForPlace(place, topic);

      groups.push({
        country: place.name,
        analysis: inferCountryAnalysis(place.name, items, topic),
        items,
        place
      });

      if (items.length) {
        placesToMap.push({ place, count: items.length, items });
      }
    } catch (err) {
      console.error(err);
      groups.push({
        country: place.name,
        analysis: `Error obteniendo noticias para ${place.name}.`,
        items: [],
        place
      });
    }
  }

  const structuredAnalysis = buildStructuredBriefing(topic, groups);
  renderBriefing(groups, structuredAnalysis);

  clearMapMarkers();
  placesToMap.forEach(({ place, count, items }) => addCountryMarker(place, count, topic, items));
  fitMapToPlaces(placesToMap.map((item) => item.place));

  const countriesOk = groups.filter((group) => group.items && group.items.length > 0).length;
  const totalHeadlines = groups.reduce((acc, group) => acc + (group.items?.length || 0), 0);

  updateDashboardStatus({
    topic,
    countries: countriesOk,
    headlines: totalHeadlines
  });

  updateGeoTicker(
    groups.flatMap((group) =>
      (group.items || []).slice(0, 2).map((item) => `${group.country}: ${item.title}`)
    )
  );

  updateRetroTicker(
    groups.flatMap((group) =>
      (group.items || []).slice(0, 2).map((item) => `${group.country} · ${item.title}`)
    )
  );

  const allItems = groups.flatMap((group) => group.items || []);
  const tensionIndex = calculateTensionIndex(allItems);
  const mediaMood = detectMediaMood(allItems);
  const defcon = getDefconLikeSignal(tensionIndex);
  const narrativeBias = detectNarrativeBias(groups);
  const hotspots = buildHotspots(groups);

  updateRiskSignals({
    tensionIndex,
    mediaMood,
    defcon,
    narrativeBias,
    hotspots
  });

  setBriefStatus(`Briefing generado para ${countriesOk} país(es) sobre "${topic}".`);
}

/* =========================
   LIMPIAR BRIEFING
========================= */
function clearBriefing() {
  briefTopicInput.value = "";
  briefingResultsEl.innerHTML = `
    <div class="card">
      <div class="summary">Todavía no se ha generado ningún briefing.</div>
    </div>
  `;
  setBriefStatus("Introduce un tema y varios países separados por comas.");
  clearMapMarkers();
  updateDashboardStatus({ topic: "Sin tema", countries: 0, headlines: 0 });
  updateGeoTicker([]);
  updateRetroTicker([]);
  updateRiskSignals({
    tensionIndex: 0,
    mediaMood: "NEUTRAL",
    defcon: "GREEN",
    narrativeBias: "GENERAL",
    hotspots: []
  });
}

/* =========================
   GIRO DEL GLOBO
========================= */
function startSpin() {
  if (_globeSpinning) return;
  _globeSpinning = true;
  if (spinBtn) spinBtn.textContent = "Parar giro";
  // Wake the unified loop (handles spin internally)
  if (typeof window._globeScheduleFrame === "function") window._globeScheduleFrame();
}

function stopSpin() {
  _globeSpinning = false;
  if (spinBtn) spinBtn.textContent = "Girar globo";
}

/* =========================
   EVENTOS
========================= */
if (searchBtn) searchBtn.addEventListener("click", searchNews);
if (briefBtn) briefBtn.addEventListener("click", generateBriefing);
if (clearBriefBtn) clearBriefBtn.addEventListener("click", clearBriefing);

if (queryInput) {
  queryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchNews();
  });
}

if (countryInput) {
  countryInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") searchNews();
  });
}

if (briefTopicInput) {
  briefTopicInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") generateBriefing();
  });
}

if (briefCountriesInput) {
  briefCountriesInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") generateBriefing();
  });
}

if (spinBtn) {
  spinBtn.addEventListener("click", () => {
    if (_globeSpinning) stopSpin();
    else startSpin();
  });
}

// Globe click handled inside initGlobe()

if (geoBtn) {
  geoBtn.addEventListener("click", () => {
    if (!navigator.geolocation) {
      setStatus("Geolocalización no soportada.");
      return;
    }

    setStatus("Obteniendo tu ubicación...");

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&zoom=3&accept-language=es`,
            { cache: "no-store" }
          );

          const data = await response.json();
          const country = data?.address?.country || data?.name || "";

          if (country) {
            if (countryInput) countryInput.value = country;
            setStatus(`Ubicación detectada: ${country}.`);
          } else {
            setStatus("No pude detectar tu país.");
          }
        } catch (err) {
          console.error(err);
          setStatus("Error obteniendo ubicación.");
        }
      },
      (error) => {
        console.error(error);
        setStatus("Permiso de ubicación denegado o no disponible.");
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  });
}

// Stars rendered inside D3 globe canvas

/* =========================
   INIT
========================= */
function initDashboard() {
  renderMarketBoard();
  updateWorldClocks();
  updateDashboardStatus({ topic: "Sin tema", countries: 0, headlines: 0 });

  updateGeoTicker([
    "Panel global iniciado.",
    "Esperando tema para briefing.",
    "Mapa operativo.",
    "RSS geopolítico disponible."
  ]);

  updateRetroTicker([
    "GEONEWS MONITOR ONLINE",
    "GLOBAL INTELLIGENCE DASHBOARD ACTIVO",
    "ESPERANDO CONSULTAS Y BRIEFINGS"
  ]);

  updateRiskSignals({
    tensionIndex: 0,
    mediaMood: "NEUTRAL",
    defcon: "GREEN",
    narrativeBias: "GENERAL",
    hotspots: []
  });

  // Iniciar el globo D3
  initGlobe();
}

initDashboard();
setInterval(updateWorldClocks, 1000);

// Datos de mercado: carga inicial + refresco cada 60 segundos
fetchMarkets();
setInterval(fetchMarkets, 60_000);
