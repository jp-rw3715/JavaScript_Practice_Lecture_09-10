// JavaScript String Methods Practice

// 1. at(index) - returns char at index (supports negative index)
{
    const message = "Learning JavaScript";
    console.log("at(3):", message.at(3));      // 'r'
    console.log("at(-1):", message.at(-1));    // 't'
  }
  
  // 2. charAt(index) - returns char at index (no negative index)
  {
    const message = "Learning JavaScript";
    console.log("charAt(3):", message.charAt(3)); // 'r'
    console.log("charAt(10):", message.charAt(10)); // 'a'
  }
  
  // 3. charCodeAt(index) - returns UTF-16 code of char at index
  {
    const message = "Learning JavaScript";
    console.log("charCodeAt(0):", message.charCodeAt(0)); // 76 (code for 'L')
  }
  
  // 4. codePointAt(index) - returns Unicode code point at index
  {
    const message = "Learning JavaScript";
    console.log("codePointAt(5):", message.codePointAt(5)); // gives code of 'n'
  }
  
  // 5. concat(str1, str2, ...) - joins strings together
  {
    const firstName = "Ravindra";
    const lastName = "Kachariya";
    console.log("Concat:", firstName.concat(" ", lastName));
  }
  
  // 6. includes(searchString, position) - checks if substring exists
  {
    const phrase = "Hello JavaScript World";
    console.log("Includes 'Java':", phrase.includes("Java"));          // true
    console.log("Includes 'Script' from pos 10:", phrase.includes("Script", 10)); // true
  }
  
  // 7. endsWith(searchString, length) - checks if string ends with given substring
  {
    const phrase = "Web Development";
    console.log("Ends with 'ment':", phrase.endsWith("ment"));          // true
    console.log("Ends with 'Develop' length 11:", phrase.endsWith("Develop", 11)); // true
  }
  
  // 8. indexOf(searchString, position) - gives first occurrence index or -1
  {
    const phrase = "JavaScript language";
    console.log("Index of 'a':", phrase.indexOf("a"));                   // 1
    console.log("Index of 'a' from position 5:", phrase.indexOf("a", 5)); // 12
  }
  
  // 9. lastIndexOf(searchString, position) - gives last occurrence index or -1
  {
    const phrase = "JavaScript language";
    console.log("Last index of 'a':", phrase.lastIndexOf("a"));           // 16
    console.log("Last index of 'a' before position 10:", phrase.lastIndexOf("a", 10)); // 5
  }
  
  // 10. padStart(targetLength, padString) - pads at beginning
  {
    let shortStr = "42";
    console.log("Pad start to length 5:", shortStr.padStart(5, "0"));
  }
  
  // 11. padEnd(targetLength, padString) - pads at end
  {
    let shortStr = "42";
    console.log("Pad end to length 5:", shortStr.padEnd(5, "-"));
  }
  
  // 12. repeat(count) - repeats string n times
  {
    let word = "Hi! ";
    console.log("Repeat 3 times:", word.repeat(3));
  }
  
  // 13. replace(pattern, replacement) - replaces first match
  {
    let sentence = "I love coding in JavaScript.";
    console.log(sentence.replace("JavaScript", "TypeScript"));
  }
  
  // 14. replaceAll(pattern, replacement) - replaces all matches
  {
    let sentence = "JavaScript is fun. I like JavaScript.";
    console.log(sentence.replaceAll("JavaScript", "TypeScript"));
  }
  