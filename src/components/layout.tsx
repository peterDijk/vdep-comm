/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Provider } from "../lib/Providers";

import Header from "./header";
import { Global } from "../styles";

import { StyledContainer } from "../styles/Main";

const Layout = ({ children }) => (
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
            <Header />
            {/* <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
              <footer />
            </div> */}
          </StyledContainer>
        </React.Fragment>
      )}
    />
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
