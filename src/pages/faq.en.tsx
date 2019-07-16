import { graphql } from 'gatsby';
import * as React from 'react';
import { Faq } from '../components/Faq';

const FaqPage = ({ data }) => {
  const language = 'en-gb';

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

export default FaqPage;
