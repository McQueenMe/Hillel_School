"use strict";

$(document).ready(function () {
  var formEl = $('.js--form');
  var inputEl = $('.js--form__input');
  var listEl = $('.js--todos-wrapper');
  var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks();
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  function renderTasks() {
    listEl.empty();
    tasks.forEach(function (task, index) {
      var liEl = $("\n               <li id=\"".concat(index, "\" class=\"todo-item ").concat(task.checked ? 'todo-item--checked' : '', "\">\n                   <input type=\"checkbox\" id=\"").concat(index, "\" ").concat(task.checked ? 'checked' : '', ">\n                   <span class=\"todo-item__description\">").concat(task.task, "</span>\n                   <button class=\"todo-item__delete btn btn-danger btn-sm\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n               </li>\n           "));
      listEl.append(liEl);
    });
  }
  formEl.on('submit', function (event) {
    event.preventDefault();
    var taskValue = inputEl.val();
    if (taskValue) {
      tasks.push({
        task: taskValue,
        checked: false
      });
      saveTasks();
      renderTasks();
      formEl[0].reset();
    }
  });
  listEl.on('click', 'input[type="checkbox"]', function () {
    var index = $(this).attr('id');
    tasks[index].checked = $(this).is(':checked');
    saveTasks();
    renderTasks();
  });
  listEl.on('click', '.todo-item__delete', function () {
    var index = $(this).parent().attr('id');
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  });
  listEl.on('click', '.todo-item__description', function () {
    var taskText = $(this).text();
    $('#taskText').text(taskText);
    $('#taskModal').modal('show');
  });
});
