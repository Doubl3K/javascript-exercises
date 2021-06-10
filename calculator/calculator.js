const add = function(num1, num2) {
	return num1 = num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 = num1 - num2;
};

const sum = function(arr) {
	let num = 0;
	for (var i = 0; i < arr.length; i++) {
		num = num + arr[i];
		//console.log(num);
}
	return num;
};

const multiply = function(arr) {
		let num = 1;
		for (var i = 0; i < arr.length; i++) {
			num = num * arr[i];
			//console.log(num);
		}
		return num;

};

const power = function(num, power) {
// second number is trips around loop
let firstnum = num;
for (var i = 1; i < power; i++) {
	num = num * firstnum;
}
return num;
};

const factorial = function(num) {
let product = 1;
let increment = 1;

if (num == 0 && 1) {
	return 1;
}
for (var i = 0; i < num; i++) {
	product = product * increment;
	increment++;
}
return product;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
/*
function takes as many values as are given
function calculates a solution
function returns solution
*/
