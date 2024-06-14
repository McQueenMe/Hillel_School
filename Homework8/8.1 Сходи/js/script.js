let step = 0;
let ladder = {
   up: function () {
      step += 1;
      return this
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