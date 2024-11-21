// const name = "arrow fn";

const person = {
  name: "Alice",
  greet: () => {
    console.log("res", this.name);
  },
};
person.greet();
