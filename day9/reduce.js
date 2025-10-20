let arr = [10, 20, 30, 40, 50];

let sum = arr.reduce((prev, curr) => {
    console.log(prev, curr);
    return prev + curr;
}, 0);//prev value is initialized to 0 if not provided first element of array is taken as prev value
console.log(sum); // 150


// reverse a string using reduce()
let str = 'javascript';
let revStr = str.split('').reduce((prev, curr) => {
    console.log(prev, curr)
    return curr + prev;
}, '')
console.log(revStr); // tpirsavaj


let inputStr = 'entertainment';
let charMap = inputStr.split('').reduce((obj, char) => {
    console.log(obj, char)
    obj[char] = obj[char] ? obj[char] + 1 : 1;
    return obj;
}, {})
console.log(charMap); // { e:3 , n:2 , t:3}


const products = [
    { id: 1, name: "Laptop", price: 50000, quantity: 2 },
    { id: 2, name: "Mobile", price: 20000, quantity: 5 },
    { id: 3, name: "Headphones", price: 2000, quantity: 10 },
    { id: 4, name: "Keyboard", price: 1500, quantity: 4 },
    { id: 5, name: "Monitor", price: 12000, quantity: 3 }
];
let groupedProducts = products.reduce((acc, product) => {
    let key;
    if (product.price <= 5000) key = "Low";
    else if (product.price <= 20000) key = "Medium";
    else key = "High";

    if (!acc[key]) acc[key] = [];
    acc[key].push(product);
    return acc;
}, {});
console.log(groupedProducts)