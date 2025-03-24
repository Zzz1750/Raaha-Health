const User = require('../models/Usermodel');
const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' }); // Short-lived token (15 min)
};

const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' }); // Refresh token (7 days)
};

// In-memory storage for refresh tokens (Use DB/Redis for production)
let refreshTokens = [];

// ✅ User Profile (Protected Route)
exports.getUserProfile = (req, res) => {
    res.json({ message: "Welcome to your profile", user: req.user });
};

// ✅ User Login (JWT Authentication)
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const userPayload = { name: user.name, role: user.role };
        const accessToken = generateAccessToken(userPayload);
        const refreshToken = generateRefreshToken(userPayload);

        refreshTokens.push(refreshToken); // Store refresh token

        return res.status(200).json({ message: "Login successful", accessToken, refreshToken });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};
// 🔹 Refresh Token Endpoint
exports.refreshToken = (req, res) => {
    const { token } = req.body;
    if (!token) return res.status(401).json({ error: "Refresh token required" });

    if (!refreshTokens.includes(token)) return res.status(403).json({ error: "Invalid refresh token" });

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid refresh token" });

        const newAccessToken = generateAccessToken({ name: user.name, role: user.role });
        return res.status(200).json({ accessToken: newAccessToken });
    });
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

// ✅ Register New User
exports.addUser = async (req, res) => {
    const { userDetails } = req.body;
    if (!userDetails) {
        return res.status(400).json({ error: "User details are required" });
    }
    try {
        const existingUser = await User.findOne({ email: userDetails.email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const newUser = new User({
            username: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
            password: userDetails.password, // 🔴 Hash before saving in real-world apps
            role: "user",
            state: userDetails.state,
            city: userDetails.city,
            pincode: userDetails.pincode,
            gender: userDetails.gender,
            dob: userDetails.date_of_birth
        });
        const savedUser = await newUser.save();
        return res.status(201).json({ message: "User created successfully", user: savedUser });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// ✅ Send OTP 
exports.sendOTP = async (req, res) => {
    const { email } = req.query;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    return res.status(200).json({ message: "OTP sent successfully!" });
};
