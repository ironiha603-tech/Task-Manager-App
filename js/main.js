import { settingData } from "./task.js";
import { onAddTask, displayTask } from "./ui.js";

function main(){
    onAddTask((title) => {
        const newTask = settingData(title, false);
        displayTask(newTask);
    });
}

main();