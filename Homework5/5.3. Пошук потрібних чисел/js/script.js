const prom = prompt("Введіть ціле число");
let number = 0;
let i = 0;

if (Number(prom) != NaN && Number(prom) != null && Number(prom) > 0) {
   number = Number(prom);
   while (i * i <= number && i <= 100) {
      console.log(`Число ${i} в квадраті дорiвнює ${i * i}`);
      i++;
   }
} else console.log("Uncorrect data")


