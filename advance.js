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
// These methods are called (sharing methods).
// @@@ CALL method ==> is used for calling only functions. which takes multiple arguments,
// first argument call method takes is object. from second argument function parameters.
// Using CALL, APPLY and BIND methods, we can explictly(forcefully) set value of THIS keyword.

// let m1 = {
//   name: "hello",
//   city: "banglore",
// };

// function intro() {
//   console.log(this);
// }
// intro(); // here this keyword is window.
// intro.call(m1); // here this keyword is m1.

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
// p1.intro();
// p1.intro.call(p2);
// here if we want to use intro method in p2 object, we use call method.
// p1.intro.call(p2) ==> here THIS points to p2.

// const name = {
//   firstname: "ruttala",
//   lastname: "gangadhar",
// };

// let getName = function () {
//   console.log(`my name is ${this.firstname + " " + this.lastname} `);
// };

// const name2 = {
//   firstname: "ruttala",
//   lastname: "krishna",
// };
// getName.call(name);
// getName.call(name2);
// here we call name object using getname function. this is another way of writing call fn.

// const name = {
//   firstname: "ruttala",
//   lastname: "gangadhar",
// };

// let getName = function (city, state) {
//   console.log(
//     this.firstname + " " + this.lastname + " lives in " + city + ", " + state
//   );
// };

// const name2 = {
//   firstname: "ruttala",
//   lastname: "krishna",
// };
// getName.call(name, "vizag", "Andhra pradesh");
// getName.call(name2, "chennai", "Tamilnadu");
// getName.apply(name2, ["chennai", "Tamilnadu"]);
// first argument call takes is object and 2nd argument as function parameters.

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
 * 3. In apply, we can pass only 2 arguments.
 * 4. In call, Apply methods we 1st argument we take is object, and 2nd argument is function parameters.
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
// BIND method creates a new function with value of THIS keyword and new function in called later.
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

// let result = intro.bind(obj, "chennai", "GOOGLE");
// console.log(result);
// result();
// result ==> here we get result as intro whole function, and value of this keyword is obj.
// so obj is binded with intro function, so we cannot change it.
// here this keyword is fixed to obj using bind method.
// In bind method, function is not called itself, we should call like normal function i.e result();

// Now how to fix argument i.e city.
// let obj = {
//   name: "gangadhar",
// };
// function intro(city, company) {
//   console.log(
//     `my nam is ` + this.name + ` living in ` + city + ` works in ` + company
//   );
// }

// let data = intro.bind(obj, "goa", "GOOGLE");
// console.log(data);
// data("visakhaptnam", "AMAZON");
// here obj is fixed with this keyword, so if we want to fix arguments (city, company),
// we can give like this ==> intro.bind(obj, "banglore", "Tata"). it applies to whole function.
// we can give arguments as ==> data("chennai", "zoho"); to give different city, company, we call individual arguments as in example.
// data("chennai", "zoho");

//                       @@@@@ PROTOTYPES.
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
 * 1st mainFN is passes to call stack and after that it excutes code line by line.
 * after, ant timeout fn or promise fn are passed to callback queue, that code waits there after, call stack is empty, promise and setimout are passes to callstack and excutes.
 * so, all promise based fn are passed to microtaskqueue, after that event loop checks if callstack is empty, it passes code from callback queue to callstack.
 * 1st microtaskqueue code is passes to callstack, after that callbackqueue excutes.
 * this is how event loop excutes code.
 *
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

//      @@@ PROMISE COMBINATIONS. or (API's)
// PROMISE COMBINATIONS ==> methods used to handle multiple promises together.
// PROMISE COMBINATIONS are functions, that takes array of promises and gives me a single promise.

// true && true && false
// && condition always looking for false.

// false || false || true
// || condition always looking for true.

// true ==> fulfilled promise.
// false ==> rejected promise.

