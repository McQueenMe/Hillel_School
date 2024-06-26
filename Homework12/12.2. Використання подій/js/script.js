const menuEl = document.querySelector('.buttons');
console.log(menuEl);

const button1El = document.querySelector('.button_first');
const button2El = document.querySelector('.button_second');
const button3El = document.querySelector('.button_third');


menuEl.addEventListener('click', function (event) {
   if (event.target === button1El) {
      alert('Click on button 1')
   } else if (event.target === button2El) {
      alert('Click on button 2')
   } else if (event.target === button3El) {
      alert('Click on button 3');
   }

})