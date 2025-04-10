// File: app3Q78.js
// // This file shows an algorithm for file handling.
// The results are verified using node.
// Author: Carlos
// Date: 10/04/2025

// Save a string to a text file:
// Require the file system module.
const fs = require('node:fs');
// Require the readline module.
const readline = require('readline');

// Define an empty string.
let userText = '';
// Create a readline interface to read from terminal.
const rdln = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Enter the text and show it in console and assign it to the string.
rdln.question('Enter the text: ', function(input) {
  userText = input;
  console.log(`Text entered: ${userText}`);
  rdln.close();

  // Save the string into a file and check for errors
  console.log(">>> Writing to file >>>");
  fs.writeFile(`output.txt`, userText, (err) => {
    if (err) {
      console.error(err);
    }
    else {
      // Log that the file was written successfully.
      console.log("The file was written successfully")
    }
  });
});