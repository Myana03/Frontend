// // 1. Find the department with the highest average salary
const employees = [
  { name: "Alice", department: "HR", salary: 40000 },
  { name: "Bob", department: "IT", salary: 50000 },
  { name: "Charlie", department: "IT", salary: 60000 },
  { name: "David", department: "HR", salary: 45000 }
];
// // Output: "IT" (average salary 55000)

let group_dept=employees.reduce((acc,emp)=>{
    const dept=emp.department;
    const salary=emp.salary;

    if(acc[dept]){
        acc[dept].totalSal+= salary;
        acc[dept].count+=1;
    }else{
        acc[dept]={
            totalSal:salary,
            count:1
        };
    }
    return acc;
},{})

console.log(group_dept)
let high_avg=0;
let top_dpet=''
for(const dept in group_dept){
    const values=group_dept[dept];
    const avg=values.totalSal/values.count;

    if(avg>high_avg){
        high_avg=avg;
        top_dpet=dept;
    }
}
console.log(`"${top_dpet}" (average salary ${high_avg})`)




// // 2. Get the top 2 products with highest total sales (price × quantity)
const products1 = [
  { name: "Laptop", price: 1000, quantity: 4 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 800, quantity: 5 }
];
// // Output: ["Phone", "Tablet"]
let sales=products1.map((p)=>({
    ...p,totalSales:p.price*p.quantity
}));
console.log(sales)
sales.sort((a,b)=>(b.totalSales-a.totalSales));
console.log(sales.slice(0,2).map(p=>p.name));

let sales1=products1.map((p)=>{
    return {
    ...p,totalSales:p.price*p.quantity
}});
console.log(sales1)

// // 3. Group books by genre
const books = [
  { title: "Book A", genre: "Fiction", year: 2015 },
  { title: "Book B", genre: "Non-Fiction", year: 2020 },
  { title: "Book C", genre: "Fiction", year: 2018 },
  { title: "Book D", genre: "Non-Fiction", year: 2010 }
];
// // Output: { fiction: [...], "non-fiction": [...] }

const groupbooks=books.reduce((acc,book)=>{
    let key=book.genre
    if(!acc[key]){
        acc[key]=[];
    }
    acc[key].push(book)
    return acc;
},{});
console.log(groupbooks)

// // 4. Get list of customers who placed orders in the last 30 days
const orders = [
  { id: 1, customer: "Alice", date: "2025-07-20" },
  { id: 2, customer: "Bob", date: "2025-08-05" },
  { id: 3, customer: "Charlie", date: "2025-06-15" }
];
// Assume today = 2025-08-08
// // Output: ["Alice", "Bob"]

const today= new Date("2025-08-08");

let filteredCust=orders.filter(order=>{
    const ordereddate=new Date(order.date);
    const diffdays=(today-ordereddate)/(1000 * 60 * 60 * 24)
    return diffdays<=30
})
console.log(filteredCust.map(name=>name.customer))



// // 5. Create leaderboard from game scores (each player’s highest score counts)
const games = [
  { player: "Alice", score: 40 },
  { player: "Bob", score: 60 },
  { player: "Alice", score: 70 },
  { player: "Bob", score: 55 }
];
// // Output: [{ player: "Alice", score: 70 }, { player: "Bob", score: 60 }]

let result={};

for(let game of games){
    if(!result[game.player]){
        result[game.player]=game;
    }else if(game.score> result[game.player].score){
        result[game.player]=game;
    }
}
console.log(Object.values(result))


// // 6. Merge orders with customer details (join by id)
const customers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const ordersList = [
  { orderId: 101, customerId: 1 },
  { orderId: 102, customerId: 2 }
];
let mergedOrders=ordersList.map(o=>{
    const customer=customers.find(c=>c.id===o.customerId)
    return {
        ...o,
        name:customer.name
    }
})
console.log(mergedOrders)

// // Output: [
// //   { orderId: 101, customerId: 1, name: "Alice" },
// //   { orderId: 102, customerId: 2, name: "Bob" }
// // ]

// // 7. Find overlapping bookings
const bookings = [
  { id: 1, start: "2025-08-01", end: "2025-08-05" },
  { id: 2, start: "2025-08-04", end: "2025-08-06" },
  { id: 3, start: "2025-08-10", end: "2025-08-12" }
];
// // Output: [[1, 2]]

let overlap=[]

for(let i=0;i<bookings.length;i++){
    for(let j=i+1;j<bookings.length;j++){
        const b1=bookings[i];
        const b2=bookings[j];

        const s1=new Date(b1.start);
        const e1=new Date(b1.end);
        const s2=new Date(b2.start);
        const e2=new Date(b2.end)

        if(s1<=e2 && e1>=s2){
            overlap.push([b1.id,b2.id]);
        }
    }
}
console.log(overlap)

// // 8. Group products by price range: Low (≤ 5000), Medium (> 5000 and ≤ 20000), High (> 20000)
const products2 = [
  { id: 1, name: "Laptop", price: 50000, quantity: 2 },
  { id: 2, name: "Mobile", price: 20000, quantity: 5 },
  { id: 3, name: "Headphones", price: 2000, quantity: 10 },
  { id: 4, name: "Keyboard", price: 1500, quantity: 4 },
  { id: 5, name: "Monitor", price: 12000, quantity: 3 }
];
// // Output: { low: [...], medium: [...], high: [...] }

const groupProducts= products2.reduce((acc,product)=>{
    if(product.price<=5000){
        acc.Low.push(product)
    }else if(product.price>5000 && product.price<=20000){
        acc.Medium.push(product)
    }else{
        acc.High.push(product)
    }
    return acc
},{Low:[],Medium:[],High:[]});

console.log(groupProducts)


// // 9. Total value of medicines per category
const medicines = [
  { id: 1, name: "Paracetamol", price: 20, quantity: 10, category: "Pain Relief" },
  { id: 2, name: "Amoxicillin", price: 50, quantity: 5, category: "Antibiotic" },
  { id: 3, name: "Cetirizine", price: 15, quantity: 20, category: "Allergy" },
  { id: 4, name: "Ibuprofen", price: 30, quantity: 7, category: "Pain Relief" },
  { id: 5, name: "Azithromycin", price: 100, quantity: 3, category: "Antibiotic" }
];
// // Output: { "Pain Relief": 410, "Antibiotic": 650, "Allergy": 300 }

let med=medicines.reduce((acc,medicine)=>{
    let value=medicine.quantity*medicine.price;
    if(!acc[medicine.category]){
        acc[medicine.category]=0;
    }
    acc[medicine.category]+=value;
    return acc;
},{})
console.log(med)
