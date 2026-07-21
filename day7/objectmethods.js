let student={
    name:"Poojitha",age:22
};
let det={
    name:"Prav", age:23
};
console.log(student.name);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(student.hasOwnProperty("city"));
console.log(student.hasOwnProperty("age"));
Object.freeze(student);
student.name="Srikanth";
console.log(student.name);
Object.seal(det);
det.name="Srikanth";
console.log(det.name);