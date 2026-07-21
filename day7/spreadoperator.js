let array=[1,2,3,4];
let copied=[...array];
console.log(copied);

// merging
let a=[1,2,3];
let b=[3,4,5];
let merged=[...a,...b];
console.log(merged);

//adding elements
let added=[29,...merged,30];
console.log(added);
