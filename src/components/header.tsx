import { Link, graphql, StaticQuery, useStaticQuery } from "gatsby";
import React from "react";

import { LanguageState } from "../lib/LanguageStateProvider";

import { COLOR } from "../styles/constants";
import { Header as StyledHeader, Hero, NavBar } from "../styles/Main";

const Header = () => {
  const { drupal } = useStaticQuery(graphql`
    query {
      drupal {
        nodeQuery(
          filter: { conditions: [{ field: "type", value: "header" }] }
        ) {
          entities {
            entityTranslations {
              ... on DRUPAL_NodeHeader {
                uuid
                langcode {
                  value
                }
                title
                fieldCogMessage
                fieldCogSubMessage
                fieldHeroImage {
                  alt
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <LanguageState>
      {({ language, setLanguage }) => {
        const header = drupal.nodeQuery.entities[0].entityTranslations.find(
          lang => lang.langcode.value === language
        );
        console.log(header);
        return (
          <StyledHeader>
            <NavBar />
            <Hero heroImgUrl={header.fieldHeroImage.url} />
          </StyledHeader>
        );
      }}
    </LanguageState>
  );
};

export default Header;
