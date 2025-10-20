// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let input='entertainment';
let Map=input.split('').reduce((a,n)=>{
    //console.log(a,n)
    if(a[n]){
        a[n]=a[n]+1;
    }else{
        a[n]=1;
    }
    return a;
},{});
console.log(Map)


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'
let input1='hello world'
let maxCount=0;
let maxChar='';
let map1=input1.split('').reduce((b,n)=>{
    if(b[n]){
        b[n]=b[n]+1;
    }else{
        b[n]=1;
    }
    if(b[n]>maxCount){
        maxCount=b[n]
    }
    return b;
},{});
for(let char in map1){
    if(map1[char]===maxCount){
        maxChar=char;
        break;
    }
}
console.log(map1);
console.log(maxChar);

// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let input2='Hello World'
let output=input2.split('').map((c)=>{
    if(c===c.toLowerCase()){
        return c.toUpperCase();
    }else{
       return c.toLowerCase();
    }
}).join('');
console.log(output);


// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let input3='Rabindra Nath Tagore'
const words=input3.split(' ');
let a='';

for(let i=0;i<words.length-1;i++){
    const word=words[i];
    const letter1=word[0].toUpperCase();
    a=a+letter1+'. ';
}
const last=words[words.length-1];
a=a+last.toLowerCase();
console.log(a);

// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'

const input5='abcxy77z';
let output5='';
for(let i=0;i<input5.length;i++){
    const c=input5[i];
    const code=c.charCodeAt(0);
    console.log(code);
    if(c==='z'){
        output5=output5+'a';
    }else if(c==='Z'){
        output5=output5+'A';
    }
    else if((code>=65 && code <=90)|| (code>=97 && code <=122)){
        output5=output5+String.fromCharCode(code+1);
    }else{
        output5=output5+c;
    }
}
console.log(output5)

// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true

let input6='([{}])'
const map={
    ')':'(',
    '}':'{',
    ']':'['
};
const output6=input6.split('').reduce((stack,c)=>{
    if(map[c]){
        if(stack[stack.length-1]===map[c]){
            stack.pop();
        }else{
            return false;
        }
    }else{
        stack.push(c);
    }
    return stack;
},[]);
if(Array.isArray(output6) && output6.length===0){
console.log(true)
}else{
    console.log(false);
}


// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...

function permutations(str){
  const result=[];
  if(str.length===1){
    return [str];
  }

  for(let i=0;i<str.length;i++){
    const first=str[i];

    const rem=str.slice(0,i) + str.slice(i+1);
    const subP=permutations(rem);
    for(let j=0;j<subP.length;j++){
        result.push(first+subP[j]);
    }
  }
  return result;
}
console.log(permutations('ABC'))

// 8. Ask user to enter a number and convert that to Roman value
//    input:   9    12
//    output : IX   XII

function intToRo(num){
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let r='';
    let rem=num;
    for(let i=0;i<values.length;i++){
        const value=values[i];
        const numeral=numerals[i];

        while(rem>=value){
            r=r+numeral;
            rem=rem-value;
        }
        if(rem===0){
            break;
        }
    }
    return r;
}
console.log(intToRo(9))

// 9. Ask user to enter a roman string and convert that to integer value
//    input:   IX    XII
//    output : 9     12

function RomToInt(s){
const values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let r=0;
    for(let i=0;i<s.length;i++){
        const current=s[i];
        const currVal=values[current];
        const next=s[i+1];
        const nextVal=values[next];

        if(nextVal&& nextVal>currVal){
            r=r+(nextVal-currVal)
            i++;
        }else{
            r=r+currVal;
        }
    }
    return r;
}
console.log(RomToInt('IX'));


// 10. Ask user to enter a  string , and display in below format
//     input: aaabbc
//     output : a3b2c1


function nString(s){
    let r='';
    let c=1;
    for(let i=0;i<s.length;i++){
        const currchar=s[i];
        const nextChar=s[i+1];

        if(currchar===nextChar){
            c++;
        }else{
            r=r+currchar+c;
            c=1;
        }
    }
    return r;
}
console.log(nString('aaaabbbc'))