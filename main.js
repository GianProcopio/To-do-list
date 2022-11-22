const btnAdd = document.querySelector('.icono-add');
const input = document.getElementById('tarea');
const seccionTareas = document.querySelector('.tareas');
const ul = document.querySelector('ul');

btnAdd.addEventListener('click', addTask);

function addTask(){
    let valueInput = input.value;

    let li = document.createElement('li');
    let p = document.createElement('p');
    p.textContent = valueInput;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = '';
}

function addDeleteBtn(){
    let btnDelete = document.createElement('button');

    btnDelete.textContent = 'X';
    btnDelete.className = 'btn-delete';

    btnDelete.addEventListener('click', (e)=>{
        let item = e.target.parentElement;
        ul.removeChild(item);
    })
    return btnDelete;
}