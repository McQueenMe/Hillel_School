const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arrayNumbers, item) {
   for (element of arrayNumbers) {
      console.log(element)
      if (element == item) {
         let index = arrayNumbers.indexOf(element);
         arrayNumbers.splice(index, 1);
      }
   }
   console.log(arrayNumbers)
}

removeElement(array, 6);
