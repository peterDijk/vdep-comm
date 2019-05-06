var request = require("request");
function addToZoho(postData) {
  var clientServerOptions = {
    uri: "http://" + clientHost + "" + clientContext,
    body: postData,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function(error, response) {
    console.log(error, response.body);
    return;
  });
}

exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World",
  });
};
