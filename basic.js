// In JavaScript, data types can be categorized into two groups: primitive and non-primitive.

// PRIMITIVE DATATYPES: These are the basic building blocks of data. They are immutable (cannot be changed) and are passed by value.

// var name = "John"; // String
// var age = 30; // Number
// var isStudent = true; // Boolean
// var car = null; // Null
// var city; // Undefined
// var id = Symbol("id"); // Symbol
// primitive datatypes are stored in stack memeory and not growable in size.

// NON-PRIMITIVE (Reference) Types: These are more complex types that are made up of multiple values and are mutable (can be changed).

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
 *   ==> variables which are declared with let, const, var will be initialised with 'undefined.
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

//        #### PRE & POST INCREMENTS
// post increment and decrement:

// let a = 10;
// let res1 = a++;
// console.log(res1);
// console.log(a);
// Here, the value of a is first assigned to res1, so res1 gets the value 10.
// After the assignment, a is incremented by 1, so a becomes 11.

// let b = 10;
// let res2 = b--;
// console.log(res2);
// console.log(b);
// Here, the value of b is first assigned to res2, so res2 gets the value 10.
// After the assignment, b is decremented by 1, so b becomes 9.

// pre increment and decrement:

// let a = 10;
// let res1 = ++a;
// console.log(res1);
// console.log(a);
// Here, the value of a is first incremented by 1, so a becomes 11.
// The new value of a (11) is then assigned to res1.

// let b = 10;
// let res2 = --b;
// console.log(res2);
// console.log(b);
// Here, the value of b is first decremented by 1, so b becomes 9.
// The new value of b (9) is then assigned to res2.

// let a = 5;
// let b = a++;
// console.log(a); // 6
// console.log(b); // 5
// After b is assigned, a is incremented by 1, so a becomes 6.

// let a = 5;
// let b = ++a; // Pre-increment
// console.log(a); // 6
// console.log(b); // 6
// a is incremented to 6 before b is assigned, so both a and b end up with the value 6.

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
// here function name is not present, so it is called as anonymous function.

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

// (function () {
//   // This code is executed immediately
//   console.log("This function is immediately invoked.");
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

// let obj1 = { a: 20 }; // #200
// let obj2 = { b: 20 }; // #300
// console.log(obj1 === obj2);
// here obj1 and obj2 are not equal because, they point to different memory reference.

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

// let str = "hello world heLLo";
// let regexp = /llo/gi;
// let res = str.replace(regexp, "XXX");
// console.log(res);
// Initially REGULAR EXPRESSIONS are case sensitive(small letters).
// regexp will change string "llo" to "xxx".
// 'g' is global, which looks for all "llo" in whole string.
// 'i' is flag, which looks for capital in whole string.

//                 #### EXCUTION FLOW OF JS

// Global line ==> If line of code present ouside the function is called as Global line.
// Local line ==> If line of code present inside function(inside braces{}) it is called as Local line.
// IMPORTANT NOTE: If code present inside else condition{} braces, is not a local line, because code is not inside function () braces,
// it is inside else block, so it is global line.

// let a = 20; // global line
// function callme(x, y) { // global line
//   let a = 10; // local line
//   console.log(x + y + a); // local line
// }
// callme(a, 2 * a); // global line

// SCOPE ==> scope of variable means where that variable can be accessed.
// every variable in js can be accessed with in it's own block or children block.

// let a = 20; // a is accessable every where in code.
// let f = () => {
//   let a = 23;
//   let f1 = () => {
//     console.log(a);
//   };
//   return f1;
// };
// let res = f();
// res();

// let a = 20;
// let b = 100;
// let f = function (a, b) {
//   console.log(a + b); // 22 + 24 => 46
//   let f1 = () => {
//     let b = 30;
//     console.log(a + b); // 22 + 30 => 52
//   };
//   return [a - b, f1]; // [-2, f1]
// };
// let result = f(a + 2, a + 4); // here what f1 return [-2, f1], it will get printed.
// console.log(result); // [-2, f1]
// result[1](); // result[f1] => that is f1 function.

//      BLOCK
// BLOCK {} ==> does't include functions.
/**
 * let,const declared variables are Block scoped.
 * If variable is declared inside block with let/const keywords then that variables can be accessable with in thatblock only.
 */

// if (true) {
//   var a = 20;
//   console.log(a);
// }
// console.log(a);

