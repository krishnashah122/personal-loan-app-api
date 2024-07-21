module.exports.calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);

    let yearOld = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();

    // If current month is less than the birth date's month, decrease age by 1
    if(month < 0 || month === 0 && today.getDate() < birthDate.getDate()){
        yearOld--;
    }

    return yearOld;
}