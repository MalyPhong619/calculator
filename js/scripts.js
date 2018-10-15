var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multipy = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var resultAdd = add(number1, number2);
var resultSub = subtract(number1, number2);
var resultMul = multipy(number1, number2);
var resultDiv = divide(number1, number2);






alert(resultAdd + " , " + resultSub + " , " + resultMul + " , " + resultDiv);
