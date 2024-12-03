// const cart = ["hello", "apple", "orange"];

// function createOrder(cart) {
//   return new Promise((res, rej) => {
//     if (!validatecart(cart)) {
//       setTimeout(() => {
//         rej("data error occured");
//       });
//     } else {
//       res("data resolved");
//     }
//   });
// }
// createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .then((item) => {
//     return proceedToPayment(item);
//   })
//   .then((payment) => {
//     console.log(payment);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function proceedToPayment(orderId) {
//   return new Promise((res, rej) => {
//     res("payment succesfull");
//   });
// }

// function validatecart(cart) {
//   return true;
// }

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
// const bindmethod = getName.bind(name, "banglore", "karnataka");
// console.log(bindmethod);
// bindmethod();

const normal = (event) => {
  console.log(event.target.value);
};

const getData = (event) => {
  console.log(event.target.value);
};

const debounce = (oldfn, delay) => {
  let timer = null;

  return function (...params) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      oldfn(...params);
    }, delay);
  };
};
const res = debounce(getData, 400);
