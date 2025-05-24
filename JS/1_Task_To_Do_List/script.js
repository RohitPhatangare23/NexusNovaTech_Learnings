// Load tasks from localStorage on page load
document.addEventListener('DOMContentLoaded', loadTodos);

// Function to add a new task
function addTodo() {
  const input = document.getElementById('todoInput');
  const todoText = input.value.trim();

  if (todoText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create a new todo object
  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false
  };

  // Store the task in localStorage
  let todos = getTodosFromLocalStorage();
  todos.push(todo);
  saveTodosToLocalStorage(todos);

  // Clear input field
  input.value = '';

  // Render the updated list
  renderTodos();
}

// Function to render todos in the UI
function renderTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  let todos = getTodosFromLocalStorage();

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    // Add completed class if the task is marked as done
    if (todo.completed) {
      li.classList.add('completed');
    }

    li.innerHTML = `
      <span>${todo.text}</span>
      <div>
        <button class="btn btn-sm btn-completed me-2" onclick="toggleComplete(${todo.id})">
          ${todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="btn btn-sm btn-delete" onclick="deleteTodo(${todo.id})">Delete</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}

// Function to delete a task
function deleteTodo(id) {
  let todos = getTodosFromLocalStorage();
  todos = todos.filter(todo => todo.id !== id);
  
  saveTodosToLocalStorage(todos);
  renderTodos();
}

// Function to toggle task completion
function toggleComplete(id) {
  let todos = getTodosFromLocalStorage();
  
  todos = todos.map(todo => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });

  saveTodosToLocalStorage(todos);
  renderTodos();
}

// Function to get todos from localStorage
function getTodosFromLocalStorage() {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

// Function to save todos to localStorage
function saveTodosToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to load todos from localStorage
function loadTodos() {
  renderTodos();
}
