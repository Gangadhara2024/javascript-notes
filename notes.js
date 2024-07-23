// In JavaScript, data types can be categorized into two groups: primitive and non-primitive.

// PRIMITIVE DATATYPES: These are the basic building blocks of data. They are immutable (cannot be changed) and are passed by value.

// var name = "John"; // String
// var age = 30; // Number
// var isStudent = true; // Boolean
// var car = null; // Null
// var city; // Undefined
// var id = Symbol("id"); // Symbol

// primitive datatypes are stored in stack memeory and not growable in size.

//  NON-PRIMITIVE (Reference) Types: These are more complex types that are made up of multiple values and are mutable (can be changed).

// 1. objects.
// 2. Array.
// 3. Function.

// Non-primitive datatypes are stored in heap memeory and growable in size.

/**                                             VARIABLES.
 *  Variables are used to store data.
 *  JavaScript provides three keywords to declare variables: (var, let, and const)
 */

/**
 * whenever we run a piece of js code it goes through two phases.
 *
 * 1. CREATION PHASE.
 *   ==> all code will be scanned by js engine.
 *   ==> it figure out variables and these variables will be allocated some data.
 *   ==> process of allocation of data to variables after scanning is called as HOISTING.
 *   ==> variables which are declared with let, const, var will be initialises with 'undefined.
 *   ==> variables which are declared with let, const are kept in TEMPORAL DEAD ZONE (TDZ).
 *   ==> variables which are declared with 'function' keyword gets actual value(fully hoisted).
 *
 * 2. EXCUTION PHASE.
 *   ==> program gets excuted line by line.
 *  */

// 1. @@@@ LET:
// ==> let declared variables can be reassigned as
// let a = 3;
// a = 11;
// console.log(a);

// ==> we can't access 'a' before initialisation.
// console.log(a);
// let a = 22;

// 2. @@@@ CONST
// 1 ==> during decleration value has to be given
// (const a = 2;)  it should not be (const a;)

// we cannot reassign in const as in let we do.
// const b = 22;
// b = 55;
// console.log(b);

// 2 ==> we can't access 'b' before initialisation.
// console.log(b);
// const b = 22;

// 3. @@@@ VAR:
// VAR declared variables can be reassigned as in LET.

// ==> we get undefined in case of var.
// console.log(c);
// var c = 22;

//                                     ##### FUNCTIONS.

//  1. REGULAR / NAMED Functions:

// function add(a, b) {
//     console.log(a+b);
// }
// add(1, 4);
// here a, b are parameters.

// function add(a, b) {
//     return a + b;
// }
// let r = add(1, 4);
// console.log(r)

//  2. ANONYMOUS FUNCTIONS.

// let callme = function (a,b) {
//   return a + b;
// };
// const data = callme(2, 4);
// console.log(data);
// here function name is not present so it is called as anonymous function.

//  3. Arrow Functions:

// const add = (a, b) => {
//     return a + b;
// };

//  4.HIGHER ORDER FUNCTIONS.

// Higher-order functions are functions that takes or returns another function.
// function callme() {
//   let fn = function () {
//     console.log("inside fn");
//   };
//   return fn;
// }
// const result = callme();
// result();
// here callme() is HIGHER ORDER FUNCTION, because it returns fn function.

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

//           #### ARRAYS IN JS
// arrays in js are combination of all datatypes.
// let arr = [22, 55, true, [43, Boolean]];
// console.log(arr);
// console.log(arr[1] + arr[2]);

// let arr = [1, 3, 5, 7];
// for (let i in arr) {
//   console.log(i);
// }
// for in loop gives keys of array.

// for (let j of arr) {
//   console.log(j);
// }
// for of loop gives values of array.

//           #### OBJECTS IN JS
// let obj1 = {
//   name: "gangadhar",
//   age: 26,
// };
// console.log(obj1.name);
// console.log(obj1["age"]);

// let obj1 = {
//   name: "gangadhar",
//   age: 26,
// };
// let entries = Object.entries(obj1);
// console.log(entries);
// Object.entries converts object into Array of Arrays(into individual arrays).

// let obj = {
//   name: "hello",
//   city: "chennai",
//   address: "tamil nadu",
// };
// for (let i in obj) {
//   console.log(i);
// }
// for (let j of obj) {
//   console.log(j);
// }

