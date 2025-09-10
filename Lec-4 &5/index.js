// Arithmetic Operators Examples
{
  let x = 2;
  let y = 3;

  console.log("Addition: x + y =", x + y);
  console.log("Subtraction: x - y =", x - y);
  console.log("Multiplication: x * y =", x * y);
  console.log("Division: x / y =", x / y);
  console.log("Modulus: x % y =", x % y);
  console.log("Exponentiation: x ** y =", x ** y);
  console.log("Increment: ++x =", ++x);
  console.log("Decrement: --x =", --x);
}

// Assignment Operators Examples
{
  let a = 3;
  let b = 4;

  a += b; // a = a + b
  console.log("Addition Assignment: a += b =", a);
  a -= b; // a = a - b
  console.log("Subtraction Assignment: a -= b =", a);
  a *= b; // a = a * b
  console.log("Multiplication Assignment: a *= b =", a);
  a /= b; // a = a / b
  console.log("Division Assignment: a /= b =", a);
  a %= b; // a = a % b
  console.log("Modulus Assignment: a %= b =", a);
  a **= b; // a = a ** b
  console.log("Exponentiation Assignment: a **= b =", a);
}

// Comparison Operators
{
  let a = "13";
  let b = 12;

  console.log("a =", a, ", b =", b);
  console.log("a == b : ", a == b); // true or false (loose equal)
  console.log("a === b : ", a === b); // strict equal (value & type)
  console.log("a != b : ", a != b);
  console.log("a !== b : ", a !== b);
  console.log("a > b : ", a > b);
  console.log("a >= b : ", a >= b);
  console.log("a < b : ", a < b);
  console.log("a <= b : ", a <= b);
}

// Ternary Operator Example
{
  let x = false;
  x ? console.log("Positive") : console.log("Negative");
}

// Logical Operators
{
  let x = true;
  let y = false;
  let z = true;

  console.log("x && y : ", x && y);
  console.log("x && z : ", x && z);
  console.log("y && y : ", y && y);
  console.log("x && y && z : ", x && y && z);
  console.log("y || y || y : ", y || y || y);
  console.log("!(x && y) : ", !(x && y));
  console.log("!(x && z) : ", !(x && z));
  console.log(
    "Complex Logical Expression : ",
    !(x && y) || (!(x && x) && (x || z)) || (x && x)
  );
  console.log(
    "Another Complex Expression : ",
    !(x && y) && !!(x && x) && (x || z) && x && y
  );
}

// String Operators
{
  let str1 = "Hello JavaScript!";
  let str2 = "Hi ";
  console.log("Concatenation (+) :", str2 + str1);

  str2 += str1; // Assignment concatenation
  console.log("Add and Assign (+=):", str2);
}
