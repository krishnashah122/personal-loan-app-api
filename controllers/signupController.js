const { User } = require("../models/userModel");
const bcrypt = require("bcryptjs");
const { calculatePurchasingPower } = require("../utils/calculatePurchasingPower");


module.exports.signupUser = async (req, res) => {

    // Extracting details sent by the client from the request body
    const { name, email, password, phone, dob, salary} = req.body;

    // Check if the user already exists or not
    const userEmail = await User.findOne({ email: email });
    if(userEmail){
        return res.status(400).send({
            message: "Email has been already used."
        });
    }

    const userPhone = await User.findOne({ phone: phone });
    if(userPhone){
        return res.status(400).send({
            message: "Phone number has been already used."
        });
    }

    try{

        // Hashing the password using bcrypt library
        const hashedPassword = await bcrypt.hash(password, 10);

        const purchasingPowerAmount = calculatePurchasingPower(salary);
        
        // Creating a document by saving the user details in the database
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            phone: phone,
            DOB: dob,
            salary: salary,
            purchasingPower: purchasingPowerAmount,
            status: "Approved"
        });

        res.status(200).json({
            success: true,
            message: "User created successfully"
        });

    }
    catch(error){

        return res.status(500).json({
            success: false,
            message: error.message
        });

    }
}