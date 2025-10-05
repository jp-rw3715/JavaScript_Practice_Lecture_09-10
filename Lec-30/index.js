// 1. Simple Function
function greetMessage() {
  console.log("Welcome to JavaScript!");
}
greetMessage();

// 2. Function Expression
let displayE = function () {
  console.log(Math.E);
};
displayE();

// 3. Callback Function
function executeCallback(callback) {
  console.log("Processing complete");
  callback(); // invoke the callback function
}

function showSum() {
  console.log(50 + 25);
}

executeCallback(showSum);

// 4. setTimeout() - delay execution
function delayedMsg() {
  console.log("Timeout message: Hello after delay!");
}
let delayId = setTimeout(delayedMsg, 4000);
console.log("Timeout ID:", delayId);
console.log("Executing setTimeout...");

// 5. Recursive setTimeout - loops regularly like a clock
function displayClock() {
  let now = new Date();
  console.log("Current Time:", now.toLocaleTimeString());
  setTimeout(displayClock, 2000);
}
displayClock();

// 6. clearTimeout() - cancels a scheduled timeout
let count = 0;
function incrementCount() {
  count += 1;
  console.log("Counter:", count);
}
let timerId = setTimeout(incrementCount, 5000);
clearTimeout(timerId);
console.log("Timeout canceled before execution");

// 7. setInterval() - runs repeatedly until cleared
function sayHelloAgain() {
  console.log("Hello again!");
}
let intervalId = setInterval(sayHelloAgain, 3000);
console.log("Interval ID:", intervalId);

// To stop the ongoing interval, call clearInterval(intervalId);
