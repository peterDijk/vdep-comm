import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";
import { LanguageState } from "../lib/LanguageStateProvider";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <LanguageState>
        {({ language }) => {
          const article = data.drupal.nodeQuery.entities[2].entityTranslations.find(
            lang => lang.langcode.value === language
          );
          return (
            <React.Fragment>
              <SEO
                title="Home"
                keywords={[`gatsby`, `application`, `react`]}
                description="omschrijving"
              />
              <h1>{article.title}</h1>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
              <h2>{article.body.value}</h2>
            </React.Fragment>
          );
        }}
      </LanguageState>
    </Layout>
  );
};

export const queryName = graphql`
  query {
    drupal {
      nodeQuery {
        entities {
          entityTranslations {
            ... on DRUPAL_NodeArticle {
              uuid
              langcode {
                value
                language {
                  name
                }
              }
              title
              body {
                value
                format
                processed
                summary
                summaryProcessed
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
