console.log("Hello World"); // Prints "Hello World"

console.log(null==null); // true: both are null, loose equality
console.log(null===null); // true: both are null, strict equality

console.log(undefined==undefined); // true: both are undefined, loose equality
console.log(undefined===undefined); // true: both are undefined, strict equality

console.log(null==undefined); // true: loose equality considers them equal
console.log(null===undefined); // false: strict equality, different types

console.log(10=="10"); // true: loose equality, "10" is coerced to number
console.log(10==="10"); // false: strict equality, different types

console.log(0==false); // true: false is coerced to 0
console.log(0===false); // false: different types

console.log("0"==false); // true: "0" is coerced to 0, false to 0
console.log("0"===false); // false: different types

console.log("0"==0); // true: "0" is coerced to 0
console.log("0"===0); // false: different types

console.log(NaN==NaN); // false: NaN is never equal to NaN
console.log(NaN===NaN); // false: NaN is never strictly equal to NaN

console.log(typeof(NaN)); // "number": NaN is of type number
console.log(typeof(null)); // "object": historical bug in JS
console.log(typeof(undefined)); // "undefined": type is undefined
console.log(typeof(true)); // "boolean": type is boolean
console.log(typeof(10)); // "number": type is number
console.log(typeof("Hello")); // "string": type is string
console.log(typeof({})); // "object": type is object
console.log(typeof([])); // "object": arrays are objects
console.log(typeof(function(){})); // "function": type is function
console.log(typeof Symbol()); // "symbol": type is symbol
console.log(typeof BigInt(10)); // "bigint": type is bigint
console.log(typeof BigInt("10")); // "bigint": type is bigint

console.log(BigInt(10)===BigInt("10")); // true: same value and type
console.log(BigInt(10)==BigInt("10")); // true: same value

console.log(BigInt(10)===10); // false: different types
console.log(BigInt(10)==10); // false: different types

console.log(BigInt(10)===10n); // true: both are BigInt with same value
console.log(BigInt(10)==10n); // true: both are BigInt with same value

console.log(10n===10n); // true: same BigInt value and type
console.log(10n==10n); // true: same BigInt value

console.log(10n===10); // false: different types
console.log(10n==10); // false: different types

console.log(10n===BigInt(10)); // true: both are BigInt with same value
console.log(10n==BigInt(10)); // true: both are BigInt with same value


let s="Hello";
s[1] = 'a'; // This does not change the string, strings are immutable
console.log(s); // Prints "Hello", not "Hallo"

let arr = [1,2,3];
arr[1] = 20; // This changes the array, arrays are mutable
console.log(arr); // Prints [1, 20, 3]

let obj = {name: "Alice", age: 25};
obj.age = 26; // This changes the object property
console.log(obj); // Prints {name: "Alice", age: 26}

// Examples of strict equality (===) and loose equality (==)
console.log(5 === "5"); // false, because they are of different types (number vs. string)
console.log(5 == "5");  // true, because "5" is coerced to number 5

console.log(null === undefined); // false, different types
console.log(null == undefined);  // true, loose equality considers them equal

console.log(0 === false); // false, different types
console.log(0 == false);  // true, because false is coerced to 0

console.log(NaN === NaN); // false, NaN is not equal to anything, including itself
console.log(NaN == NaN);  // false, same reason as above

// Demonstrating type coercion in addition
let a = 10;
let b = "20";
console.log(a + b); // "1020", number 10 is coerced to string "10" and concatenated

let c = 10;
let d = 20;
console.log(c + d); // 30, both are numbers so they are added

let e = "Hello ";
let f = "World";
console.log(e + f); // "Hello World", both are strings so they are concatenated

let g = "The answer is ";
let h = 42;
console.log(g + h); // "The answer is 42", number 42 is coerced to string "42" and concatenated

let i = true;
let j = 1;
console.log(i + j); // 2, true is coerced to 1 and added to 1

let k = false;
let l = 1;
console.log(k + l); // 1, false is coerced to 0 and added to 1

// Demonstrating typeof operator
console.log(typeof(10)); // "number"
console.log(typeof("Hello")); // "string"
console.log(typeof(true)); // "boolean"
console.log(typeof(undefined)); // "undefined"
console.log(typeof(null)); // "object" (this is a known quirk in JavaScript)
console.log(typeof({})); // "object"
console.log(typeof([])); // "object" (arrays are objects in JavaScript)
console.log(typeof(function(){})); // "function"
console.log(typeof(Symbol())); // "symbol"
console.log(typeof(BigInt(10))); // "bigint"

// Demonstrating BigInt
let bigInt1 = BigInt(9007199254741991); // larger than Number.MAX_SAFE_INTEGER
let bigInt2 = 9007199254741991n; // using 'n' suffix
console.log(bigInt1 === bigInt2); // true, both are BigInt with same value
console.log(bigInt1 + 10n); // 9007199254742001n, adding BigInt values

// Mixing BigInt and Number
let num = 10;
let bigInt3 = 20n;
// console.log(num + bigInt3); // This will throw a TypeError
console.log(BigInt(num) + bigInt3); // 30n, convert Number to BigInt before adding

// Demonstrating immutability of strings
let str = "Hello";
str[0] = 'h'; // This does not change the string
console.log(str); // "Hello", strings are immutable

// Demonstrating mutability of arrays
let array = [1, 2, 3];
array[0] = 10; // This changes the first element of the array
console.log(array); // [10, 2, 3], arrays are mutable

// Demonstrating mutability of objects
let person = {name: "Alice", age: 25};
person.age = 26; // This changes the age property of the object
console.log(person); // {name: "Alice", age: 26}, objects are mutable

// More examples of strict and loose equality
console.log(0 === false); // false, different types
console.log(0 == false);  // true, loose equality considers them equal

console.log("0" === 0); // false, different types
console.log("0" == 0);  // true, "0" is coerced to number 0

console.log(null === undefined); // false, different types
console.log(null == undefined);  // true, loose equality considers them equal


 console.time('myForLoop');
    for (let i = 1; i <= 100; i++) {
        console.log('Hellooo ', i)
    }
    console.timeEnd('myForLoop');

    let msg = 'Helloooo World!!';
        console.log(msg);
        console.warn(msg);
        console.error(msg);

        let employees = [
            { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
            { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
            { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
            { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
            { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
        ]
        console.log(employees);
        console.table(employees, ['name', 'sal']);