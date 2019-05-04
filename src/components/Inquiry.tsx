import * as React from "react";
import axios from "axios";

export class Inquiry extends React.Component {
  state = {
    emailInput: "placeholder",
  };

  handleInputChange = e => {
    this.setState({
      emailInput: e.target.value,
    });
  };

  postToZohoAPI = () => {
    axios
      .post(
        "https://creator.zoho.com/api/petervandijk/json/test/form/Website_respondees/record/add",
        {
          authtoken: "9d5767b1d72675f78c9f495810c4b1ce",
          scope: "creatorapi",
          email: this.state.emailInput,
        }
      )
      .then(resp => console.log(resp));
  };

  render() {
    return (
      <>
        <input
          name="email"
          value={this.state.emailInput}
          onChange={this.handleInputChange}
        />
        <button onClick={this.postToZohoAPI}>send</button>
      </>
    );
  }
}
