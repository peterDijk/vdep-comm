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
import { NavBar } from "./NavBar";
import { Global } from "../styles";

import { StyledContainer } from "../styles/Main";

type Props = {
  lang: string;
};
type State = {
  navWhite: boolean;
};

class Layout extends React.Component<Props, State> {
  state = {
    navWhite: false,
  };
  changeNavColor = (scrollY, innerHeight) => {
    const threshold = innerHeight * 0.52;
    return scrollY > threshold;
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (
        this.changeNavColor(window.scrollY, window.innerHeight) !==
        this.state.navWhite
      ) {
        this.setState({ navWhite: !this.state.navWhite });
      }
    });
  }
  render() {
    const { lang } = this.props;
    return (
      <Provider>
        <React.Fragment>
          <Global />
          <StyledContainer id="StyledContainer">
            <NavBar language={lang} switchBg={this.state.navWhite} />

            <div>
              <main>{this.props.children}</main>
              <footer />
            </div>
          </StyledContainer>
        </React.Fragment>
      </Provider>
    );
  }
}
export default Layout;
