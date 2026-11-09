import { removeAllData } from "./storage.js";
import { resetTasks } from "./task.js";

const addButton = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");
const deleteButton = document.querySelector(".remove-btn");

export function getTaskTitle(){
    return taskInput.value;
}

export function onAddTask(callback) {
    addButton.addEventListener("click", () => {
        const title = getTaskTitle();
        taskInput.value = "";
        callback(title);
    });
}

export function displayTask(task){
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    const task_element = document.createElement("div");
    task_element.classList.add("task-element");
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete-btn");
    task_element.textContent = task.title;
    delete_button.textContent = "削除する";
    taskItem.appendChild(task_element);
    taskItem.appendChild(delete_button);
    taskContainer.appendChild(taskItem);

    delete_button.addEventListener("click", () => {
        taskItem.remove();
        deleteData(task.id);
    });
}

export function initDeleteAll(callback) {
    deleteButton.addEventListener("click", () => {
        removeAllData();
        resetTasks();
        taskContainer.innerHTML = "<h2>タスク一覧</h2>";
        if (callback) callback();
    });
}