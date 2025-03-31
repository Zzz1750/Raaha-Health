const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const sessionController= require('../controllers/sessionController')

router.use(express.json());

router.get('/getSessions',authMiddleware, sessionController.getSessions);

router.get('/checkUsername', userController.checkUsername);

router.post('/sendOTP',userController.sendOTP);



module.exports = router;