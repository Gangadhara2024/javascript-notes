//                  #### OBJECT CLONING
/**
 * CLONE ==> means copy.
 * Cloning is done using 2 methods.
 * 1. using assignment operator.
 * 2. using spread operator.
 */
// 1. using assignment operator.

// let obj1 = { a: 10 }; // #100
// let obj2 = obj1;      // #100

// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2); // true

// obj2.a = 100;

// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2); // true
// in JS objects are always compared with references.
// here obj2 is clone of obj1, so both are same. if we change value like this obj2.a = 100;
// here we get obj1 === obj2 is true, because reference is same.

// ==> If cloned object is having reference of old object, is called as SHALLOW CLONING.
// ==> Cloning using assignment operator is called as SHALLOW CLONING.

// 2. using spread operator.

// let m1 = { a: 10 }; // #100
// let m2 = { a: 10 }; // #200
// console.log(m1 === m2);
// here we get m1 === m2 as false, because each object has their own reference.

// let obj1 = { a: 10 }; // #100
// let obj2 = { ...obj1 }; // #200

// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2); // false

// obj2.a = 100;

// console.log(obj1);
// console.log(obj2);
// console.log(obj1 === obj2); // false
// here by using spread operator we copy property by property, so reference is not same for both objects.
// if we change obj2.a = 100; then it will not reflect in obj1, this is what no reference means.
// ==> If cloned object is not having reference of old object, is called as DEEP CLONING.
// ==> Cloning using spread operator is called as DEEP CLONING.

// let m1 = {
//   a: 20,
//   b: {
//     c: 100,
//   },
// };
// let m2 = { ...m1 };

// console.log(m1);
// console.log(m2);
// console.log(m1 === m2);

// m2.b = "changed";

// console.log(m1);
// console.log(m2);
// console.log(m1 === m2);

//                 #### CALL, BIND, APPLY METHODS
// @@@ CALL method; ==> is used for calling only functions. which takes multiple arguments,
// first argument call method takes is object. second argument is #TODO.
// call is method of all functions in js which lets us forcefully change value of this keyword.
// let m1 = {
//   name: "hello",
//   city: "banglore",
// };

// function intro() {
//   console.log(this);
// }
// intro(); // here this keyword is window.
// intro.call(m1); //here this keyword is m1.

// implicit binding ==> is by default/naturally we get it. here intro() is implicit binding.
// explicit binding ==> if we forcefully change. here intro.call() is explicit binding.

// let p1 = {
//   name: "rohit",
//   city: "goa",
//   intro() {
//     console.log(this);
//   },
// };

// let p2 = {
//   name: "anil",
//   city: "chennai",
// };
// p1.intro(); // this is implicit binding. value of this keyword is p1.
// p1.intro.call(p2); // this is explicit binding. value of this keyword is p2.

// function sum(a, b) {
//   console.log(this);
//   return a + b;
// }

// let obj1 = {
//   name: "hari",
// };

// console.log(sum(1, 2)); // here o/p is 3.
// console.log(sum.call(obj1, 10, 20)); // we get NaN, because we are not passing arguments to sum. so we pass 2nd argument as 10,20.

// @@@ APPLY method: call and apply methods are same.
/**
 * what is difference b/w call and apply:-
 * 1. In call method, we pass arguments as normal values. sum.call(obj, 10, 20).
 * 2. In apply method, we pass arguments as array. sum.apply(obj, [10, 20]).
 * 2. In apply, we can pass only 2 arguments.
 */

// let obj = {
//   name: "apply method",
// };
// function sum(a, b) {
//   console.log(this);
//   console.log(a, b);
// }
// sum.call(obj, [5, 2]); // here [5, 2] is passed only to a.
// sum.apply(obj, [5, 2]); // here [5, 2] is passed as 5 to a and 2 to b.

// @@@@ BIND method:
// bind gives us function(result)in below example, which has value of this keyword as obj
// result = intro.bind(obj) is called binding intro function with obj. we get result keyword as function(intro).

// let obj = {
//   name: "gangadhar",
// };
// function intro(city, company) {
//   console.log(
//     `my nam is ` + this.name + ` living in ` + city + ` works in ` + company
//   );
// }
// intro.call(obj, "chennai", "zoho");
// intro.call(obj, "pune", "SBI");
// intro.call(obj, "banglore", "google");

// let result = intro.bind(obj);
// console.log(result);
// // result = here we get result as intro whole function, and value of this keyword is obj.
// // so obj is binded with intro function, so we cannot change it.
// // here this keyword is fixed to obj using bind method.

// result("chennai", "zoho");
// result("pune", "SBI");
// result("banglore", "google");

// Now how to fix argument i.e city.
// let obj = {
//   name: "gangadhar",
// };
// function intro(city, company) {
//   console.log(
//     `my nam is ` + this.name + ` living in ` + city + ` works in ` + company
//   );
// }
// intro.call(obj, "banglore", "zoho");
// intro.call(obj, "banglore", "SBI");
// intro.call(obj, "banglore", "google");

