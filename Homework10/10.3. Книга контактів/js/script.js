let arr = {
   contacts: [
      obj1 = {
         name: 'Nika',
         number: +380999999999,
         email: "nika@gmail.com",
      },
      obj2 = {
         name: 'Vera',
         number: +380994444444,
         email: "vera@gmail.com",
      },
      obj3 = {
         name: 'Nadya',
         number: +380333333333,
         email: "nadya@gmail.com",
      },
   ],
   foundContact(name) {
      return this.contacts.find(contacts => contacts.name === name)
   },
   addContact(name, number, email) {
      this.contacts.push({ name, number, email });
   }
}

console.log(arr);

console.log(arr.foundContact('Nika'));
arr.addContact('Alex', +38094322342, "alex@gmail.com");

console.log(arr);