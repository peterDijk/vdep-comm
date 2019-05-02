import * as React from "react";
import { translate as t } from "../lib/i18n";
import { EventNode } from "../lib/filterEvents";
import {
  UpcomingEventsContainer,
  TilesContainer,
  EventTile,
  EventImage,
  LocationDateContainer,
} from "../styles/Events";

type Props = {
  events: EventNode[];
  language: string;
};

export const UpcomingEvents = ({ events, language }: Props) => (
  <UpcomingEventsContainer>
    <h2>{t("UPCOMINGSEMINARS", language)}:</h2>
    <TilesContainer>
      {events.map(event => (
        <EventTile key={event.uid}>
          <EventImage
            imgUrl={event.data.seminar.document[0].data.image_night.url}
          />
          <h2>{event.data.seminar.document[0].data.subject.text}</h2>
          <LocationDateContainer>
            <h3>{event.data.location_city}</h3>
            <h4>{event.data.dates_text}</h4>
          </LocationDateContainer>
        </EventTile>
      ))}
    </TilesContainer>
  </UpcomingEventsContainer>
);
