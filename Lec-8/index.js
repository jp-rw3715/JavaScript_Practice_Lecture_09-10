alert("👋 Welcome! This is a Bill Splitter Program.");

// Bill amount input and validation
let bill;
do {
  let input = prompt("Enter your bill amount:");
  bill = Number(input);
  if (!input || isNaN(bill) || bill <= 0) {
    alert("Please enter a valid positive bill amount.");
    bill = undefined;
  }
} while (bill === undefined);

// Number of people input and validation
let people;
do {
  let input = prompt("Enter number of people splitting the bill:");
  people = Number(input);
  if (!input || isNaN(people) || people < 1) {
    alert("Please enter a valid number of people.");
    people = undefined;
  }
} while (people === undefined);

// Tip percentage input and validation
let tipPercent;
do {
  let input = prompt("Enter tip percentage (0, 5, 10, 20):", "0");
  if (input === null) input = "0";
  tipPercent = Number(input);
  if (isNaN(tipPercent) || tipPercent < 0) {
    alert("Please enter a valid tip percentage (0 or more).");
    tipPercent = undefined;
  }
} while (tipPercent === undefined);

// Confirm before splitting
let proceed = confirm(
  `Proceed to split ₹${bill} among ${people} people with a ${tipPercent}% tip?`
);
if (!proceed) {
  alert("Bill splitting cancelled.");
} else {
  // Calculations
  let tipAmount = (tipPercent / 100) * bill;
  let totalAmount = bill + tipAmount;
  let perPerson = totalAmount / people;

  alert(
    "Tip Amount: ₹" +
      tipAmount.toFixed(2) +
      "\nTotal Bill Amount: ₹" +
      totalAmount.toFixed(2) +
      "\nEach person should pay: ₹" +
      perPerson.toFixed(2)
  );
}
