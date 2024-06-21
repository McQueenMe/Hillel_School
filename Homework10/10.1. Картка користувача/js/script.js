const user = {
   name: "Nikita",
   surname: "Yagodchenko",
   age: 19,
   location: "Berdyansk",
   method: function () {
      for (key in user) {
         if (key != 'method') {
            console.log(`${key} - ${user[key]}`);
         }
      }
   }
}

user.method();