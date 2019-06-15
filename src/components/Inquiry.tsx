import * as React from "react";
import axios from "axios";
import {
  InquiryContainer,
  InputClean,
  InquirySuccess,
  InquiryFailure,
  ProgressContainer,
} from "../styles/Inquiry";
import { Button } from "../styles/buttons";
import { translate as t } from "../lib/i18n";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ReCaptcha } from "react-recaptcha-v3";

type State = {
  emailInput: string;
  response: "OK" | "FAILURE" | "BOT";
  pending: boolean;
  rcToken: string;
};

type Props = {
  language: string;
  interest: string;
};

export class Inquiry extends React.Component<Props, State> {
  state = {
    emailInput: "",
    response: null,
    pending: false,
    rcToken: null,
  };

  handleInputChange = e => {
    this.setState({
      emailInput: e.target.value,
    });
  };

  resetFailure = () => {
    this.setState({ response: null, pending: false });
  };

  verifyCallback = recaptchaToken => {
    this.setState({ rcToken: recaptchaToken });
  };

  autoResponseMail = () => {
    axios
      .post("/.netlify/functions/sendgrid", {
        email: this.state.emailInput.trim(),
        secret: process.env.GATSBY_SENDGRID,
      })
      .then(resp => {
        console.log(resp);
        this.setState({ response: "OK", pending: false });
      });
  };

  postToZohoAPI = () => {
    if (this.state.emailInput === "") {
      this.setState({ response: "FAILURE" });
    } else {
      this.setState({ pending: true });
      axios
        .post("/.netlify/functions/zoho", {
          url: "https://www.google.com/recaptcha/api/siteverify",
          secret: process.env.GATSBY_CAPTCHA_SERVER,
          response: this.state.rcToken,
        })
        .then(response => {
          console.log(response);
          if (response.data.score > 0.6) {
            axios
              .post("/.netlify/functions/zoho", {
                url:
                  "https://creator.zoho.com/api/petervandijk/json/communicatie-over-grenzen-administratie/form/Add_prospect/record/add",
                authtoken: process.env.GATSBY_ZOHO_AUTH,
                scope: "creatorapi",
                email: this.state.emailInput.trim(),
                interest: this.props.interest,
              })
              .then(resp => {
                console.log(resp);
                const zohoStatus = resp.data.formname[1].operation[1].status;
                if (zohoStatus === "Success") {
                  this.autoResponseMail();
                } else {
                  this.setState({ response: "FAILURE" });
                }
              });
          } else {
            this.setState({ response: "BOT" });
          }
        });
    }
  };

  render() {
    const { language } = this.props;
    return (
      <InquiryContainer id="inquiry">
        <ReCaptcha
          sitekey={process.env.GATSBY_CAPTCHA_CLIENT}
          action="CoG_inquiry_form"
          verifyCallback={this.verifyCallback}
        />
        <InputClean
          name="email"
          value={this.state.emailInput}
          onChange={this.handleInputChange}
          placeholder={t("INSERT_YOUR_EMAIL", language)}
        />
        {this.state.pending && (
          <ProgressContainer>
            <CircularProgress color="inherit" size={32} />
          </ProgressContainer>
        )}
        <Button onClick={this.postToZohoAPI}>{t("SEND", language)}</Button>
        {this.state.response === "OK" && (
          <InquirySuccess visible={true}>
            <p>
              {t("INQ_RESP_OK", language)}
              {this.state.emailInput}. {t("INQ_RESP_OK_JUNK", language)}
            </p>
          </InquirySuccess>
        )}
        {this.state.response === "FAILURE" && (
          <InquiryFailure visible={true}>
            <p>{t("INQ_RESP_ERR", language)}</p>
            <CloseIcon onClick={this.resetFailure} />
          </InquiryFailure>
        )}
        {this.state.response === "BOT" && (
          <InquiryFailure visible={true}>
            <p>{`reCAPTCHA score tells us you might be a bot. If you are a human reading this, email us at info@communicatieovergrenzen.nl`}</p>
            <CloseIcon onClick={this.resetFailure} />
          </InquiryFailure>
        )}
      </InquiryContainer>
    );
  }
}