// here a is not defined in outside block, because let and const decalred variables are block scoped.
// same occur for const, because let and const declared variables are block scoped.

// console.log(a); // undefined
// if (true) {
//   var a = 20;
//   let b = 30;
//   console.log(a + b); // 50
// }
// console.log(a); //20
// console.log(b); // b is not defined

// var and function declaration are not block scoped, but they are context scoped.
/**
 *  Here block scoped means present inside block in whole container in callstack.
 *  where as context scope means in container.
 *  */

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

//                #### THIS KEYWORD
/**
 * 
The this keyword in JavaScript is a context-specific reference that points to the object it is currently bound to.
 * This keyword in global points to global object.
 * In browsers the global object is Window.
 */
// window.prompt("something");
// window.alert("something");
// window.console.log("something");

// console.log(this === window); // here this and window is same.
// variables which are declared with var, function keywords in global are part of window object.

// let aaa = 100;
// var aa = 20;
// function aaaa() {
//   console.log("object");
// }
// aaaa();
// window.aaaa();
// this.aaaa();
// calling function aaaa() is same in all 3 aspects.

// when This keyword is used inside function ==> This keyword points to object who called that function.

// function callme() {
//   console.log(this);
// }
// callme(); // window.callme();

// const user = {
//   name: "hello",
//   age: 26,
//   print: function () {
//     console.log(this); // this = user
//   },
// };
// console.log(user);
// user.print();
// here we called print function using object(user) before print function print(). in this way we can access this keyword inside user object.
// so this works for only normal functions.

// const user = {
//   name: "gangadhar",
//   age: 26,
//   address: {
//     city: "chennai",
//     print: function () {
//       console.log(this);
//       this.city = "something changed";
//     },
//   },
// };
// user.address.print();
// console.log(user);

// let func = () => {
//   console.log(this);
// };
// func();
// window.func();
// this is treated as variable inside arrow functions. so we get window object as output.
// meaning of this keyword is nothing inside arrow functions.

// Object Methods:
// When a method is called on an object, this refers to the object the method is called on.

// const person = {
//   name: "Alice",
//   greet() {
//     console.log(this.name);
//   },
// };
// person.greet();
// output: "alice"

// Arrow Functions:
// Arrow functions do not bind their own this.

// const person = {
//     name: 'Alice',
//     greet: () => {
//         console.log(this.name);
//     }
// };
// person.greet();
// Logs undefined, as `this` refers to the outer scope (likely the global object)

// Event Handlers:
// document.querySelector('button').addEventListener('click', function () {
//     console.log(this);
// });
// Logs the button element.

// You can explicitly set the value of this using methods like call, apply, or bind.
// function greet() {
//     console.log(this.name);
// }
// const person = { name: 'Alice' };
// greet.call(person);
// Logs "Alice"

// Constructors and Classes:
// When used in a constructor function or class, this refers to the newly created object instance.

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(this.name);
//     }
// }
// const alice = new Person('Alice');
// alice.greet();
// Logs "Alice"

//           #### DOM (DOCUMENT OBJECT MODAL)

// HTML + CSS in browser converted into javascript objects.
// The way browser represents HTML document in form of javascript objects is called as DOM.

// In order to get any html element in UI, we use document.
// we can query the DOM (document) in 4 ways.

// ### extract element by id's: If id is present it gives that html  element / else it gives null.

// function extractbyId() {
//   const input = document.getElementById("test");
//   console.log(input);
//   console.log(input.placeholder);
//   console.log(input.tagName);
//   input.type = "checkbox";
// }

// ### extract element by classname: It is like array and we can have class[0], class[1]. if class is present it gives that html element / else it gives empty array.

// function extractbyclass() {
//   const class1 = document.getElementsByClassName("abcsd");
//   console.log(class1);
//   console.log(class1.length);
//   console.log(class1[1]);
// }

// ### extract element by Tagname: It is like array format.

// function extractbytagname() {
//   const tag = document.getElementsByTagName("b");
//   console.log(tag);
// }

// ### extract element by querselectorAll: It is like array format. gives all classname with .abc

// function extractbyqueryall() {
//   const tag = document.querySelectorAll(".abc");
//   console.log(tag);
//   // console.log(tag[0]);
// }

// ### extract element by querselector: gives classname with .abc only 1st one.

