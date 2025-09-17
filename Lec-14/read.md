<!-- String.replace() -->

This method is used to substitute part of a string with something else. If the first parameter is a pattern (such as a regular expression), it will look for matches within the string and update them with the second value you provide.

By default, without the global flag, it changes only the first instance.

The original text does not change—replace() produces a new string, and you should save or use its result for any further work.

<!-- String.replaceAll() -->

This is a newer method, and its role is to replace every instance of a specified substring or pattern throughout the main string.

You pass in the part you want to replace and what you want to switch it with. All occurrences are changed, making it especially useful when you want total consistency.

If you use a regular expression, it must include a flag that tells it to scan the entire string.

<!-- String.search() -->

This method helps to locate where a pattern or specific text first appears inside a larger string.

It returns the position (index) of that match or lets you know (-1) if there is no match.

It is mainly handy for checking if something exists and possibly where the match starts, rather than getting the full result.

<!-- String.split() -->

The split() method divides up a string into several parts, using a separator you specify—this can be a simple character, word, or even a regular expression to match several options.

The result is an array of smaller strings. You can also set a maximum number of items to get in the output.

It is useful for turning CSV lines, lists, or other formatted text into a manageable structure—especially when working with data or user input.
