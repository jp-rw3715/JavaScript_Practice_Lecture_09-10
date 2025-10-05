// 1. Group array of objects by property (similar to groupBy)
let items = [
  { itemName: "Orange", category: "Fruit" },
  { itemName: "Broccoli", category: "Vegetable" },
  { itemName: "Strawberry", category: "Fruit" },
];

let groupedItems = Object.groupBy(items, (item) => item.category);
console.log("groupBy() :", groupedItems);

// 2. Check if object has own property
let gadget = {
  gadgetId: 101,
  gadgetName: "Smartwatch",
};
console.log("hasOwn gadgetId:", Object.hasOwn(gadget, "gadgetId"));
console.log("hasOwn price:", Object.hasOwn(gadget, "price"));

// 3. Compare two values with Object.is()
console.log("Object.is(5, 5):", Object.is(5, 5));
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN));
console.log("Object.is(-0, 0):", Object.is(-0, 0));

// 4. Get all keys of an object
console.log("Keys of gadget:", Object.keys(gadget));

// 5. Get all values of an object
console.log("Values of gadget:", Object.values(gadget));

// 6. Get key-value pairs as array entries
console.log("Entries of gadget:", Object.entries(gadget));

// 7. Convert array of key-value pairs to object
let pairArray = [
  ["productId", 202],
  ["productName", "Tablet"],
];
let productObj = Object.fromEntries(pairArray);
console.log("fromEntries:", productObj);
