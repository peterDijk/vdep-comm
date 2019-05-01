import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import { UpcomingEvents } from "../components/UpcomingEvents";
import SEO from "../components/seo";
import { filterEvents } from "../lib/filterEvents";
import { AboveTheFold, StoryTelling, BrowserWindow } from "../styles/Main";
import { Story } from "../components/Story";

const IndexPage = ({ data }) => {
  const { drupal } = useStaticQuery(graphql`
    query {
      drupal {
        events: nodeQuery(
          filter: { conditions: [{ field: "type", value: "events" }] }
        ) {
          entities {
            entityType
            ... on DRUPAL_NodeEvents {
              uuid
              langcode {
                value
              }
              title
              fieldLocationCity
              fieldLocationVenue
              fieldDateDay1 {
                value
                date
              }
              fieldDatesText
              fieldSeminar {
                targetId
                entity {
                  ... on DRUPAL_NodeSeminar {
                    title
                    fieldImageNight {
                      derivative(style: LARGE) {
                        height
                        width
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const language = "nl";

  const eventEntities = drupal.events.entities;
  const filteredEvents = filterEvents(eventEntities);
  const upcomingPerSeminar = [
    filteredEvents.eventsMiddleEast[0],
    filteredEvents.eventsWestAfrica[0],
    filteredEvents.eventsRussia[0],
  ].sort((a, b) => {
    const aDate: any = new Date(a.fieldDateDay1.date);
    const bDate: any = new Date(b.fieldDateDay1.date);
    return aDate - bDate;
  });

  return (
    <Layout lang={language}>
      <AboveTheFold>
        <Header language={language} />
        <React.Fragment>
          <SEO
            title="Home"
            keywords={[`gatsby`, `application`, `react`]}
            description="omschrijving"
          />
        </React.Fragment>
        <UpcomingEvents events={upcomingPerSeminar} language={language} />
      </AboveTheFold>
      <BrowserWindow>
        <Story language={language} />
      </BrowserWindow>
    </Layout>
  );
};

export default IndexPage;
