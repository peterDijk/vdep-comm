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
  VIEWPROGRAM: {
    "nl-nl": "Bekijk Programma",
    "en-gb": "View Program",
  },
  NUM_ATTENDEES: {
    "nl-nl": "Aantal Deelnemers",
    "en-gb": "Number of Attendees",
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
    "nl-nl": "Seminar Onderwerp",
    "en-gb": "Seminar Subject",
  },
  SEM_CONTENT: {
    "nl-nl": "Seminar Inhoud",
    "en-gb": "Seminar Content",
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
    "nl-nl": "Deelname Prijs",
    "en-gb": "Attendance Fee",
  },
  INTERESTED_IN_ATTENDING: {
    "nl-nl": "Geïntereseerd in deelnemen?",
    "en-gb": "Interested in attending?",
  },
  INSERT_YOUR_EMAIL: {
    "nl-nl":
      "Laat vrijblijvend je emailadres hier achter en wij leiden je door de rest.",
    "en-gb": "Insert your email here and we'll guide you through the rest.",
  },
};

export const translate = (string, language) => {
  return translations[string][language];
};
