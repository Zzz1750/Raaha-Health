const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoctorSlotSchema = new Schema({
    doctorId: { type: Schema.Types.ObjectId , ref: "Doctor", required: true }, // Reference to Doctor
    date: { type: Date, required: true },
    slots: [{
        startTime: { type: String, required: true }, // e.g., "09:00 AM"
        endTime: { type: String, required: true },   // e.g., "09:30 AM"
        isBooked: { type: Boolean, default: false }  // To track bookings
    }]
}, { timestamps: true });

module.exports = mongoose.model("DoctorSlots", DoctorSlotSchema);
