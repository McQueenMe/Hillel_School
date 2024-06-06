let array = [1, "slovo", '3', true, 25, ' '];

const value = function midleValue(array) {
   let sum = 0, k = 0;
   for (let i = 0; i < array.length; i++) {
      if (Number(array[i]) && typeof array[i] !== 'boolean') {
         console.log(Number(array[i]));
         sum = sum + Number(array[i]);
         k++;
      }
   }
   let value = sum / k;
   return value.toFixed(2);
}

console.log(value(array));
