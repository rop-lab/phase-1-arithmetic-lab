// Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2; // 31 * 2 = 62

// Create a variable called random that will generate a random integer greater than 0.
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

// Create a variable called num3 and num4
const num3 = 14;
const num4 = 5;

// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
const mod = num3 % num4; // 14 % 5 = 4

// Create an array of numbers
const numbers = [5, 12, 20, 7, 15];

// Create a variable called max that finds the highest number in a set; the value returned should be 20.
const max = Math.max(...numbers); // Finds the maximum value in the array

console.log("multiply:", multiply); // Output: 62
console.log("random:", random); // Output: Random integer greater than 0
console.log("mod:", mod); // Output: 4
console.log("max:", max); // Output: 20
