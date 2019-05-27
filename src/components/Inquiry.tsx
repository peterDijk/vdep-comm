import * as React from "react";
import axios from "axios";
import {
  InquiryContainer,
  InputClean,
  InquirySuccess,
  InquiryFailure,
} from "../styles/Inquiry";
import { Button } from "../styles/buttons";
import { translate as t } from "../lib/i18n";

export class Inquiry extends React.Component<
  {
    language: string;
    interest: string;
  },
  { emailInput: string; response: "OK" | "FAILURE" }
> {
  state = {
    emailInput: "",
    response: null,
  };

  handleInputChange = e => {
    this.setState({
      emailInput: e.target.value,
    });
  };

  postToZohoAPI = () => {
    if (this.state.emailInput === "") {
      this.setState({ response: "FAILURE" });
    } else {
      axios
        .post("/.netlify/functions/zoho", {
          url:
            "https://creator.zoho.com/api/petervandijk/json/communicatie-over-grenzen-administratie/form/Add_prospect/record/add",
          authtoken: process.env.GATSBY_ZOHO_AUTH,
          scope: "creatorapi",
          email: this.state.emailInput,
          interest: this.props.interest,
        })
        .then(resp => {
          console.log(resp);
          const zohoStatus = resp.data.formname[1].operation[1].status;
          if (zohoStatus === "Success") {
            this.setState({ response: "OK" });
          } else {
            this.setState({ response: "FAILURE" });
          }
        });
    }
  };

  render() {
    const { language } = this.props;
    return (
      <React.Fragment>
        <InquiryContainer>
          <InputClean
            name="email"
            value={this.state.emailInput}
            onChange={this.handleInputChange}
            placeholder={t("INSERT_YOUR_EMAIL", language)}
          />
          <Button onClick={this.postToZohoAPI}>{t("MAKEINQ", language)}</Button>
          {this.state.response === "OK" && (
            <InquirySuccess visible={true}>
              <p>{`Bedankt! wij nemen contact op via ${
                this.state.emailInput
              }`}</p>
            </InquirySuccess>
          )}
          {this.state.response === "FAILURE" && (
            <InquiryFailure visible={true}>
              <p>{`Sorry, er is iets niet goed gegaan. Probeer opnieuw, of stuur een email naar info@communicatieovergrenzen.nl`}</p>
            </InquiryFailure>
          )}
        </InquiryContainer>
      </React.Fragment>
    );
  }
}
