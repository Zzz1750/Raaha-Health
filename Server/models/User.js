const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    phone: Number,
    password: String,
    role: String,
    State: String,
    City: String,
    pincode: Number,
    gender : String,
    dob: Date,
    
})

module.exports = mongoose.model("User", UserSchema);