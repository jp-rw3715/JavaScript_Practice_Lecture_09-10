function welcome(person) {
  return "Welcome, " + person + "!";
}
console.log(welcome("Amit"));

// Arrow function for subtraction
const subtract = (x, y) => x - y;
console.log("Subtraction (Arrow Function):", subtract(15, 8));

// Recursive function for sum of numbers up to n
function sumUpTo(n) {
  if (n === 0) return 0;
  return n + sumUpTo(n - 1);
}
console.log("Sum up to 5:", sumUpTo(5));

// Nested functions: outer and inner
function firstLayer(a) {
  function secondLayer(b) {
    return a * b;
  }
  return secondLayer(3);
}
console.log("Nested Function Output:", firstLayer(7));

// IIFE demonstration
(function (note) {
  console.log("Instant Output:", note);
})("This happens instantly!");

// Closure counter example
function makeStepper() {
  let step = 10;
  return function () {
    step += 2;
    return step;
  };
}
const stepper = makeStepper();
console.log("Closure Output 1:", stepper());
console.log("Closure Output 2:", stepper());
console.log("Closure Output 3:", stepper());
