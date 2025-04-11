const nodemailer = require("nodemailer");
require('dotenv').config();


const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.ZOHO_ID,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

// send mail with defined transport object
exports.sendOTPMail = async(email) => {
    try {
        await transporter.sendMail({
            from: `"Maddison Foo Koch 👻" <${process.env.ZOHO_ID}>`, // sender address
            to: `${email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });
        console.log("Mail has been send !");
    } catch (error) {
        console.log(error)
    }
}
