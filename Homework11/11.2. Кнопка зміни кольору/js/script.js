document.addEventListener('DOMContentLoaded', () => {
   const element = document.querySelector('.text');
   const button = document.querySelector('.butKnopka');

   const changeColor = () => {
      element.classList.toggle('active');
   }

   button.addEventListener('click', changeColor);
});
