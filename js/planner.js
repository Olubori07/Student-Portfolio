const taskInput = document.getElementById("taskInput");
const taskDate = document.getElementById("taskDate");
const taskPriority = document.getElementById("taskPriority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");

// Load saved tasks
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addTaskBtn.addEventListener("click", addTask);

function addTask(){

    if(taskInput.value.trim() === ""){

        alert("Please enter a task.");

        return;

    }

    const task = {

        title: taskInput.value,

        date: taskDate.value,

        priority: taskPriority.value,

        completed:false

    };

    tasks.push(task);

    saveTasks();

    displayTasks();

    taskInput.value="";
    taskDate.value="";
}

function displayTasks(){

    taskList.innerHTML="";

       tasks.forEach((task,index)=>{

        const li=document.createElement("li");

        li.innerHTML=`

        <div>

        <h3 style="${task.completed ? "text-decoration:line-through;color:green;" : ""}">
        ${task.title}
        </h3>

        <p>📅 ${task.date || "No Date"}</p>

        <p>Priority:
        <strong>${task.priority}</strong>
        </p>

        </div>

        <div>

        <button onclick="completeTask(${index})">

        ✔

        </button>

        <button onclick="deleteTask(${index})">

        🗑

        </button>

        </div>

        `;

        taskList.appendChild(li);

    });
    
    updateSummary();

}

function completeTask(index){

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();

}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}

function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}

function updateSummary() {

    const total = tasks.length;

    const completed = tasks.filter(task => task.completed).length;

    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent = completed;

    document.getElementById("pendingTasks").textContent = pending;

}