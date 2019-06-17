import React from "react";

import { translate as t } from "../lib/i18n";

import Image from "./image";
import {
  Header as StyledHeader,
  Hero,
  SiteTitleContainer,
  LogoContainer,
  CoG,
  LogoTextOne,
  LogoTextTwo,
  LogoTextThree,
  SitePayoff,
} from "../styles/Header";

const Header = ({ header, language }) => (
  <StyledHeader>
    <Hero heroImgUrl={header.data.hero_image.url}>
      <SiteTitleContainer>
        <LogoContainer>
          <CoG>
            <Image fileName={"190425_CoG_Logo_WO-title.png"} />
          </CoG>
          <h1>
            <LogoTextOne>{t("COMMUNICATION", language)}</LogoTextOne>
            <LogoTextTwo>{t("ACROSS", language)}</LogoTextTwo>
            <LogoTextThree>{t("BORDERS", language)}</LogoTextThree>
          </h1>
        </LogoContainer>
        <SitePayoff>
          <h2>{header.data.cog_message.text}</h2>
          <h3>{header.data.cog_sub_message.text}</h3>
        </SitePayoff>
      </SiteTitleContainer>
    </Hero>
  </StyledHeader>
);

export default Header;
