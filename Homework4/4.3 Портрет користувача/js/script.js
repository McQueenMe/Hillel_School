const year = prompt("Вкажіть свій рік народження");
let age = 0;

if (Number(year)) {
   age = 2024 - Number(year);
}

const city = prompt("В якому місті ти живеш?");
let capital;

const sport = prompt("Який твій улюблений вид спорту?");

//-----------Вік-----------------
if (year !== null && year !== '') {
   if (age) {
      alert(`Тобі зараз - ${age}`);
   } else {
      alert("Шкода що Ви не захотіли ввести свій рік народження");
   }
} else {
   alert("Шкода що Ви не захотіли ввести свій рік народження");
}

//----------Місто----------------------
if (city !== null && city !== '') {
   if (city === "Лондон") {
      alert("Ти живеш у столиці Англії");
   } else if (city === "Київ") {
      alert("Ти живеш у столиці України");
   } else if (city === "Вашингтон") {
      alert("Ти живеш у столиці США");
   } else {
      alert(`Ти живеш у місті ${city}`);
   }
} else {
   alert("Шкода що Ви не захотіли ввести своє місто проживання");
}

//------------Спорт------------------------
const nameFoot = "Роберто Фірміно";
const nameBasket = "Стефан Карі";
const nameKarate = "Масутацу Оямой";

if (sport !== null && sport !== '') {
   if (sport === "Футбол") {
      alert(`Круто! Хочеш стати ${nameFoot}`);
   } else if (sport === "Баскетбол") {
      alert(`Круто! Хочеш стати ${nameBasket}`);
   } else if (sport === "Карате") {
      alert(`Круто! Хочеш стати ${nameKarate}`);
   }
} else {
   alert("Шкода що Ви не захотіли ввести свій улюблений вид спорту");
}
