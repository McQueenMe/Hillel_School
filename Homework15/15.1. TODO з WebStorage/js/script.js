const formEl = document.querySelector('.js--form');
const inputEl = document.querySelector('.js--form__input');
const listEl = document.querySelector('.js--todos-wrapper');

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

renderTasks();

function saveTasks() {
   localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
   listEl.innerHTML = "";
   tasks.forEach((task, index) => {
      let liEl = document.createElement('li');
      liEl.setAttribute('id', index);
      liEl.classList.add('todo-item');
      if (task.checked) {
         liEl.classList.add('todo-item--checked');
      }
      liEl.innerHTML = `
            <input type="checkbox" id="${index}" ${task.checked ? 'checked' : ''}>
            <span class="todo-item__description">${task.task}</span>
            <button class="todo-item__delete">Видалити</button>
        `;
      listEl.append(liEl);
   });
}

formEl.addEventListener('submit', function (event) {
   event.preventDefault();
   const taskValue = document.querySelector('.js--form__input').value;
   if (taskValue) {
      tasks.push({ task: taskValue, checked: false });
      saveTasks();
      renderTasks();
      formEl.reset();
   }
});

listEl.addEventListener('click', function (event) {
   if (event.target.type === 'checkbox') {
      const checkbox = event.target;
      const index = checkbox.id;
      tasks[index].checked = checkbox.checked;
      saveTasks();
      renderTasks();
   } else if (event.target.classList.contains('todo-item__delete')) {
      const index = event.target.parentElement.id;
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
   }
});
