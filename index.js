
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

// const fibonacci = function(n) {
//   //base code

//   if(n <= 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   } 

//   //general code
//   return fibonacci(n- 1) + fibonacci(n - 2);
 
// };

// console.log(fibonacci(7));


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

//Question 8:

// const maze = function(labyrinth, position=0, row, col, direction='S',path){
//   if(col<0 || row < 0){
//       return;
//   }
//   if(col>=labyrinth[0].length || row>=labyrinth.length){
//       return;
//   }
 
//   path[position] = direction;
//   position++;

//   if (labyrinth[row][col] === 'e'){
//       PrintPath(path, 1, position - 1);
//       return;
//   }
//   if (labyrinth[row][col] === ' ') {
//       // The current cell is free. Mark it as visited
//       labyrinth[row][col] = 's';
//       // Invoke recursion to explore all possible directions
//       maze(labyrinth,position,row, col - 1, 'L',path); // left
//       maze(labyrinth,position,row - 1, col, 'U',path); // up
//       maze(labyrinth,position,row, col + 1, 'R',path); // right
//       maze(labyrinth,position,row + 1, col, 'D',path); // down
//       // Mark back the current cell as free
//       //lab[row][col] = ' ';
//   }
//   // Remove the last direction from the path
//   position--;

// }
// const PrintPath = function (path, startPos, endPos){
//   console.log('Found path to the exit: ');
//   console.log(path);
// }


//Question 9:

//Question 10:
//input east
//output 24 combinations
const anagrams = function(prefix, str) {
  //base case
  if(str.length <= 1) {
    console.log(`the anagram is ${prefix}${str}`);

    
  }
  else {

    for(let i = 0; i < str.length; i++) {
     
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let restLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + restLetters);
    
    }  
  }     
};
console.log(anagrams('', 'east'));

//Question 11:

//Question 12: 

// const binaryRep = function(num) {

//   //base case

//   if(num <= 0) {
//     return '';
//   }

//   let binary = num % 2;
//   return binaryRep(Math.floor(num/2)) + binary;
// }

// console.log(binaryRep(5));