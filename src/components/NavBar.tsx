import * as React from "react";
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery";
import { Link, graphql } from "gatsby";
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
import Dropdown from "./Dropdown";
import {
  DropdownContainer as StyledDropdownContainer,
  DropdownList as StyledDropdownList,
  DropdownListItem,
} from "../styles/Dropdown";

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
          <Dropdown
            autoClose={true}
            handler={(onToggle, isOpen) => (
              <MenuItem onMouseEnter={onToggle}>
                {t("OURSEMINARS", language)}
              </MenuItem>
            )}
          >
            <StyledDropdownContainer>
              <StyledDropdownList>
                {[
                  {
                    title: t("SEM_ARABISCH", language),
                    link: "seminar-middle-east",
                  },
                  { title: t("SEM_RUSS", language), link: "seminar-russia" },
                  {
                    title: t("SEM_WESTAFRICA", language),
                    link: "seminar-west-africa",
                  },
                ].map(item => (
                  <Link
                    key={item.title}
                    to={`${language === "en-gb" ? "/en/" : "/"}${item.link}`}
                  >
                    <DropdownListItem>{item.title}</DropdownListItem>
                  </Link>
                ))}
              </StyledDropdownList>
            </StyledDropdownContainer>
          </Dropdown>
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
