// Traditional Function
function isEvenOrOdd(number) {
  if (typeof number !== "number") {
    return "Input is not a valid number";
  }
  if (number % 2 === 0) {
    return number + " is an even number";
  }
  return number + " is an odd number";
}

console.log(isEvenOrOdd(12)); // 12 is an even number
console.log(isEvenOrOdd(19)); // 19 is an odd number
console.log(isEvenOrOdd("test")); // Input is not a valid number

// Arrow Function
const isEvenOrOddArrow = (number) => {
  if (typeof number !== "number") {
    return "Input is not a valid number";
  }
  return number % 2 === 0
    ? `${number} is an even number`
    : `${number} is an odd number`;
};

console.log(isEvenOrOddArrow(24)); // 24 is an even number
console.log(isEvenOrOddArrow(15)); // 15 is an odd number
console.log(isEvenOrOddArrow(false)); // Input is not a valid number
