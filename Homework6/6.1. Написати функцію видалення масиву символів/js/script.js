const stroka = prompt("Введіть строку");
const words = prompt("Введіть літери, які повинні бути видалені зі строки (Без пробілів)");

const array = words.split('');
console.log(array)

function deleteWord(stroka, array) {
   let result = '', k = 0;
   for (let i = 0; i < stroka.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (stroka[i] === array[j]) {
            k++;
            break;
         }
      }
      if (k == 0) {
         result = result + stroka[i];
      } else k = 0;
   }
   console.log(result)
}

deleteWord(stroka, array);