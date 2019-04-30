import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import Image from "../components/image";
import SEO from "../components/seo";
import { filterEvents } from "../lib/filterEvents";

const IndexPage = ({ data }) => {
  console.log(data);
  const eventEntities = data.drupal.nodeQuery.entities;
  const filteredEvents = filterEvents(eventEntities);
  console.log(filteredEvents);

  return (
    <Layout lang="nl">
      <Header language={"nl"} />
      <React.Fragment>
        <SEO
          title="Home"
          keywords={[`gatsby`, `application`, `react`]}
          description="omschrijving"
        />
      </React.Fragment>
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
                    derivative(style: THUMBNAIL) {
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
