const Doctor = require("../models/Doctormodel");

// Create a new doctor
exports.createDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        await doctor.save();
        res.status(201).json(doctor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all doctors
exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a doctor by ID
exports.getDoctorById = async (req, res) => {
    try {
        const ID = req.query.ID;
        console.log(ID)
        const doctor = await Doctor.findById(ID);
        if (!doctor) return res.status(404).json({ error: "Doctor not found" });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Doctor removed" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
