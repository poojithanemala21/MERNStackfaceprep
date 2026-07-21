const prompt=require("prompt-sync")();
let n=Number(prompt("Enter a size:"));
let arr=[];
for(let i=0;i<n;i++){
    arr[i]=Number(prompt());
}
let sum=0;
for(let j of arr){
    sum+=j;

    

}
console.log(sum);