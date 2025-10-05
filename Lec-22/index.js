// Array.prototype.at()
{
  let shades = ["cyan", "magenta", "yellow", "black", "white"];
  console.log(shades.at(1)); // Output: magenta
  console.log(shades.at(-2)); // Output: black
}

// Array.prototype.copyWithin()
{
  let symbols = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅"];
  console.log(symbols);
  console.log(symbols.copyWithin(3)); // Copy full at pos 3
  console.log(symbols.copyWithin(2, 5)); // Copy from 5 to end at 2
  console.log(symbols.copyWithin(0, 4, 6)); // Copy from 4 to 6 at 0
}

// Array.prototype.entries()
{
  let foods = ["🍔", "🍟", "🌭", "🍕"];
  let foodEntries = foods.entries();

  console.log(foodEntries.next().value); // [0, "🍔"]
  console.log(foodEntries.next().value); // [1, "🍟"]
  console.log(foodEntries.next().value); // [2, "🌭"]
  console.log(foodEntries.next().value); // [3, "🍕"]
}

// Array.prototype.every()
{
  let ages = [21, 34, 56, 44];
  let adults = ages.every((age) => age >= 18);
  console.log(adults); // true
}

// Array.prototype.fill()
{
  let marks = [50, 60, 70, 80, 90];
  console.log(marks.fill(5)); // [5,5,5,5,5]
  console.log(marks.fill(3, 1)); // [5,3,3,3,3]
  console.log(marks.fill(7, 2, 4)); // [5,3,7,7,3]
}

// Array.prototype.filter()
{
  let books = [
    { title: "Atomic", pages: 300 },
    { title: "Deep Work", pages: 250 },
    { title: "Ikigai", pages: 110 },
    { title: "Zero to One", pages: 180 },
    { title: "Grit", pages: 320 },
  ];
  let bigBooks = books.filter((b) => b.pages > 200).map((b) => b.title);
  console.log(bigBooks); // ["Atomic", "Deep Work", "Grit"]
}
