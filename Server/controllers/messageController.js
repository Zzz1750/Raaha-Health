const nodemailer = require("nodemailer");
require('dotenv').config();
const bcrypt = require ('bcryptjs');
const Otp = require("../models/OTPmodel");
const { deleteMany } = require("../models/Usermodel");
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
  const { email } = req.body;
  try {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const salt = await bcrypt.genSalt(10);
    const hashedOTP = await bcrypt.hash(generatedOtp, salt);

    await Otp.create({
      email,
      otp: hashedOTP,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await transporter.sendMail({
      from: `"Raaha Health" <${process.env.ZOHO_ID}>`,
      to: email,
      subject: "Your OTP Code",
      html: `<b>Your OTP is: ${generatedOtp}</b>`,
    });

    return res.status(200).json({
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

exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  try {
    const record = await Otp.findOne({ email });

    if (!record || record.expiresAt < Date.now()) {
      return res.status(400).json({ message: "OTP expired or not found" });
    }

    const isMatch = await bcrypt.compare(otp, record.otp);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Optionally delete used OTP
    await Otp.deleteOne({ _id: record._id });

    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    console.error("Failed to verify OTP:", error);
    return res.status(500).json({
      status: 500,
      message: "Failed to verify OTP",
      error: error.message,
    });
  }
};

exports.resendOTP = async (req, res) => {
  const { email } = req.body;
  try {
    await Otp.deleteMany({ email });

     // Generate new OTP
     const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
     const salt = await bcrypt.genSalt(10);
     const hashedOTP = await bcrypt.hash(generatedOtp, salt);
 
     // Save OTP with expiration
     await Otp.create({
       email,
       otp: hashedOTP,
       expiresAt: Date.now() + 5 * 60 * 1000,
     });
     await transporter.sendMail({
      from: `"Raaha Health" <${process.env.ZOHO_ID}>`,
      to: email,
      subject: "Your New OTP Code",
      html: `<b>Your new OTP is: ${generatedOtp}</b>`,
    });

    return res.status(200).json({
      success: true,
      message: "New OTP sent successfully",
    });
  }
  catch(err){
    console.error("Failed to resend OTP:", err);
    return res.status(500).json({
      status: 500,
      message: "Failed to resend OTP",
      error: err.message,
    });
  }
    
}