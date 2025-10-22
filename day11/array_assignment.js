let employees = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "geeta", sal: 8000, gender: "female" },
  { eId: 103, name: "sameer", sal: 7000, gender: "male" },
  { eId: 102, name: "sita", sal: 9000, gender: "female" },
  { eId: 105, name: "deepak", sal: 8000, gender: "male" },
];

// 1. declare array of employees & sort them in ascending order (empId)
let sorted = [...employees].sort((a, b) => a.eId - b.eId);
console.log(sorted);
console.log(employees);

// 2. declare array of employees & sort them in ascending order by name.
let sorted1 = employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(sorted1);

// 3. declare array of employees & filter the employees whose sal>6000;
let filtered = employees.filter((a) => a.sal > 6000);
console.log(filtered);

// 4. declare array of employees & increase sal of every employee by 500;
let fil = employees.map((a) => ({ ...a, sal: a.sal + 500 }));
console.log(fil);

// 5. declare array of employees & add "comp:ibm" to every employee;
let dec = employees.map((e) => {
  return {
    ...e,
    comp: "ibm",
  };
});
console.log(dec);

// 6. convert array of letters to array of words
const inputArr = [
  "b",
  "a",
  "k",
  "e",
  "",
  "c",
  "a",
  "k",
  "e",
  "",
  "e",
  "a",
  "t",
];
// 	   output = ['bake','cake','eat'];

let convert = inputArr
  .join(" ")
  .split("  ")
  .map((word) => word.replace(/ /g, ""));
console.log(convert);

// 7. add Dept info for each employee
employees = [
  { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
  { eId: 104, name: "reena", sal: 8000, gender: "female" },
];

departments = [
  { eId: 101, dept: "sales" },
  { eId: 104, dept: "marketing" },
];

let emp_dept = employees.map((e) => {
  let dept = departments.find((d) => d.eId === e.eId);
  return {
    ...e,
    ...dept,
  };
});

console.log(emp_dept);

let deptMap = new Map(departments.map((d) => [d.eId, d.dept]));

let merged = employees.map((e) => ({
  ...e,
  dept: deptMap.get(e.eId),
}));
console.log(merged);

// 8. declare array of employees & groupBy employees-name
//     sample output: {
// 		'sanjay' : [{},{}],
// 		'alok' : [{}]
// 	}

let grouped = employees.reduce((acc, e) => {
  let key = e.name;

  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(e);
  return acc;
}, {});

console.log(grouped);

// 9. intersection of 2 number arrays
let arr1 = [10, 20, 30, 40];
let arr2 = [30, 40, 50, 60];

let intersection = arr1.filter((num) => arr2.includes(num));
console.log(intersection);

// 10. WAP to print the occurance of each elements
input = [10, 20, 30, 40, 50, 10, 30, 50];
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let counts = input.reduce((acc, num) => {
  if (acc[num]) {
    acc[num] = acc[num] + 1;
  } else {
    acc[num] = 1;
  }
  return acc;
}, {});
console.log(counts);