// let data = intro.bind(obj, "banglore", "Tata");
// console.log(data);
// // here obj is fixed with this keyword, so if we want to fix city observe below code.
// data("zoho");
// data("SBI");
// data("google");
// here city is fixed using bind.
// if we argument as tata, then company is also fixed in intro function.

//       PROTOTYPES

// let arr = [1, 4, 6, 4];

// console.log(arr.__proto__);
// console.log(Array.prototype);
// Array => is function that creates arrays in js.
// Array.prototype ==> will give all arrays built-in functions in JS as [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// arr.__proto__ ==> will also give all arrays built-in functions in JS as [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// Array => function + object. ==> object which has prototype or __proto__.
// prototype and __proto__ are collections of functions.
// prototype is key that holds collection of properties.
// arr.__proto__.map();
// arr.__proto__.reduce();

// above all is same for object.
// Object = fn + object. ==> object which has prototype or __proto__.

// arr => [] + {__proto__} ==> points to (Array => fn + prototype).
// obj => {} + {__proto__} ==> points to (Object => fn + prototype).

// let obj1 = {
//   name: "anand",
// };
// let obj2 = {
//   name: "hello",
//   city: "vizag",
// };
// console.log(obj1.city);

// obj1.__proto__ = obj2;
// // 1st city is searched in obj1 of __proto__ If it is not there, then it is undefined. then it will ask proto chain.
// // here we given access to proto chain in obj2 by ==> obj1.__proto__ = obj2, now city is searched in obj2, so we get value of city after prototypical-Inheritance.
// // obj1.__proto__  is ==> object.prototype.
// // obj1 can access properties of obj2 by __proto__.
// console.log(obj1.city);

//           #### POLYFILLS

// Polyfills ==> if our browser is old, then we use polyfills for writing our own function like map, filter so on.. methods.
// In new browsers prototype is present so inbuilt methods are default of map, filter so on.. methods.
// Writing code of any function that is generated by browser is called as POLYFILL.

// POLYFILL of map:
// console.log(Array.prototype.map);

// delete Array.prototype.map;
// Array.prototype.map = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res[i] = callback(this[i], i, this);
//   }
//   return res;
// };

// let final = [1, 2, 3].map((item) => item * 2);
// console.log(final);
// this -> points to array in map function as final = [1, 2, 3]

// POLYFILL of filter:

// delete Array.prototype.filter;

// Array.prototype.filter = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       res.push(this[i]);
//     }
//   }
//   return res;
// };

// let people = [12, 43, 22, 44, 45];
// let filterRes = people.filter((item) => item >= 24);
// console.log(filterRes);

//        #### REST PARAMETER
// restParam converts all arguments as array.
// restParameter can be used only in functions. restParam is same as sprad (...restParam).
// resrParameter should be last in function arguments. after that there should not be any value.

// function test(...restParam) {
//   console.log(restParam);
// }
// test(2, 4, 2, 10);

// function add(a, b, c, ...rest) {
//   console.log(a, b, c, rest);
// }
// add(2, 6, 3, 5, 7, 8);

//           #### OOPS( OBJECT ORIENTED PROGRAMMING )
// oop => is programming that involves objects.

// let store = {
//   withdraw(amount) {
//     this.balance = this.balance - amount;
//   },
// };
// function userCreator(name, bank, balance) {
//   let obj = {};
//   obj.name = name;
//   obj.bank = bank;
//   obj.balance = balance;
//   obj.__proto__ = store;
//   return obj;
// }
// const user1 = userCreator("gangadhar", "sbi", 6000);
// const user2 = userCreator("bharat", "axis", 6000);
// console.log(user1);
// user2.withdraw(500);
// console.log(user2);
// by using prototypical inheritance we can access store by   obj.__proto__ = store.

// function User(name, bank, balance) {
//   (this.name = name), (this.bank = bank), (this.balance = balance);
// }
// User.prototype.withdraw = function (amount) {
//   this.balance = this.balance - amount;
// };
// const user1 = new User("applei", "axis", 5000);
// const user2 = new User("google", "icici", 6000);
// console.log(user1);
// // console.log(User.prototype);
// user2.withdraw(500);
// console.log(user2);

// __proto__ ==> points to function.prototype.
// new keyword will create new memeory, and new keyword will ignore return keyword.
// new keyword will call User function with new memeory as refernece.
// it's returning new memeory to user1.
// here we create same memory for withdraw function. by not creating extra memory.

//             #### CLASS IN JS
// class User {
//   constructor(name, bank, balance) {
//     (this.name = name), (this.bank = bank), (this.balance = balance);
//   }
//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }
// const user10 = new User("anil", "axis", 1000);
// const user11 = new User("induja", "icici", 3000);
// console.log(user10);
// user11.withdraw(500);
// console.log(user11);

// we use class for writing withdraw function in one single function.
// In classes we pass User function in constructor function, and withdraw fn in single braces.

// In JavaScript, inheritance is a mechanism that allows one object to acquire the properties and methods of another object