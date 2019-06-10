export type EventNode = {
  uid: string;
  data: {
    starting_date: Date;
    dates_text: string;
    location_city: string;
    location_venue: string;
    location_image?: { url: string };
    seminar: {
      uid: string;
      document: [
        {
          data: {
            subject: {
              text: string;
            };
            image_night: {
              alt: string;
              url: string;
              dimensions: {
                width: number;
                height: number;
              };
            };
          };
        }
      ];
    };
  };
};

type FilteredEvents = {
  eventsMiddleEast: EventNode[];
  eventsWestAfrica: EventNode[];
  eventsRussia: EventNode[];
};

const dateInFuture = (date: Date) => {
  const eventDate = new Date(date);
  const now = new Date();
  return eventDate >= now;
};

export const filterEvents = (eventEntities: EventNode[]): FilteredEvents => {
  const allEventsMiddleEast = eventEntities.filter(
    node => node.data.seminar.uid === "middle-east"
  );
  const allEventsWestAfrica = eventEntities.filter(
    node => node.data.seminar.uid === "west-africa"
  );
  const allEventsRussia = eventEntities.filter(
    node => node.data.seminar.uid === "russia"
  );

  const eventsMiddleEast = allEventsMiddleEast
    .filter(event => dateInFuture(event.data.starting_date))
    .sort((a, b) => {
      const aDate: any = new Date(a.data.starting_date);
      const bDate: any = new Date(b.data.starting_date);
      return aDate - bDate;
    });

  const eventsWestAfrica = allEventsWestAfrica
    .filter(event => dateInFuture(event.data.starting_date))
    .sort((a, b) => {
      const aDate: any = new Date(a.data.starting_date);
      const bDate: any = new Date(b.data.starting_date);
      return aDate - bDate;
    });

  const eventsRussia = allEventsRussia
    .filter(event => dateInFuture(event.data.starting_date))
    .sort((a, b) => {
      const aDate: any = new Date(a.data.starting_date);
      const bDate: any = new Date(b.data.starting_date);
      return aDate - bDate;
    });

  return { eventsMiddleEast, eventsWestAfrica, eventsRussia };
};
