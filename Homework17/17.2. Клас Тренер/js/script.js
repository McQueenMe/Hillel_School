class Coach {
   constructor(name, role, number) {
      this.name = name;
      this.role = role;
      this.number = number;
   }

   displayInfo() {
      //Использую данный метод вывода информации исключительно ради соблюдения условий задания
      console.log(`Coach: ${this.name}, Specialization: ${this.role}, Rating: ${this.number}`)

      // Рекомендованный метод, однако при вызове из VS Code не выводит в консоль данные
      //return `Coach: ${this.name}, Specialization: ${this.role}, Rating: ${this.number}`
   }
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
console.log(coach1)

const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"