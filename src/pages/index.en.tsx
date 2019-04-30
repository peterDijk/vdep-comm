import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import { UpcomingEvents } from "../components/UpcomingEvents";
import SEO from "../components/seo";
import { filterEvents } from "../lib/filterEvents";
import { AboveTheFold } from "../styles/Main";

const IndexPage = ({ data }) => {
  const language = "en";
  console.log(data);
  const eventEntities = data.drupal.nodeQuery.entities;
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
  console.log(upcomingPerSeminar);

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
    </Layout>
  );
};

export const queryName = graphql`
  query {
    drupal {
      nodeQuery(filter: { conditions: [{ field: "type", value: "events" }] }) {
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
`;

export default IndexPage;
