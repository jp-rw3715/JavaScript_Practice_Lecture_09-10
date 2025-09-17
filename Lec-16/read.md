JavaScript Functions

Functions are reusable blocks of code designed to perform specific tasks.

Defined using the function keyword or as expressions.

Functions can accept input values called parameters or arguments.

They return values or perform actions like logging to the console.

Function Declaration Syntax

<!--  -->

function functionName(parameters) {
// code to execute
return value; // optional
}

Declared functions are hoisted, so they can be called before their definition.

Example: A function checkEvenOdd tests if a number is even or odd, returning a string message.

Use return to send back a result from the function.

<!--  -->

Arrow Functions (ES6)

Arrow functions are a shorter syntax introduced in ES6 for function expressions.

Syntax:

const functionName = (parameters) => {
// code
return value; // optional if single expression
};

If the function body has only one expression, both {} and return can be omitted.

Arrow functions do not have their own this context, making them different from traditional functions.

<!--  -->

<!-- Traditional function checkEvenOdd:  -->

Checks type of input.

Uses modulo % to determine even or odd.

Returns appropriate message.

<!-- Arrow function checkEvenOddArrow:  -->

Same logic as above but uses arrow syntax.

Shows how to write concise and modern JavaScript functions.
