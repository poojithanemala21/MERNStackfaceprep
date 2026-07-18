const prompt=require("prompt-sync")();
let marks = Number(prompt("Enter marks: "));

if (marks >= 90) {
    console.log("Grade A+");
}
else if (marks >= 80) {
    console.log("Grade A");
}
else if (marks >= 70) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else if (marks >= 35) {
    console.log("Pass");
}
else {
    console.log("Fail");
}