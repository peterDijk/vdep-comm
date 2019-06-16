import * as React from "react";
import { graphql } from "gatsby";
import { PrivacyStatement } from "../components/PrivacyStatement";

const PrivacyPage = ({ data }) => {
  const language = "en-gb";

  return <PrivacyStatement data={data} language={language} />;
};

export const query = graphql`
  {
    privacy: prismicPrivacyStatement(lang: { eq: "en-gb" }) {
      data {
        body {
          html
        }
      }
    }
    seminars: allPrismicSeminar(filter: { lang: { eq: "en-gb" } }) {
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
