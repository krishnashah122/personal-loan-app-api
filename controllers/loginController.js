const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../config/config");

module.exports.loginUser = async (req, res) => {

    const { email, password } = req.body;

    // If email or password is missing, ask user to enter it
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message: "Please enter all the details"
        });
    }

    try{

        // Check whether the user is present in the database or not
        const user = await User.findOne({ email: email });
        // If user not found, return message "user does not exist"
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User does not exist"
            });
        }

        // If user found, check whether the password is correct or not
        const isMatch = await bcrypt.compare(password, user.password);

        // If password is incorrect, return message "password is incorrect"
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }

        // If password is correct, generate a token and send it to the user
        const token = await jwt.sign({ email: user.email }, JWT_SECRET, {expiresIn : '1h'});

        res.status(200).json({
            success: true,
            message: "Login successfully",
            token: token
        });

    }catch(error){

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}