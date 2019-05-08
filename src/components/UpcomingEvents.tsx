import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { translate as t } from "../lib/i18n";
import { EventNode } from "../lib/filterEvents";
import {
  UpcomingEventsContainer,
  EventTile,
  EventImage,
  LocationDateContainer,
} from "../styles/Events";

type Props = {
  events: EventNode[];
  language: string;
};

export const UpcomingEvents = ({ events, language }: Props) => (
  <Grid container spacing={0}>
    <Grid item xs={12}>
      <UpcomingEventsContainer>
        <h2>{t("UPCOMINGSEMINARS", language)}:</h2>
        <Grid container spacing={24}>
          {events.map(event => (
            <Grid item xs={12} md={4} key={event.uid}>
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
            </Grid>
          ))}
        </Grid>
      </UpcomingEventsContainer>
    </Grid>
  </Grid>
);
