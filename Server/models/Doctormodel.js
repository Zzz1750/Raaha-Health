const mongoose = require("mongoose");
const { Schema } = mongoose;

const DoctorSchema = new Schema({
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    password: { type: String, required: true }, // Hash before saving
    role: { type: String, default: "doctor" , required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    dob: { type: Date, required: true },
    language: { type: [String], default: [] },
    expertise: { type: [String], default: [] },
    qualification: { type: [String], default: [] },
    specialization: { type: [String], default: [] },
    price: {type: Number , default: 500},
    jobTitle:{type: String , default: "Counselor"},
    img:{type: String , default: ""},
    about:{type: String , default: "No description Available"},
    jobExperience:{type:[String] , default: ["Counselor at Raaha"]},
    sessionDuration:{type: Number , default: 30}, // in minutes
    sessionAvailability:{type:[String] ,enum: ["Online", "Offline"], default: ["Online"]},
    experience: {type: Number, default: 0},
    address: {
        building: { type: String },
        clinicName: { type: String },
        clinicLocation: { type: String },
        area: { type: String },
        city: { type: String },
        state: { type: String },
        pincode: { type: Number }
      },
    faq:{type: [{
        question: { type: String },
        answer: { type: String },
    }] , default: [] }
}, { timestamps: true }); // Adds createdAt & updatedAt


module.exports = mongoose.model("Doctor", DoctorSchema);