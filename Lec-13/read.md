<!--! JavaScript Regex (Regular Expressions)  -->

What is Regex?

Regex is a pattern used to match character combinations in strings.

In JavaScript, regex is defined between slashes /pattern/.

Useful for searching, matching, validating, and replacing text.

<!-- 1: Mobile Number Validation (India Standard) -->

Explanation:

^ asserts start of string.

[6-9] must start with digit 6,7,8, or 9.

\d{9} exactly 9 digits after the first digit.

$ asserts end of string.

% 2: Email Validation (Simple)

Explanation:

^[a-zA-Z0-9._%+-]+: one or more of letters, digits, and specific special chars before @.

@: required character.

[a-zA-Z0-9.-]+: domain name allowed characters.

\. matches a literal dot.

[a-z]{2,}$: domain extension of 2 or more letters

<!--  -->

Key Regex Concepts in JavaScript
Creation: Use /pattern/flags literal or new RegExp("pattern", "flags").

Common flags: g (global), i (case-insensitive), m (multiline).

Methods:

.test(str) returns true or false if pattern matches.

.exec(str) returns match details or null.

Strings have .match(), .search(), .replace(), .split() accepting regex.

Anchors:

^ matches start of string.

$ matches end of string.

Quantifiers:

{n} exact n occurrences.

{n,} at least n occurrences.

{n,m} between n and m occurrences.

Useful Patterns
Pattern Meaning
[abc] Match any one of a, b, or c
[^abc] Match any except a, b, or c
[0-9] Match digits from 0 to 9
`(x	y)`
\d Match any digit (equiv. [0-9])
\w Match any word character
. Match any character except newline
Escaping Characters
Escape special chars with backslash: \+, \. etc.

E.g., to match literal +, write /\+/.

This covers the basics of JavaScript regex for pattern matching, validation, and search/replacement with practical examples of mobile number and email validation.
