//Validar los campos de entrada del form usando JS
/*
   1 El campo title no puede estar vacio ni ser igual a la propiedad title de otra tarea
   
 */

//Validar los campos de entada usando Bootstrap

document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;

  if (title === '') {
    alert('The field to do can\'t be enpty');
  } else {
    const task = {
      title,
      description
    };

    if (localStorage.getItem('tasks') === null) {
      let tasks = [];
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    e.preventDefault();
    getTasks();
  }
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');

  tasksView.innerHTML = '';

  for (let i = 0; i <= tasks.length - 1; i++) {
    let title = tasks[i].title;
    console.log(tasks[i].title);
    let description = tasks[i].description;
    console.log(tasks[i].description);

    tasksView.innerHTML += `<div class="card mb-3">
       <div class='card-body'>
        <p>${title} - ${description}</p>
            <a class='btn btn-danger' onclick ='dellTask("${title}")'>
              delete
            </a>
        </div>
       </div>`;
  }
}

function dellTask(title) {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title === title) {
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}
