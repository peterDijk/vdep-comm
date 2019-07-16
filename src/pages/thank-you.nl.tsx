import { graphql } from 'gatsby';
import * as React from 'react';
import { ThankYou } from '../components/ThankYou';

const ThankYouPage = ({ data }) => {
  const language = 'nl-nl';

  return <ThankYou data={data} language={language} />;
};

export const query = graphql`
  {
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

export default ThankYouPage;
