require("dotenv").config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB= async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/User/Signup" , require("./Routes/user_routes/signup"));
app.use("/User/Login" , require("./Routes/user_routes/login"));
app.get("/", async (req, res) => {
    res.send("Hello, World!");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});