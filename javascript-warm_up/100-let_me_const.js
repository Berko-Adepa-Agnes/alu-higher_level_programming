#!/usr/bin/node
const myVar = 333; // Define the variable
Object.freeze(myVar); // Attempting to freeze a primitive value (which is not necessary)
console.log(myVar); // Use the variable
