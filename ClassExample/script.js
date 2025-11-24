function addTask() {
    let text = document.getElementById("taskInput").value;
    if (!text.trim()) return;

    let li = document.createElement("li");
    li.textContent = text;

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}
