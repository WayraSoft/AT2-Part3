// File: stringsQ1Q5.js
// This file shows different strings and operations.
// The results are verified using node.
// Author: Carlos
// Date: 09/04/2025

// Require the file system module.
const fs = require('node:fs');

// Q3.1 Define four strings and print them in the console.

let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Carlos";

// console.log(myString);
// console.log(anotherString);
// console.log(hello);
// console.log(myName);


// Q3.2 Perform three operations and print them in the console.
// Find out the length of myString:
console.log(`The length of the string "myString" is ${myString.length} characters.`)

// Find out the first character of myString:
let firstChar = myString.at(0);
console.log(myString);
console.log(`The first character is: ${firstChar}`);

// Find out the 11th character of myString:
let elevenChar = myString.charAt(10);
console.log(`The 11th character is: ${elevenChar}`);