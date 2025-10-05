// 1. Making a 2D Array
let matrix = [
  [11, 12],
  [21, 22],
  [31, 32],
];
console.log("Matrix :", matrix);

// 2. Reading Elements
console.log("Element at [1][1] :", matrix[1][1]); // Output: 22
console.log("Element at [2][0] :", matrix[2][0]); // Output: 31

// 3. Changing an Entry
matrix[0][1] = 44;
console.log("\nChanged Matrix:", matrix);

// 4. Inserting a New Row
matrix.push([41, 42]);
console.log("\nMatrix after adding row:", matrix);
