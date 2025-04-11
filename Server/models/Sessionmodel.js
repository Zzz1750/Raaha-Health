const mongoose = require('mongoose');
const { Schema } = mongoose;

const Sessionschema = new Schema ({
    doctorID:{type: Schema.Types.ObjectId  ,ref: "Doctor", required:true},
    userID:{type: Schema.Types.ObjectId ,ref : "User", required:true},
    sessionDate:{type: Date , required:true},
    sessionTime:{type: String , required:true},
    sessionMode:{type: String , enum:["offline" , "online"] , required: true},
    modeType:{type:String  },
    price:{type: Number }
},{ timestamps: true });

module.exports = mongoose.model("Sessions" , Sessionschema)