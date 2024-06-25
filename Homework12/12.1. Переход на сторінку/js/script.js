let data = 0;

const dataFromUser = () => {
   data = prompt('Input link');
}

const goToLink = () => {
   if (data) {
      window.location.href = data;
   } else alert('You link is not defined')
}

const firstButton = document.querySelector('.first-button');
const secondButton = document.querySelector('.second-button');

firstButton.addEventListener('click', dataFromUser);
secondButton.addEventListener('click', goToLink);



