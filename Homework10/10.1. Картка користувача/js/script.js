function User(name, surname, age, location) {
   this.name = name;
   this.surname = surname;
   this.age = age;
   this.location = location;
}

const user1 = new User('Nikita', 'Yagodchenko', 19, "Donetsk");
const user2 = new User('Michael', 'Yagodchenko', 13, "Berdyansk");

function getInfo(obj) {
   for (key in obj) {
      console.log(`${key} - ${obj[key]}`)
   }
}

console.log(user1);

getInfo(user1);

console.log(user2);

getInfo(user2);