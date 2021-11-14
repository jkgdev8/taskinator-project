//add task button element
var buttonEl = document.querySelector("#save-task");

//tasks to do element
var tasksToDoEl = document.querySelector("#tasks-to-do");

//function of creating a task
var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
 }


// button listens to click
buttonEl.addEventListener("click", createTaskHandler);


