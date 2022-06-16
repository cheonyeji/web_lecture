const inputTodo = document.querySelector("input");
const inputBtn = document.querySelector("button");
const toDoList = document.querySelector(".todo-list");

function addToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");

  li.appendChild(span);
  span.innerText = newTodo;

  document.appendChild(li);
}

function handleInput(event) {
  event.preventDefault();
  const newTodo = inputTodo.value;
  inputTodo.value = "";

  addToDo(newTodo);
}

inputBtn.addEventListener("click", handleInput);
