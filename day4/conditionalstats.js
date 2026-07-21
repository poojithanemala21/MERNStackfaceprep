const prompt=require("prompt-sync")();
let age = Number(prompt("Enter age:"));

if (age >= 18) {
    console.log("Eligible to Vote");
}
console.log("executed");

//if-else
let number = Number(prompt("Enter a number:"));

if (number % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}