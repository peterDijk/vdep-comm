import * as React from "react";
import { graphql } from "gatsby";
import { SeminarDetail } from "../components/SeminarDetail";

const SeminarInDepth = ({ data }) => {
  const language = "en-gb";
  return <SeminarDetail data={data} language={language} />;
};

export default SeminarInDepth;

export const query = graphql`
  {
    seminar: prismicSeminar(lang: { eq: "en-gb" }, uid: { eq: "russia" }) {
      uid
      data {
        slug
        subject {
          text
        }
        country
        host_name
        host_profile_picture {
          url
        }
        background_image {
          url
        }
        host_name
        host_main_quote {
          html
        }
        day_1_quote {
          html
        }
        day_1_quote_profile_picture {
          url
        }
        programme_day_1 {
          time
          title
          body {
            html
          }
          kind
        }
        day_2_quote {
          html
        }
        dag_2_quote_profile_picture {
          url
        }
        programme_day_2 {
          time
          title
          body {
            html
          }
          kind
        }
        day_3_quote {
          html
        }
        day_3_quote_profile_picture {
          url
        }
        programme_day_3 {
          time
          title
          body {
            html
          }
          kind
        }
      }
    }
    events: allPrismicEvent(
      filter: {
        data: { seminar: { uid: { eq: "russia" } } }
        lang: { eq: "en-gb" }
      }
    ) {
      nodes {
        id
        uid
        data {
          location_venue
          location_city
          location_image {
            url
          }
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
              }
            }
          }
        }
      }
    }
    seminarOverview: allPrismicSeminarOverview(
      filter: { lang: { eq: "en-gb" } }
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
  }
`;
