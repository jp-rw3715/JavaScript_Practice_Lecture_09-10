// 1. Template Literals with Variable Declaration

let userName = "ayush";
let greeting = `Welcome, ${userName}!`;
console.log(greeting); // Output: Welcome, ayush!

// 2. if Statement

let orderPlaced = false;
let price = 50;
let budget = 60;

if (price < budget) {
  console.log("Proceed to payment — order can be placed.");
}

// 3. if ... else Statement

let storeOpen = false;
if (storeOpen) {
  console.log("The store is open! Ready for shopping.");
} else {
  console.log("Sorry, the store is closed.");
}

// 4. if ... else if ... else Statement
{
let subject = "science";
if (subject === "maths") {
  console.log("Maths book is available.");
} else if (subject === "history") {
  console.log("History book is available.");
} else if (subject === "geography") {
  console.log("Geography book is available.");
} else if (subject === "art") {
  console.log("Art book is available.");
} else {
  console.log("Book not listed.");
}
}

// 5. switch Case Statement

let subject = "computer";
switch (subject) {
  case "maths":
    console.log("Maths book is available.");
    break;
  case "history":
    console.log("History book is available.");
    break;
  case "geography":
    console.log("Geography book is available.");
    break;
  case "art":
    console.log("Art book is available.");
    break;
  case "science":
    console.log("Science book is available.");
    break;
  default:
    console.log("Book not found in library.");
}

// 6. Ternary Operator

let loggedIn = true;
let status = loggedIn ? "User is logged in." : "Guest user.";
console.log(status);

// 7. Nested Statements (Extra)

let temperature = 36;
if (temperature > 30) {
  if (temperature < 40) {
    console.log("It's a hot day, but not too extreme.");
  } else {
    console.log("Extreme heat warning!");
  }
}
