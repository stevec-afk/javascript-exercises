// condensed shorthand functions finally clicked! 

const convertToCelsius = f => (Math.round( (f-32)*(5/9) * 10 ) / 10);

const convertToFahrenheit = c => (Math.round( (c*(9/5)+32) *10 ) / 10 );

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
