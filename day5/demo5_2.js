    // var a;
    // let b;
    // console.log(a, b); // undefined undefined

    // // const c; Missing initializer in const declaration 
    // const c = 30;
    // console.log(c);

    // --- VAR EXAMPLE ---

// 1. We access the variable 'a' BEFORE its declaration line.
console.log(a); // Output: undefined

// 2. We declare and initialize 'a' here.
var a = 10;

// 3. Now we access it again.
console.log(a); // Output: 10


// --- LET EXAMPLE ---

// 1. If you try to access 'b' here, the program will crash.
// console.log(b); // CRASH! ReferenceError: Cannot access 'b' before initialization

// 2. The variable 'b' is in the "Temporal Dead Zone" (TDZ) until this line is executed.
let b ;

// 3. Accessing 'b' after its declaration is perfectly fine.
console.log(b); // Output: 20

var h = 10;
    console.log(`a value is ${h}`);

    var h = 'sachin'; // re declaration
    console.log(`a value is ${h}`);

    //let h = 100; // Identifier 'h' has already been declared