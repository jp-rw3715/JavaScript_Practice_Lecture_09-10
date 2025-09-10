# JavaScript Operators Notes

## 1. Arithmetic Operators

- **Addition (+):** दो numbers को जोड़ने के लिए उपयोग होता है।  
  Example: `x + y`
- **Subtraction (-):** दो numbers के बीच घटाव के लिए।  
  Example: `x - y`
- **Multiplication (\*):** दो numbers का गुणा।  
  Example: `x * y`
- **Division (/):** दो numbers का भाग।  
  Example: `x / y`
- **Modulus (%):** दो numbers के division के बाद बचा शेष।  
  Example: `x % y`
- **Exponentiation (**):** एक number को दूसरे number की power तक बढ़ाना।  
  Example: `x ** y`
- **Increment (++):** variable की value 1 से बढ़ाना।  
  Example: `++x`
- **Decrement (--):** variable की value 1 से घटाना।  
  Example: `--x`

## 2. Assignment Operators

- **Assign (=):** variable को value असाइन करता है।  
  Example: `a = 5`
- **Add and Assign (+=):** variable में किसी value को जोड़कर फिर असाइन करता है।  
  Example: `a += b` Equivalent to `a = a + b`
- **Subtract and Assign (-=):** variable में से किसी value को घटाकर असाइन।  
  Example: `a -= b`
- **Multiply and Assign (\*=):** variable को किसी value से गुणा करके असाइन।  
  Example: `a *= b`
- **Divide and Assign (/=):** variable को किसी value से भाग देकर असाइन।  
  Example: `a /= b`
- **Modulus and Assign (%=):** variable को modulus operation के बाद असाइन।  
  Example: `a %= b`
- **Exponent and Assign (**=):** variable की power निकालकर असाइन।  
  Example: `a **= b`

# JavaScript Operators Notes

## 3. Comparison Operators (संबंधित ऑपरेटर)

- `==` (Equal to): values को compare करता है, type conversion कर सकता है।
- `===` (Strict equal to): values और types दोनों को मैच करता है।
- `!=` (Not equal to): values अलग होने पर true देता है।
- `!==` (Strict not equal to): value या type अलग होने पर true।
- `>` (Greater than): left operand बड़ा हो तो true।
- `<` (Less than): left operand छोटा हो तो true।
- `>=` (Greater than or equal to): बड़ा या बराबर हो तो true।
- `<=` (Less than or equal to): छोटा या बराबर हो तो true।

---

## Ternary Operator (तीन-खंड वाला ऑपरेटर)

- Structure: `condition ? expression_if_true : expression_if_false`
- यह if else का शॉर्टकट है।
- Example:  
  let x = true;
  x ? console.log("True") : console.log("False");

text

---

## Logical Operators (तथ्यात्मक ऑपरेटर)

- `&&` (AND): सभी conditions true हों तो true।
- `||` (OR): कोई एक condition true तो true।
- `!` (NOT): condition को उलट देता है।

---

## String Operators (स्ट्रिंग ऑपरेटर)

- `+` (Concatenation): दो strings को जोड़ता है।
- `+=` (Add and Assign): string में दूसरा string जोड़ता है और assign करता है।

Example:  
let str1 = "Hello ";
str1 += "World!";
console.log(str1);
// Output: Hello World!
