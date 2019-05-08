import React from "react";
import Grid from "@material-ui/core/Grid";
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
    const threshold = innerHeight * 0.12;
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
          <Grid container spacing={0}>
            <StyledContainer id="StyledContainer">
              <Grid item xs={12}>
                <NavBar language={lang} switchBg={this.state.navWhite} />
              </Grid>
              <Grid item xs={12}>
                <main>{this.props.children}</main>
                <footer />
              </Grid>
            </StyledContainer>
          </Grid>
        </React.Fragment>
      </Provider>
    );
  }
}
export default Layout;
