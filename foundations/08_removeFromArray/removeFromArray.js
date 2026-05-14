const removeFromArray = function(array, ...filters) {
    return array.filter(value => !filters.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