// function extractbyquery() {
//   const tag = document.querySelector(".abc");
//   console.log(tag);
// }

// ### Removing node(HTML element) from DOM tree (UI).

// function takeaction() {
//   //   const bold = document.querySelector("b");
//   //   bold.remove();

//   const div = document.querySelector(".child");
//   div.remove();
// }

// ### Adding element in DOM tree.
/**
 * for adding new element.
 *  1. create the element.
 *  2. then we add newly created element into DOM tree wherever we want.
 *
 */

// function takeaction() {
//   const barath = document.createElement("p");
//   barath.innerText = "india won oh";

//   const africa = document.createElement("p");
//   africa.innerText = "africa lost";

//   const parent = document.querySelector(".child");
//   //   parent.appendChild(barath);
//   //   parent.appendChild(africa);
//   parent.append(barath, africa);
// }
// createElement creates new element.
// appendChild adds element at end of parent.(i.e child class).
// appendChild can take one argument at a time. it cannot take more than one argument.
// to add more elements we use append();

// to add element before bold in .child

// function takeaction() {
//   const para = document.createElement("p");
//   para.innerText = "gangadhar";

//   const parent = document.querySelector(".child");
//   const span = document.querySelector("span");
//   const bold = document.querySelector("b");

//   parent.insertBefore(para, span); // adds element before span.
//   parent.insertBefore(para, bold); // adds element before bold.
// }
// take parent element to add into that div element.
// insertBefore takes (para) as newly added element, (bold) as before which element to add.

// function takeaction() {
//   const div = document.createElement("div");
//   div.innerText = "div text added";

//   const body = document.getElementsByTagName("body")[0];
//   const container = document.querySelector(".container");

//   body.append(div, container);
// }

// function takeaction() {
//   const div = document.createElement("div");
//   const p = document.createElement("p");
//   p.innerText = "kohli: 112";

//   const b = document.createElement("b");
//   b.innerText = "rohit: 50";

//   div.append(p, b);
//   console.log(div);

//   const container = document.querySelector(".container");
//   document.body.insertBefore(div, container);
// }

// function takeaction() {
//     const div = document.createElement("div");
//     const node = document.createTextNode("hello world");

//     div.appendChild(node);

//     const body = document.querySelector("body");
//     body.appendChild(div);
//   }
// createTextNode ==> will add plain text to dom.

//            #### EVENTS IN JS

/**
 * event listener will take minimum of  2 parameters.
 * 1. event type.
 * 2. event listener/callback
 */

// const btn1 = document.getElementById("btn1");

// const f1 = (event) => {
//   console.log(event);
//   console.log("f1 occured");
// };
// const f2 = (event) => {
//   console.log(event);
//   console.log("f2 occured");
// };
// btn1.addEventListener("click", f1);
// btn1.addEventListener("click", f2);
// // callback fn 'f' will be called when event occurs.
// here when btn is clicked, target is btn1.
// event object in f1, f2 functions will have properties, and have target property as btn1.

// const box = document.querySelector(".box");
// box.addEventListener("mouseenter", () => {
//   console.log("mouse entered");
// });

// box.addEventListener("mouseleave", () => {
//   console.log("mouse left");
// });

// const box = document.querySelector(".box");
// box.addEventListener("mouseenter", () => {
//   // box.classList.add("active");
//   box.classList.toggle("active");
// });

// box.addEventListener("mouseleave", () => {
//   // box.classList.remove("active");
//   box.classList.toggle("active");
// });
// // toggle => means if class is there it do not add class. and reverse of it.

//           #### IMPORTANT EVENTS
// const input = document.querySelector("input");

// input.addEventListener("focus", () => {
//   console.log("focus event occured");
// });
// input.addEventListener("blur", () => {
//   console.log("blur event occured");
// });
// input.addEventListener("input", () => {
//   console.log("input event occured");
// });
// input.addEventListener("change", () => {
//     console.log("change event occured");
//   });
// when we focus on input box, then focus event is triggered.
// when we click outside input element, then blur is triggered.
// when any change in input occurs, then input event is triggered.
// change event triggers when there is change in value before focusing and after blurring.

// onchange event example and use case:

// const students = [
//   "Rajesh",
//   "Riya",
//   "Priya",
//   "Indu",
//   "sirisha",
//   "Ramu",
//   "Rohit",
//   "Amit",
//   "Ankit",
// ];
// const namesbox = document.getElementById("names-box");

