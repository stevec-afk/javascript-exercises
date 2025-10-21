const leapYears = function(year) {
    if (year%4 === 0){
        if (year%100 == 0 && year%400 != 0){
            return false;
        }
        else return true;
    }
    else return false;
};

// Condensed 1-line version:
// return (year%4 ===0 && (year%100 !== 0 || year%400 == 0))


// Do not edit below this line
module.exports = leapYears;
