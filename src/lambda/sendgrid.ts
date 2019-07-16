const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  const formData = JSON.parse(event.body);
  const msg = {
    to: formData.email,
    from: 'reserveringen@communicatieovergrenzen.nl',
    subject:
      'Communicatie over Grenzen aanvraag ontvangen - Communicatie over Grenzen received',
    text:
      'Hartelijk bedankt voor uw interesse in Communicatie over Grenzen. Wij nemen zo spoedig mogelijk contact met u op. - Thank you for your interest in Communications across Borders. We will respond to your query as soon as possible.',
    html: templateHtml,
  };
  sgMail.setApiKey(formData.secret);
  sgMail
    .send(msg)
    .then(resp => {
      console.log(resp);
      callback(null, { statusCode: 200, body: 'ok' });
    })
    .catch(err => {
      callback(null, { statusCode: 500, body: err });
    });
};

const templateHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <!--<![endif]-->
  <!--[if (gte mso 9)|(IE)]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
  <!--[if (gte mso 9)|(IE)]>
    <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
    </style>
    <![endif]-->

  <style type="text/css">
    body,
    p,
    div {
      font-family: arial;
      font-size: 14px;
    }

    body {
      color: #000000;
    }

    body a {
      color: #1188E6;
      text-decoration: none;
    }

    p {
      margin: 0;
      padding: 0;
    }

    table.wrapper {
      width: 100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    img.max-width {
      max-width: 100% !important;
    }

    .column.of-2 {
      width: 50%;
    }

    .column.of-3 {
      width: 33.333%;
    }

    .column.of-4 {
      width: 25%;
    }

    @media screen and (max-width:480px) {

      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }

      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }

      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }

      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }

      img.max-width {
        height: auto !important;
        max-width: 480px !important;
      }

      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }

      .columns {
        width: 100% !important;
      }

      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }

  </style>
  <!--user entered Head Start-->

  <!--End Head user entered-->
</head>

