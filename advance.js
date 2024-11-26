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
// first argument call method takes is object. from second argument it takes two or more.
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

// In call method ==> a + b evaluates to [5, 2] + undefined, resulting in the string "5,2undefined" due to JavaScript's type coercion.

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
// if we get argument as tata, then company is also fixed in intro function.

//       PROTOTYPES

// PROTOTYPES ==> is mechanism by which objects inherit properties and methods from other objects. Every JavaScript object has an internal property called [[Prototype]] that points to another object, which is called its prototype.
// INHERITANCE ==> is where one class (child or subclass) can acquire the properties and behaviors (methods) of another class (parent or superclass).

// let arr = [1, 4, 6, 4];

// console.log(arr.__proto__);
// console.log(Array.prototype);
// Array => is function that creates arrays in js.

// Array.prototype ==> will give all arrays built-in functions in JS as [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// arr.__proto__ ==> will also give all arrays built-in functions in JS as [at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// Array => function + object. ==> object which has [ prototype (or) __proto__ ].
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
// console.log(obj1.city); ==> is undefined.

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
// restParameter can be used only in functions. restParam is same as spread (...restParam).
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
// OOP (Object-Oriented Programming), a programming paradigm where you structure code using "objects." Objects are collections of properties (data) and methods (functions).
// oop => is programming that involves objects.

//  1. OBJECTS ==> object is a collection of related data and functions, grouped together in a single unit.
// const car = {
//   brand: "toyota",
//   color: "red",
//   start: function () {
//     console.log("car start");
//   },
//   stop: function () {
//     console.log("car stops");
//   },
// };
// console.log(car.brand);
// car.start();
// car.stop();

// Properties are data (e.g., brand, color).
// Methods are functions (e.g., start, stop).

//  2. CLASS ==> is blueprint for creating objects with similar properties and methods.
// Instead of defining an object directly, you define a class and use it to create multiple objects.
// class Car {
//   constructor(colour, brand) {
//     this.colour = colour;
//     this.brand = brand;
//   }
//   start() {
//     console.log(`${this.colour} is starting`);
//   }
//   end() {
//     console.log(`${this.brand} is starting`);
//   }
// }
// const m1 = new Car("red", "BENZ");
// const m2 = new Car("blue", "AUDI");
// const m3 = new Car("yellow", "FERRARI");
// console.log(m1, m2, m3);

// constructor: is special method used to initialize object properties.
// You can create many objects (m1, m2, m3) from the same class.

// Inheritance ==> Inheritance allows one class (child class) to inherit properties and methods from another class (parent class).
// class Car {
//   constructor(brand, color) {
//     this.brand = brand;
//     this.color = color;
//   }
//   getcar() {
//     console.log(`color of car is ${this.color}`);
//   }
// }

// class Vehicle extends Car {
//   getcity() {
//     console.log(`car is from london ${this.brand}`);
//   }
// }
// const m1 = new Vehicle("BENZ", "red");
// m1.getcar();
// m1.getcity();

// Encapsulation ==> Encapsulation means keeping some data or methods private so they can only be accessed within the object.
// class Bank {
//   #bank;
//   constructor(name, bank) {
//     this.name = name;
//     this.#bank = bank;
//   }
//   getDetails() {
//     return `name : ${this.name} bank : ${this.#bank}`;
//   }
// }
// const res = new Bank("gangadhar", "SBI");
// console.log(res);
// console.log(res.getDetails());
// console.log(res.bank); // undefined because bank is private property.
// Only the methods inside the class can access private properties.

//  Polymorphism ==> Polymorphism means using the same method name but having different behaviors for different objects.
// class Animal {
//   constructor(colour) {
//     this.colour = colour;
//   }
//   speak() {
//     console.log(`animal colour is ${this.colour}`);
//   }
// }
// class Dog extends Animal {
//   speak() {
//     console.log(`dog colour is ${this.colour}`);
//   }
// }
// class Cat extends Dog {
//   speak() {
//     console.log(`cat colour is ${this.colour}`);
//   }
// }
// const res = [new Dog("black"), new Cat("white"), new Animal("red")];
// console.log(res);
// res.forEach((i) => i.speak());
// Objects of different types (Dog, Cat, Animal) are stored in the same array and treated uniformly by calling their speak method.

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
// it's returning new memeory to user1. here we create same memory for withdraw function. by not creating extra memory for it .

//             #### CLASS IN JS

// class ==> is a blueprint for creating objects with shared properties and methods.
// constructor ==> is a special type of function used to create and initialize objects.

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
// The constructor method is called when a new instance of the class is created using the new keyword.
// User class will create {object} with defined properties as name, bank, balance.
// this refers to the instance of the class that is calling the method.