//                                         #### ARRAY METHODS.

// 1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
// let arr = [1, 2, 3];
// let res = arr.push(4);
// console.log(arr);      // arr is now [1, 2, 3, 4]

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

// Remove elements starting from index 2, remove 2 elements
// arr.splice(2, 2);
// console.log(arr); // Output: [1, 2, 5]

// // Remove 1 element starting from index 1, and add 6 and 7
// arr.splice(1, 1, 6, 7);  // 1st index(1) always removes  element.
// console.log(arr); // Output: [1, 6, 7, 5]

// // Add elements starting from index 3, without removing any elements
// arr.splice(3, 0, 8, 9);  // 1st index(1)  always removes element.
// console.log(arr); // Output: [1, 6, 7, 8, 9, 5]

/*
//                                              #### SPREAD OPERATOR
// Spread in Arrays:

// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];
// console.log(copyArray); // [1, 2, 3]

// Spread in Objects:

// const originalObject = { a: 1, b: 2 };
// const copyObject = { ...originalObject };
// console.log(copyObject); // { a: 1, b: 2 }

//  Spread with Strings:

// const str = 'hello';
// const charArray = [...str];
// console.log(charArray); // ['h', 'e', 'l', 'l', 'o']
*/

//                              #### SCOPE
/*
//  1. GLOBAL SCOPE: ==> Variables declared outside of any function or block. and Accessible from anywhere in the code.

// let globalVar = "I am global";

// function someFunction() {
//   console.log(globalVar); // Accessible here
// }
// someFunction();
// console.log(globalVar); // Accessible here too

// 2. FUNCTION-SCOPE: Variables declared within a function and Accessible only within that function.

// function add() {
//   let value = "hello text";
//   console.log(value);  // Accessible here
// }
// add();
// console.log(value);  // Not Accessible here

// 3. Block Scope: Variables declared within a block (denoted by {}), using let or const. Accessible only within that block.

// if (true) {
//   let blockVar = "I am local to this block";
//   console.log(blockVar); // Accessible here
// }

// console.log(blockVar); // blockVar is not defined

// 4. LEXICAL SCOPE: Scope defined by the location of variables, functions, and blocks within the written code.Inner functions have access to variables defined in their outer scope.

// function outerFunction() {
//   let outerVar = "I am from outer scope";

//   function innerFunction() {
//     console.log(outerVar); // Accessible here due to lexical scope
//   }

//   innerFunction();
// }

// outerFunction();
*/
//                              #### CALLBACKS

// callback ==> whenever a function is passed as an argument to another function, then that argument is called as CALLBACK function.
// function callme(a) {
//   console.log(a);
// }
// callme(true);
// callme("hello");
// callme(function () {});
// here function () {} is callback function.

// function callme(a) {
//   console.log(a);
//   a();
// }
// callme(function () {
//   console.log("inside callback");
// });
// here a is function and is called as callback function, when we invoke a(); then inside a function callback is executed.

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);

// The greet function takes two arguments: a string name and a function callback.
// After printing the greeting message, greet calls the callback function.
// When greet('Alice', sayGoodbye) is called, it prints "Hello Alice" and then calls sayGoodbye, which prints "Goodbye!".

// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(function () {
//     console.log("Data fetched");
//     callback();
//   }, 2000);
// }

// function processData() {
//   console.log("Processing data...");
// }

// fetchData(processData);

// here processData is callback passed to fetchdata. when callback() fn is called then processData
// function is called and prints data.

// @@@@  callbacks with promises.

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const data = 'Some data';
//         resolve(data);
//       }, 1000);
//     });
//   }

//   fetchData()
//     .then(data => {
//       console.log('Data:', data);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });

//                           ####  ARRAY METHODS OF HOF:

