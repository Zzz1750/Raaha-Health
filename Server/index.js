require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/User" , require("./Routes/userRoutes"));
// app.use("/User/Login" , require("./Routes/user_routes/login"));
app.get("/", async (req, res) => {
    res.send("Hello, World!");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});