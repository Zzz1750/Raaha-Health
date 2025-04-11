const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  // service: 'gmail',
  host: "smtp.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_ID,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});
transporter.verify((err, success) => {
  if (err) {
    console.error("SMTP Config Error:", err);
  } else {
    console.log("SMTP Server is ready to take messages");
  }
});

exports.sendOTPMail = async (req, res) => {
  console.log(email)
  try {
    await transporter.sendMail({
      from: `"Raaha Health" <${process.env.ZOHO_ID}>`,
      to: email,
      subject: "Your OTP Code",
      text: "Here is your OTP.",
      html: "<b>Your OTP is: 123456</b>", // Replace with dynamic OTP if needed
    });

    console.log("Mail has been sent!");
    res.status(200).json({
      success: true,
      message: "OTP Sent Successfully",
    });
  } catch (error) {
    console.error("Failed to send OTP:", error);
    return res.status(500).json({
      status: 500,
      message: "Failed to send OTP",
      error: error.message,
    });
  }
};
