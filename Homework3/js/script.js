let number = 10; //Number
console.log(`${number} - ${typeof (number)}`);

let string = '100'; //String
console.log(`${string} - ${typeof (string)}`);

let undef; //Undefind
console.log(`${undef} - ${typeof (undef)}`);

let object = {
   name: "Nikita",
   age: "19",
}; //Object
console.log(`${JSON.stringify(object)} - ${typeof (object)}`);

let array = [1, 2, 3, 4, 5]; //Undefind
console.log(`${JSON.stringify(array)} - ${Array.isArray(array) ? 'array' : typeof array}`);

let nullValue = null; //String
console.log(`${nullValue} - null`);

let isDark = true;
console.log(`${isDark} - ${typeof (isDark)}`);

let bigIntVariable = 1234567890123456789012345678901234567890n;
console.log(`${bigIntVariable} - ${typeof (bigIntVariable)}`);

let symbolValue = Symbol("?");
console.log(`${symbolValue.toString()} - ${typeof symbolValue}`);

function print() {
   console.log('Function print [0..5]')
   for (let i = 0; i <= 5; i++) {
      console.log(i)
   }
}

print()