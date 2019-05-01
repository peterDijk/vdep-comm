import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import ReactHtmlParser from "react-html-parser";
import { StoryTelling as StyledStory } from "../styles/Main";

export const Story = ({ language }) => {
  const { drupal } = useStaticQuery(graphql`
    query {
      drupal {
        articles: nodeQuery(
          filter: { conditions: [{ field: "type", value: "article" }] }
        ) {
          entities {
            ... on DRUPAL_NodeArticle {
              fieldIdentifier
            }
            entityTranslations {
              ... on DRUPAL_NodeArticle {
                uuid
                langcode {
                  value
                }
                title
                fieldIdentifier
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
  `);

  const articleEntities = drupal.articles.entities;
  const story = articleEntities
    .find(article => article.fieldIdentifier === "story")
    .entityTranslations.find(transl => transl.langcode.value === language);

  console.log(story);
  return (
    <StyledStory>
      <h2>{story.title}</h2>
      {ReactHtmlParser(story.body.processed)}
    </StyledStory>
  );
};
