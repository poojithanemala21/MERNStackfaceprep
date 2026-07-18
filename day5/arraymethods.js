const prompt=require("prompt-sync")();
let arr=[];
let n=Number(prompt("Enter a size:"));
for(let i=0;i<n;i++){
    arr[i]=Number(prompt("Enter a number:"));
}
arr.push(40);
arr.push(100);
console.log(arr);
arr.pop();//removes last element
console.log(arr);
arr.shift();//removes first element
console.log(arr);
arr.unshift(38);//add at first position
console.log(arr);
console.log(arr.length);
console.log(arr.includes(40));
console.log(arr.indexOf(40));
console.log(arr.reverse());
arr.sort((a,b)=>a-b);//ascending order
console.log(arr);
arr.sort((a,b)=>b-a);//descending order
console.log(arr);
let b=[2,3,4];
let c=arr.concat(b);
console.log(c);
let str="java Script Program";
console.log(str.split(" ").join("-"));
let d=arr.slice(1,4);
console.log(d);
console.log(arr.toString());
console.log(arr.find(value=>value<10));
console.log(arr.filter(value=>value<10));