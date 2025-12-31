let todos = []
const todosDiv = document.getElementById("todos")
const input = document.getElementById("todoInput")
const storageKey = todos;

function renderTodos() {
    todosDiv.innerHTML = null;

    for(const [idx, todo] of Object.entries(todos)) {
        const container = document.createElement("div")
        container.style.border = "none";
        container.style.margin = "10px 0px";
        container.style.padding = "0px";
        container.style.display = "flex";

        const title = document.createElement("p")
        title.style.display = "inline";
        title.style.margin = "0px";
        title.textContent = todo;

        const checkbox = document.createElement("button")
        checkbox.style.padding = "6px";
        checkbox.style.margin = " 3px 6px 3px 3px";
        checkbox.style.borderRadius = "0px";
        checkbox.onclick = () => removeTodo(idx)

        container.append(checkbox, title)
        todosDiv.append(container)
    }
}

function addTodo() {
    const value = input.value
    if (!value) {
        return
    }
    todos.push(value)
    input.value = ""
    renderTodos()
    saveTodos()
}

function removeTodo(idx) {
    todos.splice(idx, 1)
    renderTodos()
    saveTodos()
}

function loadTodos() {
    const oldTodos = localStorage.getItem(storageKey)
    if (oldTodos) todos = JSON.parse(oldTodos)
    renderTodos()
}

function saveTodos() {
    const stringTodos = JSON.stringify(todos)
    localStorage.setItem(storageKey, stringTodos)
}

document.addEventListener("DOMContentLoaded", loadTodos)

input.addEventListener("keydown", function(event) {    
    if (event.key === "Enter") {
        addTodo();
    }
});