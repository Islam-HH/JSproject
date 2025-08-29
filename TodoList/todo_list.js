const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearTasksBtn = document.getElementById('clearTasksBtn');

let tasks = [];

taskInput.focus();

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== ""){

        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();

    } else {

        alert("Please enter correct input.");

    }
}

function displayTasks() {

    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `<input type = "checkbox" id = "task-${index}" ${task.completed ? "checked" : ""}>
        <label for = "task-${index}">${task.text}</label>`;
        
        li.querySelector('input').addEventListener("change",()=> toggleTask(index));

        taskList.appendChild(li);
    });

}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;
    displayTasks();

}

function clearCompletedTasks() {

    tasks = tasks.filter(task => !task.completed);
    displayTasks();

}

function clearTasks(){

    tasks.splice(0, tasks.length);
    displayTasks();

}

addTaskBtn.addEventListener("click",addTask);
taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
        focus();
    }
});
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearTasksBtn.addEventListener("click", clearTasks);
displayTasks();