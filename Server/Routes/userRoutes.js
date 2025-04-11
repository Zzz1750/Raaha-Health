const express = require('express');
const router = express.Router();
const User = require('../models/Usermodel');

const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(express.json());

router.get('/getUserDetails',authMiddleware, userController.getUserDetails);

router.get('/checkUsername', userController.checkUsername);

router.put('/updateUserDetails',authMiddleware, userController.updatePersonalInfo);

router.put('/updateUserAddress',authMiddleware, userController.updatePersonalAddress);

router.post('/sendOTP',userController.sendOTP);

module.exports = router;