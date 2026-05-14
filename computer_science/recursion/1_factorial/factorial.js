const factorial = function (x) {
    if (!Number.isInteger(x) || x < 0) return;
    if (x === 0) return 1;
    return x * factorial(x-1);
};

// Do not edit below this line
module.exports = factorial;