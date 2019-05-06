var request = require("request");

function addToZoho(postData, callback) {
  var clientServerOptions = {
    uri: "https://c.zoho.com/api/petervandijk/json/test/form/Website_respondees/record/add",
    body: postData,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function (error, response) {
    console.log(error, response.body);
    callback(response.body)
    return;
  });
}

exports.handler = function (event, context, callback) {
  const postData = {
    email: 'lambda@netlify.com',
    authtoken: '9d5767b1d72675f78c9f495810c4b1ce',
    scope: 'creatorapi',
  };
  const doIt = (response) => {
    callback(null, {
      statusCode: 200,
      body: response,
    });
  }
  addToZoho(postData, doIt);

};
