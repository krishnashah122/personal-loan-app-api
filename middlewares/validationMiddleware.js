const { calculateAge } = require("../utils/calculateAge");

const validator = (req, res, next) => {
    
    const { dob, salary } = req.body;

    const age = calculateAge(dob);
    const monthlySalary = salary;

    if(age < 20 || monthlySalary < 25000){
        // If the user's age is less than 20 and user's salary is also less than 25000, don't allow to signup
        if(age < 20 && monthlySalary < 25000){
            return res.status(400).json({
                message: "You age is under 20 and your salary must be 25k or more."
            });
        }else if(age < 20){
            // If the user's age is less than 20, don't allow to signup
            return res.status(400).json({
                message: "Your age is under 20."
            });
        }else{
            // If the user salary is less than 25000, don't allow to signup
            return res.status(400).json({
                message: "Your salary must be 25k or more."
            });
        }
    }

    //Otherwise, signup the user
    next();
}

module.exports = validator;