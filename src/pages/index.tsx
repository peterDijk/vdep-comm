import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        description="omschrijving"
      />
      <h1>Communicatie over Grenzen</h1>
      <h2>subtitle</h2>
    </Layout>
  );
};

export const queryName = graphql`
  query {
    drupal {
      availableLanguages {
        name
      }
    }
  }
`;

export default IndexPage;
