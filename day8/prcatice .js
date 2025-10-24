

let str='hi hello Hi hello hi';
let maskedStr1=str.replace(/hi/g,'*');
let maskedStr=str.replace(/hi/gi,'*');
let maskedStr2=str.replaceAll('hi','*');
let maskedSection1 = '*'.repeat(5);

console.log(maskedStr);
console.log(maskedStr1);
console.log(maskedStr2);
console.log(maskedSection);



let str1='This is Javascript class. This is String class';

let result=str1.split('');

console.log(result);

let result2=result.reverse();
console.log(result2);

let result3=result2.join(' ');
console.log(result3);

let result4=result2.join('');
console.log(result4);

let result5=str1.split(' ').reverse().join(' ');
console.log(result5);



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


const input_original = 'abcxyz';

// 1. Shift all but the last character
const shifted_part = input_original
  .slice(0, -1) // Get everything except the last character ('abcxy')
  .split('')
  .map(c => {
      // ... (Same shifting logic as above) ...
      const code = c.charCodeAt(0);
      if (c === 'z') return 'a';
      if (c === 'Z') return 'A';
      if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return String.fromCharCode(code + 1);
      }
      return c;
  })
  .join(''); // Result: 'bcdyz'

// 2. Append the very first character of the original input
const output_original = shifted_part + input_original[0]; 

console.log(output_original); // Output: bcdyza