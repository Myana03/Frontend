// ES_5  <2015

function Student(roll, name, course) { // constructor function
    this.roll = roll;
    this.name = name;
    this.course = course;
}
let std1 = new Student(1, 'sai nath', 'Angular')
let std2 = new Student(2, 'Sreeja', 'SQL')

console.log(std1)
console.log(std2)

let arr = [1, [2,4,5] ,[3]];
console.log(arr.flat()); // [1, 2, 3]

let arr1 = [1, [2,4,5] ,[3]];

console.log(arr1.flatMap(x=>x+10)); 