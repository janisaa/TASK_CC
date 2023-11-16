document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const addTaskForm = document.getElementById('task-form');
    const addTaskContainer = document.getElementById('add-task');

    addTaskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskName = document.getElementById('task-name').value;
        const deadline = document.getElementById('deadline').value;

        if (taskName && deadline) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${taskName}</span>
                <span>${deadline}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;

            taskList.appendChild(listItem);
            addTaskForm.reset();
        }
    });

    window.deleteTask = function (button) {
        const listItem = button.parentNode;
        taskList.removeChild(listItem);
    };

    // Toggle between task list and add task form
    document.querySelectorAll('nav a').forEach(function (navLink) {
        navLink.addEventListener('click', function (e) {
            e.preventDefault();
            if (navLink.getAttribute('href') === '#tasks') {
                addTaskContainer.style.display = 'none';
                taskList.style.display = 'block';
            } else {
                addTaskContainer.style.display = 'block';
                taskList.style.display = 'none';
            }
        });
    });
});
