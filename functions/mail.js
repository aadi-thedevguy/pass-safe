import nodemailer from "nodemailer";

const user = process.env.USERNAME;
const pass = process.env.PASSWORD;
const transporter = nodemailer.createTransport({
  host: "smtp.ionos.com",
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user,
    pass,
  },
});

export const handler = async (req) => {
  const { email, password } = JSON.parse(req.body);
  const emailHtml = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" lang="en">
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
    <link
      rel="stylesheet"
      type="text/css"
      hs-webfonts="true"
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,500;0,600;0,700;1,600&amp;display=swap"
    />
    <title>Pass Safe</title>
    <meta property="og:title" content="Pass Safe" />
  </head>
  <div
    style="
      display: none;
      overflow: hidden;
      line-height: 1px;
      opacity: 0;
      max-height: 0;
      max-width: 0;
    "
  >
    Get your Random Password
    <div></div>
  </div>
  <body
    style="background-color:#fff;color:#121212;font-family:&#x27;Roboto Mono&#x27;, monospace"
  >
    <table
      align="center"
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="max-width: 37.5em"
    >
      <tbody>
        <tr style="width: 100%">
          <td>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="padding: 30px 20px"
            >
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="logo"
                      height="50"
                      src="https://pass-safe.netlify.app/logo.png"
                      style="
                        display: block;
                        outline: none;
                        border: none;
                        text-decoration: none;
                      "
                      width="50"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              width="100%"
              border="0"
              cellpadding="0"
              cellspacing="0"
              role="presentation"
              style="
                border: 1px solid rgb(0, 0, 0, 0.2);
                border-radius: 3px;
                overflow: hidden;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="
                        background: #050c1f;
                        color: #fff;
                        padding: 12px 18px;
                      "
                    >
                      <tbody>
                        <tr>
                          <td>
                            <img
                              alt="banner"
                              height="280"
                              src="https://pass-safe.netlify.app/logo.png"
                              style="
                                display: block;
                                outline: none;
                                border: none;
                                text-decoration: none;
                                max-width: 100%;
                                margin: 0px auto;
                              "
                              width="300"
                            />
                            <h1
                              style="
                                font-size: 30px;
                                font-weight: bold;
                                text-align: center;
                              "
                            >
                              🎉Congrats🎉
                            </h1>
                            <h1 style="font-size: 18px; text-align: center">
                              You have Successfully Generated your Password
                            </h1>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              align="center"
                              width="100%"
                              border="0"
                              cellpadding="0"
                              cellspacing="0"
                              role="presentation"
                              style="
                                padding: 20px;
                                padding-bottom: 0;
                                margin-bottom: 20px;
                              "
                            >
                              <tbody style="width: 100%">
                                <tr style="width: 100%">
                                  <td data-id="__react-email-column">
                                    <p
                                      style="
                                        font-size: 14px;
                                        line-height: 24px;
                                        margin: 16px 0;
                                      "
                                    >
                                      Here is your random password:
                                    </p>
                                    <code
                                      style="
                                        font-weight: 600;
                                        font-size: 20px;
                                        display: inline-block;
                                        padding: 14px 4.5%;
                                        width: 90.5%;
                                        background-color: #f4f4f4;
                                        border-radius: 5px;
                                        border: 1px solid #eee;
                                        color: rgb(0, 0, 0, 0.6);
                                      "
                                      >${password}</code
                                    >
                                    <hr
                                      style="
                                        width: 100%;
                                        border: none;
                                        border-top: 1px solid #eaeaea;
                                      "
                                    />
                                    <p
                                      style="
                                        font-size: 14px;
                                        line-height: 24px;
                                        margin: 16px 0;
                                        padding-left: 32px;
                                      "
                                    >
                                      <b>KEEP IT SAFE!</b>
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellpadding="0"
                      cellspacing="0"
                      role="presentation"
                      style="background-color: #f5f8fa; width: 100%"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <p
                              style="
                                font-size: 18px;
                                line-height: 24px;
                                margin: 16px 0;
                                text-align: center;
                                color: #99acc2;
                              "
                            >
                              Made with 💖 by
                              <a
                                href="https://thedevguy.in"
                                color="#050c1f"
                                style="color: #067df7; text-decoration: none"
                                target="_blank"
                              >
                                TheDevGuy
                              </a>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>

  `;

  try {
    const options = {
      from: `"Pass Safe" <${user}>`, // sender address
      to: email, // list of receivers
      subject: "You have Successfully Generated your Password",
      text: `Thank You For Using Pass Safe. Here is your Random Generated Password: ${password} . Keep it Safe`,
      html: emailHtml,
    };
    const info = await transporter.sendMail(options);
    console.log("Message sent: %s " + info.messageId);

    if (info.accepted) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          status: "success",
          message: "Email Sent",
        }),
      };
    } else if (info.rejected) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          status: "failed",
          message: "Wrong Email Address",
        }),
      };
    }
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        status: "failed",
        message: error.message || "Internal Server Error, Try again Later",
      }),
    };
  }
};
