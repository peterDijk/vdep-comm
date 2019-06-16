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
  slug?: string;
};

export const NavBar = ({ language, switchBg, textBlue, slug }: Props) => {
  const bigEnough = useMediaQuery("(min-width: 700px)");
  return (
    <StyledNavBar switchBg={switchBg}>
      <LogoBox>
        <Link to="/">
          <Logo>
            <Image fileName={"VDEP_Vignet_Logo.png"} />
          </Logo>
        </Link>
      </LogoBox>
      {bigEnough && (
        <Menu>
          <MenuItem>
            <Link to={`${language === "en-gb" ? "/en" : ""}/about-us`}>
              {t("ABOUTUS", language)}
            </Link>
          </MenuItem>
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
          <MenuItem>
            <Link to={`${language === "en-gb" ? "/en" : ""}/faq`}>
              {t("FAQs", language)}
            </Link>
          </MenuItem>
        </Menu>
      )}
      <NavBarRight>
        <LangBox switchBg={switchBg}>
          <Link to={`/en/${slug ? slug : ""}`}>
            <LangOption isActive={language === "en-gb"}>EN</LangOption>
          </Link>
          /
          <Link to={`/${slug ? slug : ""}`}>
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
