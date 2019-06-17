import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";
import { UpcomingEvents, PageType } from "../components/UpcomingEvents";
import SEO from "../components/seo";
import { filterEvents } from "../lib/filterEvents";
import { AboveTheFold, BrowserWindow } from "../styles/Main";
import { Story } from "../components/Story";
import { Expertise } from "../components/Expertise";
import { OrganisationCTA } from "../components/OrganisationCTA";
import { Seminars } from "../components/Seminars";
import { Experience } from "../components/Experience";
import PricingTable from "../components/PricingTable";

const IndexPage = ({ data }) => {
  const language = "nl-nl";
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
    <Layout lang={language} seminars={data.seminars.nodes}>
      <AboveTheFold>
        <Header language={language} header={data.header} />
        <React.Fragment>
          <SEO
            title="Communicatie over Grenzen - Leer effectief communiceren met andere culturen"
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
        <UpcomingEvents
          events={upcomingPerSeminar}
          language={language}
          page={PageType.LANDING}
        />
      </AboveTheFold>
      <Story story={data.story} language={language} />
      <AboveTheFold>
        <OrganisationCTA
          organisationCta={data.organisationCta}
          language={language}
        />
      </AboveTheFold>
      <Expertise expertise={data.expertise} />
      <Seminars seminars={data.seminars.nodes} language={language} />
      <Experience
        experience={data.experience}
        seminarOverview={data.seminarOverview.nodes}
      />
      <PricingTable
        benefits={data.benefits}
        benefitsOptions={data.benefitsOptions}
        language={language}
      />
    </Layout>
  );
};

export const query = graphql`
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
        hero_image {
          url
        }
      }
    }
    events: allPrismicEvent(filter: { lang: { eq: "nl-nl" } }) {
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
    story: prismicStory(lang: { eq: "nl-nl" }) {
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
    expertise: prismicExpertise(lang: { eq: "nl-nl" }) {
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
    organisationCta: prismicOrganisationCta(lang: { eq: "nl-nl" }) {
      uid
      data {
        title
        organisation_cta
        image {
          url
        }
      }
    }
    seminars: allPrismicSeminar(filter: { lang: { eq: "nl-nl" } }) {
      nodes {
        id
        lang
        data {
          subject {
            text
          }
          country
          image_day {
            url
          }
          slug
        }
      }
    }
    experience: prismicExperience(lang: { eq: "nl-nl" }) {
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
    seminarOverview: allPrismicSeminarOverview(
      filter: { lang: { eq: "nl-nl" } }
      sort: { fields: data___order, order: ASC }
    ) {
      nodes {
        id
        lang
        data {
          order
          title {
            text
          }
          body {
            html
          }
          image {
            url
          }
          muiicon
        }
      }
    }
    benefits: prismicBenefits(lang: { eq: "nl-nl" }) {
      id
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
    benefitsOptions: allPrismicBenefitsOption(
      filter: { lang: { eq: "nl-nl" } }
    ) {
      nodes {
        id
        lang
        uid
        data {
          title {
            text
          }
          number_of_attendees {
            html
          }
          frequency {
            html
          }
          seminar_subject {
            html
          }
          seminar_content {
            html
          }
          seminar_venue {
            html
          }
          accomodation {
            html
          }
          attendance_fee_text
          attendance_fee_price
          note {
            html
          }
          interested_text
        }
      }
    }
  }
`;

export default IndexPage;
