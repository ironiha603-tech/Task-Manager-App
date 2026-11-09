import { initTasks, settingData } from "./task.js";
import { onAddTask, displayTask, initDeleteAll } from "./ui.js";

function main(){
    const savedData = localStorage.getItem("tasks");
    if (savedData) {
        const tasks = JSON.parse(savedData);
        initTasks(tasks);
        tasks.forEach(task => {
            displayTask(task);
        });
    }

    onAddTask((title) => {
        const newTask = settingData(title, false);
        displayTask(newTask);
    });

    initDeleteAll();
}

main();