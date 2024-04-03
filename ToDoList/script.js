const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const details = document.getElementById('task-details').value;
    addTask(title, details);
    todoForm.reset();
});

function addTask(title, details) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <input type="text" value="${title}" readonly>
        <input type="text" value="${details}" readonly>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
        <form class="edit-form">
            <input type="text" class="edit-title">
            <input type="text" class="edit-details">
            <button type="submit" class="save-btn">Save</button>
        </form>
    `;
    todoList.appendChild(li);

    const editBtn = li.querySelector('.edit-btn');
    const deleteBtn = li.querySelector('.delete-btn');
    const editForm = li.querySelector('.edit-form');

    editBtn.addEventListener('click', function() {
        editForm.style.display = 'block';
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newTitle = editForm.querySelector('.edit-title').value;
        const newDetails = editForm.querySelector('.edit-details').value;
        li.querySelector('input[type="text"]').value = newTitle;
        li.querySelector('input[type="text"]:nth-child(2)').value = newDetails;
        editForm.style.display = 'none';
    });
}
