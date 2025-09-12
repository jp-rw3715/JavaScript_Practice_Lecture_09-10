Explanation and Summary
The Bill Splitter program is an interactive JavaScript application that helps divide a bill amount, including tip, equally among a number of people. It collects user input through dialog boxes and validates the inputs to ensure meaningful calculations.

alert: Displays messages and instructions to the user (e.g., welcome message, validation errors, final result).

prompt: Collects user data for the bill amount, number of people, and tip percentage.

confirm: Confirms the user's intent to proceed with the calculations before displaying the result.

The program validates inputs using loops, repeatedly prompting the user until valid numerical values greater than zero (or zero and above for tips) are entered. It cancels the process if the user chooses not to proceed.

Calculation logic:

Tip amount is computed as a percentage of the bill.

Total amount is sum of the bill and tip.

The amount per person is the total divided by the number of people.

Results are shown rounded to two decimal places.

Key Notes
The program ensures robust input validation and user-friendly messages.

Using dialog boxes keeps interaction simple and easy to follow.

Input types are converted from strings to numbers for precise arithmetic.

The confirm box allows users to cancel before committing to the calculation.

Calculations handle floating-point numbers with .toFixed(2) for neat output.

The program structure teaches fundamental JavaScript concepts: loops, conditionals, functions, and user interaction.

Summary
This simple yet effective Bill Splitter demonstrates core JavaScript dialog functions (alert, prompt, confirm) combined with input validation and arithmetic calculations. It is an excellent beginner project to understand program flow, user input handling, and basic data validation.

It provides a clean user experience with step-by-step prompts, error handling, and clear output, making it practical as well as educational.

