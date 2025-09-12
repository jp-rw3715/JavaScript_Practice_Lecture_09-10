// JavaScript Loops and Control Statements

// 1. while Loop

{
  let num = 0;
  while (num < 5) {
    console.log(num);
    num++;
  }
}

// 2. do-while Loop

{
  let num = 0;
  do {
    console.log(num);
    num++;
  } while (num < 5);
}

// 3. for Loop
{
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}

// 4. for-in Loop

{
  const obj = { name: "Alice", age: 25 };
  for (let key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

// 5. for-of Loop

{
  const arr = [1, 2, 3];
  for (let value of arr) {
    console.log(value);
  }
}

// break and continue Statements

{
  for (let i = 0; i < 10; i++) {
    if (i === 5) break; // stop loop when i is 5
    console.log(i);
  }
}

{
  for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // skip printing when i is 2
    console.log(i);
  }
}
