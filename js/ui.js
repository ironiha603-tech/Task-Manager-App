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
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    const task_element = document.createElement("div");
    task_element.classList.add("task-element");
    const delete_button = document.createElement("button");
    delete_button.classList.add("delete-btn");
    const complete_button = document.createElement("button");
    complete_button.classList.add("complete-button");
    task_element.textContent = task.title;
    delete_button.textContent = "削除する";
    complete_button.textContent = "完了する";
    taskItem.appendChild(task_element);
    taskItem.appendChild(delete_button);
    taskItem.appendChild(complete_button);
    taskContainer.appendChild(taskItem);
}