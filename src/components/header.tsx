import { Link, graphql, StaticQuery, useStaticQuery } from "gatsby";
import React from "react";

import { LanguageState } from "../lib/LanguageStateProvider";
import { translate as t } from "../lib/i18n";

import { COLOR } from "../styles/constants";
import Image from "./image";
import {
  Header as StyledHeader,
  Hero,
  NavBar,
  Logo,
  LogoBox,
  Menu,
  MenuItem,
  NavBarRight,
  LangBox,
  LangOption,
} from "../styles/Main";
import { Button } from "../styles/buttons";

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
            <NavBar>
              <LogoBox>
                <Logo>
                  <Image fileName={"VDEP_Vignet_Logo.png"} />
                </Logo>
              </LogoBox>
              <Menu>
                <MenuItem>{t("ABOUTUS", language)}</MenuItem>
                <MenuItem>{t("OURSEMINARS", language)}</MenuItem>
                <MenuItem>{t("FAQs", language)}</MenuItem>
              </Menu>
              <NavBarRight>
                <LangBox>
                  <LangOption
                    isActive={language === "en"}
                    onClick={() => setLanguage("en")}
                  >
                    EN
                  </LangOption>
                  /
                  <LangOption
                    isActive={language === "nl"}
                    onClick={() => setLanguage("nl")}
                  >
                    NL
                  </LangOption>
                </LangBox>
                <Button>{t("MAKEINQ", language)}</Button>
              </NavBarRight>
            </NavBar>
            <Hero heroImgUrl={header.fieldHeroImage.url} />
          </StyledHeader>
        );
      }}
    </LanguageState>
  );
};

export default Header;
