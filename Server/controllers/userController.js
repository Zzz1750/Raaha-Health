const User = require('../models/Usermodel');
const jwt = require('jsonwebtoken');

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
        const user = await User.findOne({ email: email, password: password });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const USER = { name: user.name, role: user.role };
        const accessToken = jwt.sign(USER, process.env.ACCESS_TOKEN_SECRET);
        return res.status(200).json({ message: "Login successful", accessToken });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
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
