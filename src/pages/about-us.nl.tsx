import { graphql } from 'gatsby';
import * as React from 'react';
import { About } from '../components/About';

const AboutPage = ({ data }) => {
  const language = 'nl-nl';

  return <About data={data} language={language} />;
};

export const query = graphql`
  {
    about: prismicAboutUs(lang: { eq: "nl-nl" }) {
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

export default AboutPage;
