/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Router, Link, Location } from "@reach/router";

import { Provider } from "../lib/Providers";

import Header from "./header";
import { NavBar } from "./NavBar";
import { Global } from "../styles";

import { StyledContainer } from "../styles/Main";

const Layout = props => {
  const { children, lang } = props;
  // console.log(props);
  return (
    <Location>
      {({ location }) => {
        // console.log(location);
        return (
          <Provider>
            <StaticQuery
              query={graphql`
                query SiteTitleQuery {
                  site {
                    siteMetadata {
                      title
                    }
                  }
                }
              `}
              render={data => (
                <React.Fragment>
                  <Global />
                  <StyledContainer>
                    <NavBar language={lang} />
                    <div>
                      <main>{children}</main>
                      <footer />
                    </div>
                  </StyledContainer>
                </React.Fragment>
              )}
            />
          </Provider>
        );
      }}
    </Location>
  );
};

export default Layout;
