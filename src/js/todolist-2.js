/* Викоритовуй шаблон списку завдань з файлу todoList.html для створення функціоналу для списку завдань.
Використовуй поширення подій а також local storage, щоб при оновленні твої завдання залишалися на сторінці. Для цього використовуй допоміжну функцію setTasksOnLoad, яка буде отримувати далі з LS і додаватиме їх в html
При виклику функції addTask зберігай завдання local storage і додавай його у розмітку
При deleteTask знаходь завдання по тексту, та видаляй його і з local storage і з розмітки. */
const form = document.querySelector('form');
const input = document.querySelector('#input');
const ul = document.querySelector('#list');
const SAVED_KEY = 'tasksToDo';

// Function to create new task element, return LI element
const createNewTaskElement = value => {
  const todoMarkup = `
        <li>
          <input disabled value="${value}"/>
          <div>
            <button data-action="delete">Delete</button>
          </div>
        </li>
        `;

  return todoMarkup;
};
const tasksToDo = JSON.parse(localStorage.getItem(SAVED_KEY)) || [];
// Function to handle submit action, call addTask inside
function handleSubmit(e) {
  e.preventDefault();

  if (input.value === '') return;
  ul.insertAdjacentHTML('afterbegin', createNewTaskElement(input.value));

  tasksToDo.push(input.value);
  localStorage.setItem(SAVED_KEY, JSON.stringify(tasksToDo));

  e.currentTarget.reset();
}

// Function to add a task to the list (use createNewTaskElement) and add to LS

// Function to delete a task from the list and delete from LS
function deleteTask(e) {
  if (e.target.nodeName === 'BUTTON') {
    const toDoEl = e.target.closest('li');
    const toDoToRemove = toDoEl.querySelector('input').value;

    tasksToDo.splice(tasksToDo.indexOf(toDoToRemove), 1);
    localStorage.setItem(SAVED_KEY, JSON.stringify(tasksToDo));

    toDoEl.remove();
  }
}

// Function to get tasks from LS and set them into ul
function setTasksOnLoad() {
  const markUpNew = tasksToDo.map(task => createNewTaskElement(task)).join('');
  ul.insertAdjacentHTML('afterbegin', markUpNew);
}
setTasksOnLoad();
form.addEventListener('submit', handleSubmit);
ul.addEventListener('click', deleteTask);
