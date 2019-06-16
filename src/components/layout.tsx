import React from "react";
import Grid from "@material-ui/core/Grid";
import { Provider } from "../lib/Providers";
import { NavBar } from "./NavBar";
import { Global } from "../styles";

import { StyledContainer } from "../styles/Main";

import { loadReCaptcha } from "react-recaptcha-v3";
import { Footer } from "./Footer";

type Props = {
  lang: string;
  navBlue?: boolean;
  slug?: string;
};
type State = {
  navWhite: boolean;
};

class Layout extends React.Component<Props, State> {
  state = {
    navWhite: false,
  };
  changeNavColor = (scrollY, innerHeight) => {
    const threshold = innerHeight * 0.04;
    return scrollY > threshold;
  };

  componentDidMount() {
    loadReCaptcha(process.env.GATSBY_CAPTCHA_CLIENT);
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
    const { lang, navBlue, slug } = this.props;
    return (
      <Provider>
        <React.Fragment>
          <Global />
          <Grid container spacing={0}>
            <StyledContainer id="StyledContainer">
              <Grid item xs={12}>
                <NavBar
                  language={lang}
                  switchBg={this.state.navWhite}
                  textBlue={navBlue}
                  slug={slug}
                />
              </Grid>
              <Grid item xs={12}>
                <main>{this.props.children}</main>
                <Footer language={lang} />
              </Grid>
            </StyledContainer>
          </Grid>
        </React.Fragment>
      </Provider>
    );
  }
}
export default Layout;
