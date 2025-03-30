const express = require('express');
const router = express.Router();
const User = require('../models/Usermodel');

const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(express.json());

router.get('/profile',authMiddleware, userController.getUserProfile);

router.get('/checkUsername', userController.checkUsername);


router.post('/sendOTP',userController.sendOTP);

module.exports = router;