// input.addEventListener("input", (e) => {
//   namesbox.innerHTML = "";
//   const searchValue = e.target.value.toLowerCase();
//   students.forEach((student) => {
//     if (student.toLowerCase().includes(searchValue)) {
//       const para = document.createElement("p");
//       para.innerText = student;

//       namesbox.appendChild(para);
//     }
//   });
// });

//    #### EVENT LIFECYCLE
// event lifecycle has 3 phases.
//  1.capturing.
//  2.target.
//  3.bubbling

// HTML => body => div => button => span
// the event will move from {HTML to body to div to button}. moving from HTML(parent) to target element(button) is phase called capturing phase.
// here button is target, so event stops at target element. this phase is called target phase.
// from target event will go back from {target to div to body to HTML} target to parent(HTML). this phase is called bubbling.

// const body = document.body;
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// const btn = document.querySelector(".btn");

// body.addEventListener("click", () => {
//     console.log(1);
// }, true);
// parent.addEventListener("click", () => {
//     console.log(2);
// }, false);
// parent.addEventListener("click", () => {
//   console.log(3);
// }, true);
// child.addEventListener("click", () => {
//   console.log(4);
// }, false);
// child.addEventListener("click", () => {
//   console.log(5);               // 1 3 5 4 2
// }, true);

// by default every listener is added for bubbling phase not for capturing phase.
// if 3rd argument is false, then it is bubbling phase, true then it is capturing phase.
// in above code events executes based on first capturing from HTML to target element(in capturing true values excutes).
// after target element bubbling phase from target element to HTML(in bubbling false values excutes).

// parent.addEventListener("click", () => {
//     console.log(1);
// }, false);
// parent.addEventListener("click", () => {
//    console.log(2);
// }, true);
// parent.addEventListener("click", () => {
//     console.log(3);
// }, true);
// child.addEventListener("click", () => {
//    console.log(4);
// }, false);
// child.addEventListener("click", () => {
//    console.log(5);               // 2 3 5 4 6 1
// }, true);
// child.addEventListener("click", () => {
//     console.log(6);
// }, false);

// event.stopPropagation() ==> means event will stop executing further events.
// here target element is child so, parent has 3 event listeners in that case where e.stopPropogation is present from that event it will excute only parent because e.stopPropogation is present in parent, and further parent listeners excutes(if true) in case of e.stpoPropagation();
// in case of event.stopImmediatePropagation(), further parent does not excutes as event.stopImmediatePropagation() stops excuting immediately.
// here line 2 excutes and stops it will not further go to next element to excute.

// parent.addEventListener("click", () => {
//     console.log(1);
// }, false);
// parent.addEventListener("click", (e) => {
//    e.stopPropagation();
//    console.log(2);
// }, true);
// parent.addEventListener("click", () => {
//     console.log(3);
// }, true);
// child.addEventListener("click", () => {
//    console.log(4);
// }, false);
// child.addEventListener("click", (e) => {
//    console.log(5);
//  }, true);

// event.stopImmediatePropagation() ==> stops propagation immediately. if parent event is present also it will not excute further.
// parent.addEventListener("click", (e) => {
//     e.stopImmediatePropagation();
//     console.log(1);
// }, true);
// parent.addEventListener("click", () => {
//    console.log(2);
// }, true);
// parent.addEventListener("click", (e) => {
//     console.log(3);
// }, true);
// child.addEventListener("click", () => {
//    console.log(4);
// }, false);
// child.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log(4);
//  }, true);

//       #### JSON METHODS
// String format of javascript object is called as JSON.
// let str = '{"a": 20, "b": 30 }';
// console.log(str, typeof str);

// JSON.stringify(); ==> converts object to string.
// let r = { name: "hello", age: 26, city: "chennai" };
// let res = JSON.stringify(r);
// console.log(res);

// JSON.parse(); ==> converts string to object.
// let str = '{"name":"hello","age":26,"city":"chennai"}';
// let final = JSON.parse(str);
// console.log(final);

//         DATE
// const date = new Date();
// console.log(date);
// console.log(date.getMonth()); // [january,december] are 0 based indexing [0, 11]
// console.log(date.getDate());
// console.log(date.getDay()); // sun, sat [0, 6]
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getHours());

