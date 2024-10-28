// Primitive Data Types

// String  (text)
let name = "Ankit";
console.log(typeof name);

// Number  (integer)
let age = 20;
console.log(typeof age);

// Boolean  (true/false)
let isAdult = true;
console.log(typeof isAdult);

// Null (empty)
let car = null;
console.log(typeof car);

// Undefined (not defined)
let city;
console.log(typeof city);

// symbol
let id = Symbol("123");
let id2 = Symbol("123");
console.log(id === id2);

console.table([name, age, isAdult, car, city]);



// Non-Primitive Data Types

// Array
const hero = ["Superman", "Batman", "Spiderman"];
console.log(hero);

// Object
let person = {
  name: "Ankit",
  age: 20,
  isAdult: true,
  car: null,
  city: undefined
};
console.log(person);
console.log(typeof person);

// Function
const myfunc = function greet() {
  console.log("Hello World");
}
myfunc();
console.log(typeof myfunc);
