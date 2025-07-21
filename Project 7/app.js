const taskInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("listContainer");

function addTask() {
  let userInput = taskInput.value;
  if (!userInput) {
    alert("Please, Enter the task first!");
    return;
  }

  let task = document.createElement("li");
  let taskTxt = document.createElement("span");
  let btnSpan = document.createElement("span");
  let editBtn = document.createElement("button");
  let removeBtn = document.createElement("button");

  taskTxt.innerText = userInput;
  task.setAttribute("class", "list-group-item");
  taskTxt.setAttribute("class", "m-1");
  editBtn.setAttribute("class", "btn btn-info");
  removeBtn.setAttribute("class", "btn btn-danger ms-1");
  editBtn.innerText = "Edit";
  removeBtn.innerText = "Remove";

  btnSpan.appendChild(editBtn);
  btnSpan.appendChild(removeBtn);
  task.appendChild(taskTxt);
  task.appendChild(btnSpan);
  todoList.appendChild(task);

  editBtn.addEventListener("click", function () {
    let newTask = prompt("Edit Task: ");
    taskTxt.innerText = newTask;
  });

  removeBtn.addEventListener("click", function () {
    todoList.removeChild(task);
  });

  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);
