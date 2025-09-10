// यह एक सिंगल लाइन कमेंट है
/* यह मल्टीलाइन
     कमेंट है जो कोड को समझाने के लिए लिखा गया है */

// वैरिएबल डिक्लेरेशन का तरीका
var toy = "car";
var _toys = "bicycles";
var formInputData = "user inputs";
var FormDataVar = "some new data";
var $greeting = "Hello!";

// console में वैरिएबल की वैल्यू दिखाना
console.log(formInputData);
console.log(FormDataVar);
console.log($greeting);

// ध्यान दें: वैरिएबल नाम केस सेंसिटिव होते हैं
var toy = 5;
var TOY = 10;
console.log(toy); // 5
console.log(TOY); // 10

// JavaScript में डेटा टाइप्स:
// Primitive - Number, String, Boolean, Undefined, Null, Symbol, BigInt
// Non-Primitive - Array, Object

// String घोषित करने के तीन तरीके
let stringOne = "Hello from JS";
let stringTwo = "Single quoted string";
let stringThree = `Template literal 
  allows multiline string`;

// स्टिंग इनपुट में कोट्स का सही इस्तेमाल
let stringFour = "It's a nice day";
let stringFive = 'He said "JavaScript is fun"';

console.log(stringFour);
console.log(stringFive);
console.log(stringThree);

document.getElementById("info").innerHTML = "Check Console";
