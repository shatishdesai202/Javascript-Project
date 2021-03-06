let text = document.getElementById('text')
let btn = document.getElementById('btn')
let insert = document.getElementById('insert')
btn.addEventListener('click', add)

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
} else {
    var todosEX = window.localStorage.getItem("todos");
    var todos = JSON.parse(todosEX); // Must Check a Json parse
}

class addTodo {

    constructor(name) {
        this.addT(name)
    }

    addT(name) {

        let ele = document.createElement('div')
        ele.style.marginLeft = "400px"

        let input = document.createElement('input')
        input.value = name
        input.type = "text"
        input.classList.add('form-control-lg')
        input.disabled = true

        let editbtn = document.createElement('button')
        editbtn.classList.add('btn')
        editbtn.classList.add('btn-warning')
        editbtn.classList.add('btn-md')
        editbtn.classList.add('d-inline', 'ml-2', 'text-white')

        editbtn.innerText = 'edit'
        editbtn.addEventListener('click', () => editf(input, name))

        let deletebtn = document.createElement('button')
        deletebtn.innerText = 'DELETE'
        deletebtn.classList.add('btn')
        deletebtn.classList.add('btn-danger')
        deletebtn.addEventListener('click', () => delf(ele, name))

        insert.appendChild(ele)
        ele.appendChild(input)
        ele.appendChild(editbtn)
        ele.appendChild(deletebtn)


    }
}

function add() {

    if (text.value != '') {
        new addTodo(text.value)
        todos.push(text.value)
        window.localStorage.setItem('todos', JSON.stringify(todos))
        text.value = ''
    }
}

function delf(ele, name) {
    ele.parentNode.removeChild(ele);
    let index = todos.indexOf(name);
    todos.splice(index, 1);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    // ele.remove()

}

function editf(input, name) {
    // console.log('inside fun')
    if (input.disabled == true) {
        // console.log('inside if')
        input.disabled = !input.disabled
        input.addEventListener('blur', () => lock(input, name))
    }

}

function lock(input, name) {
    input.disabled = true
    // console.log(input.value)
    store(input, name)
}

function store(input, name) {
    input.disabled = !input.disabled;
    let indexof = todos.indexOf(name);
    console.log(indexof)
    todos[indexof] = input.value;
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

for (let i = 0; i < todos.length; i++) {
    new addTodo(todos[i]);
}