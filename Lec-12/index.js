// 15. slice(start, end) - extracts part of a string and returns a new string
{
  let text = "JavaScript Practice";
  console.log("slice(0, 10):", text.slice(0, 10)); // JavaScript
  console.log("slice(-8):", text.slice(-8)); // Practice
}

// 16. split(separator, limit) - splits string into array by separator
{
  let text = "JavaScript";
  console.log("split(''):", text.split("")); // splits into individual chars
  console.log("split('', 4):", text.split("", 4)); // first 4 chars as array
}

// 17. startsWith(searchString, position) - checks if string starts with substring
{
  let phrase = "JavaScript Rocks";
  console.log("startsWith 'Java':", phrase.startsWith("Java")); // true
  console.log("startsWith 'Rocks' at pos 11:", phrase.startsWith("Rocks", 11)); // true
}

// 18. substring(start, end) - returns substring between start and end indexes
{
  let word = "JavaScript";
  console.log("substring(1,5):", word.substring(1, 5)); // avaS
}

// 19. toUpperCase() - converts string to uppercase
{
  let str = "javascript";
  console.log("toUpperCase():", str.toUpperCase()); // JAVASCRIPT
}

// 20. toLowerCase() - converts string to lowercase
{
  let str = "JAVASCRIPT";
  console.log("toLowerCase():", str.toLowerCase()); // javascript
}

// 21. trim() - removes whitespace from both ends of a string
{
  let data = "   Hello JavaScript   ";
  console.log("trim():", `"${data.trim()}"`); // "Hello JavaScript"
}

// 22. trimStart() - removes whitespace from start of a string
{
  let data = "   Hello JavaScript   ";
  console.log("trimStart():", `"${data.trimStart()}"`); // "Hello JavaScript   "
}

// 23. trimEnd() - removes whitespace from end of a string
{
  let data = "   Hello JavaScript   ";
  console.log("trimEnd():", `"${data.trimEnd()}"`); // "   Hello JavaScript"
}
