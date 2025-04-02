const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(express.json());
router.use(authMiddleware)

router.get('/getDoctorDetails', doctorController.getDoctorById);

router.get('/getAllDoctors', doctorController.getDoctors);


module.exports = router;