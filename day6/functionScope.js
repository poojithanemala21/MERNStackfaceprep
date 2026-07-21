//var has function scope or block scope means outside of the block also the value will accessible
var a=10;
if(a>5){
    var a=20;
}
console.log(a);