<body>
  <center class="wrapper" data-link-color="#1188E6"
    data-body-style="font-size: 14px; font-family: arial; color: #000000; background-color: #ffffff;">
    <div class="webkit">
      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#ffffff">
        <tr>
          <td valign="top" bgcolor="#ffffff" width="100%">
            <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0"
              border="0">
              <tr>
                <td width="100%">
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td>
                        <!--[if mso]>
                          <center>
                          <table><tr><td width="600">
                          <![endif]-->
                        <table width="100%" cellpadding="0" cellspacing="0" border="0"
                          style="width: 100%; max-width:600px;" align="center">
                          <tr>
                            <td role="modules-container"
                              style="padding: 0px 0px 0px 0px; color: #000000; text-align: left;" bgcolor="#ffffff"
                              width="100%" align="left">

                              <table class="module preheader preheader-hide" role="module" data-type="preheader"
                                border="0" cellpadding="0" cellspacing="0" width="100%"
                                style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
                                <tr>
                                  <td role="module-content">
                                    <p></p>
                                  </td>
                                </tr>
                              </table>

                              <table class="wrapper" role="module" data-type="image" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;">
                                <tr>
                                  <td style="font-size:6px;line-height:10px;padding:0px 0px 0px 0px;" valign="top"
                                    align="center">
                                    <a href="http://www.communicatieovergrenzen.nl"><img class="max-width" border="0"
                                        style="display:block;color:#000000;text-decoration:none;font-family:Helvetica, arial, sans-serif;font-size:16px;max-width:80% !important;width:80%;height:auto !important;"
                                        src="https://marketing-image-production.s3.amazonaws.com/uploads/f17fe65adb53a63230e52faeda95cf36db8aa8a25dcc5295b1985e90e6fc7e703edc642f8a19ae0feeddea103dd12e44cf5b049dfccc648f8c00bf9817d660a7.png"
                                        alt="" width="480"></a>
                                  </td>
                                </tr>
                              </table>

                              <table class="module" role="module" data-type="text" border="0" cellpadding="0"
                                cellspacing="0" width="100%" style="table-layout: fixed;">
                                <tr>
                                  <td style="padding:18px 0px 18px 0px;line-height:22px;text-align:inherit;"
                                    height="100%" valign="top" bgcolor="">
                                    <div><strong
                                        style="caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-family: Helvetica; font-size: 12px; font-style: normal; font-variant-caps: normal; text-size-adjust: auto;">Hartelijk
                                        bedankt voor uw interesse in Communicatie over Grenzen. Wij nemen zo spoedig
                                        mogelijk contact met u op. </strong></div>

                                    <div>&nbsp;</div>

                                    <div><strong
                                        style="caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-family: Helvetica; font-size: 12px; font-style: normal; font-variant-caps: normal; text-size-adjust: auto;">Thank
                                        you for your interest in Communications across Borders. We will respond to your
                                        query as soon as possible.</strong><span class="sg-image"
                                        data-imagelibrary="%7B%22width%22%3A%221%22%2C%22height%22%3A%221%22%2C%22alt_text%22%3A%22%22%2C%22alignment%22%3A%22%22%2C%22border%22%3A0%2C%22src%22%3A%22https%3A//u10968301.ct.sendgrid.net/wf/open%3Fupn%3Dkh-2BMcQj1q1Hr7C33GY2zWAllzBCTEFWuyuJ-2BB8zEL6X3kr8x74UgAJSZ4BEcekzs0LHXT34Fep-2Fnp8d3WPcqI2ioUERXcKRY3wXRGopcLv8yQNBJeNZTDm-2FlhhCpGDVVtS5cDNpAnURZ7MSnfp11zpJGlgYTMFmxSvHYIkwwu5yorW9y6-2BTyCn5iDU4HFhuMcXj8XdLAxe-2FfQfPPlJPI6Ba8DoFSsAgOTw2Q1tsJpY4-3D%22%2C%22classes%22%3A%7B%22sg-image%22%3A1%7D%7D"><img
                                          alt="" border="0" height="1"
                                          src="https://u10968301.ct.sendgrid.net/wf/open?upn=kh-2BMcQj1q1Hr7C33GY2zWAllzBCTEFWuyuJ-2BB8zEL6X3kr8x74UgAJSZ4BEcekzs0LHXT34Fep-2Fnp8d3WPcqI2ioUERXcKRY3wXRGopcLv8yQNBJeNZTDm-2FlhhCpGDVVtS5cDNpAnURZ7MSnfp11zpJGlgYTMFmxSvHYIkwwu5yorW9y6-2BTyCn5iDU4HFhuMcXj8XdLAxe-2FfQfPPlJPI6Ba8DoFSsAgOTw2Q1tsJpY4-3D"
                                          style="caret-color: rgb(0, 0, 0); color: rgb(0, 0, 0); font-family: Helvetica; font-size: 12px; font-style: normal; font-variant-caps: normal; font-weight: normal; text-size-adjust: auto; height: 1px !important; width: 1px !important;"
                                          width="1" /></span></div>

                                    <div>&nbsp;</div>

                                  </td>
                                </tr>
                              </table>
                              <div data-role="module-unsubscribe" class="module unsubscribe-css__unsubscribe___2CDlR"
                                role="module" data-type="unsubscribe"
                                style="color:#444444;font-size:12px;line-height:20px;padding:16px 16px 16px 16px;text-align:center">
                                <div class="Unsubscribe--addressLine">
                                  <p class="Unsubscribe--senderName"
                                    style="font-family:Arial,Helvetica, sans-serif;font-size:12px;line-height:20px">
                                    Communicatie over Grenzen</p>
                                  <p style="font-family:Arial,Helvetica, sans-serif;font-size:12px;line-height:20px">
                                    <span class="Unsubscribe--senderAddress">Bert van Dijk</span> - <span
                                      class="Unsubscribe--senderCity"><a
                                        href="mailto:info@communicatieovergrenzen.nl">info@communicatieovergrenzen.nl</a></span>
                                    - <span class="Unsubscribe--senderState"><a href="tel:+31 6 53 32 12 71">+31 6 53 32
                                        12
                                        71</a></span> </p>
                                </div>
                                <!-- <p style="font-family:Arial,Helvetica, sans-serif;font-size:12px;line-height:20px"><a
                                    class="Unsubscribe--unsubscribeLink"
                                    href="<%asm_group_unsubscribe_raw_url%>">Unsubscribe</a> - <a
                                    class="Unsubscribe--unsubscribePreferences"
                                    href="<%asm_preferences_raw_url%>">Unsubscribe Preferences</a></p> -->
                              </div>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]>
                          </td></tr></table>
                          </center>
                          <![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>

</html>
`;