// In JavaScript, inheritance is a mechanism that allows one object to acquire the properties and methods of another object

// class Bank {
//   constructor(name, bank, balance) {
//     (this.name = name), (this.bank = bank), (this.balance = balance);
//   }
//   deposit(amount) {
//     this.balance += amount;
//   }
// }

// class SavingAccount extends Bank {
//   constructor(name, balance, type) {
//     super(name, balance);
//     this.type = type;
//   }
//   educationLoan(amount) {
//     console.log(amount);
//   }
// }
// INHERITANCE ==> means child class inherits all public and protected properties and methods from the parent class.
// extends means ==> When a class extends another class, it inherits the properties and methods of the parent class, allowing the child class to reuse.
// By using extends keyword, we get access to Bank constructor function.
// extends ==> Used to call the constructor or methods of the parent class.
// super keyword will get access to Bank's constructor function.
// In class, memory is created in super keyword. super keyword can be written after constructor function.
// 'This' keyword does not exists before super keyword is called ?

//           #### GETTERS AND SETTERS.
// class Bank {
//   #balance;
//   constructor(name, balance) {
//     (this.name = name), (this.#balance = balance);
//   }
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(newName) {
//     this.name = newName;
//   }
//   // setter
//   setBalance(amount) {
//     this.#balance = amount;
//   }
//   // getter
//   getBalance() {
//     return this.#balance;
//   }
// }
// const vijay = new Bank("indu", 5000);
// console.log(vijay);
// vijay.setBalance(8000);
// console.log(vijay);

// console.log(vijay.getName());
// console.log(vijay.getBalance());

// vijay.setName("gangadhar");
// console.log(vijay);

// by using getters and setters we can make our own functions for updating and getting values.
// by using getters and setters, we can access non private function.
// getter function will not take parameter, but setter will take only 1 parameter.

// PRIVATE in class ==> #balance is used to make any property private.
// These private fields are accessible only within the class they are defined in, and they cannot be accessed or modified from outside the class.
// console.log(vijat.balance) If we try to get balance it gets UNDEFINED, because balance is private property.

//    #### CALLBACK AND CALLBACK HELL

// console.log("start");
// setTimeout(() => {
//   console.log("mid");
// }, 0);
// console.log("end");

// function intro(name, callback) {
//   setTimeout(() => {
//     callback(`my name is ${name}`);
//   });
// }
// function city(city, callback) {
//   setTimeout(() => {
//     callback(`i live in ${city}`);
//   });
// }
// function birth(dob, callback) {
//   setTimeout(() => {
//     callback(`i am born in ${dob}`);
//   });
// }

// intro("gangadhar", (data) => {
//   console.log(data);
//   city("banglore", (info) => {
//     console.log(info);
//     birth("vizag", (data) => {
//       console.log(data);
//     });
//   });
// });
// 1st intro callback is excutes then city callback is excuted so on... and prints data.
/**
 * The above code is called as callback hell, it is very ugly and unable to handle errors.
 * we never use callbacks to handle async code in js.
 * so to handle this we use promises.
 */

//           #### PROMISES
// Promise ==> is an object that represents the eventual completion (or failure) of an asynchronous operation.
/**
 * Promise can be in
 * 1. pending state.
 * 2. fullfilled state.
 * 3. rejected state.
 */
// Promise takes callback function. callback has 2 arguments 1. resolve 2. reject

// const p1 = new Promise((resolve, reject) => {
//   let cond = true;
//   if (cond) {
//     setTimeout(() => {
//       resolve("p1 success");
//     }, 3000);
//   } else {
//     reject("p1 error");
//   }
// });
// console.log(p1);

// if promise is fulfilled, then data is passed to resolve.
// if promise is rejected, then data is passed to reject.
/**
 * promise is object having
 * 1. promise state
 * 2. promise value.
 *
 * Promises are better than callbacks.
 * Promises are better in error handling.
 * looks better in syntactical way.
 *
 */
// first promise will be in pending state, after 3sec of setTimeout, then promise gets fullfilled.

// const p1 = new Promise((resolve, reject) => {
//   let cond = false;
//   if (cond) {
//     setTimeout(() => {
//       resolve("p1 success");
//     }, 3000);
//   } else {
//     reject("p1 gets error");
//   }
// });
// console.log(p1);
// here promise is false. so promise is failed(rejected).

// const p1 = new Promise(function main(resolve, reject) {
//   let cond = true;
//   if (cond) {
//     setTimeout(function timer() {
//       resolve("p1 success");
//     }, 3000);
//   } else {
//     reject("p1 gets error");
//   }
// });
// p1.then(function thenFn(data) {
//   console.log(data);
// });
// if resolve function is invoked then .then callback gets executed.
// if reject function is invoked then .catch error callback is executed.
/**
 * first main function is passed to callstack and then it runs all synchronous code before setTimeout fn.
 * After synchronous code excutes, then setTimeout fn is send to taskqueue and runs any code inside setTimeout fn.
 * after that setTimeout fn excutes and come out of callstack, then resolve fn is passed to microtaskqueue.
 * so microtaskqueue checks if any code exists in callback, if callstack is empty then resolve fn is passed to callstack.
 * then thenFn excutes and prints 'p1 success'.
 */
// this is the way asynchronous code runs.

// 1st level chaining of promise.
// const p1 = new Promise((resolve, reject) => {
//   let cond = true;
//   if (cond) {
//     setTimeout(() => {
//       resolve("p1 success");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("p1 gets error");
//     });
//   }
// });
// p1.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// });

// const p1 = new Promise((resolve, reject) => {
//   let cond = false;
//   if (cond) {
//     setTimeout(() => {
//       resolve("p1 success");
//     }, 2000);
//   } else {
//     reject("p1 gets error");
//   }
// });
// p1.then(function resolveFn(data) {
//   console.log(data);
//   return "gangadhar";
// })
//   .then((data) => console.log(data))
//   .then((data) => console.log(data));

// .then returns fulfilled promise by default, with data as undefined.
// whatever resolveFn is returning, it is wrapped inside a fulfilled promise and it's returned.
// every .then returns new promise with data, that function is returning.

// in 1st .then it is printing data as "p1 success" and that promise is returning "gangadhar".
// so that returned value we get in 2nd .then, as new returned data i.e is "gangadhar".
// in 2nd .then, we are returning nothing, so we get undefined in 3rd then.

// p1.catch(function rejectFn(err) {
//   console.log(err);
//   return "azaz";
// })
//   .catch((err) => console.log(err))
//   .then((data) => console.log(data));
// As rejectFn is fulfilled promise, in 2nd catch catch((err) => console.log(err)) will be ignored.
// As rejectFn is fulfilled promise, we can use .then for getting returned value of rejectFn.

// function namePromise(name) {
//   return new Promise((res, rej) => {
//     let cond = true;
//     if (cond) {
//       setTimeout(() => {
//         res(`my name is ${name}`);
//       });
//     } else {
//       rej("name not found");
//     }
//   });
// }
// function cityPromise(city) {
//   return new Promise((res, rej) => {
//     let cond = true;
//     if (cond) {
//       setTimeout(() => {
//         res(`lives in ${city}`);
//       });
//     } else {
//       rej("city not found");
//     }
//   });
// }
// function companyPromise(company) {
//   return new Promise((res, rej) => {
//     let cond = false;
//     if (cond) {
//       setTimeout(() => {
//         res(`works in ${company}`);
//       });
//     } else {
//       rej("company not found");
//     }
//   });
// }
// namePromise("gangadhar").then((data) => {
//   console.log(data);
//   cityPromise("banglore").then((data) => {
//     console.log(data);
//     companyPromise("google").then((data) => {
//       console.log(data);
//     });
//   });
// });

// namePromise("gangadhar")
//   .then((data) => {
//     console.log(data);
//     return cityPromise("delhi");
//   })
//   .then((data) => {
//     console.log(data);
//     return companyPromise("applei");
//   })
//   .then((data) => {
//     console.log(data);
//   });
// Any data that we are returning here will be wrapped inside promise.
// here namePromise gets resolved value as 'my name is gangadhar'. and returns a fulfilled cityPromise.
// then it is printed using .then and returns value as 'lives in delhi'.
// Now promises are executed sequentially as => namePromise => cityPromise => companyPromise.
// this executed sequentially is called as 'promise chaining'.

// namePromise("hello")
//   .then((data) => {
//     console.log(data);
//     return cityPromise("chennai");
//   })
//   .then((data) => {
//     console.log(data);
//     return companyPromise("google");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// error handling in promise chaining, if one promise is rejected, then remaining promises will not execute further.

//      @@@ PROMISE COMBINATIONS.
// PROMISE COMBINATIONS ==> methods used to handle multiple promises together.
// PROMISE COMBINATIONS are functions, that takes array of promises and gives me a single promise.

// true && true && false
// && condition always looking for false.

// false || false || true
// || condition always looking for true.

// true ==> fulfilled promise.
// false ==> rejected promise.

// @@@ Promise.all() ==> always looking for false i.e rejected promise.

// function promiseGen(condition, delay, resData, rejError) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (condition) {
//         res(resData);
//       } else {
//         rej(rejError);
//       }
//     }, delay);
//   });
// }
// const p1 = promiseGen(false, 2000, "p1 fulfilled", "p1 rejected");
// const p2 = promiseGen(false, 3000, "p2 fulfilled", "p2 rejected");
// const p3 = promiseGen(true, 1000, "p3 fulfilled", "p3 rejected");

// const promiseResult = Promise.all([p1, p2, p3]);
// promiseResult
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// In promise.all, If all promises are true, then it gives array of fulfilled promises.
// In promise.all, if one promise is false then it looks for only rejected promise.
// it will give fastest failing promise, based on timeout.

// @@@ Promise.any() ==> always looking for true i.vent fulfilled promise.

// function promiseGen(cond, delay, resData, rejError) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (cond) {
//         res(resData);
//       }
//       rej(rejError);
//     }, delay);
//   });
// }
// const p1 = promiseGen(false, 4000, "p1 resolved", "p1 rejected");
// const p2 = promiseGen(false, 3000, "p2 resolved", "p2 rejected");
// const p3 = promiseGen(false, 2000, "p3 resolved", "p3 rejected");

// const promiseResult = Promise.any([p1, p2, p3]);
// promiseResult
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.errors);
//   });
// In promise.any, if all promise are true, it looks for fastest promise, based on timeout.
// In promise.any, if all promises are false, it gives AggregateError: All promises were rejected.
// we can access all errors by writing err.errors.

