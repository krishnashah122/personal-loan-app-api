const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
const { User } = require("../models/userModel");

module.exports.getUser = async (req, res) => {

    const token = req.headers.authorization.split(" ")[1];

    try{

        // Extracting user's email from token by decoding token using JWT secret key
        const decoded = await jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ email: decoded.email });

        // Preparing the required response in JSON format
        const response = {
            purchasePowerAmount: user.purchasingPower,
            phone: user.phone,
            email: user.email,
            registedDate: user.registeredDate.toISOString().split("T")[0],
            DOB: user.DOB.toISOString().split("T")[0],
            monthlySalary: user.salary
        };

        res.status(200).send(response);

    }catch(error){

        res.status(500).json({
            message: "Failed to fetch the details."
        });

    }
}