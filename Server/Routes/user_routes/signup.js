const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const users = [{ name: "john_doe" }, { name: "jane_doe" }];

router.get('/checkUsername', async (req, res) => {
    const {userName}= req.query;
    if (!userName) {
        return res.status(400).json({ error: "Username is required" });
    }
    const userExists = users.find((user) => user.name === userName);
    if (userExists) {
        return res.status(400).json({ error: "Username already exists" });
    }
    else {
        return res.status(200).json({ message: "Username is available" });
    }
});

router.post('/addUser', async (req, res) => {
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
            password: userDetails.password, // Hash before saving in real apps
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
});


router.get('/sendOTP',async (req,res)=>{
    const {email} = req.query;
    if(!email){
        return res.status(400).json({error:"Email is required"});
    }
    
});
module.exports = router;