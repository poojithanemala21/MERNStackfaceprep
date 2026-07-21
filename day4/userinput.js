const prompt = require("prompt-sync")();
//require() is used to import the prompt-sync module, which allows us to get user input from the console.
let a = Number(prompt("Enter a number: "));
let b = Number(prompt("Enter another number: "));

if (a == b) {
    console.log("Both numbers are equal");
} else {
    console.log("Not equal");
}