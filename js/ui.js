const addButton = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");

function getTaskTitle(){
    return taskInput.value;
}