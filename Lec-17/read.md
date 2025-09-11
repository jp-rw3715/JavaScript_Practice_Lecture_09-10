# JavaScript Map Object

## Main Features

- Map holds pairs of keys and values.
- Keys can be any data type (number, string, object, etc.).
- Items are ordered: keys remain in insertion order.
- Total number of items can be checked with `.size`.

## Essential Methods

- set(key, value): Adds/updates an entry.
- get(key): Retrieves the value for a key.
- has(key): Checks if a key exists.
- delete(key): Removes the entry by key.
- clear(): Removes all entries.
- forEach(callback): Executes a function for every entry.
- keys(), values(), entries(): Iterators for all keys/values/entries.

## Example

const fruitMap = new Map([
["Apple", 50],
["Banana", 30],
["Mango", 20]
]);

fruitMap.set("Kiwi", 15); // Add new pair
console.log(fruitMap.get("Banana")); // Output: 30
console.log(fruitMap.has("Orange")); // Output: false

fruitMap.forEach((val, key) => console.log(${key}: ${val})); // Iteration

## Why Use Map?

- Arbitrary key types (more flexible than Object)
- Maintains key order for iteration
- Performs well for frequent adding/removing
- Clean API for iteration and manipulation

## Key Differences: Object vs. Map

| Object                   | Map                           |
| ------------------------ | ----------------------------- |
| Keys are strings/symbols | Keys can be any type          |
| No size property         | Has a size property           |
| Not directly iterable    | Is iterable                   |
| Keys are unordered       | Keys are ordered by insertion |

## Iteration Example

for (let [key, value] of fruitMap) {
console.log(key, value);
}

## Extra Tip

To convert a Map to a plain Object:
let obj = Object.fromEntries(fruitMap);

To create a Map from a plain Object:
let mapFromObj = new Map(Object.entries(obj));

undefined
