const mongoose = require("mongoose");
const { MONGODB_URI } = require("./config");

const connectDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Database connection failed.", error.message);
    }
};

module.exports = connectDB;