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
        <form
          method="POST"
          action="https://creator.zoho.com/api/petervandijk/json/test/form/Website_respondees/record/add"
        >
          <input
            type="hidden"
            name="authtoken"
            value="9d5767b1d72675f78c9f495810c4b1ce"
          />
          <input type="hidden" name="scope" id="scope" value="creatorapi" />
          <input
            name="email"
            value={this.state.emailInput}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="Add Record" />
          {/* <button onClick={this.postToZohoAPI}>send</button> */}
        </form>
      </>
    );
  }
}