// @@@ Promise.race() ==> always looking for fastest settled promise.

// function promiseGen(cond, delay, resData, rejError) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (cond) {
//         res(resData);
//       } 
//       rej(rejError);
//     }, delay);
//   });
// }
// const p1 = promiseGen(false, 1000, "p1 resolved", "p1 rejected");
// const p2 = promiseGen(true, 3000, "p2 resolved", "p2 rejected");
// const p3 = promiseGen(true, 2000, "p3 resolved", "p3 rejected");

// const promiseResult = Promise.race([p1, p2, p3]);
// promiseResult
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.errors);
//   });
// promise.allSettled() ==> gives us array of all promises, which are combination of fulfilled and rejected.

// function promiseGen(cond, delay, resData, rejError) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (cond) {
//         res(resData);
//       }
//       rej(rejError);
//     }, delay);
//   });
// }
// const p1 = promiseGen(true, 1000, "p1 resolved", "p1 rejected");
// const p2 = promiseGen(false, 3000, "p2 resolved", "p2 rejected");
// const p3 = promiseGen(true, 2000, "p3 resolved", "p3 rejected");

// const promiseResult = Promise.allSettled([p1, p2, p3]);
// promiseResult.then((data) => {
//   console.log(data);
// });
// promise.allSettled is only combination, which does't depend on time.
// promise.allSettled gives only fulfilled promise only.

