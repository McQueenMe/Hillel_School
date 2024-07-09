
function Student(name, surname, bornYear, array) {
   this.name = name;
   this.surname = surname;
   this.bornYear = Number(bornYear);

   this.array = array;

   this.arrayVisited = [];

}

Student.prototype.getAge = function () {
   return 2024 - this.bornYear
}

Student.prototype.getMiddleMark = function () {
   let sum = 0, k = 0;
   for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i];
      k++;
   }
   return sum / k;
}

Student.prototype.present = function () {
   if (this.arrayVisited.length < 25) {
      this.arrayVisited.push(true)
   } else return `All the days is gone`
}

Student.prototype.absent = function () {
   if (this.arrayVisited.length < 25) {
      this.arrayVisited.push(false)
   } else return `All the days is gone`
}

Student.prototype.summary = function () {
   let sum = this.arrayVisited.length;
   let k = this.arrayVisited.filter(el => el === true).length;
   let averageMark = this.getMiddleMark();
   let attendanceRate = k / sum;

   console.log(`${this.name}: Середній бал: ${averageMark}, Відвідуваність: ${attendanceRate}`);

   if (averageMark > 90 && attendanceRate > 0.9) {
      console.log(`Молодець!`) //Це для тих випадків, коли методи викликаються з редактора коду
      return `Молодець!`; // Це для тих випадків, коли методи викликаються у консолі браузера
   } else if (averageMark > 90 || attendanceRate > 0.9) {
      console.log(`Добре, але можна краще`)//Це для тих випадків, коли методи викликаються з редактора коду
      return `Добре, але можна краще`; // Це для тих випадків, коли методи викликаються у консолі браузера
   } else {
      console.log(`Редиска!`)//Це для тих випадків, коли методи викликаються з редактора коду
      return `Редиска!`; // Це для тих випадків, коли методи викликаються у консолі браузера
   }
}

const student1 = new Student('Nikita', 'Yagodchenko', '2004', [100, 90, 100, 70, 100]);
const student2 = new Student('Michael', 'Petrov', "2010", [100, 98, 100, 95, 100])
const student3 = new Student('Mariya', 'Smith', "2005", [60, 98, 75, 95, 60])


console.log(student1)
console.log(student2)
console.log(student3)


student1.present()
student1.present()
student1.present()
student1.present()
student1.present()

student1.summary();

student2.present()
student2.present()
student2.present()
student2.present()
student2.absent()

student2.summary();

student3.absent()
student3.absent()
student3.absent()
student3.absent()
student3.absent()

student3.summary();