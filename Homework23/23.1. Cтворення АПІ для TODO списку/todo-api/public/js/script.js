$(document).ready(function () {
   const formEl = $('.js--form');
   const inputEl = $('.js--form__input');
   const listEl = $('.js--todos-wrapper');

   // Fetch tasks from the backend
   fetchTasks();

   function fetchTasks() {
      $.ajax({
         url: 'http://localhost:3000/findTask',
         method: 'GET',
         success: function (data) {
            renderTasks(data);
         },
         error: function (err) {
            console.error('Error fetching tasks:', err);
         }
      });
   }

   function renderTasks(tasks) {
      listEl.empty();
      tasks.forEach((task) => {
         let liEl = $(`
               <li id="${task._id}" class="todo-item ${task.checked ? 'todo-item--checked' : ''}">
                   <input type="checkbox" id="${task._id}" ${task.checked ? 'checked' : ''}>
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
         $.ajax({
            url: 'http://localhost:3000/createTask',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ task: taskValue }),
            success: function (newTask) {
               fetchTasks(); // Re-fetch tasks after adding a new one
               formEl[0].reset();
            },
            error: function (err) {
               console.error('Error creating task:', err);
            }
         });
      }
   });

   listEl.on('click', 'input[type="checkbox"]', function () {
      const taskId = $(this).attr('id');
      const checked = $(this).is(':checked');
      $.ajax({
         url: 'http://localhost:3000/updateTask',
         method: 'PUT',
         contentType: 'application/json',
         data: JSON.stringify({ _id: taskId, checked: checked }),
         success: function () {
            fetchTasks(); // Re-fetch tasks after updating
         },
         error: function (err) {
            console.error('Error updating task:', err);
         }
      });
   });

   listEl.on('click', '.todo-item__delete', function () {
      const taskId = $(this).parent().attr('id');
      $.ajax({
         url: 'http://localhost:3000/deleteTask',
         method: 'DELETE',
         contentType: 'application/json',
         data: JSON.stringify({ _id: taskId }),
         success: function () {
            fetchTasks(); // Re-fetch tasks after deleting
         },
         error: function (err) {
            console.error('Error deleting task:', err);
         }
      });
   });
});
