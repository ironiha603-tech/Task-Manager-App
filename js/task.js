//タスクを表すファイル
const task = []
let countId = 0;

export function settingData(title, isCompleted){
    const obj = new Object();
    obj.id = countId;
    countId += 1;
    obj.title = title;
    obj.isCompleted = isCompleted;
    task.push(obj);
    return obj;
}

export function deleteData(id){
    for (let i = 0; i < task.length; i++){
        if (task[i].id == id){
            task.splice(i, 1);
            break;
        }
    }
}