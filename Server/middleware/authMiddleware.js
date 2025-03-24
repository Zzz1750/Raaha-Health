require('dotenv').config();
const jwt = require('jsonwebtoken');

function authMiddleware (req,res,next){

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401).json({ message: "Access Denied: No token provided" });

    try {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json({ message: "Access Denied: Invalid Token" });
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
}

module.exports = authMiddleware ;