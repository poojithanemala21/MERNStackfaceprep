let a = 20;
let b = 10;

console.log("Value of a =", a);
console.log("Value of b =", b);
// 1. Arithmetic Operators


console.log("\nArithmetic Operators");

console.log("Addition (+):", a + b);
console.log("Subtraction (-):", a - b);
console.log("Multiplication (*):", a * b);
console.log("Division (/):", a / b);
console.log("Modulus (%):", a % b);
console.log("Exponent (**):", a ** 2);
// 2. Assignment Operators

console.log("\nAssignment Operators");

let x = 10;

console.log("Initial x =", x);

x += 5;
console.log("x += 5 =", x);

x -= 3;
console.log("x -= 3 =", x);

x *= 2;
console.log("x *= 2 =", x);

x /= 4;
console.log("x /= 4 =", x);

x %= 3;
console.log("x %= 3 =", x);

// 3. Comparison Operators


console.log("\n===== Comparison Operators =====");

console.log("a == b :", a == b);
console.log("a != b :", a != b);
console.log("a > b :", a > b);
console.log("a < b :", a < b);
console.log("a >= b :", a >= b);
console.log("a <= b :", a <= b);

console.log("10 == '10' :", 10 == "10");
console.log("10 === '10' :", 10 === "10");
console.log("10 !== '10' :", 10 !== "10");

// =======================================
// 4. Logical Operators
// =======================================

console.log("\n===== Logical Operators =====");

let age = 22;

console.log("age > 18 && age < 30 :", age > 18 && age < 30);
console.log("age < 18 || age < 30 :", age < 18 || age < 30);
console.log("!(age > 18) :", !(age > 18));

// =======================================
// 5. Increment & Decrement Operators
// =======================================

console.log("\n===== Increment & Decrement =====");

let i = 5;

console.log("Initial i =", i);

console.log("Pre Increment (++i) =", ++i);
console.log("Post Increment (i++) =", i++);
console.log("After Post Increment =", i);

console.log("Pre Decrement (--i) =", --i);
console.log("Post Decrement (i--) =", i--);
console.log("After Post Decrement =", i);

// =======================================
// 6. String Operator
// =======================================

console.log("\n===== String Operator =====");

let firstName = "Poojitha";
let lastName = "Nemala";

console.log("Full Name:", firstName + " " + lastName);

// =======================================
// 7. Ternary Operator
// =======================================

console.log("\n===== Ternary Operator =====");

let marks = 75;

let result = (marks >= 35) ? "Pass" : "Fail";

console.log("Result =", result);

// =======================================
// 8. Type Operator
// =======================================

console.log("\n===== Type Operator =====");

console.log(typeof a);
console.log(typeof firstName);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

// =======================================
// End of Program
// =======================================