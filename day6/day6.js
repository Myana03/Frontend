add(2, 3);// it works because the fucntion add is already present in the memory

function add(a, b) {
    //console.log(a + b);
    console.log(`additon of ${a} and ${b} is ${a+b}`);
    return a + b;
}

//sub(5,3);// it will not work because the function sub is not present in the memory beacuse any thing declared with let will have value unavailable before its declaration line
//anonymous function
let sub=function(a,b){
    // console.log(a - b);
    console.log(`sub of ${a} and ${b} is ${a-b}`);
    return a - b;
}
sub(5,3);

let mul=(a,b)=>{
    // console.log(a - b);
    console.log(`mul of ${a} and ${b} is ${a*b}`);
    return a * b;
}
mul(5,6);

// self invoked - IIFE
(function multiple(a, b) {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`);
})(10, 20); // can be invoked only 1