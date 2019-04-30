import * as React from "react";
import { translate as t } from "../lib/i18n";
import { EventEntity } from "../lib/filterEvents";
import {
  UpcomingEventsContainer,
  TilesContainer,
  EventTile,
  EventImage,
  LocationDateContainer,
} from "../styles/Events";

type Props = {
  events: EventEntity[];
  language: string;
};

export const UpcomingEvents = ({ events, language }: Props) => (
  <UpcomingEventsContainer>
    <h2>{t("UPCOMINGSEMINARS", language)}:</h2>
    <TilesContainer>
      {events.map(event => (
        <EventTile>
          <EventImage
            imgUrl={event.fieldSeminar.entity.fieldImageNight.derivative.url}
          />
          <h2>{event.fieldSeminar.entity.title}</h2>
          <LocationDateContainer>
            <h3>{event.fieldLocationCity}</h3>
            <h4>{event.fieldDatesText}</h4>
          </LocationDateContainer>
        </EventTile>
      ))}
    </TilesContainer>
  </UpcomingEventsContainer>
);
