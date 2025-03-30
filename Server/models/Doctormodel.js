const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    password: { type: String, required: true }, // Hash before saving
    role: { type: String, default: "doctor" , required: true },
    building:{type: String , required: true},
    area:{ type: String , required: true},
    state: { type: String, required: true },
    city: { type: String, required: true },
    pincode: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dob: { type: Date, required: true },
    Cliniclocation:{ type: String },
    language: { type: [String], default: [] },
    expertise: { type: [String], default: [] },
    qualification: { type: [String], default: [] },
    specialization: { type: [String], default: [] },
    price: {type: Number , default: 500}
}, { timestamps: true }); // Adds createdAt & updatedAt


module.exports = mongoose.model("Doctor", DoctorSchema);