import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function () {
   const formEl = $('.js--form');
   const inputEl = $('.js--form__input');
   const listEl = $('.js--todos-wrapper');

   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

   renderTasks();

   function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }

   function renderTasks() {
      listEl.empty();
      tasks.forEach((task, index) => {
         let liEl = $(`
                <li id="${index}" class="todo-item ${task.checked ? 'todo-item--checked' : ''}">
                    <input type="checkbox" id="${index}" ${task.checked ? 'checked' : ''}>
                    <span class="todo-item__description">${task.task}</span>
                    <button class="todo-item__delete btn btn-danger btn-sm">Видалити</button>
                </li>
            `);
         listEl.append(liEl);
      });
   }

   formEl.on('submit', function (event) {
      event.preventDefault();
      const taskValue = inputEl.val();
      if (taskValue) {
         tasks.push({ task: taskValue, checked: false });
         saveTasks();
         renderTasks();
         formEl[0].reset();
      }
   });

   listEl.on('click', 'input[type="checkbox"]', function () {
      const index = $(this).attr('id');
      tasks[index].checked = $(this).is(':checked');
      saveTasks();
      renderTasks();
   });

   listEl.on('click', '.todo-item__delete', function () {
      const index = $(this).parent().attr('id');
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
   });

   listEl.on('click', '.todo-item__description', function () {
      const taskText = $(this).text();
      $('#taskText').text(taskText);
      $('#taskModal').modal('show');
   });
});
