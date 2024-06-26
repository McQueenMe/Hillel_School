const menuEl = document.querySelector('.menu');
const buttonEl = document.querySelector('.button');
const textEl = document.querySelector('.text-area');
let k = 0;

const addTaskForMenu = () => {
   if (!textEl.value) {
      alert('Nothing input');
   } else {
      k += 1;
      const li = document.createElement('li');
      const button = document.createElement('button')
      li.setAttribute('class', `li-el li-el_${k}`);
      button.setAttribute('class', `button-el button-el_${k}`);
      button.textContent = `Delete`;
      li.textContent = `${textEl.value}`;
      li.append(button)

      menuEl.append(li)
   }

}

const deleteTask = (event) => {
   if (event.target.tagName === 'BUTTON') {
      const li = event.target.closest('li');
      if (li) {
         li.remove();
      }
   }
}

buttonEl.addEventListener('click', addTaskForMenu)
menuEl.addEventListener('click', deleteTask);