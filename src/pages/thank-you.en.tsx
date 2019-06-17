import * as React from "react";
import { graphql } from "gatsby";
import { ThankYou } from "../components/ThankYou";

const ThankYouPage = ({ data }) => {
  const language = "en-gb";

  return <ThankYou data={data} language={language} />;
};

export const query = graphql`
  {
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

export default ThankYouPage;
