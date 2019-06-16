import * as React from "react";
import { graphql } from "gatsby";
import { About } from "../components/About";

const AboutPage = ({ data }) => {
  const language = "en-gb";

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
  }
`;

export default AboutPage;
