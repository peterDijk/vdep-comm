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
import { Link } from "gatsby";

export enum PageType {
  LANDING,
  SEMINAR,
}

type Props = {
  events: EventNode[];
  language: string;
  page?: PageType;
};

export const UpcomingEvents = ({ events, language, page }: Props) => {
  console.log({ events });
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <UpcomingEventsContainer>
          <h2>{t("UPCOMINGSEMINARS", language)}:</h2>
          <Grid container spacing={24}>
            {events.length > 0 &&
              events[0] &&
              events
                .filter((e, i) => i < 3)
                .map(event => (
                  <Grid item xs={12} md={4} key={event.uid}>
                    <Link
                      to={`/${language === "en-gb" ? "en/" : ""}${
                        event.data.seminar.slug
                      }`}
                    >
                      <EventTile key={event.uid}>
                        <EventImage
                          imgUrl={
                            page === PageType.SEMINAR
                              ? event.data.location_image.url
                              : event.data.seminar.document[0].data.image_night
                                  .url
                          }
                        />
                        {page === PageType.LANDING ? (
                          <h2>
                            {event.data.seminar.document[0].data.subject.text}
                          </h2>
                        ) : (
                          <h2>{event.data.location_venue}</h2>
                        )}
                        <LocationDateContainer>
                          <h3>{event.data.location_city}</h3>
                          <h4>{event.data.dates_text}</h4>
                        </LocationDateContainer>
                      </EventTile>
                    </Link>
                  </Grid>
                ))}
          </Grid>
        </UpcomingEventsContainer>
      </Grid>
    </Grid>
  );
};
