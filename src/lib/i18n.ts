const translations = {
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
};

export const translate = (string, language) => {
  return translations[string][language];
};
