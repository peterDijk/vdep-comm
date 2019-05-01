import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { OrganisationCTA as StyledOrganisationCTA } from "../styles/Main";

export const OrganisationCTA = ({ language }) => {
  const { drupal } = useStaticQuery(graphql`
    query {
      drupal {
        nodeQuery(
          filter: { conditions: [{ field: "type", value: "organisation_cta" }] }
        ) {
          entities {
            entityTranslations {
              ... on DRUPAL_NodeOrganisationCta {
                uuid
                langcode {
                  value
                }
                title
                fieldCta
                fieldImage {
                  url
                }
              }
            }
          }
        }
      }
    }
  `);
  console.log(drupal);
  const cta = drupal.nodeQuery.entities[0].entityTranslations.find(
    lang => lang.langcode.value === language
  );
  return (
    cta && (
      <StyledOrganisationCTA imgUrl={cta.fieldImage.url}>
        <h3>{cta.title}</h3>
        <h2>{cta.fieldCta}</h2>
      </StyledOrganisationCTA>
    )
  );
};
