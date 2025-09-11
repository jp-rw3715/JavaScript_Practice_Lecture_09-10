// ! 1. Grade Calculation Based on Marks
let marks = 67;
let grade =
  marks >= 90
    ? "A+"
    : marks >= 80
    ? "A"
    : marks >= 70
    ? "B"
    : marks >= 60
    ? "C"
    : marks >= 50
    ? "D"
    : "Fail";
console.log("Grade:", grade);

// ---------------------

// ! 2. Bill Calculation With Discount

let quantity = 37;
let price = 175;
let total = quantity * price;
let discount = total > 1000 ? total * 0.1 : 0;
let finalbill = total - discount;
console.log(finalbill);

// ---------------------

// ! 3. Simple Interest Calculation

let principal = 3400;
let rate = 6;
let time = 3;
let simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest);

// -------------------------

// ! 4. Employee Gross Salary Calculation
let basic = 29000;
let hra = basic * 0.18;
let da = basic * 0.07;
let grossSalary = basic + hra + da;
console.log("Salary:", grossSalary);

// --------------------------------

// ! 5. Swapping Two Numbers (Array Destructuring)

let x = 8, y = 13;
console.log("Before swap:", x, y);

// Swap using array destructuring
[x, y] = [y, x];
console.log("After swap:", x, y);
// -------------------------

// ! 6. Number and String Calculations

let result1 = 25 + '15' + 10;               // "251510"
let result2 = 40 + 20 + '30' + 10;          // "603010"
let result3 = 10 + 10 + '10' - 5 + 5;       // 100
let result4 = 15 + '5' - 5 + '10';          // "10510"
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// -------------------------------


