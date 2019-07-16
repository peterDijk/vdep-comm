import { graphql } from 'gatsby';
import * as React from 'react';
import { About } from '../components/About';

const AboutPage = ({ data }) => {
  const language = 'en-gb';

  return <About data={data} language={language} />;
};

export const query = graphql`
  {
    about: prismicAboutUs(lang: { eq: "en-gb" }) {
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

export default AboutPage;
