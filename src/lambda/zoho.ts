var request = require("request");

function serverSideRequest(formData, callback) {
  request.post(
    {
      url: formData.url,
      formData,
    },
    (err, httpResponse, body) => {
      if (err) {
        console.log("Error", { err, httpResponse, body });
        callback({ err, httpResponse, body });
        return;
      }
      console.log("Success", { err, httpResponse, body });
      callback({ err, httpResponse, body });
    }
  );
}

exports.handler = function(event, context, callback) {
  console.log({ lambdaHandlerEvent: event });
  const lambdaResponse = response => {
    callback(null, {
      statusCode: 200,
      body: response.httpResponse.body,
    });
  };
  const formData = JSON.parse(event.body);
  serverSideRequest(formData, lambdaResponse);
};
