const translations = {
  COMMUNICATION: {
    "nl-nl": "Communicatie",
    "en-gb": "Communication",
  },
  ACROSS: {
    "nl-nl": "over",
    "en-gb": "across",
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
    "nl-nl": "Omvang",
    "en-gb": "Extend",
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
    "nl-nl": "Lokatie",
    "en-gb": "Location",
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
      "Vul uw e-mailadres hier in en wij nemen zo snel mogelijk contact met u op.",
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
  INQ_RESP_ERR: {
    "nl-nl":
      "Sorry, er is iets niet goed gegaan. Probeer opnieuw, of stuur een email naar info@communicatieovergrenzen.nl",
    "en-gb":
      "Something went wrong. Please try again or send an email to info@communicatieovergrenzen.nl",
  },
  INQ_RESP_OK: {
    "nl-nl": "Bedankt! Wij nemen contact op via ",
    "en-gb": "Thank you! We'll contact you at ",
  },
  INQ_RESP_OK_JUNK: {
    "nl-nl": "De bevestiging kan in uw spam-box terecht komen.",
    "en-gb": "The confirmation can land in your spam box",
  },
  FOOTER_COG: {
    "nl-nl":
      "Communicatie over Grenzen is een onderdeel van Van Dijk E-Projects BV, KvK 67317820",
    "en-gb":
      "Communication across Borders is part of Van Dijk E-Projects BV, KvK 67317820",
  },
  ABOUT: {
    "nl-nl": "Over",
    "en-gb": "About",
  },
  US: {
    "nl-nl": "Ons",
    "en-gb": "Us",
  },
  FREQ: {
    "nl-nl": "Veel gestelde",
    "en-gb": "Frequently asked",
  },
  QUESTIONS: {
    "nl-nl": "Vragen",
    "en-gb": "Questions",
  },
  SEND: {
    "nl-nl": "Verzend",
    "en-gb": "Send",
  },
};

export const translate = (string, language) => {
  return translations[string][language];
};
