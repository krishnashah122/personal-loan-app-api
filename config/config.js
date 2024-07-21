const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env")});

const config = {
    PORT : process.env.PORT || 3000,
    MONGODB_URI : process.env.MONGODB_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    INTEREST_RATE : process.env.INTEREST_RATE
};

module.exports = config;