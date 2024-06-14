/*
function facktorial(n) {
   if (n === 1) {
      return 1;
   }
   return n * facktorial(n - 1);
}

console.log(facktorial(5));

function pow(num, x) {
   if (x === 1) {
      return num
   }
   return num * pow(num, x - 1)
}

console.log(pow(3, 4));

function createCounter(num) {
   let count = num || 0;

   const increment = function () {
      count++;
      return count;
   }

   const decrement = function () {
      count--;
      return count
   }

   const reset = function () {
      count = num || 0;
      return count
   }

   return {
      increment,
      decrement,
      reset
   }
}

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
*/

let company = {
   sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
   development: {
      web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1000 }],
      internals: [{ name: 'Jack', salary: 1300 }]
   }
};

function calculateTotalSalary(obj) {
   totalSalary = 0;

   for (let key in obj) {
      if (Array.isArray(obj[key])) {
         obj[key].forEach(employee => {
            totalSalary += employee.salary;
         });
      } else if (typeof obj[key] === 'object') {
         totalSalary += calculateTotalSalary(obj[key]);
      }
   }
   return totalSalary;
}

console.log(calculateTotalSalary(company));