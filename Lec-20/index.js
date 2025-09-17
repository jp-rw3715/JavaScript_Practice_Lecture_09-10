// JavaScript Number Object Examples

// 1. Parsing strings into numbers
let str = "456.789xyz";
let floatNum = Number.parseFloat(str);
let intNum = Number.parseInt(str);
console.log("parseFloat:", floatNum); // 456.789
console.log("parseInt:", intNum); // 456

// 2. Checking number types
console.log("isFinite (floatNum):", Number.isFinite(floatNum)); // true
console.log("isInteger (floatNum):", Number.isInteger(floatNum)); // false
console.log("isInteger (100):", Number.isInteger(100)); // true
console.log("isNaN (NaN):", Number.isNaN(NaN)); // true

// 3. Safe integer checks
console.log("isSafeInteger (456):", Number.isSafeInteger(intNum)); // true
console.log("isSafeInteger (2^53):", Number.isSafeInteger(2 ** 53)); // false

// 4. Number formatting
let val = 12345.6789;
console.log("toExponential(2):", val.toExponential(2)); // "1.23e+4"
console.log("toFixed(3):", val.toFixed(3)); // "12345.679"
console.log("toPrecision(6):", val.toPrecision(6)); // "12345.7"

// 5. Number toString with different bases
console.log("toString (decimal):", intNum.toString()); // "456"
console.log("toString (binary):", intNum.toString(2)); // "111001000"
console.log("toString (hex):", intNum.toString(16)); // "1c8"

// 6. Number object wrapper and valueOf
let numObj = new Number(500);
console.log("valueOf:", numObj.valueOf()); // 500
console.log("typeof numObj:", typeof numObj); // "object"
console.log("typeof numObj.valueOf():", typeof numObj.valueOf()); // "number"