//           #### ASYNC and AWAIT
// async and await are used to work with asynchronous code, making it easier to read and write compared to traditional Promises or callback-based approaches. 
// async ==> keyword in js engine tells function that it may contain async code.
/**
 * async function always returns a Promise.  
 * If function returns a value, it is wrapped in a resolved Promise. 
 * If it throws an error, it is wrapped in a rejected Promise.
 */

/**
 * await keyword is used to pause the execution of an async function until a Promise is resolved or rejected.
 * The function pauses at await and waits for the Promise to settle (either resolve or reject) before continuing execution.
 */

// async function test() {
//   return "gangadhar";
// }
// const res = test();
// console.log(res);
 
// JS engine by default convert 'async' function output into 'promise'.
// async is similar to .then and .catch
// along with 'async' we should use 'await' keyword.

// function promiseGen() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res("p1 is resolved");
//     }, 4000);
//   });
// }
// async function test() {
//   let s = "hello";
//   console.log(s);
//   const promResult = await promiseGen();
//   console.log(promResult);
// }
// test();
// to execute promiseGen function, it takes 4sec time and await until 4 sec completes and then execute code.

// async function promiseGen() {
//   console.log("inside gen fn");
//   setTimeout(() => {
//     console.log("inside timeout");
//   });
//   return new Promise((res) => {
//     res("resolved 5");
//   });
// }
// async function test() {
//   console.log("inside test");
//   const result = await promiseGen();
//   console.log(result);
//   console.log("after result");
// }
// console.log("start");
// test();
// console.log("end");

// TO HANDLE PROMISE ERRORS:

