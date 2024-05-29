const value1 = prompt("Введіть трьохзначне число");

const value = Number(value1);

if (value > 99 && value < 1000) {
   c = value % 10;
   b = Math.trunc(value / 10 % 10);
   a = Math.trunc(value / 100 % 10);

   if (a == b && a == c && b == c) {
      alert(`Всі цифри числа рівні між собою: ${a} = ${b} = ${c}`)
   } else if (a == b) {
      alert(`Перше та друге число рівні: ${a} = ${b}`)
   } else if (a == c) {
      alert(`Перше та третє число рівні: ${a} = ${c}`)
   } else if (b == c) {
      alert(`Друге та третє число рівні: ${b} = ${c}`)
   } else {
      alert(`Цифри у числі не повторюються`)
   }
} else alert("Число не трьохзначне")
