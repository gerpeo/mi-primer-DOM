//Manipulacion del DOM
// La manipulación del DOM (Document Object Model), se refiere a la capacidad 
// de modificar estructura, contenido y estilo de un documento HTML.

//Formas de acceder a un elemento DOM

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    console.log(taskInput)
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ''){
        tasks.push({
            id: Date.now(),
            text: taskInputValue,
            completed:false
        })
        renderTask();
        taskInput.value = "";
    }
}

function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    tasks.forEach(data =>{
        
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskText = document.createElement("span");
        taskText.textContent = data.text;
        li.appendChild(checkbox);
        li.appendChild(taskText);
        taskList.appendChild(li);
    })
}
function deltask(){
    const taskList = document.getElementById('taskList');
    const checkboxes = taskList.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const li = checkbox.parentNode;
        li.remove();

        // Actualizar la lista de tareas eliminando la tarea correspondiente
        tasks = tasks.filter(task => task.text !== li.textContent);
    });
}   












