function factorial (x) {
    if (x === 0) return 1;

    let total = 0;
    total+=factorial(total-1);
    return total;
};

// Do not edit below this line
module.exports = factorial;