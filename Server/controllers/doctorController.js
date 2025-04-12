const Doctor = require("../models/Doctormodel");
const DSlots = require("../models/DoctorSlotmodel")
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

exports.getSlotsbyID = async(req, res)=>{
    try{
        const doctorID  = req.query.ID
        const slots = await DSlots.find({ doctorId: doctorID})
        if(!slots)return res.status(404).json({error: "No slots found for this doctor on this date"});
        res.status(200).json(slots);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getAllDoctors = async(req, res)=>{
    try{
        const doctors = await Doctor.find()
        if(!doctors)return res.status(404).json({error: "No doctors found"});
        res.status(200).json(doctors);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getDoctorsByDate = async(req, res)=>{
    try{
        const date = req.query.date
        const selectedDate =new Date(date)
        console.log(selectedDate)
        const doctors = await DSlots.find({ date:   { $gte: selectedDate, $lte: selectedDate  }}).populate("doctorId")
        console.log("CONTROLLERS ",doctors)
        if(!doctors)return res.status(404).json({error: "No doctors found"});
        res.status(200).json(doctors);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getDoctorsByDate_and_slot= async(req, res)=> {
    try{
        const date = req.query.date
        const startTime = req.query.time
        const selectedDate =new Date(date)
        const doctors = await DSlots.find({ date: { $gte: selectedDate, $lte: selectedDate  } , slots: { $elemMatch: { startTime: startTime }}}).populate("doctorId");
        if(!doctors)return res.status(404).json({error: "No doctors found"});
        res.status(200).json(doctors);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

exports.getDoctorsbyJobtitle = async(req, res) => {
    try{
        const title = req.query.title

        const doctors = await Doctor.find({jobTitle : title})

        if(!doctors)return res.status(404).json({error: "No doctors found"});
        res.status(200).json(doctors);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}