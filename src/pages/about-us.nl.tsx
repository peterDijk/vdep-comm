import * as React from "react";
import { graphql } from "gatsby";
import { About } from "../components/About";

const AboutPage = ({ data }) => {
  const language = "nl-nl";

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
  }
`;

export default AboutPage;
