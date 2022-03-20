function selChip() {
    let randChip = chips[Math.floor(Math.random() * chips.length)];
    let h1Chip = randChip.querySelector("h1")
    while(h1Chip !== null) {
        randChip = chips[Math.floor(Math.random() * chips.length)];
        h1Chip = randChip.querySelector("h1")
    }
    return randChip;
}

function placeTodo(index) {
    const todoChip = selChip();
    const todo_h1 = document.createElement("h1")
    todo_h1.innerText = todoList[index];
    todo_h1.className = "todo";
    todoChip.appendChild(todo_h1);
}

const todoForm = document.querySelector(".todo_form")
const todoInput = document.querySelector(".todo_form input")
let todoList = []

const todoLocal = localStorage.getItem("todoList");
if(todoLocal !== null) {
    todoList = JSON.parse(todoLocal);
    for (let i = 0; i < todoList.length; i++) {
    placeTodo(i);
    }
}

function addTodo(event) {
    event.preventDefault();
    const todo = todoInput.value;
    if(todoList.length > 10) {
        todoInput.value = "You can't wtite to-do anymore"
    } else {
        todoList.push(todo);
        todoInput.value = null;
        placeTodo(todoList.length-1);
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
}

todoForm.addEventListener("submit", addTodo)