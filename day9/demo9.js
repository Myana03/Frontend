//using class name its static method 
//and with array if we call a y method its is insatnc emethdo

let arr = [1,2,3,4];

console.log(arr.splice(3,0));
console.log(arr);

console.log(arr.splice(1,0,5,6,7));
console.log(arr);

arr.splice(1,0,2);
console.log(arr);

let arr1=arr.toSpliced(0,0,1111)
console.log(arr1);