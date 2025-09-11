let learningTopics = new Map([
  ["topicA", "TypeScript"],
  ["topicB", "Node.js"],
  ["topicC", "GraphQL"],
  ["topicD", "Docker"],
]);

function printMap(value, key, mapObj) {
  console.log(`[${key}] = ${value}`);
}

// Print all key-value pairs
learningTopics.forEach(printMap);

// Add a new item
learningTopics.set("topicE", "WebAssembly");

// Check if a key exists
console.log(learningTopics.has("topicE")); // true

// Retrieve an item by key
console.log(learningTopics.get("topicC")); // "GraphQL"

// Size of the map
console.log(learningTopics.size); // 5

// Remove one key
learningTopics.delete("topicB");
console.log(learningTopics.size); // 4

// Clear all
learningTopics.clear();
console.log(learningTopics.size); // 0

// Iteration example
learningTopics = new Map([
  ["topicX", "REST APIs"],
  ["topicY", "Tailwind CSS"],
  ["topicZ", "MongoDB"],
]);
let keyIter = learningTopics.keys();
let valIter = learningTopics.values();
let entryIter = learningTopics.entries();

console.log(keyIter.next().value); // "topicX"
console.log(valIter.next().value); // "REST APIs"
console.log(entryIter.next().value); // ["topicX", "REST APIs"]
