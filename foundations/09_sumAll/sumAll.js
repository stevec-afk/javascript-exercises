const sumAll = function(int1, int2) {
    let total = 0;

    if (int1 < 0 || int2 < 0) return "ERROR";
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    
    const start = int1 < int2 ? int1 : int2;
    const end = int1 > int2 ? int1 : int2;

    for (let i=start; i<=end; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
