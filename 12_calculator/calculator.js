const add = function(x, y) {
  return x + y;
};

const subtract = function(x , y) {
	return x - y;
};

const sum = function(nums) {
	return nums.reduce((total, number) => total + number, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, number) => total * number);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(x) {
  // we also should be checking for negative numbers, but there is no test for that.
  if (x < 2) {
    return 1; 
  }

	let total = 1;
  for (i=2;i<=x;i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
