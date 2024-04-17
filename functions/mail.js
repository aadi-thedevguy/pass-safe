import nodemailer from "nodemailer";
import { render } from '@react-email/render';
import Email from "./emails";

const user = process.env.USER;
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
  const emailHtml = render(Email({ password : password }));

  try {
    const options = {
      from: `"PASS SAFE" <${user}>`, // sender address
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
