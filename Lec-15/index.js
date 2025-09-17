// Math.E

{
  console.log("Euler's Number:", Math.E); // Approx. 2.718281828
}

// Math.PI

{
  console.log("Value of PI:", Math.PI); // Approx. 3.141592653
}

// Math.pow()

{
  console.log("2^5 =", Math.pow(2, 5)); // 32
}

// Math.ceil()

{
  console.log("Ceil:", Math.ceil(5.3)); // 6
}

//Math.floor()

{
  console.log("Floor:", Math.floor(8.7)); // 8
}

// Math.trunc()
{
  console.log("Trunc:", Math.trunc(45.999)); // 45
}

// Math.max() / Math.min()

{
  let numbers = [11, 42, 8, 35, 100];
  console.log("Maximum:", Math.max(...numbers)); // 100
  console.log("Minimum:", Math.min(...numbers)); // 8
}

//  Math.sqrt()
{
  console.log("Square Root:", Math.sqrt(25)); // 5
}

// Math.log() / Math.log2() / Math.log10()

{
  let value = 8;
  console.log("ln(8):", Math.log(value)); // Natural log
  console.log("log2(8):", Math.log2(value)); // Log base 2
  console.log("log10(8):", Math.log10(value)); // Log base 10
}

// Math.random()

{
  let rand = Math.floor(Math.random() * 50) + 1;
  console.log("Random Number:", rand); // 1~50
}
//  Math.sign()

{
  console.log(Math.sign(-5)); // -1
  console.log(Math.sign(0)); // 0
  console.log(Math.sign(22)); // 1
}

// Math.abs()

{
  console.log("Absolute:", Math.abs(-876)); // 876
}
// Math.sin() / Math.cos() / Math.tan()
{
  let angle = 30;
  let radians = angle * (Math.PI / 180);
  console.log("sin(30°):", Math.sin(radians));
  console.log("cos(30°):", Math.cos(radians));
  console.log("tan(30°):", Math.tan(radians));
}
// Math.round()

{
  console.log("Rounded:", Math.round(19.3)); // 19
}
