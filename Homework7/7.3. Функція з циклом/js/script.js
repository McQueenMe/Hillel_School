function input() {
   let i = 0;
   while (i < 10) {
      let input = prompt('Введіть значення більше за 100, або тест');
      if (Number(input) && Number(input) > 100 || String(input) && !Number(input) && input != null) {
         return input;
      } else alert(`У вас залишилося ${9 - i} спроб`)
      i++;
   }
}

console.log(input());