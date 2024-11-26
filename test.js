// const fetxhdata = async () => {
//   try {
//     const response = await fetch("https://api.postalpincode.in/pincode/531055");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetxhdata();

fetch("https://api.postalpincode.in/pincode/531055")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
