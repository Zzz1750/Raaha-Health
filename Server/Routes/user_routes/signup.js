const express = require('express');
const router = express.Router();

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
    const {userDetails}= req.body;
    if(!userDetails){
        return res.status(400).json({ error: "User details are required" });
    }
    console.log(userDetails);

});


router.get('/sendOTP',async (req,res)=>{
    const {email} = req.query;
    if(!email){
        return res.status(400).json({error:"Email is required"});
    }
    
});
module.exports = router;