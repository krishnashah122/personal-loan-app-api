const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { INTEREST_RATE, JWT_SECRET } = require("../config/config");
const { calculateRepayment } = require("../utils/calculateRepayment");


module.exports.borrowMoney = async (req, res) => {

    const token = req.headers.authorization.split(" ")[1];

    try{

        const decoded = await jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ email: decoded.email });

        const { amount, tenure } = req.body;

        // If borrow amount is greater than the user's purchasing power, don't allow user to borrow money
        if(amount > user.purchasingPower){
            return res.status(400).json({
                message: "You don't have enough purchasing power to borrow this amount"
            });
        }

        // Update the user's purchasing power after he/she borrow money
        const montlyRepayment = calculateRepayment(amount, tenure);
        user.purchasingPower -= amount;
        
        // Save the updated date in the database
        await user.save();

        res.status(200).json({
            message: "Money borrowed successfully",
            purchasingPower: user.purchasingPower,
            monthlyRepaymentAmount: montlyRepayment
        });

    }catch(error){

        res.status(500).json({
            message: "Something went wrong",
        });

    }
    
}