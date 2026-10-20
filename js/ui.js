const addButton = document.querySelector(".add-btn");
const taskInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");

export function getTaskTitle(){
    return taskInput.value;
}

export function onAddTask(callback) {
    addButton.addEventListener("click", () => {
        const title = getTaskTitle();
        callback(title);
    });
}

export function displayTask(task){
    const element = document.createElement("div");
    element.textContent = task.title;
    taskContainer.appendChild(element);
}