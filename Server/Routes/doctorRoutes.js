const express = require('express');
const router = express.Router();

const doctorController = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(express.json());
router.use(authMiddleware)

router.get('/getDoctorDetails', doctorController.getDoctorById);

router.get('/getAllDoctors', doctorController.getAllDoctors);

router.get('/getSlotsbyID', doctorController.getSlotsbyID)

router.get('/getDoctorsByDate', doctorController.getDoctorsByDate);

router.get('/getDoctorsByDate_and_slot', doctorController.getDoctorsByDate_and_slot)

router.get('/getDoctorsbyJobtitle', doctorController.getDoctorsbyJobtitle)


module.exports = router;