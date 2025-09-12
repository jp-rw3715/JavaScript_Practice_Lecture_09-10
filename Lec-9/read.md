<!-- ! JavaScript Loops and Control Statements -->

<!-- 1. while Loop -->

Repeats a block of code while a condition is true.

Checks condition first; if false initially, body may not run.

Typical use: when the number of iterations is not known upfront.

Syntax:

while(condition) {
// code to run
}

<!-- 2. do-while Loop -->

Executes the code block at least once, then repeats while the condition is true.

Condition is checked after the block execution.

Syntax:

do {
// code to run
} while (condition);

<!-- 3. for Loop -->

The most commonly used loop for a known number of iterations.

Consists of initialization, condition, and afterthought (increment/decrement).

Syntax:

for (initialization; condition; afterthought) {
// code to run
}

<!-- 4. for-in Loop -->

Iterates over enumerable properties (keys) of an object.

Use when you want to loop through an object's property names.

Syntax:

for (let key in object) {
// code to run using object[key]
}

<!-- 5. for-of Loop -->

Iterates over iterable objects (like arrays, strings).

Instead of keys, it directly gives values.

Syntax:

for (let value of iterable) {
// code to run
}

<!-- break and continue Statements -->

break immediately exits the entire loop.

continue skips the current iteration and moves to the next one.

<!-- Additional Notes -->

Loops help avoid repetition and automate repetitive tasks.

Choose loop type based on the use case:

Use for when count is known.

Use while or do-while when condition depends on dynamic state.

Use for-in for object properties.

Use for-of for iterable collections to get values directly.

Proper use of break and continue can control loop flow effectively.

Always be careful to avoid infinite loops by ensuring the loop condition becomes false eventually.
