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

const IndexPage = ({ data }) => {
  const language = "en-gb";
  const eventEntities = data.events.nodes;
  const filteredEvents = filterEvents(eventEntities);
  const upcomingPerSeminar = [
    filteredEvents.eventsMiddleEast[0],
    filteredEvents.eventsWestAfrica[0],
    filteredEvents.eventsRussia[0],
  ].sort((a, b) => {
    const aDate: any = new Date(a.data.starting_date);
    const bDate: any = new Date(b.data.starting_date);
    return aDate - bDate;
  });

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
        <Story story={data.story} language={language} />
        <OrganisationCTA
          organisationCta={data.organisationCta}
          language={language}
        />
      </BrowserWindow>
    </Layout>
  );
};

export const query = graphql`
  query {
    header: prismicHeader(lang: { eq: "en-gb" }) {
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
        hero_image {
          url
        }
      }
    }
    events: allPrismicEvent {
      nodes {
        id
        uid
        data {
          location_venue
          location_city
          starting_date
          dates_text
          seminar {
            id
            uid
            slug
            document {
              data {
                subject {
                  text
                }
                image_night {
                  dimensions {
                    width
                    height
                  }
                  alt
                  url
                }
              }
            }
          }
        }
      }
    }
    story: prismicStory {
      uid
      lang
      data {
        title {
          text
        }
        body {
          html
        }
      }
    }
    organisationCta: prismicOrganisationCta {
      uid
      data {
        title
        organisation_cta
        image {
          url
        }
      }
    }
  }
`;

export default IndexPage;
