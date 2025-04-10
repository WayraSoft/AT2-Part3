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


// Q3.3 Use the functions slice and substring to create new strings
// Slice "is a" from myString:
let partSlice = myString.slice(5, 10);
console.log(`Sliced part: " ${partSlice} "`);

// Substring to get "the" from anotherString"
let partSlice2 = anotherString.substring(6, 9);
console.log(`Sliced part: " ${partSlice2} "`);


// Q3.4 Change the case of the myName string.
// Change myName string to upper case
let myNameUp = myName.toUpperCase();
console.log(`My name to Upper Case: ${myNameUp}`);

// Change myName string to lower case
let myNameLo = myName.toLowerCase();
console.log(`My name to Upper Case: ${myNameLo}`);