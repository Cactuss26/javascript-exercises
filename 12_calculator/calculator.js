const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((init, val) => init + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((init, val) => init * val, 1);
};

const power = function(x, n) {
	return x ** n;
};

const factorial = function(n) {
  if (n == 1 || n == 0) {
    return 1;
  }

	return n * factorial(n - 1);
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
