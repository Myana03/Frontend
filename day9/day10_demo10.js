// employees = [
//     { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
//     { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
//     { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
//     { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
//     { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
// ];

// // find the first female employee 
// let first_female_emp = employees.find((emp) => emp.gender === 'female');
// console.log(first_female_emp);

// // find the index where first female employee exists
// let first_female_emp_ind = employees.findIndex((emp) => emp.gender === 'female');
// console.log(first_female_emp_ind);

// // find the first female employee 
// let last_female_emp = employees.findLast((emp) => emp.gender === 'female');
// console.log(last_female_emp);

// // find the index where first female employee exists
// let last_female_emp_ind = employees.findLastIndex((emp) => emp.gender === 'female');
// console.log(last_female_emp_ind);

// // find all the female employees
// let all_female_emp = employees.filter((emp) => emp.gender === 'female');
// console.log(all_female_emp);


let arr1 = [10, 50, 20, 40, 30];
arr1.sort();
console.log(arr1);

let arr2 = [101, 109, 105, 91, 81, 71, 7, 6, 8, 5];
arr2.sort();
console.log(arr2);

arr2.sort((a, b) => a - b);
console.log(arr2)

arr2.sort((a, b) => b - a);
console.log(arr2)