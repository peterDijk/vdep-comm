import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import { UpcomingEvents } from "../components/UpcomingEvents";
import SEO from "../components/seo";
import { filterEvents } from "../lib/filterEvents";
import { AboveTheFold, BrowserWindow } from "../styles/Main";
import { Story } from "../components/Story";
import { OrganisationCTA } from "../components/OrganisationCTA";

const IndexPage = () => {
  // const { drupal } = useStaticQuery(graphql`
  //   query {
  //     drupal {
  //       events: nodeQuery(
  //         filter: { conditions: [{ field: "type", value: "events" }] }
  //       ) {
  //         entities {
  //           entityType
  //           ... on DRUPAL_NodeEvents {
  //             uuid
  //             langcode {
  //               value
  //             }
  //             title
  //             fieldLocationCity
  //             fieldLocationVenue
  //             fieldDateDay1 {
  //               value
  //               date
  //             }
  //             fieldDatesText
  //             fieldSeminar {
  //               targetId
  //               entity {
  //                 ... on DRUPAL_NodeSeminar {
  //                   title
  //                   fieldImageNight {
  //                     derivative(style: LARGE) {
  //                       height
  //                       width
  //                       url
  //                     }
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  const data = useStaticQuery(graphql`
    query {
      header: prismicHeader(lang: { eq: "nl-nl" }) {
        id
        uid
        type
        tags
        slugs
        lang
        data {
          title {
            text
          }
          cog_message {
            text
          }
          cog_sub_message {
            text
          }
        }
      }
    }
  `);
  const language = "nl-nl";
  console.log(data);

  // const eventEntities = drupal.events.entities;
  // const filteredEvents = filterEvents(eventEntities);
  // const upcomingPerSeminar = [
  //   filteredEvents.eventsMiddleEast[0],
  //   filteredEvents.eventsWestAfrica[0],
  //   filteredEvents.eventsRussia[0],
  // ].sort((a, b) => {
  //   const aDate: any = new Date(a.fieldDateDay1.date);
  //   const bDate: any = new Date(b.fieldDateDay1.date);
  //   return aDate - bDate;
  // });

  return (
    <Layout lang={language}>
      <AboveTheFold>
        <Header language={language} header={data.header} />
        <React.Fragment>
          <SEO
            title="Bij Communicatie over Grenzen geloven wij in de kracht van duidelijke communicatie"
            keywords={[
              `communicatie`,
              `grenzen`,
              `cultuur`,
              `culturen`,
              `bert`,
              `dijk`,
            ]}
            description="Met onze Seminars helpen we organisaties en individuelen met effectief communiceren met andere culturen in hun zakelijke relaties"
            lang={language}
          />
        </React.Fragment>
        <UpcomingEvents events={upcomingPerSeminar} language={language} />
      </AboveTheFold>
      <BrowserWindow>
        <Story language={language} />
        <OrganisationCTA language={language} />
      </BrowserWindow>
    </Layout>
  );
};

export default IndexPage;
