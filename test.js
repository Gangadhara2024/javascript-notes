class Animal {
  constructor(colour) {
    this.colour = colour;
  }
  speak() {
    console.log(`animal colour is ${this.colour}`);
  }
}
class Dog extends Animal {
  speak() {
    console.log(`dog colour is ${this.colour}`);
  }
}
class Cat extends Dog {
  speak() {
    console.log(`cat colour is ${this.colour}`);
  }
}
const res = [new Dog("black"), new Cat("white"), new Animal("red")];
console.log(res);

res.forEach((i) => i.speak());
