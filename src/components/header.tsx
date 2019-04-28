import { Link, graphql, StaticQuery, useStaticQuery } from "gatsby";
import React from "react";

import { LanguageState } from "../lib/LanguageStateProvider";
import { translate as t } from "../lib/i18n";

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
  SiteTitleContainer,
  LogoContainer,
  CoG,
  LogoTextOne,
  LogoTextTwo,
  LogoTextThree,
  SitePayoff,
} from "../styles/Main";
import { Button } from "../styles/buttons";

const Header = ({ language }) => {
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
  const header = drupal.nodeQuery.entities[0].entityTranslations.find(
    lang => lang.langcode.value === language
  );
  console.log(header);
  return header ? (
    <StyledHeader>
      <NavBar>
        <LogoBox>
          <Link to="/">
            <Logo>
              <Image fileName={"VDEP_Vignet_Logo.png"} />
            </Logo>
          </Link>
        </LogoBox>
        <Menu>
          <MenuItem>{t("ABOUTUS", language)}</MenuItem>
          <MenuItem>{t("OURSEMINARS", language)}</MenuItem>
          <MenuItem>{t("FAQs", language)}</MenuItem>
        </Menu>
        <NavBarRight>
          <LangBox>
            <Link to="/en">
              <LangOption isActive={language === "en"}>EN</LangOption>
            </Link>
            /
            <Link to="/">
              <LangOption isActive={language === "nl"}>NL</LangOption>
            </Link>
          </LangBox>
          <Button>{t("MAKEINQ", language)}</Button>
        </NavBarRight>
      </NavBar>
      <Hero heroImgUrl={header.fieldHeroImage.url}>
        <SiteTitleContainer>
          <LogoContainer>
            <CoG>
              <Image fileName={"190425_CoG_Logo_WO-title.png"} />
            </CoG>
            <h1>
              <LogoTextOne>{t("COMMUNICATION", language)}</LogoTextOne>
              <LogoTextTwo>{t("ACCROSS", language)}</LogoTextTwo>
              <LogoTextThree>{t("BORDERS", language)}</LogoTextThree>
            </h1>
          </LogoContainer>
          <SitePayoff>
            <h2>{header.fieldCogMessage}</h2>
            <h3>{header.fieldCogSubMessage}</h3>
          </SitePayoff>
        </SiteTitleContainer>
      </Hero>
    </StyledHeader>
  ) : null;
};

export default Header;
