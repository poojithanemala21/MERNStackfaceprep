// block scope means inside the block only it is accessible outside not accessible
let a="pooja";
if(true){
    let a="poojitha";
}
console.log(a);

const b="Btech";
if(true){
    const b="Mtech";
}
console.log(b);