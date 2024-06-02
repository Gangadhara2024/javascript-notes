/**     VARIABLES.
 *  Variables are used to store data.
 *  JavaScript provides three keywords to declare variables: (var, let, and const)
 */
// 111. LET

// console.log(x);  // Cannot access 'x' before initialization.

// let x = 10;
// if (true) {
//   let x = 20;   // This 'x' is different from the one outside the block.
//   x = 77;       // we can reassign values.
//   console.log(x); // 20
// }
// console.log(x); // 10

// let => allows you to declare variables that are block-scoped. This means they exist only within the block (enclosed by curly braces {}) where they are defined or declared.

//  222. CONST

// const => which cannot be reassigned or redeclared.

// console.log(z);  // Cannot access 'z' before initialization.
// const z = 10;
// // z = 22;       // which cannot be reassigned or redeclared.
// console.log(z);

// 333. VAR

// Variables declared with var are function-scoped or globally scoped

// console.log(y); // undefined in var.
// var y = 10;
// if (true) {
//   var y = 20; // This modifies the 'y' defined outside the block
//   console.log(y); // 20
// }
// console.log(y); // 20

// console.log(2 == '2'); // compares only values but doesnot care about datatypes.
// console.log(4 === '4'); // it does strict comparision. values are same but datatypes are not same.

//   ##### FUNCTIONS.

//  1. Regular Functions:

// function add(a, b) {
//     console.log(a+b);
// }
// add(1, 4);

// function add(a, b) {
//     return a + b;
// }
// let r = add(1, 4);
// console.log(r);

// 2. Arrow Functions:

// const add = (a, b) => {
//     return a + b;
// };

// 3.HIGHER ORDER FUNCTIONS.

// Higher-order functions are functions that can take other functions as arguments or return functions as their results

// let numbers = [1, 2, 3, 4, 5];

// function double(x) {
//   return x + 1;
// }

// let doubledNumbers = numbers.map(double);
// console.log(doubledNumbers);

//  map() is a higher-order function because it takes the double function as an argument.

//  4. Immediately Invoked Function Expressions (IIFE):
// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed as soon as they are defined.

// (function() {
//     // This code is executed immediately
//     console.log("This function is immediately invoked.");
// })();

//       #### ARRAY METHODS.

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
// let arr = [1, 2, 3];
// let res = arr.push(4);
// console.log(arr);     // arr is now [1, 2, 3, 4]

// 2. pop(): Removes the last element from an array and returns that element.
// let arr = [1, 2, 3, 4];
// let lastElement = arr.pop();
// console.log(arr);    // lastElement is 4, arr is now [1, 2, 3]

// 3. shift(): Removes the first element from an array and returns that element.
// let arr = [1, 2, 3];
// let firstElement = arr.shift();
// console.log(arr);    // firstElement is 1, arr is now [2, 3]

// // 4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr);   // arr is now [1, 2, 3]

// 5. concat(): joins 2 arrays.
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let newArr = arr1.concat(arr2);
// console.log(newArr);    // newArr is [1, 2, 3, 4]

// 6. slice(): returns a shallow copy of a portion of an array into a new array object

// let arr = [1, 2, 3, 4, 5];
// // 0  1  2  3  4 as index
// let sliced1 = arr.slice(1, 3); // extracts elements from index 1 to index 2 (n-1)
// console.log(sliced1); // Output: [2, 3]

// let sliced2 = arr.slice(2); // extracts elements from index 2 to the end of the array
// console.log(sliced2); // Output: [3, 4, 5]

// let sliced3 = arr.slice(-2); // extracts the last two elements of the array
// console.log(sliced3); // Output: [4, 5]

// let sliced4 = arr.slice(-3, -1); // extracts elements from the third to the second-to-last element of the array
// console.log(sliced4); // Output: [3, 4]

// 7. splice(): removes no of elements.
// array.splice(start, deleteCount, item1, item2, ...)

// let arr = [1, 2, 3, 4, 5];

// // Remove elements starting from index 2, remove 2 elements
// arr.splice(2, 2);
// console.log(arr); // Output: [1, 2, 5]

// // Remove 1 element starting from index 1, and add 6 and 7
// arr.splice(1, 1, 6, 7);  // 1st index(1) always removes  element.
// console.log(arr); // Output: [1, 6, 7, 5]

// // Add elements starting from index 3, without removing any elements
// arr.splice(3, 0, 8, 9);  // 1st index(1)  always removes element.
// console.log(arr); // Output: [1, 6, 7, 8, 9, 5]
