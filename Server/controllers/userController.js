const User = require('../models/Usermodel');
const messageController = require('./messageController')
// ✅ User Profile (Protected Route)
exports.getUserProfile = (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
};

// 🔹 Logout (Invalidate Refresh Token)
exports.logout = (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(rt => rt !== token); // Remove token
    res.status(200).json({ message: "Logged out successfully" });
};

// ✅ Check if Username Exists
exports.checkUsername = async (req, res) => {
    const { userName } = req.query;
    if (!userName) {
        return res.status(400).json({ error: "Username is required" });
    }
    const userExists = await User.findOne({ username: userName });
    if (userExists) {
        return res.status(400).json({ error: "Username already exists" });
    } else {
        return res.status(200).json({ message: "Username is available" });
    }
};

// ✅ Send OTP 
exports.sendOTP = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    messageController.sendOTPMail(email);
    return res.status(200).json({ message: "OTP sent successfully!" });
};
