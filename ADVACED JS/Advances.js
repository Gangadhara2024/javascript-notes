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
// here obj1 is clone of obj2, so both are same. if we change value like this obj2.a = 100;
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