// **** FOREACH:
// forEach is a method that allows you to execute a provided function once for each array element.
// Return Value: forEach returns undefined.
// forEach is used to iterate over the numbers array and print each element along with its index.

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(number, index, array) {
//   console.log(number, index, array);
// });

// const numbers = [1, 2, 3, 4, 5];
// let res = numbers.forEach((number, index) => {
//   console.log("Index:", index, "Value:", number);
// });
// console.log(res);

// **** MAP:
// It creates a new array with the results of calling a provided function on every element in the original array.
// Return Value: map returns a new array with the updated elements.

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// map is also useful when working with arrays of objects:
// const users = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Sam", lastName: "Green" },
// ];

// const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);
// console.log(fullNames); // Output: ["John Doe", "Jane Smith", "Sam Green"]

// **** FILTER:  it filter the data and return an empty array.

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// const peopleUnder30 = people.filter((person) => person.age < 30);
// console.log(peopleUnder30);
// // Output: [{ name: 'Alice', age: 25 }]

// **** REDUCE: the reduce method is used to reduce the elements of an array to a single value.
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue, 2

// ); // 2 is intialvalue.
// console.log(sum);

// here accumlator = 2(intialvalue) , currentvalue = 1 ==>  2 + 1 = 3,
// here accumlator = 3(intialvalue) , currentvalue = 2 ==>  3 + 2 = 5,
// here accumlator = 5(intialvalue) , currentvalue = 3 ==>  5 + 3 = 8,
// here accumlator = 8(intialvalue) , currentvalue = 4 ==>  8 + 4 = 12,
// here accumlator = 12(intialvalue) , currentvalue = 5 ==>  12 + 5 = 17,

// const numbers = [4, 5, 3];
// const sum = numbers.reduce((prev, ele, idx) => {
//   console.log(prev, ele, idx);
//   return prev + ele + idx;
// }, 2);
// console.log(sum);
// prev = 2, ele = 4, idx = 0 ==> 2+4+0 => 6
// prev = 6, ele = 5, idx = 1 ==> 6+5+1 => 12
// prev = 12, ele = 3, idx = 2 ==> 12+3+2 => 17 , sum => 17 as output.

// const number = [4, 5, 3];
// const sums = number.reduce((prev, ele, idx) => {
//   console.log(prev, ele, idx);
//   return prev + ele + idx;
// });
// console.log(sums);
// If we do not pass initial value i.e(2) it assumes it initial value as 1st element of array.
// it will do iteration for n-1 times, that is array length - 1, 2 times.
// prev = 4, ele = 5, idx = 1 ==> 4+5+1 => 10
// prev = 10, ele = 3, idx = 2 ==> 10+3+2 => 15 , sum => 15 as output.

//           #### STRINGS IN JS
// STRINGS in js are immutable(not changable).
// `str` ==> is called as TEMPLATE STRINGS(in back ticks).

// const arr = [3, 4, 2, 6];
// const str = "gangadhar";

// // console.log(arr.length, str.length);
// // console.log(arr[2], str[4]);
// // let segment = arr.slice(1, 3);
// // let segment1 = str.slice(2, 5);
// // console.log(segment, segment1);
// // we can use slice method in arrays and strings.
// console.log(str.charAt(2)); // charAt method gives character at 2nd index.

// const str = " ab  cd  ";
// let trimmed = str.trim();  // Trim will remove space at start and end of string.
// let strimmed = str.trimStart(); // Trimstart will remove space at start of string.
// let etrimmed = str.trimEnd(); // Trimend will remove space at end of string.
// console.log({ ans: etrimmed });

// let str = "2,4,4,32,2";
// let res = str.split(",");
// console.log(res);

// let str = "a@A#hDG";
// console.log(str.charCodeAt(6)); // charCodeAt gives ASCII CODE OF index(2) which is 'A'.

// let res = String.fromCharCode(65); // fromCharCode gives reverse of charcodeAt.
// console.log(res);

// let str = "hello world";
// let res = str.replace("world", "india"); // world is replaced with india.
// console.log(res);

//            #### REGULAR EXPRESSIONS

let str = "hello world heLLo";
let regexp = /llo/g;
let res = str.replace(regexp, "XXX");
console.log(res);
// Initially REGULAR EXPRESSIONS are case sensitive(small letters).
// regexp will change string "llo" to "xxx".
// 'g' is global, which looks for all "llo" in whole string.
// 'i' is flag, which looks for capital in whole string.

//                     #### DESTRUCTURING.
/*
// DESTRUCTURING: is a concise way to extract values from arrays or objects and assign them to variables.
//  Array Destructuring:

// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a, b, c); // 1, 2, 3

// const numbers = [1, 2, 3, 4];
// const [first, , third] = numbers;
// console.log(first, third);

//  Object Destructuring:

// const person = {
//   name: "Alice",
//   age: 25,
// };

// const { name, age } = person;
// console.log(name, age); // Alice, 25
*/

//                  ##### CLASSES IN JS

// class ==> Use the keyword {class} to create a class. Always add a method named constructor().
// To create an instance of a class, you use the new keyword:

// class person {
//   constructor(name, age){
//     this.name = name
//     this.age = age;
//     console.log(name, age);
//   }

//   greet(){
//     console.log(`hello i am ${this.name} age is ${this.age}`);
//   }
// }
// const res = new person("gangadhar", 26);
// res.greet();

// class person {
//   constructor(name, age){
//     this.name = name
//     this.age = age;
//   }

//   greet(){
//     console.log(`hello i am ${this.name} age is ${this.age}`);
//   }
// }

// class animal extends person{
//   constructor(brand, city){
//     super(brand, city);
//     this.brand = brand;
//     this.city = city;
//   }
//   greet2(){
//     console.log(`brand is ${this.brand} city is ${this.city}`);
//   }
// }
// const res = new animal("Audi", "chennai", 531055);
// res.greet();
// res.greet2();
// we can get person class from animal using extends

//  ADVANCES JS
//             #### PROMISES

// Promises ==> in JavaScript provide a way to handle asynchronous operations.
// A promise is created using the Promise constructor, which takes a function (executor) with two parameters: resolve and reject.

// 1. Creating a Simple Promise:

// const promise = new Promise((resolve, reject) => {
//   const condition = false;
//   if (condition) {
//     resolve("resolved");
//   } else {
//     reject("rejected");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 2. Asynchronous Operation with a Promise:

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let cond = false;
//     if (cond) {
//       res("resolved issue");
//     }
//     rej("rejected issue");
//   });
// });
// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3. Chaining Promises:

// const prom1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("operation 1");
//   }, 1000);
// });
// prom1.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("operation 2");
//     }, 3000);
//   })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//      @@@@ PROMISE.ALL
// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p1 resolved");
//     } else {
//       rej("p1 rejected");
//     }
//   }, 2000);
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p2 resolved");
//     } else {
//       rej("p2 rejected");
//     }
//   }, 4000);
// });

// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p3 resolved");
//     } else {
//       rej("p3 rejected");
//     }
//   }, 1000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// In Promise.all, if all promises are true, then it will return array of ['p1 resolved', 'p2 resolved', 'p3 resolved'].
// If one promise is false, then it will return that particular rejected message.
// If all promises are false, then it returns rejected promise based on setTimeout condition with fastest time i.e(1000 > 2000 > 4000).

//        @@@@  PROMISE.ANY

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p1 resolved");
//     } else {
//       rej("p1 rejected");
//     }
//   }, 2000);
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = true;
//     if (condition) {
//       res("p2 resolved");
//     } else {
//       rej("p2 rejected");
//     }
//   }, 4000);
// });

// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p3 resolved");
//     } else {
//       rej("p3 rejected");
//     }
//   }, 1000);
// });

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// Promise.any ==> if all promise are true then, it returns first resolved promise based on setTimeout.
// If all promises are false, it returns AggregateError.
// If one promise is true, then it returns that particular resolved message.

//             @@@@ PROMISE.RACE

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p1 resolved");
//     } else {
//       rej("p1 rejected");
//     }
//   }, 2000);
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = true;
//     if (condition) {
//       res("p2 resolved");
//     } else {
//       rej("p2 rejected");
//     }
//   }, 4000);
// });

// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p3 resolved");
//     } else {
//       rej("p3 rejected");
//     }
//   }, 5000);
// });

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// It returns a new promise if all are true, then it resolves first promise based on setTimeout.
// It returns a new promise if all are false, then it rejects first promise based on setTimeout.
// If one condition is true or false, then it resolves or rejects first promise based on setTimeout.

//            @@@@ PROMISE.ALLSETTLED
// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p1 resolved");
//     } else {
//       rej("p1 rejected");
//     }
//   }, 2000);
// });

// const promise2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p2 resolved");
//     } else {
//       rej("p2 rejected");
//     }
//   }, 4000);
// });

// const promise3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     let condition = false;
//     if (condition) {
//       res("p3 resolved");
//     } else {
//       rej("p3 rejected");
//     }
//   }, 5000);
// });

// Promise.allSettled([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// Promise.allSettled ==> if all are true, it returns array of promises with
// {status: 'fulfilled', value: 'p1 resolved'}
// {status: 'fulfilled', value: 'p2 resolved'}
// {status: 'fulfilled', value: 'p3 resolved'}
// Promise.allSettled ==> if all are false, it returns array of promises with
// {status: 'rejected', reason: 'p1 rejected'}
// {status: 'rejected', reason: 'p2 rejected'}
// {status: 'rejected', reason: 'p3 rejected'}
// If p1 is true, it gives {status: 'fulfilled', value: 'p1 resolved'}
// If p3 is false, it gives {status: 'rejected', reason: 'p3 rejected'}

//                      @@@@@ AYSNC AWAIT
// An async function is a function that returns a promise and Used to declare an asynchronous function.
// It allows the use of await inside it to pause the execution of the function until the promise is resolved.

// function fetchData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("resolved data");
//     }, 3000);
//   });
// }

// async function getData() {
//   console.log("fetched data");
//   const data = await fetchData();
//   console.log(data);
// }
// getData();
// fetchdata is resolved after promise gets resolved and wait for fetchdata fn to get resolve the promise.

// const userData = (userId) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res({ id: userId, name: "anand" });
//     }, 1500);
//   });
// };

// const postData = (userId) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res([
//         { id: 1, userId: userId, title: "post 1" },
//         { id: 2, userId: userId, title: "post 2" },
//       ]);
//     }, 3000);
//   });
// };

// const fetchalldata = async (userId) => {
//   try {
//     console.log("fetching user ...");
//     const user = await userData(userId);
//     console.log("userdata", user);

//     console.log("fetching posts ...");
//     const posts = await postData(userId);
//     console.log("postsdata", posts);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
// fetchalldata(1);

// Error handling with async and await is straightforward using try...catch blocks. Here's an example:

//                        #### CURRYING

// CURRYING ==> creates chain of functions where each function returns another function until final result is achieved;
// Currying in JavaScript is a technique where a function, instead of taking all its arguments at once,
// takes the first one and returns a new function that takes the second one, and so on, until all arguments are provided

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(5)(5)(10));  // we can add arguments as in this way or in below example also.

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// const f1 = add(5);
// const f2 = f1(10);
// const result = f2(10);
// console.log(result);

