import * as React from "react";
import { Link } from "gatsby";
import Image from "./image";
import { translate as t } from "../lib/i18n";

import {
  NavBar as StyledNavBar,
  Logo,
  LogoBox,
  Menu,
  MenuItem,
  NavBarRight,
  LangBox,
  LangOption,
} from "../styles/NavBar";
import { Button } from "../styles/buttons";

export const NavBar = ({ language, switchBg }) => (
  <StyledNavBar switchBg={switchBg}>
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
  </StyledNavBar>
);
