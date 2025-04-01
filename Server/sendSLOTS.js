const mongoose = require("mongoose");
const DoctorSlot = require("./models/DoctorSlotmodel"); // Ensure correct path to model
const connectDB = require('./config/db');
async function insertSlots() {
  try {
    connectDB()
    const doctorIds = [
      "67ea5f196b766c6754b16c5e", "67ea5f196b766c6754b16c5a", "67ea5f196b766c6754b16c5d",
      "67ea5f196b766c6754b16c5b", "67ea5f196b766c6754b16c55", "67ea5f196b766c6754b16c57",
      "67ea5f196b766c6754b16c59", "67ea5f196b766c6754b16c5c", "67ea5f196b766c6754b16c56",
      "67ea5f196b766c6754b16c58"
    ];

    const slotsData = doctorIds.map((doctorId, index) => ({
      doctorId,
      date: new Date(`2025-04-${index + 1}`), // Assigns different dates dynamically
      slots: [
        { startTime: "09:00 AM", endTime: "09:30 AM", isBooked: false },
        { startTime: "09:30 AM", endTime: "10:00 AM", isBooked: false },
        { startTime: "10:00 AM", endTime: "10:30 AM", isBooked: true }, // One slot booked for variety
      ]
    }));

    await DoctorSlot.insertMany(slotsData);
    console.log("Doctor slots inserted successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error inserting doctor slots:", error);
  }
}

insertSlots();