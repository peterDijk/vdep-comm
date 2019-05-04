const translations = {
  COMMUNICATION: {
    "nl-nl": "Communicatie",
    "en-gb": "Communication",
  },
  ACCROSS: {
    "nl-nl": "over",
    "en-gb": "accross",
  },
  BORDERS: {
    "nl-nl": "grenzen'",
    "en-gb": "borders",
  },
  ABOUTUS: {
    "nl-nl": "Over ons",
    "en-gb": "About us",
  },
  OURSEMINARS: {
    "nl-nl": "Onze Seminars",
    "en-gb": "Our Seminars",
  },
  FAQs: {
    "nl-nl": "FAQs",
    "en-gb": "FAQs",
  },
  MAKEINQ: {
    "nl-nl": "Neem contact op",
    "en-gb": "Make an Inquiry",
  },
  UPCOMINGSEMINARS: {
    "nl-nl": "Bekijk Aankomende Seminars",
    "en-gb": "View Upcoming Seminars",
  },
};

export const translate = (string, language) => {
  return translations[string][language];
};
