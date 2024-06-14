let step = 0;
let ladder = {
   up: function () {
      step += 1;
      return this
      // підніматиме вас на одну сходинку
   },
   down: function () {
      step -= 1;
      return this
   },
   showStep: function () {
      console.log(step)
      return this
   }
};


ladder.up().up().down().showStep(); // 1