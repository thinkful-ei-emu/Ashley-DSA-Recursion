
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

// //Question 2:

// // Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
// //The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)
// // powerCalculatorRec(10,2) should return 100
// // powerCalculatorRec(10,-2) should return exponent should be >= 0

// const powerCalculator = function (base, exp) {
//   //Base case
//   if (exp < 0) {
//     return 'exponenet should be >= 0';
    
//   }

//   //General case
//   powerCalculator(base, exp - 1); 
//   return Math.pow(base, exp);

// };

// console.log(powerCalculator(10, 2));
// console.log(powerCalculator(10, -2));


// // Question 3:
// // Write a function that reverses a string. 
// // Take a string as input, reverse the string, and return the new string.

// const reverseStr = function(str) {
//   //Base case
//   if(str.length === 0){    
//     return '';
//   }
//   //General case  
//   let newChar = str[str.length-1];
//   return newChar + reverseStr(str.slice(0, str.length-1));
// };

// console.log(reverseStr('cat'));


// //Question 4:
// // input 2 should get output 3 (given n give me the trianglular number)
// // input 3 ouput 6

// const triangularNum = function(n) {
//   if(n === 0) {
//     return 0;
//   }

//   return n + triangularNum(n - 1);

// };
// console.log(triangularNum(2));
// console.log(triangularNum(3));

//Question 5:
// Input: 02/20/2020
// Output: 02202020

// const strSplitter = function(str) {

//   if(str.length === 0) {
//     return '';
//   }

//   const char = str.charAt(0);
//   if(char !== '/'){
//     return char + strSplitter(str.slice(1));
//   }

//   return strSplitter(str.slice(1));
  
// };

// console.log(strSplitter('02/20/2020'));

//Question 6

const fibonacci = function(n) {
  //base code

  if(n < 2) {
    return n;
  } 

  //general code
  return fibonacci(n- 1) + fibonacci(n - 2);
 
};

console.log(fibonacci(7));


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