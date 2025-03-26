const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.addUser);
router.post('/login', authController.loginUser);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);

module.exports = router;
