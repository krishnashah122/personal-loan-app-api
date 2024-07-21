const { INTEREST_RATE } = require("../config/config");

module.exports.calculateRepayment = (amount, tenure) => {
    // Formula : E = P x R x (1+R)^N / [(1+R)^N-1]
    const P = amount;
    const R = INTEREST_RATE;
    const N = tenure;
    
    // Calculating monthly repayment amount
    const repaymentAmount = P * R * Math.pow((1 + R), N) / (Math.pow((1 + R), N) - 1);

    return Number.parseFloat(repaymentAmount.toFixed(2));
};