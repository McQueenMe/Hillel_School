
function count() {
   let localCount = 0;

   function plus(data) {
      localCount = localCount + data;
      console.log(localCount);

   }
   return plus;
}

const sum = count()

sum(4);
sum(6);
sum(10);
sum(7);

