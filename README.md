# Homework 9: JavaScript Built-In Objects
COMP 484  
Erik Gonzalez

## 1. Built-in Objects and Methods Used
  Date Object: Used `new Date()`, `getMonth()`, `getDate()`, and `getFullYear()` to track and format the current time.
  Number Object: Utilized `Number()` for conversion, `Number.isNaN()` for validation, and `Number.isInteger()` to check numeric properties.
  Formatting Methods: Used `toLocaleString()` to format large populations with thousands-separators.
  Logic & DOM: Implemented `if/else` statements for dynamic messaging and the **Ternary Operator** for the growth status label.
  DOM Manipulation: Used `document.getElementById().innerHTML` to inject results directly into the browser viewport.

## 2. GitHub Pages Link
[Insert your live GitHub Pages URL here, e.g., https://username.github.io/your-repo-name/]

## 3. Screenshot Path
The screenshot of the finished webpage can be found at: `./screenshot.png`

## 4. Reflection
The easiest part of this assignment was extracting the day, month, and year from the Date object, though I had to remember that months are zero-indexed. The hardest part was ensuring the string concatenation for the Number conversion tests remained readable while building complex HTML strings in JavaScript. I learned that the Date object is a request for the browser's current internal time, which can then be stored in a variable container for formatting. Through the Number object, I discovered that Number.isNaN() is the only reliable way to check for failed conversions since the typeof a NaN value is technically still a "number". Finally, I learned that displaying results in the browser is most efficient when using an external script.js file to avoid render blocking while the page parses.
