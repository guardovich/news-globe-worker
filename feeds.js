export default {
  version: 1,
  defaults: {
    maxFeedsPerRequest: 4,
    maxItemsPerFeed: 12
  },
  alerts: {
    international_es: [],
    international_en: []
  },
  topics: {
    ia: ["ia", "inteligencia artificial", "artificial intelligence", "ai"],
    energia: ["energia", "energía", "energy", "oil", "gas", "lng"],
    otan: ["otan", "nato"],
    ciberseguridad: ["ciberseguridad", "cybersecurity", "ciberataque", "cyber attack"]
  },
  countries: {
    spain: {
      label: "España",
      aliases: ["espana", "españa", "spain"],
      lang: "es",
      feeds: []
    },
    usa: {
      label: "United States",
      aliases: ["usa", "eeuu", "estados unidos", "united states"],
      lang: "en",
      feeds: []
    },
    france: {
      label: "France",
      aliases: ["france", "francia"],
      lang: "fr",
      feeds: []
    }
  }
};