// @@@ Promise.all() ==> always looking for false i.e rejected promise.
// if all conditions are true, it will return response in form of array and after 3s it will return res, in case of below example.
// if one of consition is false, it will immediately return res of that rejected case i.e 1s, in 1s it will return res. remaining promises are not shown only rejected promises are shown.

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

// promise.allSettled() ==> gives us array of all promises, which are combination of fulfilled and rejected.
// if all conditions are true, it will return response in form of array and after 3s it will return res, in case of below example.
// if one of consition is false, it will return whole array and it contains [p1 success, p2 error, p3 success]. with resolved and rejected both.

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

// @@@ Promise.any() ==> always looking for true  i.e fulfilled promise.
// if all conditions are true, it looks for fastest resolved promise and returns that promise i.e p1.
// if one of condition is false, then it gives resolved promise of other promise with fastest resolved (p2).

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
// if all conditions are true, it will return fastest settled promise i.e p1 with 1sec gets resolved 1st. and will not wait for other promises.

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

// async function names() {
//   return "namste JS";
// }
// const res1 = names();
// res1.then((data) => console.log(data)).catch((err) => console.log(err));

// JS engine by default convert 'async' function output into 'promise'.
// async is similar to .then and .catch

// HANDLING PROMISE using normal PROMISES and ASYNC AWAIT.

// const pr = new Promise((res, rej) => {
//   res("Namaste JS");
// });

// function getData() {
//   pr.then((res) => console.log(res));
// }
// getData();
// using PROMISES.

// const pr = new Promise((res, rej) => {
//   res("Namaste JS");
// });

// async function getData() {
//   const value = await pr;
//   console.log(value);
// }
// getData();
// using ASYNC AWAIT.

// Using both 'ASYNC and AWAIT' used to handle promises.

// const pr = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Namaste JS");
//   }, 6000);
// });

// async function getData() {
//   console.log("hello 11");
//   const value = await pr;
//   console.log("namaste JAVASCRIPT");
//   console.log(value);
// }
// getData();
// here await waits for 6sec and then excutes code, after await line, because await will tell js engine to wait for 6sec.

// const pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Namaste JS 111");
//   }, 40000);
// });
// const pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Namaste JS 222");
//   }, 20000);
// });

// async function getData() {
//   console.log("hello 11");

//   const value = await pr1;
//   console.log("namaste JAVASCRIPT");
//   console.log(value);

//   const value2 = await pr2;
//   console.log("namaste JAVASCRIPT");
//   console.log(value2);
// }
// getData();
// here await will wait until time runs, after that pr1 is excuted, and pr2 excutes based on time.
// in other case, pr1 waits for 40sec, and prints value, in mean time pr2 which has 20sec, also runs and whole pr1,pr2 logs are printed at a time.

// REAL WORLD EXAMPLE OF ASYNC AWAIT.
// const POST_URL = "https://api.postalpincode.in/pincode/531055";

// const getData = async () => {
//   const data = await fetch(POST_URL);
//   const res = await data.json();
//   console.log(res);
// };
// getData();

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

//                 #### CURRYING
// CURRYING ==> transforms a function into a chain of smaller functions that handle arguments one at a time.

// using BIND METHOD.
// function add(x, y) {
//   console.log(x * y);
// }
// const res = add.bind(this, 5);
// res(10);
// here bind method gives copy of add function. and again invoke function as res().
// add.bind(this, 5) ==> x takes value 5, and res(10) ==> takes value 10 and logs (x * y) as 50.

// using CLOSURES.
// curried function breaks down the arguments into smaller chunks, making it easier to handle.
// function add(x) {
//   return function (y) {
//     return function (z) {
//       console.log(x + y + z); 
//     };
//   };
// }
// const res = add(2)(5)(5);
// here add takes multiple argument at once, so three functions takes each value.


//                 #### DEBOUNCING
// Debouncing is used to improve performance of feature by controlling the time at which function should be executed.
// Debouncing is used to improve browser performance.

// Purpose: To prevent a function from running too often.

// const inputText1 = (event) => {
//   console.log(event.target.value);
// };
// const inputText2 = (event) => {
//   console.log(event.target.value);
// };

