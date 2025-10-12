var a = 10;
let b = 20;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

a = 15;
b = 25;
// c = 35; // This will throw an error because 'c' is a constant
// TypeError: Assignment to constant variable
console.log(a);
console.log(b);
console.log(c);

var d; // undefined
let e; // undefined
const f = 30; // must be initialized

console.log(d);
console.log(e);
console.log(f);


var g = 10;
let h = 20;
const i = 30;
console.log(` a = ${g}, b = ${h}, c = ${i}`);

var g = 100;
console.log(` a = ${g}, b = ${h}, c = ${i}`);

// let h = 200; // SyntaxError: Identifier 'b' has already been declared
// const i = 300; // SyntaxError: Identifier 'c' has already been declared