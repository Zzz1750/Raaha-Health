
const jwt = require('jsonwebtoken');
const User = require('../models/Usermodel'); 
const bcrypt = require ('bcrypt');

const generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

let refreshTokens = []; // Should be stored in DB/Redis in production

// ✅ Register User
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
        const salt=await bcrypt.genSalt(10);
        console.log("Passweord: ", userDetails.password ,"Type of Password: ",typeof userDetails.password, "salt: " , salt)
        const hashedPassword = await bcrypt.hash(userDetails.password, salt);

        const newUser = new User({
            username: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
            password: hashedPassword,
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


// ✅ Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Email and password required" });

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const userPayload = { id: user._id, name: user.username, role: user.role };
        const accessToken = generateAccessToken(userPayload);
        const refreshToken = await generateRefreshToken(userPayload);

        res.cookie("refreshToken",refreshToken , {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict",
            secure: true,  // Set to 'true' in production (HTTPS)
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days,
        });

        refreshTokens.push(refreshToken);
        return res.status(200).json({ message: "Login successful", accessToken });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error"});
    }
};

// ✅ Refresh Token
exports.refreshToken = (req, res) => {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken) return res.status(401).json({ error: "Refresh token required" });
    
    try {
        const decoded = jwt.verify(refreshToken , process.env.REFRESH_TOKEN_SECRET)
       
        const newAccessToken= jwt.sign(
            { user: decoded },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        )
        res.json({accessToken : newAccessToken})
    } catch (error) {
        return res.status(403).json({ message: "Forbidden: Invalid refresh token" });
    }
};

// ✅ Logout User
exports.logout = (req, res) => {
    res.clearCookie("refreshToken", { 
        httpOnly: true, 
        secure: true,  // Ensure this is true if using HTTPS
        sameSite: "Strict" ,
        path:"/" // Required for cross-origin authentication
    });
    
    return res.status(200).json({ message: "Logged out successfully" });
};
