
const prompt=require("prompt-sync")();
let a=Number(prompt());
let sumval=0;
for(let i=1;i<=a;i++){
    if(a%i==0){
        sumval+=i;
    }

}
console.log(sumval);
