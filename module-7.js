/* //  {d: 1,
// g:1,
// f:1 }

const str = 'dgfsklnwuhwncnuwevvwbwr';

//1. Розбити рядок на масив символів
//2. Перебрати массив та порахувати кількість символів(редьюс)

const result = str.split('').reduce((acc, element) => {
  if (acc.hasOwnProperty(element)) {
    acc[element] += 1;
  } else {
    acc[element] = 1;
  }
  return acc;
}, {});

console.log(result); */

// /////////////////////////////////////////////

/* const friends = [
  { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
  { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
  { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
  {
    name: "Oleksii",
    books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"],
    age: 26,
  },
];
 */
// 1 Создать функцию, которая принимает массив friends и возвращает строку с нужными именами
// 2 Создаем переменную, в которую запишем результат фильтрации массива
// 3 Перебрать переменную с массивом, в результате получить шаблонную строку для всех итераций в нужном формате (с помощью метода reduce)
// 4 Возвращаем данную строку

/**+tab  (js-docs)

/**
 * принимает массив и возвращает строку с нужными именами
//  * @param {Array} arr 
//  * @returns String
 */

/* function createString(arr) {
  const result = arr.filter((friend) => friend.books.includes("Harry Potter"));
  console.log(result);
  return result.reduce(
    (acc, elm, idx) => {
      return acc + `${idx + 1} ${elm.name}\n`;
    },
    result.length ? `Кількість юзерів ${result.length}:\n` : `Sorry`
  );
}

console.log(createString(friends)); */
/* ==============PRACTICE================ */
/* Color Palete. Динамічно відрендери 100 блоків div з класом item задопомогою функції createPaletteItems() і помісти всі ці блоки в colorPalette. Використовуй getRandomColor для назначення рандомного кольору item. При кліку на палетку кольорів зафарбовуй body у вибраний колір.
Викоритовуй шаблон акордеон меню з файлу palette.html */

// const colorPalette = document.querySelector(".color-palette");

// function selectColor() {}

// function createPaletteItems() {
//   let markup = "";
//   for (let i = 0; i < 100; i += 1) {
//     markup += `<div class='item' style='background-color:${getRandomColor()}'></div>`;
//   }
//   return markup;
// }
// colorPalette.insertAdjacentHTML("beforebegin", createPaletteItems());
// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, "0");
// }

/* Викоритовуй шаблон списку завдань з файлу todoList.html для створення функціоналу для списку завдань. Використовуй поширення подій. */
// const form = document.querySelector("form");
// const input = document.querySelector("#input");
// const ul = document.querySelector("#list");

// // Function to create new task element, return LI element
// const createNewTaskElement = (value) => {
//   const todoMarkup = `
//         <li>
//           <input disabled value="${value}"/>
//           <div>
//             <button data-action="edit">Edit</button>
//             <button data-action="delete">Delete</button>
//           </div>
//         </li>
//         `;

//   return todoMarkup;
// };

// // Function to handle submit action
// function handleSubmit(e) {
//   e.preventDefault();
//   if (input.value) {
//     addTask(input.value);
//     input.value = "";
//   }
// }

// // Function to add a task to the list (use createNewTaskElement)
// function addTask(value) {
//   const markup = createNewTaskElement(value);
//   ul.insertAdjacentHTML("afterbegin", markup);
// }

// // Function to delete a task from the list
// function deleteTask(e) {
//   if (e.target.dataset.action === "delete") {
//     const liEl = e.target.closest("li");
//     liEl.remove();
//   }
// }

// // Function to edit a task (toggle class active, if button EDIT has class active:
// // change button textContent to "Save", add class "active" for button
// // add class "active" for input, and remove "disabled" attribute
// // else do reverse actions
// function editTask(e) {
//   if (e.target.dataset.action === "edit") {
//     const liEl = e.target.closest("li");
//     const button = liEl.querySelector('li button[data-action="edit"]');
//     const input = liEl.querySelector("input");
//     button.classList.toggle("active");

//     if (button.classList.contains("active")) {
//       button.textContent = "Save";
//       input.classList.add("active");
//       input.removeAttribute("disabled");
//     } else {
//       button.textContent = "Edit";
//       input.classList.remove("active");
//       input.setAttribute("disabled", true);
//     }
//   }
// }

// form.addEventListener("submit", handleSubmit);
// ul.addEventListener("click", editTask);
// ul.addEventListener("click", deleteTask);
/* 
 Створи калькулятор використовуючи шаблон html з файлу calculator.html. У кожної кнопки є атрибути data-type i data-value. Повішай на кожну кнопку з колекції buttons обробник подій відповідно до її типу data-type. Вибористовуй switch оператор для додання відповідної функції, яка повинна виконуватися при кліку. Для спрощення задачі, цей калькулятор зможе обчислювати вираз лише з 2 чисел.
appendCharacter() - до значення з інпута додає нові значення, формує вираз, результат якого будемо обчислювати далі, конкатенує значення між собою (data-type = number і data-type = operator)
clearDisplay() - очищує значення інпута (data-type = clear)
deleteCharacter() - видаляє один символ з кінця (data-type = delete)
calculate() - рахує та відображає результат у інспуті (data-type = equal) */
const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");

// Add click event listener to each button

function appendCharacter(character) {
  display.value += character;
}
function clearDisplay() {
  display.value = "";
}
function deleteCharacter() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  display.value = eval(display.value);
}

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const type = button.dataset.type;
    const value = button.dataset.value;
    switch (type) {
      case "number":
        appendCharacter(value);
        break;
      case "operator":
        appendCharacter(value);
        break;
      case "clear":
        clearDisplay(value);
        break;
      case "delete":
        deleteCharacter(value);
        break;
      case "equal":
        calculate(value);
        break;
    }
  });
}
