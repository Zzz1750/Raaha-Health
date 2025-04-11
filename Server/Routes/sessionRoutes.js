const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const sessionController= require('../controllers/sessionController')

router.use(express.json());

router.use(authMiddleware)

router.get('/getSessions', sessionController.getSessions);

router.post('/createSession', sessionController.bookSession);

router.post('/cancelSession',sessionController.cancelSession);



module.exports = router;