

// // let str='hi hello Hi hello hi';
// // let maskedStr1=str.replace(/hi/g,'*');
// // let maskedStr=str.replace(/hi/gi,'*');
// // let maskedStr2=str.replaceAll('hi','*');
// // let maskedSection = '*'.repeat(5);

// // console.log(maskedStr);
// // console.log(maskedStr1);
// // console.log(maskedStr2);
// // console.log(maskedSection);



// let str1='This is Javascript class. This is String class';

// let result=str1.split('');

// console.log(result);

// let result2=result.reverse();
// console.log(result2);

// let result3=result2.join(' ');
// console.log(result3);

// let result4=result2.join('');
// console.log(result4);

// let result5=str1.split(' ').reverse().join(' ');
// console.log(result5);



let str2='12345678987';
let firstTwo=str2.slice(0,2);
console.log(firstTwo);
let lastTwo=str2.slice(-3);
console.log(lastTwo);
let maskedSection='*'.repeat(str2.length-5);
console.log(maskedSection);
let maskedAccountNumber=firstTwo+maskedSection+lastTwo;
console.log(maskedAccountNumber);
console.log(str2.slice(1));