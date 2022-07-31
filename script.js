// for sample task of all statuses when opening app 
let tasks = [
    {
        taskName:"Example for finished task",
        status: "Finished"
    },
    {
        taskName:"Example for in-progress task",
        status: "In-progress"
    },
    {
        taskName:"Example for task todo",
        status: "Todo"
    },
];
// display function defined below for re rendering of table
displayTable();


// for adding task 
function addTask() {
    // get it from input text with the help of id task using querrySelector
    let task = document.querySelector("#task"); 

    // add task in tasks array using push function 
    tasks.push({
        taskName: task.value,
        status: "Todo"
    });
    // make input field blank again 
    task.value = "";
    displayTable();
}


// for updating task status with index as argument
function updateStatus(index) {
    // define array with all possible status of task in order 
    let statuses = ["Todo", "In-progress", "Finished"];
    // using index from args, find the current status
    let statusIndex = statuses.indexOf(tasks[index].status);
    statusIndex++;
    // if reached the end of status array, start again from index 0
    if(statusIndex > 2) statusIndex = 0;
    // and then update it
    tasks[index].status = statuses[statusIndex];
    displayTable();
}


// for deleting task by using index passed in args
function deleteTask(index) {
    // remove the task from table using splice function with index passed in argument
    tasks.splice(index, 1);
    displayTable();
}


// for rendering task array
function displayTable() {
    // select table using querrySelector
    let table = document.querySelector("table");

    // so that it only print final table when new element is added
    while(table.childNodes.length > 2){
        table.removeChild(table.lastChild);
    }
    // for keeping index 
    let index = 0;

    // rendering tasks array using forEach loop
    tasks.forEach(task => {
        // create new row in table 
        let tableRow = document.createElement("tr");
        // creating columns of table row 
        let taskName = document.createElement("td");
        let status = document.createElement("td");
        let deleteTask = document.createElement("td");

        // assigning data in taskName colums 
        taskName.innerText = task.taskName;
        // assigning data in task status colums 
        status.innerText = task.status;
        status.classList.add(task.status.toLowerCase());
        // assigning trash icon in delete colums 
        deleteTask.classList.add("fa");
        deleteTask.classList.add("fa-trash");

        // triggering delete function when clicked on trash icon 
        deleteTask.setAttribute("onClick", "deleteTask("+index+")");
         // triggering updateStatus function when clicked on task current status
        status.setAttribute("onClick", "updateStatus("+index+")");
        // incrementing the index when new task is added 
        ++index;


        // appending data in table
        tableRow.appendChild(taskName);
        tableRow.appendChild(status);
        tableRow.appendChild(deleteTask);

        table.appendChild(tableRow);
    })
}