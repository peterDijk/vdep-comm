export type Seminar = {
  title: string;
  fieldImageNight: {
    derivative: {
      height: number;
      width: number;
      url: string;
    };
  };
  __typename: "DRUPAL_NodeSeminar";
};

export type EventEntity = {
  entityType: string;
  fieldDateDay1: {
    date: Date;
    value: string;
  };
  fieldDatesText: string;
  fieldLocationCity: string;
  fieldLocationVenue: string;
  fieldSeminar: {
    targetId: number;
    entity: Seminar;
  };
  langcode: {
    value: string;
  };
  title: string;
  uuid: string;
  __typename: "DRUPAL_NodeEvents";
};

type FilteredEvents = {
  eventsMiddleEast: EventEntity[];
  eventsWestAfrica: EventEntity[];
  eventsRussia: EventEntity[];
};

const dateInFuture = (date: Date) => {
  const eventDate = new Date(date);
  const now = new Date();
  return eventDate >= now;
};

export const filterEvents = (eventEntities: EventEntity[]): FilteredEvents => {
  const allEventsMiddleEast = eventEntities.filter(
    entity => entity.fieldSeminar.entity.title === "Middle-East"
  );
  const allEventsWestAfrica = eventEntities.filter(
    entity => entity.fieldSeminar.entity.title === "West-Africa"
  );
  const allEventsRussia = eventEntities.filter(
    entity => entity.fieldSeminar.entity.title === "Russia"
  );

  const eventsMiddleEast = allEventsMiddleEast
    .filter(event => dateInFuture(event.fieldDateDay1.date))
    .sort((a, b) => {
      const aDate: any = new Date(a.fieldDateDay1.date);
      const bDate: any = new Date(b.fieldDateDay1.date);
      return aDate - bDate;
    });

  const eventsWestAfrica = allEventsWestAfrica
    .filter(event => dateInFuture(event.fieldDateDay1.date))
    .sort((a, b) => {
      const aDate: any = new Date(a.fieldDateDay1.date);
      const bDate: any = new Date(b.fieldDateDay1.date);
      return aDate - bDate;
    });

  const eventsRussia = allEventsRussia
    .filter(event => dateInFuture(event.fieldDateDay1.date))
    .sort((a, b) => {
      const aDate: any = new Date(a.fieldDateDay1.date);
      const bDate: any = new Date(b.fieldDateDay1.date);
      return aDate - bDate;
    });

  return { eventsMiddleEast, eventsWestAfrica, eventsRussia };
};
