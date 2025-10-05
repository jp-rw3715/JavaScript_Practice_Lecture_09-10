// 1. Simple JSON object
let userDetails = {
  fullName: "Arjun",
  age: 29,
  location: "Pune",
};
console.log("Simple JSON Object:", userDetails);

// 2. Nested JSON object with arrays and objects
let companyInfo = {
  companyName: "TechVibes™",
  team: [
    { name: "Nina", position: "Manager" },
    { name: "Rohit", position: "Developer" },
  ],
  headquarters: {
    city: "Bangalore",
    country: "India",
  },
};
console.log("Nested JSON Object:", companyInfo);

// 3. Convert JSON object to string
let stringifiedData = JSON.stringify(companyInfo);
console.log("Result of JSON.stringify:", stringifiedData);

// 4. Parse JSON string back to object
let jsonText = '{"fullName":"Nina","age":31}';
let jsonObject = JSON.parse(jsonText);
console.log("Result of JSON.parse:", jsonObject);
