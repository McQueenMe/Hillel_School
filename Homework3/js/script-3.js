//Sposob 1
/*
let number = 12345;
let stroka = number.toString();
let array = stroka.split('');

stroka = array.join(' ');
console.log(stroka)
*/

//Sposob 2
let value = prompt('Введіть 5-ти значне число');
if (value.length != 5) {
   alert('Uncorrect value');
} else {
   let stroka = value.toString();
   let array = stroka.split('');
   stroka = array.join(' ');
   console.log(stroka)
}