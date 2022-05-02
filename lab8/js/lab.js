/*
 * Author: Zachary Hollaway <zhollawa@ucsc.edu>
 * Created: April 27th, 2022
 * License: Public Domain
 */

// number arrays
 var numberArray = [2, 4, 6, 8, 10]
 console.log("Here is my first array: ", numberArray);

 var numberArray2 = [5, 9, 6, 7, 27, 1]
 console.log("Here is my second array: ", numberArray2);

// function will multiply x by 2 and give the result
 function multiplyBy2(x) {
   return (x * 2);
 };

 //function will multiply x by 4, then minus the result by 5
 function coolMath(x) {
   return ((x * 4) - 5);
 };

//testing the functions
console.log("What is double of 25? ", multiplyBy2(25));
console.log("What is double of 69? ", multiplyBy2(69));
console.log("Does the other function work if we throw in 4? ", coolMath(4));

//mapping of the array
result = numberArray.map(function(x) {
  return (x * 2);
});
console.log("What is double of my first array? ", result);

coolResult = numberArray2.map(function(x) {
  return ((x * 4) - 1);
});
console.log("Now how about a cool result? ", coolResult);
