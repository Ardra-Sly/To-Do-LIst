const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'X';
  removeBtn.classList.add('remove');
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggling when deleting
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
