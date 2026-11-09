import { removeData, setData } from "./storage.js";

const task = []
let countId = 0;

export function initTasks(savedTasks) {
    if (savedTasks && savedTasks.length > 0) {
        const maxId = Math.max(...savedTasks.map(t => t.id));
        countId = maxId + 1;
        task.push(...savedTasks);
    }
}
export function settingData(title){
    const obj = new Object();
    obj.id = countId;
    countId += 1;
    obj.title = title;
    task.push(obj);
    setData(task);
    return obj;
}

export function deleteData(id){
    for (let i = 0; i < task.length; i++){
        if (task[i].id == id){
            task.splice(i, 1);
            removeData(id);
            break;
        }
    }
}

export function resetTasks(){
    task.length = 0;
    countId = 0;
}