function addTask() {
    let text = document.getElementById("taskInput").value;
    if (!text.trim()) return;

    let li = document.createElement("li");
    li.textContent = text;

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

/*for ionic

async function addTask() {
    let input = document.getElementById("taskInput");
    let real = await input.getInputElement();
    let text = real.value;

    if (!text.trim()) return;

    let li = document.createElement("ion-item");
    li.textContent = text;

    document.getElementById("taskList").appendChild(li);
    real.value = "";
}
*/