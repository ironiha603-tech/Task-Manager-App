const NAME = "tasks";

export function setData(array){
    const data = JSON.stringify(array);
    localStorage.setItem(NAME, data);
}

export function removeData(id){
    const savedData = localStorage.getItem(NAME);
    if (savedData){
        const tasks = JSON.parse(savedData);
        const updatedTasks = tasks.filter(task => task.id !== id);
        setData(updatedTasks);
    }
}

export function removeAllData(){
    localStorage.clear();
}