// const p1 = new Promise((res, rej) => {
//   let cond = true;
//   if (cond) {
//     res("p1 fulfilled");
//   } else {
//     rej("p1 rejected");
//   }
// });

// const p2 = new Promise((res, rej) => {
//   let cond = true;
//   if (cond) {
//     res("p2 fulfilled");
//   } else {
//     rej("p2 rejected");
//   }
// });

// async function promiseHandler() {
//   try {
//     const data1 = await p1;
//     console.log(data1);
//     const data2 = await p2;
//     console.log(data2);
//   } catch (vent) {
//     console.log(vent);
//   }
// }
// promiseHandler();
// If p1 is rejected, then if p2 is fulfilled promise, then p2 will not execute as p1 is rejected promise.
// excecution stops at p1. it will not proceed further.

//         #### FETCH
// Fetch is function which takes url and gives us a promise.
// fetch API is a modern way to make HTTP requests and interact with resources such as APIs.

// fetch(url, options)
// url: The URL of the resource you want to fetch.
// options (optional): An object to configure the request, such as method, headers, body, etc.

// const productDiv = document.getElementById("products");

// function renderData(data) {
//   const dummy = data.products;

//   for (let i = 0; i < dummy.length; i++) {
//     const proDiv = document.createElement("div");
//     const title = document.createElement("h1");
//     title.innerText = dummy[i].title;
//     proDiv.appendChild(title);
//     productDiv.appendChild(proDiv);
//   }
// }
// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then((data) => renderData(data));

// fetch gives us response object.
// response.json() => is promise which contains data.

// how to convert fetch into async await.

// async function fetchData() {
//   try {
//     const response = await fetch("https://dummyjson.com/producs");
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// fetchData();

//          #### BROWSER STORAGE

// localStorage.setItem("authKey", 5457357);
// localstorage will be present in browser, even if we are closing browser.
// const key = localStorage.getItem("authKey");
// console.log(key);
// we will get that key present in browser using getItem.

//                 #### DEBOUNCING
// Debouncing is used to improve performance of feature by controlling the time at which function should be executed.
// Debouncing is used to improve browser performance.

// Purpose: To prevent a function from running too often.
// How It Works: It waits for a specified time after the last event before executing the function. If another event happens before this, time expires, the timer resets.

// const inputText1 = (event) => {
//   console.log(event.target.value);
// };
// const inputText2 = (event) => {
//   console.log(event.target.value);
// };

// const debounceFn = (oldFn, delay) => {
//   let id = null;
//   return function (...params) {
//     console.log("id ==>", id);
//     clearTimeout(id);
//     id = setTimeout(() => {
//       // console.log("time runs");
//       oldFn(...params);
//     }, delay);
//   };
// };
// const debounceMain = debounceFn(inputText2, 2000);

// in debouncing, 1st user types 'iphone'for example, then with in 1sec, if user types 'iph' and 1sec time is up, then iph is printes in console,
// after 'iph' is printed, again id will be cleared and user typed 'one', then with 1sec 'one' is printed.
// so this process repeats, previous id is cleared and user types slow or fast, function execution depends on time here.
// if user types fast "iphone" in 1sec, then function will execute once and it will improve browser efficiency.
// this is debouncing.

// const inputfn = document.getElementById("fruits");
// const inputText = (text) => {
//   console.log(text);
// };

// function debounce(fn, delay) {
//   let timeoutId = null;
//   return function (...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn(...args);
//     }, delay);
//   };
// }
// const debounceFN = debounce(inputText, 3000);

// inputfn.addEventListener("input", (e) => {
//   debounceFN(e.target.value);
// });

//            #### THROTTLING
// Throttling: ==> is mechanism that allows function to execute for limited no of times, after that it will block it's excution.
// throttling is used to improve browser performance.
let count1 = 0;
const updatethr1 = () => {
  count1++;
  console.log(count1);
};

let count2 = 0;
const updatethr2 = () => {
  count2++;
  console.log(count2);
};

const throttleFn = (oldFn, delay) => {
  let gun = true;
  return function (...args) {
    if (gun) {
      oldFn(...args);
      gun = false;
      setTimeout(() => {
        gun = true;
      }, delay);
    }
  };
};
const updateMain = throttleFn(updatethr2, 1000);
// In example, we update the count after each 1sec, so first we click on button, then count is 1(gun = true)
// it checks if (gun=true), after that it prints count(oldFn(...args)), and we stop printing count to 2, by setting gun = false.
// so after 1sec, based on time after 1sec is completed, again count prints 2
// in this way it repeats for every click, and excutes.
