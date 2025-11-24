function addTask() {
    const input = document.getElementById('inputTask');
    const taskText = input.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    // Create a span for the text (so we can strikethrough only the text)
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;
    newTask.appendChild(textSpan);

    // Add Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);

    // Delete functionality
    deleteBtn.onclick = function(e) {
        e.stopPropagation();  // prevent triggering the click on li
        newTask.remove();
    };

    // This is the key: Toggle strikethrough only on the clicked task
    newTask.onclick = function(e) {
        if (e.target === deleteBtn) return;  // don't toggle when clicking Delete

        // Remove 'selected' class from all tasks first
        document.querySelectorAll('#taskList li').forEach(item => {
            item.classList.remove('selected');
        });

        // Add 'selected' class only to the clicked task
        newTask.classList.add('selected');
    };

    taskList.appendChild(newTask);
    input.value = "";
    input.focus();
}
