// Array.prototype.find() & findLast()
{
  let temps = [95, 60, 72, 81, 65];

  let firstCool = temps.find((temp) => temp < 80);
  let lastCool = temps.findLast((temp) => temp < 80);

  console.log("First cool day:", firstCool); // Output: 60
  console.log("Last cool day:", lastCool); // Output: 65
}

// Array.prototype.findIndex() & findLastIndex()
{
  let attempts = [22, 37, 15, 40, 19];

  let firstLowIdx = attempts.findIndex((a) => a < 20);
  let lastLowIdx = attempts.findLastIndex((a) => a < 20);

  console.log("First low score index:", firstLowIdx); // Output: 2
  console.log("Last low score index:", lastLowIdx); // Output: 4
}

// Array.prototype.forEach()
{
  let pages = ["Home", "About", "Contact"];

  console.log("Website Pages:");
  pages.forEach((page) => console.log("📝", page));
}

// Array.prototype.indexOf() & lastIndexOf()
{
  let foods = ["pizza", "pasta", "biryani", "burger", "pasta", "salad"];

  let firstPasta = foods.indexOf("pasta");
  let pastaStart3 = foods.indexOf("pasta", 3);
  let lastPasta = foods.lastIndexOf("pasta");
  let pastaTo4 = foods.lastIndexOf("pasta", 4);

  console.log("First pasta:", firstPasta); // Output: 1
  console.log("Pasta at index 3 or later:", pastaStart3); // Output: 4
  console.log("Last pasta:", lastPasta); // Output: 4
  console.log("Pasta before index 4:", pastaTo4); // Output: 4
}
