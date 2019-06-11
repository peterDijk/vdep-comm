import * as React from "react";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
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

type Props = {
  language: string;
  switchBg: boolean;
  textBlue?: boolean;
};

export const NavBar = ({ language, switchBg, textBlue }: Props) => {
  const bigEnough = useMediaQuery("(min-width: 700px)");
  return (
    <StyledNavBar switchBg={switchBg} textBlue={textBlue}>
      <LogoBox>
        <Link to="/">
          <Logo>
            <Image fileName={"VDEP_Vignet_Logo.png"} />
          </Logo>
        </Link>
      </LogoBox>
      {bigEnough && (
        <Menu>
          <MenuItem>{t("ABOUTUS", language)}</MenuItem>
          <Link to="/seminar-middle-east">
            <MenuItem>{t("OURSEMINARS", language)}</MenuItem>
          </Link>
          <MenuItem>{t("FAQs", language)}</MenuItem>
        </Menu>
      )}
      <NavBarRight>
        <LangBox switchBg={switchBg}>
          <Link to="/en">
            <LangOption isActive={language === "en-gb"}>EN</LangOption>
          </Link>
          /
          <Link to="/">
            <LangOption isActive={language === "nl-nl"}>NL</LangOption>
          </Link>
        </LangBox>
        <a href="#inquiry">
          <Button>{t("MAKEINQ", language)}</Button>
        </a>
      </NavBarRight>
    </StyledNavBar>
  );
};
