function mnoshenya(a) {
   return function (b) {
      return a * b;
   }
}

console.log(mnoshenya(2)(5));
