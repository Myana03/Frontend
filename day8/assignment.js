// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

function reverseString(str) {
    let reversed = '';
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed+str[i];
    }
    return reversed;
}

console.log(reverseString('sachin'));
console.log(reverseString('this is javascript class'));

let myString = 'hello';
console.log(myString.split(''));
console.log(myString.split('').reverse());
console.log(myString.split('').reverse().join(''));

// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords('This is javascript class'));

// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

function firstNonRepeatedChar(str) {
    const charCount = {};
    
    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // If all characters are repeated
}

console.log(firstNonRepeatedChar('entertainment'));
console.log(firstNonRepeatedChar('swiss'));
console.log(firstNonRepeatedChar('aabbcc')); // Should return null

function firstNonRepeatedChar_alt(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    return null; // If all characters are repeated
}

console.log('--- Alternative ---');
console.log(firstNonRepeatedChar_alt('entertainment'));
console.log(firstNonRepeatedChar_alt('swiss'));
console.log(firstNonRepeatedChar_alt('aabbcc')); // Should return null
   
// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'

function toTitleCase(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(toTitleCase('this is javascript class'));
console.log(toTitleCase('hello world from javascript'));

	
// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}

console.log(findLongestWord('this is javascript class'));
console.log(findLongestWord('find the longest word in this sentence'));
	
// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
function maskAccountNumber(accountNumber) {
    if (accountNumber.length <= 4) {
        return accountNumber; // Not enough digits to mask
    }
}
    
    const firstTwo = accountNumber.slice(0, 2);
    const lastTwo = accountNumber.slice(-2);
    const maskedSection = '*'.repeat(accountNumber.length - 4);
   
// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

function formatCreditCard(creditCardNumber) {
    return creditCardNumber.match(/\d{1,4}/g).join('-');
}

console.log(formatCreditCard('1111222233334444'));
console.log(formatCreditCard('1234567812345678'));
   
// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'
   
function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

console.log(removeSpecialCharacters('hello@#hi&'));
console.log(removeSpecialCharacters('Java$cript%is^fun!'));

// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'
function moveSpecialCharsToEnd(str) {
    const alphanumeric = [];
    const specialChars = [];
    
    for (let char of str) {
        if (/[a-zA-Z0-9]/.test(char)) {
            alphanumeric.push(char);
        } else {
            specialChars.push(char);
        }
    }
    
    return alphanumeric.join('') + specialChars.join('');
}

console.log(moveSpecialCharsToEnd('hello@#hi&'));
console.log(moveSpecialCharsToEnd('Java$cript%is^fun!'));
	 
    