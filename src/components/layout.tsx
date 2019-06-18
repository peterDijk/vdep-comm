import React from "react";
import Grid from "@material-ui/core/Grid";
import { Provider } from "../lib/Providers";
import { NavBar, SeminarMenu } from "./NavBar";
import { Global } from "../styles";
import CookieConsent from "react-cookie-consent";
import { translate as t } from "../lib/i18n";

import { StyledContainer } from "../styles/Main";

import { loadReCaptcha } from "react-recaptcha-v3";
import { Footer } from "./Footer";
import { COLOR } from "../styles/constants";
import { Link } from "gatsby";

type Props = {
  lang: string;
  navBlue?: boolean;
  slug?: string;
  seminars: SeminarMenu[];
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
    const { lang, navBlue, slug, seminars } = this.props;
    return (
      <Provider>
        <React.Fragment>
          <Global />
          <Grid container spacing={0}>
            <StyledContainer id="StyledContainer">
              <Grid item xs={12}>
                <CookieConsent
                  debug={false}
                  location="bottom"
                  buttonText={t("COOKIE_CONSENT", lang)}
                  cookieName="Communicatieovergrenzen.nl_consent"
                  cookieValue={true}
                  style={{ background: COLOR.VDEP_BLUE }}
                  buttonStyle={{
                    color: COLOR.VDEP_DARK_BLUE,
                    fontSize: "1.6rem",
                    background: COLOR.VDEP_GREEN,
                    borderRadius: ".5rem",
                    fontFamily: '"Roboto Slab", "sans-serif"',
                    height: "4.5rem",
                    fontWeight: 600,
                  }}
                  expires={14}
                  acceptOnScroll={false}
                >
                  <span style={{ fontSize: "1.4rem", textAlign: "center" }}>
                    This site uses cookies and other tracking technologies to
                    assist with navigation and your ability to provide feedback,
                    analyse your use of our products and services, assist with
                    our promotional and marketing efforts, and provide content
                    from third parties.{" "}
                    <Link
                      to={`${lang === "en-gb" ? "/en" : ""}/privacy-statement`}
                    >
                      Cookie policy
                    </Link>
                  </span>
                </CookieConsent>
                <NavBar
                  language={lang}
                  switchBg={this.state.navWhite}
                  textBlue={navBlue}
                  slug={slug}
                  seminars={seminars}
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
