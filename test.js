let count = 0;
const t1 = setInterval(() => {
    console.log(++count);
}, 500);

setTimeout(() => {
  console.log("clear timeout");
  clearTimeout(t1);
}, 3000);
