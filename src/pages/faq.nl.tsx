import * as React from "react";
import { graphql } from "gatsby";
import { Faq } from "../components/Faq";

const FaqPage = ({ data }) => {
  const language = "nl-nl";

  return <Faq data={data} language={language} />;
};

export const query = graphql`
  {
    faq: prismicFaq(lang: { eq: "nl-nl" }) {
      data {
        q_a {
          answer {
            html
          }
          question {
            html
          }
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

export default FaqPage;
