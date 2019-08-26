
// Question 1:
// Input: 3
// Output:
// 3: Another sheep jump over the fence
// 2: Another sheep jump over the fence
// 1: Another sheep jump over the fence
// All sheep jumped over the fence

// const total = function(sheep) {
//   //Base case
//   if(sheep <= 0){
//     return console.log('All sheep jumped over the fence');

//   }
//   //General case
//   console.log(`${sheep}: Another sheep jump over the fence`);
//   total(sheep- 1);

// };

// total(3);

//Question 2:

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
//The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

// const powerCalculator = function (base, exp) {
//   //Base case
//   if (exp < 0) {
//     return 'exponenet should be >= 0';
    
//   }

//   //General case
//   powerCalculator(base, exp - 1); 
//   return Math.pow(base, exp);

// };

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));


//Question 7:
// Write a recursive function that finds the factorial of a given number. 
//The factorial of a number can be found by multiplying that number by each number between itself and 1. 
//For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// const factorial = function (num) {
//   //Base case
//   if (num === 1) {
//     return 1;

//   }
//   //General case

//   return num * factorial(num - 1);

// };

// console.log(factorial(5));
// console.log(factorial(4));