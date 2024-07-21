const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    phone: {
        type: String,
        unique: true,
        required: [true, "Phone number is required"]
    },
    DOB: {
        type: Date,
        required: [true, "Date of birth is required"]
    },
    registeredDate: {
        type: Date,
        default: Date.now
    },
    salary: {
        type: Number,
        required: [true, "Salary is required"]
    },
    purchasingPower: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["Pending", "Approved"],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };