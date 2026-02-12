let todos = []
let todosDiv = document.getElementById("todos")
let input = document.getElementById("todoInput")
const storageKey = todos;

function renderTodos() {
    todosDiv.innerHTML = "";

    let todosDivHTML = ""; 
    todos.forEach((value, idx) => {
        todos.idx = idx;
        todos.name = value;
        
        todosDivHTML += `
        <div class="tasks-div">
            <button class="checkbox" dataset-task-idx="${idx}" onclick="removeTodo(${idx})"></button>
            <p class="tasks-name">${todos.name}</p>
        </div>`    
    })

    todosDiv.innerHTML = todosDivHTML;
}

function addTodo() {
    const value = input.value
    if (!value) {
        return
    }
    todos.push(value);
    input.value = ""
    renderTodos();
    saveTodos();
}

function removeTodo(idx) {
    todos.splice(idx, 1);
    renderTodos();
    saveTodos();
}

function loadTodos() {
    const oldTodos = localStorage.getItem(storageKey)
    if (oldTodos) todos = JSON.parse(oldTodos)
    renderTodos();
}

function saveTodos() {
    const stringTodos = JSON.stringify(todos);
    localStorage.setItem(storageKey, stringTodos);
}

document.addEventListener("DOMContentLoaded", loadTodos)

input.addEventListener("keydown", function(event) {    
    if (event.key === "Enter") {
        addTodo();
    }
});