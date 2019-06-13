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
    "nl-nl": "grenzen",
    "en-gb": "borders",
  },
  ABOUTUS: {
    "nl-nl": "Over ons",
    "en-gb": "About us",
  },
  OURSEMINARS: {
    "nl-nl": "Seminars",
    "en-gb": "Seminars",
  },
  FAQs: {
    "nl-nl": "FAQs",
    "en-gb": "FAQs",
  },
  MAKEINQ: {
    "nl-nl": "Vraag informatie aan",
    "en-gb": "Make an Inquiry",
  },
  UPCOMINGSEMINARS: {
    "nl-nl": "Aankomende Seminars",
    "en-gb": "Upcoming Seminars",
  },
  VIEWPROGRAM: {
    "nl-nl": "Bekijk Programma",
    "en-gb": "View Program",
  },
  NUM_ATTENDEES: {
    "nl-nl": "Aantal deelnemers",
    "en-gb": "Number of attendees",
  },
  SEM_ATTENDANCE: {
    "nl-nl": "Seminar Deelname",
    "en-gb": "Seminar Attendance",
  },
  FREQUENCY: {
    "nl-nl": "Frequentie",
    "en-gb": "Frequency",
  },
  SEM_SUBJECT: {
    "nl-nl": "Onderwerp",
    "en-gb": "Subject",
  },
  SEM_CONTENT: {
    "nl-nl": "Inhoud",
    "en-gb": "Content",
  },
  SEM_VENUE: {
    "nl-nl": "Seminar Lokatie",
    "en-gb": "Seminar Venue",
  },
  ACCOMODATION: {
    "nl-nl": "Accomodatie",
    "en-gb": "Accomodation",
  },
  ATTENDANCE_FEE: {
    "nl-nl": "Investering",
    "en-gb": "Investment",
  },
  INTERESTED_IN_ATTENDING: {
    "nl-nl": "Geïntereseerd?",
    "en-gb": "Interested?",
  },
  INSERT_YOUR_EMAIL: {
    "nl-nl":
      "Laat hier vrijblijvend uw e-mailadres achter en wij nemen zo snel mogelijk contact met u op.",
    "en-gb": "Insert your email here and we'll contact you as soon as possible",
  },
  SEM_ARABISCH: {
    "nl-nl": "Arabisch schiereiland",
    "en-gb": "Middle East",
  },
  SEM_RUSS: {
    "nl-nl": "Russische regio",
    "en-gb": "Russian region",
  },
  SEM_WESTAFRICA: {
    "nl-nl": "West-Afrika",
    "en-gb": "West-Africa",
  },
};

export const translate = (string, language) => {
  return translations[string][language];
};
