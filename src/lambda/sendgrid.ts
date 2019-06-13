const sgMail = require("@sendgrid/mail");

exports.handler = function(event, context, callback) {
  const formData = JSON.parse(event.body);
  const msg = {
    to: formData.email,
    from: "reserveringen@communicatieovergrenzen.nl",
    subject:
      "Communicatie over Grenzen aanvraag ontvangen - Communicatie over Grenzen received",
    text:
      "Hartelijk bedankt voor uw interesse in Communicatie over Grenzen. Wij nemen zo spoedig mogelijk contact met u op. - Thank you for your interest in Communications across Borders. We will respond to your query as soon as possible.",
    html:
      "<strong>Hartelijk bedankt voor uw interesse in Communicatie over Grenzen. Wij nemen zo spoedig mogelijk contact met u op. - Thank you for your interest in Communications across Borders. We will respond to your query as soon as possible.</strong>",
  };
  sgMail.setApiKey(formData.secret);
  sgMail
    .send(msg)
    .then(resp => {
      console.log(resp);
      callback(null, { statusCode: 200, body: "ok" });
    })
    .catch(err => {
      callback(null, { statusCode: 500, body: err });
    });
};