// const birthDate = new Date(2023, 7, 14, 11, 0, 0, 0);
// console.log(birthDate);
// const newdate = new Date(2024, 6, 25, 14, 52, 0, 0);
// console.log(newdate);

// const e1 = birthDate.getTime() / 1000;
// console.log(e1);
// const e2 = newdate.getTime() / 1000;
// console.log(e2);

// let daysgap = (e2 - e1) / (24 * 60 * 60);
// let res = parseInt(daysgap);
// console.log(res);

// .getTime(): Retrieves the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix Epoch).
// birthdate will give (Mon Aug 14 2023 11:00:00 GMT+0530 (India Standard Time))
// newdate wil give (Thu Jul 25 2024 14:52:00 GMT+0530 (India Standard Time))
// getTime will give milliseconds since january 1, 1970 12:00 AM.
// then e1/1000 convert milliseconds into seconds.
// we get difference b/w birthdate and newdate in seconds
//  (24 * 60 * 60): Converts the difference from seconds to days by dividing by the number of seconds in a day (24 hours * 60 minutes * 60 seconds).
// gives output as number of days b/w previous birthday and presentdate.

//           #### BIGINT
// BIGINT: allows to work with large integer values with n notation at last.

// let num = 43873589758258358385n; // this is called as bigInt literal.
// console.log(num + 2n);

// another way to create bigInt:
// const int = BigInt("2353791375913851835");
// console.log(int);

// let n1 = 234331;
// let n2 = 2358708357891358753n;
// console.log(BigInt(n1) + n2);

//                   #### TIMERS IN JS
// setTimeout: returns a number {timeoutId}
// setTimeout takes 2 parameters {1. callback function} {2. number}

// console.log(11);
// let f = setTimeout(() => {
//   console.log("timer done");
// }, 3000);
// console.log(22);
// console.log(f); // it will give timerId of f function.

// first console.log(11) is excuted after that f function excutes and wait for 3sec to excute.
// so F function will wait and in mean time console.log(22) excutes.
// f function will be sent to callback queue (or) Task queue, so queue excutes code line by line and excutes all syncronous code and after that any asycronous code is  is send to event loop.
// event loop checks if callstack is empty or any other line of code is running.
// Once the Call Stack is empty, the Event Loop picks the callback from the Task Queue and executes it.
// In this way timers run the code.

// ==> we can stop excuting the registered function when it is in timer {not entered into callback queue.}
// console.log("before timer");
// let timerId = setTimeout(() => {
//   console.log("timer done");
// }, 2000);
// console.log("clearing timeout");
// clearTimeout(timerId);

// by using clearTimeout(timerId), function stops excuting.

// ***** => setInterval():

// let count = 0;
// let timerId = setInterval(() => {
//   console.log(++count);
// }, 1000);
// // for every 1sec, count changes and prints count value'.

// setTimeout(() => {
//   console.log("clear interval");
//   clearInterval(timerId);
// }, 3000);
// after 3sec timer will stop excuting timerId function.

// Timer examples:-
// const text = document.getElementById("timer");
// const start = document.getElementById("start");
// const stop = document.getElementById("stop");

// let cnt = 0;
// let timerId;
// start.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     text.innerText = ++cnt;
//   }, 1000);
// });
// stop.addEventListener("click", () => {
//   // typeof timerId === "number" ? clearInterval(timerId) : alert("start timer");
//   // timerId = undefined;
//   console.log("clear timerid");
//   clearInterval(timerId);
// });

// const text = document.getElementById("text");
// const releaseDate = new Date(2024, 6, 27, 15, 30, 0, 0);
// const stoptimer = document.getElementById("stopTimer");

// const findDifference = (instance) => {
//   let secondsGap = (releaseDate - instance) / 1000;

//   let days = parseInt(secondsGap / (24 * 60 * 60));
//   remSec = secondsGap - days * 24 * 60 * 60;
//   let hrs = parseInt(remSec / (60 * 60));
//   remSec = remSec - hrs * 60 * 60;
//   let mins = parseInt(remSec / 60);
//   remSec = remSec - mins * 60;

//   return `${days} Days : ${hrs} Hrs : ${mins} Min : ${parseInt(remSec)} Sec `;
// };
// const updateTime = () => {
//   let currentTime = new Date();
//   text.innerText = findDifference(currentTime);
// };
// let id = setInterval(updateTime, 1000);

// stoptimer.addEventListener("click", () => {
//   clearInterval(id);
// });
