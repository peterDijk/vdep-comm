import * as React from "react";
import { graphql } from "gatsby";
import { Faq } from "../components/Faq";

const FaqPage = ({ data }) => {
  const language = "en-gb";

  return <Faq data={data} language={language} />;
};

export const query = graphql`
  {
    faq: prismicFaq(lang: { eq: "en-gb" }) {
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
  }
`;

export default FaqPage;
