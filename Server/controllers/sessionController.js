const User = require('../models/Usermodel');
const Doctor = require('../models/Doctormodel');
const Session = require('../models/Sessionmodel');
const DoctorSlot = require('../models/DoctorSlotmodel');

// Book a new session
exports.bookSession = async (req, res) => {
    try {
        const session = new Session(req.body);
        await session.save();
        res.status(201).json(session);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all sessions
exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find().populate("doctorId");
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a session by ID
exports.getSessionById = async (req, res) => {
    try {
        const session = await Session.findById(req.params.id).populate("doctorId");
        if (!session) return res.status(404).json({ error: "Session not found" });
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update session details
exports.updateSession = async (req, res) => {
    try {
        const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Cancel a session
exports.cancelSession = async (req, res) => {
    try {
        await Session.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Session canceled" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
