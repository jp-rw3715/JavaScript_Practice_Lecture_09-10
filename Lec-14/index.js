// replace()

{
  let message = "Blue skies are beautiful";
  let pattern = /Blue/;
  let newMessage = message.replace(pattern, "Clear");
  console.log(newMessage); // "Clear skies are beautiful"
}

// replaceAll()

{
  let greeting = "Hi Sam. Sam, how is your day? Sam said hi.";
  let nameToReplace = /Sam/g;
  let updatedGreeting = greeting.replaceAll(nameToReplace, "Alex");
  console.log(updatedGreeting); // "Hi Alex. Alex, how is your day? Alex said hi."
}

//  search()

{
  let poem = "The river flows gently";
  let searchWord = /flows/;
  let foundAt = poem.search(searchWord);
  console.log(foundAt); // 10
}

//  split()

{
  let shoppingList = "apples|bananas|carrots|dates";
  let parts = shoppingList.split("|");
  console.log(parts); // ["apples", "bananas", "carrots", "dates"]
}
