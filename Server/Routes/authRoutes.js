const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Users

router.post('/register', authController.addUser);
router.post('/login', (req, res) => authController.loginUser(req, res, 'user'));
router.post('/refresh-token', (req, res) => authController.refreshToken(req, res, 'user'));
router.post('/logout', (req, res) => authController.logout(req, res, 'user'));

// Doctor Routes
router.post('/doc/login', (req, res) => authController.loginUser(req, res, 'doctor'));
router.post('/doc/refresh-token', (req, res) => authController.refreshToken(req, res, 'doctor'));
router.post('/doc/logout', (req, res) => authController.logout(req, res, 'doctor'));

module.exports = router;
