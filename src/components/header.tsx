import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import { LanguageState } from "../lib/LanguageStateProvider";

import { COLOR } from "../styles/constants";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: COLOR.VDEP_BLUE,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: COLOR.WHITE,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <LanguageState>
        {({ availableLanguages, language, setLanguage }) => (
          <div>
            <span onClick={() => setLanguage("nl")}>NL</span>
            &nbsp;/&nbsp;
            <span onClick={() => setLanguage("en")}>EN</span>
          </div>
        )}
      </LanguageState>
    </div>
    <Link to="/">index</Link>
    <Link to="/page-2">page-2</Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
