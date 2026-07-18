const prompt=require("prompt-sync")();
let day = Number(prompt("Enter a day number: "));

switch(day){

case 1:
    console.log("Monday");
    break;

case 2:
    console.log("Tuesday");
    break;

case 3:
    console.log("Wednesday");
    break;

case 4:
    console.log("Thursday");
    break;

default:
    console.log("Invalid Day");

}