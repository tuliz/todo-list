let tasks = [];
if(JSON.parse(localStorage.getItem("tasks")))
tasks = JSON.parse(localStorage.getItem("tasks"));

if(tasks.length > 0){
    let p;
    let textNode;
    let deleteBtn;
    const div = document.getElementById("tasksContainer");
    tasks.forEach((task, index) => {
        p = document.createElement("p");
        textNode = document.createTextNode(task);
        p.appendChild(textNode);

        deleteBtn = document.createElement("button");
        deleteBtn.className = "deleteBtn";
        deleteBtn.id = index;
        deleteBtn.innerHTML = "Delete";

        taskContainer = document.createElement("div");
        taskContainer.className = "taskContainer";

        taskContainer.appendChild(p);
        taskContainer.appendChild(deleteBtn);

        div.appendChild(taskContainer);

    });
}


document.getElementById("addBtn").addEventListener("click", ()=>{
    const task = document.getElementById("task").value;
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    location.reload();
});

tasks.forEach((task, index, arr) =>{
    document.getElementsByClassName("deleteBtn")[index].addEventListener("click", (e)=>{
        if(index == e.target.id){
            arr.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(arr));
            location.reload();
        }
    })
})