// const debounceFn = (oldFn, delay) => {
//   let id = null;
//   return function (...params) {
//     clearTimeout(id);
//     id = setTimeout(() => {
//       // console.log("time runs");
//       oldFn(...params);
//     }, delay);
//   };
// };
// const debounceMain = debounceFn(inputText2, 2000);

// in debouncing, 1st user types 'iphone' for example, then with in 1sec, if user types 'iph' and 1sec time is up, then iph is printes in console,
// after 'iph' is printed, again id will be cleared and user typed 'one', then with 1sec 'one' is printed.
// so this process repeats, previous id is cleared and user types slow or fast, function execution depends on time here.
// if user types fast "iphone" in 1sec, then function will execute once and it will improve browser efficiency.
// this is debouncing.

// @@@ this explanation is about why cleartimeout and settimeout functions.
// The debounce function is called, and a wrapped function is returned.
// On the first keystroke ('h') ==> clearTimeout(timer) is executed, but since timer is null, it does nothing.
// A setTimeout is created with a 400ms delay, and its ID is stored in timer.
// The user has typed 'h', but the delay (400ms) has not yet elapsed.

// Second Step: User Types Another Key ('e')
// Before the 400ms delay for 'h' is up, the user types 'e':
// The returned function executes again.
// clearTimeout(timer) clears the previous timeout (for 'h'), canceling its pending execution.
// A new setTimeout is created with a fresh 400ms delay for 'he', and its ID is stored in timer.

// If the user stops typing and no more keys are pressed:
// The latest setTimeout (for 'he') completes after 400ms.
// The getData function is called, passing 'he' as the argument.
// The timer is not cleared until a new key is pressed.

// If User Types Again
// The same process repeats:
// A new keystroke triggers the returned function.
// clearTimeout(timer) cancels the pending timeout.
// A fresh setTimeout is started for another 400ms.

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
// let count1 = 0;
// const updatethr1 = () => {
//   count1++;
//   console.log(count1);
// };

// let count2 = 0;
// const updatethr2 = () => {
//   count2++;
//   console.log(count2);
// };

// const throttleFn = (oldFn, delay) => {
//   let gun = true;
//   return function (...args) {
//     if (gun) {
//       oldFn(...args);
//       gun = false;
//       setTimeout(() => {
//         gun = true;
//       }, delay);
//     }
//   };
// };
// const updateMain = throttleFn(updatethr2, 1000);
// In example, we update the count after each 1sec, so first we click on button, then count is 1(gun = true)
// it checks if (gun=true), after that it prints count(oldFn(...args)), and we stop printing count to 2, by setting gun = false.
// so after 1sec, based on time after 1sec is completed, again count prints 2
// in this way it repeats for every click, and excutes.

//          #### CLOSURES IN JS
// closure is a function bind together with its lexical parent is closure simply.

// function x() {
//   let a = 101;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();
// here value of 'a' is 101, because 'a' is not found in y(), so it finds in lexical parent.

// function mainFN() {
//   let c = 200;
//   console.log(a);

//   function outer(b) {
//     var a = 10;
//     console.log(c);

//     function inner() {
//       console.log(a, b, c);
//     }
//     return inner;
//   }
//   return outer;
// }
// const a = 500;
// const res = mainFN()("hello world");
// res();
// example of closures.
// here mainFN returns outer fn and mainFN is having (immediately invoked fn) where mainFN returns outer fn.
// res returns inner fn.

//       #### FUNCTIONS in DEPTH.

// function statement:
// function a() {
//   console.log("a called");
// }
// a();

// function expression:
// let x = function () {
//   console.log("b called");
// };
// x();

// function statement and function decleration both are same..
// anonymous function:
// function (){

// }

// Named function expressions:
// let x = function abc() {
//   console.log("b called");
// };
// x();

// First class function;
// let dx = function () {
//   return function abc() {
//     console.log("hello");
//   };
// };
// console.log(dx());
