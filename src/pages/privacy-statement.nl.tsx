import * as React from "react";
import { graphql } from "gatsby";
import { PrivacyStatement } from "../components/PrivacyStatement";

const PrivacyPage = ({ data }) => {
  const language = "nl-nl";

  return <PrivacyStatement data={data} language={language} />;
};

export const query = graphql`
  {
    privacy: prismicPrivacyStatement(lang: { eq: "nl-nl" }) {
      data {
        body {
          html
        }
      }
    }
    seminars: allPrismicSeminar(filter: { lang: { eq: "nl-nl" } }) {
      nodes {
        data {
          subject {
            text
          }
          slug
        }
      }
    }
  }
`;

export default PrivacyPage;
