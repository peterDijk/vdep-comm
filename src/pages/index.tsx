import React from "react";
import { Link } from "gatsby";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
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

export default IndexPage;
