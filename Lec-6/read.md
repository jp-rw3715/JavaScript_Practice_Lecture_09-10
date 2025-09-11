<!-- 1 -->

Explanation:
This uses the ternary operator to assign a grade based on numeric ranges. The code is more readable and compact than traditional if-else blocks.

<!-- 2 -->

Explanation:
Bill is calculated as quantity × price. If the bill exceeds 1000, a 10% discount is applied automatically using the ternary operator.

<!-- 3 -->

Explanation:
Uses the classic formula for Simple Interest:
S
I
=
P
×
R
×
T
100
SI=
100
P×R×T
, where P=principal, R=rate, T=time.

<!-- 4 -->

Explanation:
Gross salary is basic salary plus HRA (house rent allowance) and DA (dearness allowance), each as percentages of basic.

<!-- 5 -->

Explanation:
Modern JavaScript supports swapping variables in a single line using array destructuring. This eliminates the need for a temporary variable.

<!-- Notes -->

Explanation:
JavaScript performs implicit type conversions. Adding a number and a string concatenates, while subtracting or adding after a string tries to coerce the string to a number where possible. Practicing with combinations helps you understand type coercion.

Ternary Operator – Key Points
Syntax: condition ? exprIfTrue : exprIfFalse

Use for concise conditional logic.

Nested ternaries possible, but can harm readability.

Great for initializing variables, calculations, or returning values from functions.

Array Destructuring – Quick Swap
js
[a, b] = [b, a];
Instantly swaps values without using a temporary variable.

Works with any variable holding primitive values.

Number/String Type Coercion
number + string → string concatenation.

string - number or string + number (depending on order) can result in implicit conversion to number.

Watch outputs when mixing types for calculation.
