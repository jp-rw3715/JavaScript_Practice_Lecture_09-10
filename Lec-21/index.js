// JavaScript Array Methods - Custom Version

// 1. Creating arrays and comparing references
{
  let numbers = [2, 4, 6, 8];

  let sameRef = numbers;
  let cloneArr = Array.from(numbers);

  console.log("numbers :", numbers);
  console.log("sameRef :", sameRef);
  console.log("cloneArr :", cloneArr);

  console.log("numbers === sameRef :", numbers === sameRef);
  console.log("numbers === cloneArr :", numbers === cloneArr);

  let blankArr = [];
  console.log("blankArr === sameRef :", blankArr === sameRef);
  console.log("typeof [] :", typeof []);
  console.log("typeof numbers :", typeof numbers);

  let madeByConstructor = new Array("x", "y", "z");
  console.log("madeByConstructor :", madeByConstructor);
  console.log("madeByConstructor === sameRef :", madeByConstructor === sameRef);
}

// 2. Sparse arrays (skipped indexes)
{
  let missingValues = [11, , 22, , 33];
  console.log("missingValues :", missingValues);
  console.log("Length :", missingValues.length);
  console.log("Existing Keys :", Object.keys(missingValues));
}

// 3. Editing array length
{
  let fruits = [];
  console.log("Initial length :", fruits.length);

  fruits.length = 4;
  fruits[2] = "Mango";

  console.log("fruits :", fruits);
  console.log("Keys :", Object.keys(fruits));
}

// 4. Using Array.isArray()
{
  let data1 = ["HTML", "CSS"];
  let data2 = { topic: "JavaScript" };

  console.log("data1 is array?", Array.isArray(data1));
  console.log("data2 is array?", Array.isArray(data2));
}

// 5. Using Array.of()
{
  let techStack = Array.of("Node", "React", "Express");
  console.log("Array.of :", techStack);
}
