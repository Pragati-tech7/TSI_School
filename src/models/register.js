const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    guardian_name: {
        type: String,
        required: true
    },
    dob : {
        type: String,
        required: true
    },
    admission_class : {
        type: String,
        required: true
    },
    last_class : {
        type: String,
        required : true
    },
    prev_school_name : {
        type: String,
        required : true

    },
    email : {
        type: String,
        required : true
    },
    number : {
        type: String,
        required : true,
        unique : true
    },
    message : {
        type: String,

    },
})

// Create a collection

const Register = new mongoose.model("Register", studentSchema);
module.exports = Register;