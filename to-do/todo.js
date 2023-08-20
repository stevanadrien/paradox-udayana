const todoInputs = document.querySelector(".todo-inputs");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");

//event listners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodos);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

function addTodos(x) {
  x.preventDefault();

  //tododiv
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //checked button
  const compleatedButton = document.createElement("button");
  compleatedButton.innerHTML = '<i class="fa-regular fa-plus"></i>';
  compleatedButton.classList.add("complete-btn");
  todoDiv.appendChild(compleatedButton);
  //new todo
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInputs.value;
  todoDiv.appendChild(newTodo);

  //trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa-solid fa-minus" style="color: white;"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // appened list
  todoList.appendChild(todoDiv);
  todoInputs.value = "";
}
function deleteCheck(e) {
  const items = e.target;

  //delete todo
  if (items.classList[0] === "trash-btn") {
    const todo = items.parentElement;

    //todo animation
    todo.classList.add("remove");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //completed btn
  if (items.classList[0] === "complete-btn") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todoList.appendChild(todoDiv);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function getTodos() {}
