const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/validate', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }
    try {
        const user = await User.findOne({ email: email, password: password });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        return res.status(200).json({ message: "Login successful", user: user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;