let str = 'rain in spain mAinly stays in the plain';

let result1 = str.match(/ain/); // returns the first occurance
console.log(`result1`, result1)

let result2 = str.match(/ain/g);
console.log(`result2`,result2)

let result3 = str.match(/ain/gi);
console.log(`result2`,result3)


let str1 = 'Jatin & Kavya are 2 friends, jatin is 21 & kavya is 22 years old';


//let result4= str1.match,(/[0-1[/g]])
let result = str1.match(/\d{1,2}/g);
console.log(result)

let creditcardNum = '1111222233334444';
let formatedCreditCard = creditcardNum.match(/\d{1,4}/g);
console.log(formatedCreditCard.join('-'))

let str5 = 'This is javascript class. This is String class';

let result5 = str5.replace('class', 'session');
console.log(result1);

let result6 = str5.replaceAll('class', 'session');
console.log(result2);

let str6 = 'I am Jatin, I am 25 years old';
console.log(str6.search(/\d/))

let str7 = 'This is Javascript Class';

console.log(str7.slice(8,12));       
console.log(str7.substring(8,12));   

console.log(str7.slice(8,-2));       // This is because slice counts backwards from the end for negative indices
console.log(str7.substring(8,-2));   // This is because substring treats negative indices as 0

let str8 = 'This is Javascript Class';

console.log(str8.split(' ')); 
console.log(str8.split('')); 
console.log(str8.split('This')); 
console.log(str8.split('Class')); 