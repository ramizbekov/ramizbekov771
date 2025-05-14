const button = document.getElementById("send");
const btn = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");
const body = document.querySelector("body")


btn.addEventListener("click", () => {
    if(document.body.classList.toggle("dark-mode")){
        btn.textContent = '☀️';
    }else{
        btn.textContent = '🌙';
    }
});


button.addEventListener("click", () => { 
    const li = document.createElement("li");
    li.className = "task-item";

    const ayub = document.createElement("span");
    ayub.textContent = input.value;

    const editBtn = document.createElement("button");
    editBtn.textContent = '🖊';
    editBtn.addEventListener("click", () => {
        const newText = prompt("Uzgartirish qiling:", ayub.textContent);
        if (newText) {
            ayub.textContent = newText;
        }
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣';
    taskList.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", ()=>{
        taskList.removeChild(li)
    })

    li.append(ayub, editBtn, deleteBtn);
    taskList.appendChild(li);
    input.value = '';
});
