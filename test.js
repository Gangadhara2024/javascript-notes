// console.log(a);
// let a = 19;
// function add() {
//   let a = 66;
//   console.log(a);
// }
// console.log(a);
// add();

// console.log(b);
// const b = 19;
// function add() {
//   const b = 66;
//   console.log(b);
// }
// add();
// console.log(b);

// console.log(c);
// var c = 19;
// function add() {
//   var c = 66;
//   console.log(c);
// }
// add();
// console.log(c);

// let b = 80;
// setTimeout(function () {
//   console.log(b);
// }, 3000);
// b = 90;

// let x = 20;
// function foo() {
//   console.log(x);
// }
// foo();

// function test() {
//   return {
//     a: 2,
//   };
// }
// console.log(typeof test());

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, "34"));

// const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map((number) => number * number);
// console.log(squaredNumbers);

// squaredNumbers.forEach((squaredNumber) => {
//   console.log(squaredNumber);
// });

// // Output:
// // 1
// // 4
// // 9
// // 16
// // 25

// function greet(name, abc) {
//   console.log("hello", name);
//   abc();
// }

// function foo() {
//   console.log("foo added");
// }
// greet("gangadhar", foo);

// function greet(name) {
//   console.log("hello", name);
// }
// function add(callback) {
//   const name = "enter name";
//   callback(name);
// }
// add(greet);

// const numbers = [2, 3, 6, 5, 4];

// function greet(item) {
//   return item % 2 === 0;
// }
// const data = numbers.filter(greet);
// console.log(data);

// function greet(callback) {
//   setTimeout(() => {
//     console.log("data");
//     callback();
//   }, 3000);
// }

// function greeting() {
//   setTimeout(() => {
//     console.log("greeting done");
//   }, 6000);
// }
// greet(greeting);

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(5)(5)(10));

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

// const foo = (name) => (age) => (city) =>
//   `name is: ${name}, age is: ${age}, city is: ${city}`;

// const names = foo("anil");
// const ages = names("26");
// console.log(ages("chennai"));

// function debounce(fn, delay) {
//   let timeoutId = null;
//   return function (data) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fn(data);
//     }, delay);
//   };
// }
// const deFn = debounce(() => console.log("debounce done"), 3000);
// deFn();

// const inputdata = document.getElementById("fruits");
// function printInputText(text) {
//   console.log(text);
// }

// function debounce(fx, delay) {
//   let timeoutId = null;
//   return function (text) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       fx(text);
//     }, delay);
//   };
// }
// const debounceFN = debounce(printInputText, 300);

// inputdata.addEventListener("input", (e) => {
//   debounceFN(e.target.value);
// });
// in this example if user type anything in input, then in delay(1sec) what user types in 1sec debounce function gets excutes
// and if time completes then timer resets. repeats again so on ...

// function Throttle(fx, delay) {
//   let timeoutId = null;
//   return function () {
//     if (!timeoutId) {
//       timeoutId = setTimeout(() => {
//         fx();
//         clearTimeout(timeoutId);
//         timeoutId = null;
//       }, delay);
//     }
//   };
// }
// const throttleFN = Throttle(() => console.log("throttle done!"), 1000);
// throttleFN();

// let count = 0;
// function printScroll() {
//   count += 1;
//   console.log("scroolcount", count);
// }

// function Throttle(fx, delay) {
//   let timeoutId = null;
//   return function () {
//     if (!timeoutId) {
//       timeoutId = setTimeout(() => {
//         fx();
//         clearTimeout(timeoutId);
//         timeoutId = null;
//       }, delay);
//     }
//   };
// }
// const throttleFN = Throttle(printScroll, 2000);

// document.addEventListener("scroll", () => {
//   throttleFN();
// });

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

// const btn1 = document.getElementById("btn1");

// const f1 = () => {
//   console.log("f1 occured");
// };
// const f2 = () => {
//   console.log("f2 occured");
// };
// btn1.addEventListener("click", f1);
// btn1.addEventListener("click", f2);
// // callback fn 'f' will be called when event occurs.

// const box = document.querySelector(".box");

// box.addEventListener("mouseenter", () => {
//   // box.classList.add("active");
//   box.classList.toggle("active");
// });

// box.addEventListener("mouseleave", () => {
//   // box.classList.remove("active");
//   box.classList.toggle("active");
// });
// // toggle => means if class is there it do not add class. and reverse of it

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
// then convert milliseconds into seconds.
// we get difference b/w birthdate and newdate in seconds
//  (24 * 60 * 60): Converts the difference from seconds to days by dividing by the number of seconds in a day (24 hours * 60 minutes * 60 seconds).
// gives output as number of days b/w previous birthday and presentdate.

// BIGINT: allows to work with large integer values with n notation at last.

// let num = 43873589758258358385n; // this is called as bigInt literal.
// console.log(num + 2n);

// another way to create bigInt:
// const int = BigInt("2353791375913851835");
// console.log(int);

// let n1 = 234331;
// let n2 = 2358708357891358753n;
// console.log(BigInt(n1) + n2);

// let obj1 = { a: 20 };
// let obj2 = { b: 20 };
// console.log(obj1 === obj2);

//                   #### TIMERS IN JS
// setTimeout: returns a number {timeoutId}
// setTimeout takes 2 parameters {1. callback function} {2. number}

// console.log(1);
// let f = setTimeout(() => {
//   console.log("timer done");
// }, 3000);
// console.log(2);
// first console.log(1) is excuted after that f function excutes and wait for 3sec to excute.
// so F function will wait and in mean time console.log(2) excutes.
// f function will be sent to callback queue, so queue excutes code line by line using time in setTimeout, then f function will sent to event loop.
// event loop checks if callstack is empty or any other line of code is running.
// If callstack is empty then f function is sent to callstack and code excutes.
// In this way timers run the code.

// console.log("before timer");
// let timerId = setTimeout(() => {
//   console.log("timer done");
// }, 2000);
// console.log("clearing timeout");
// clearTimeout(timerId);
// by using clearTimeout(timerId), function stops excuting.

let count = 0;
setInterval(() => {
  console.log(++count);
}, 1000);
