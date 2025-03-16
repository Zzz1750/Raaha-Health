const express = require('express');
const router = express.Router();

router.get('/signup', async (req, res) => {
    const {username}= req.body
    res.send("Check user");
});

router.post('/signup', async (req, res) => {});

module.exports = router;