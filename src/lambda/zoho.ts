var request = require("request");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

function addToZoho(formData, callback) {
  request.post(
    {
      url:
        "https://creator.zoho.com/api/petervandijk/json/communicatie-over-grenzen-administratie/form/Add_prospect/record/add",
      formData,
    },
    (err, httpResponse, body) => {
      if (err) {
        callback({ err, httpResponse, body });
        console.error("Error: ", { err, httpResponse, body });
        return;
      }
      console.log("Success: ", { err, httpResponse, body });
      callback({ err, httpResponse, body });
    }
  );
}

exports.handler = function(event, context, callback) {
  console.log({ event });
  const lambdaResponse = response => {
    callback(null, {
      statusCode: 200,
      body: response.httpResponse.body,
    });
  };
  const formData = JSON.parse(event.body);
  addToZoho(formData, lambdaResponse);
};
