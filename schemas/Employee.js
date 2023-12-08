const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
    _id:{
        type: String,
        required:true,
        unique: true,
    },
    fullname: {
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    accountno:{
        type:Number,
        required:true
    },
    salary:{
        type:Number,
        required:true 
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const Employee = mongoose.model('employee', EmployeeSchema);
module.exports=Employee;
