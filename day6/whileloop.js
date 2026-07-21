const prompt=require("prompt-sync")();
let i = 1;
let n=Number(prompt("Enter a number: "));
while(i <= 10)
{
    console.log(n + " x " + i + " = " + (n * i));
    i++;
}