// function foo(name) {
//   return function (age) {
//     return function (city) {
//       return `${name}, ${age}, ${city}`;
//     };
//   };
// }
// const names = foo("anil");
// const ages = names(26);
// const result = ages("chennai");
// console.log(result);

// CURRYING WITH objects.

// function foo(name) {
//   return function (age) {
//     return function (city) {
//       return { name, age, city };
//     };
//   };
// }
// const names = foo("anil");
// const ages = names(26);
// const result = ages("chennai");
// console.log(result);

//                 #### DEBOUNCING
// Debouncing makes sure that a function is only called once after a series of events have stopped happening for a set amount of time.

// Purpose: To prevent a function from running too often.
// How It Works: It waits for a specified time after the last event before executing the function. If another event happens before this time expires, the timer resets.

// function debounce(fx, delay) {
//   let timeout = null;
//   return function (data) {
//     clearTimeout(timeout); // Clears any existing timeout to ensure that the previous fx call does not execute.
//     timeout = setTimeout(() => {
//       fx(data);
//     }, delay);
//   };
// }
// const debounceFN = debounce(() => console.log("debounce done"), 3000);
// debounceFN();
// debounceFN();
// debounceFN();

// In this example, no matter how many times debouncedFunction is called, console.log('Function executed!') will only run once after 3 seconds have passed since the last call.

// const inputfn = document.getElementById("fruits");
// const inputText = (text) => {
//   console.log(text);
// };

// function debounce(fn, delay) {
//   let timeoutId = null;
//   return function (text) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn(text);
//     }, delay);
//   };
// }
// const debounceFN = debounce(inputText, 3000);

// inputfn.addEventListener("input", (e) => {
//   debounceFN(e.target.value);
// });
