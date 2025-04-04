const User = require('../models/Usermodel');
const messageController = require('./messageController')

// ✅ User Profile (Protected Route)
exports.getUserDetails = async(req, res) => {
    const userID = req.query.ID
    try {
        console.log(userID)
        const user =  await User.findById({_id: userID},{ password: 0 ,updatedAt: 0, __v: 0 });
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: "Internal Errorrs"})   
    }
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
