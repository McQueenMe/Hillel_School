const prom = prompt("Введіть ціле число");
let number = 0, k = 0;

if (Number(prom) != NaN && Number(prom) != null && Number(prom) > 0) {
   number = Number(prom);
   for (let i = 1; i <= number; i++) {
      if (number % i == 0) {
         k++;
      }
   }
   if (k > 2) {
      console.log(`${number} - Не просте число`);
   } else console.log(`${number} - Просте число`);
} else console.log("Uncorrect data")


