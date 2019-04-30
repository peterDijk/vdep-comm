const translations = {
  COMMUNICATION: {
    nl: "Communicatie",
    en: "Communication",
  },
  ACCROSS: {
    nl: "over",
    en: "accross",
  },
  BORDERS: {
    nl: "grenzen",
    en: "borders",
  },
  ABOUTUS: {
    nl: "Over ons",
    en: "About us",
  },
  OURSEMINARS: {
    nl: "Onze Seminars",
    en: "Our Seminars",
  },
  FAQs: {
    nl: "FAQs",
    en: "FAQs",
  },
  MAKEINQ: {
    nl: "Doe een aanvraag",
    en: "Make an Inquiry",
  },
  UPCOMINGSEMINARS: {
    nl: "Bekijk Aankomende Seminars",
    en: "View Upcoming Seminars",
  },
};

export const translate = (string, language) => {
  return translations[string][language];
};
