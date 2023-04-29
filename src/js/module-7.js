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
// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll(".btn");

// // Add click event listener to each button

// function appendCharacter(character) {
//   display.value += character;
// }
// function clearDisplay() {
//   display.value = "";
// }
// function deleteCharacter() {
//   display.value = display.value.slice(0, -1);
// }
// function calculate() {
//   display.value = eval(display.value);
// }

// for (const button of buttons) {
//   button.addEventListener("click", (e) => {
//     const type = button.dataset.type;
//     const value = button.dataset.value;
//     switch (type) {
//       case "number":
//         appendCharacter(value);
//         break;
//       case "operator":
//         appendCharacter(value);
//         break;
//       case "clear":
//         clearDisplay(value);
//         break;
//       case "delete":
//         deleteCharacter(value);
//         break;
//       case "equal":
//         calculate(value);
//         break;
//     }
//   });
// }
/* ================PRACTICE===================== */
/* Створи функціонал пошуку фільма за його назвою.

Є масив об'єктів, де кожен об'єкт це фільм з своїм набором значень.
Створи функцію handleInput, яка буде викликатися кожного разу коли користувач вводить щось в інпут.
Необхідно застосувати прийом Debounce на обробнику події, щоб запускати функцію handleInput не одразу, а через 300мс після того, як користувач перестав вводити текст. Використовуй lodash.debounce.
Якщо користувач повністю очищає поле пошуку, то розмітка списку фільмів або інформації про фільм зникає.
Якщо у масиві фільмів знайшлося більше одного фільма, під тестовим полем відображається список знайдених фільмів. Кожен елемент списку складається з постера та назви фільма. */
{
  /* <li>
  <img src="posterURL" alt="Harry Potter" />
  <p class="movieName">Harry Potter</p>
</li> */
}
/* Якщо результат запиту - це масив з одним фільмом, в інтерфейсі відображається розмітка картки з даними про фільм: постер, назва, жанр, рейтинг, короткий опис. */
{
  /* <li>
  <div class="previewCard">
    <img src="posterURL" alt="Harry Potter" />
    <p class="movieName">Harry Potter</p>
  </div>
  <p class="movieGenre"><b>Genre: </b>comedy</p>
  <p class="movieRationg"><b>Rate: </b>8.5</p>
  <p class="movieDescription"><b>Description: </b>...</p>
</li> */
}
/* Якщо фільма не було знайдено у масиві, то розмітка списку фільмів або інформації про фільм зникає і показується повідомлення в errorTextRef про те що ""Oops, there is no movie with that name"" */
// const movies = [
//   {
//     title: "The Shawshank Redemption",
//     poster:
//       "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg",
//     genre: "Drama",
//     description:
//       "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
//   },
//   {
//     title: "The Godfather",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//     genre: "Crime",
//     description:
//       "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
//   },
//   {
//     title: "The Dark Knight",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
//     genre: "Action",
//     description:
//       "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//   },
//   {
//     title: "Pulp Fiction",
//     poster: "https://www.miramax.com/assets/Pulp-Fiction1.png",
//     genre: "Crime",
//     description:
//       "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
//   },
//   {
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
//     genre: "Fantasy",
//     description:
//       "A meek hobbit of the Shire and eight companions set out on a journey to Mount Doom to destroy the One Ring and the dark lord Sauron.",
//   },
//   {
//     title: "Forrest Gump",
//     poster:
//       "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a936773f0c801c5bc31f5e245584e8c4ab13972101086efb347d5f94d10430e6._RI_V_TTW_.jpg",
//     genre: "Drama",
//     description:
//       "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
//   },
//   {
//     title: "Avatar",
//     poster:
//       "https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg",
//     genre: "Adventure",
//     description:
//       "After a fateful decision to remain in avatar form, soldier Jake Sully takes on a mission to protect the Na'vi people from those who want to profit from Earth. Now Jake is the leader of this people. Therefore, when invaders invade Pandora, he will be ready to fight them off with his beloved Neytiri.",
//   },
// ];
// const refs = {
//   searchInputRef: document.querySelector("#search-box"),
//   errorTextRef: document.querySelector(".output-error"),
//   listRef: document.querySelector(".movies-list"),
// };
// const { searchInputRef, errorTextRef, listRef } = refs;

// function handleInput(e) {
//   const value = e.target.value.toLowerCase();
//   console.log(value);
//   if (value === "") {
//     clearContent();
//     return;
//   }
//   const movieList = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(value)
//   );

//   if (movieList.length > 1) {
//     clearContent();
//     const markupList = createMoviesList(movieList);
//     listRef.insertAdjacentHTML("beforeend", markupList);
//   } else if (movieList.length === 1) {
//     clearContent();
//     const markupCard = createMovieCard(movieList);
//     listRef.insertAdjacentHTML("beforeend", markupCard);
//   } else {
//     clearContent();
//     errorTextRef.textContent = "Oops, there is no movie with that name";
//   }
// }
// function clearContent() {
//   listRef.innerHTML = "";
//   errorTextRef.textContent = "";
// }
// function createMoviesList(data) {
//   return data
//     .map(({ poster, title }) => {
//       return `<li>
//       <img src="${poster}" alt="${title}" />
//       <p class="movieName">${title}</p>
//     </li>`;
//     })
//     .join("");
// }

// function createMovieCard(data) {
//   return data
//     .map(({ title, poster, description, genre }) => {
//       return `<li>
//   <div class="previewCard">
//     <img src="${poster}" alt="${title}" />
//     <p class="movieName">${title}</p>
//   </div>
//   <p class="movieGenre"><b>Genre: </b>${genre}</p>
//    <p class="movieDescription"><b>Description: </b>${description}</p>
// </li> `;
//     })
//     .join("");
// }
// searchInputRef.addEventListener("input", _.debounce(handleInput, 300));
/* 
Використовуючи поширення подій, напиши скрипт, який при кліку по кнопці remove-button буде видаляти елемент зі списку. */

// const list = document.querySelector(".list");

// list.addEventListener("click", closeItem);
// function closeItem(e) {
//   if (e.target.nodeName === "BUTTON") {
//     const liEle = e.target.closest("li");
//     liEle.remove();
//   }
// }

// При кліку на певну дату у календарі, вішай клас active на обрану дату. Якщо раптом захотілось обрати іншу дату, не проблема, просто видали всі вже існуючі класи active зі сторінки і додай новий клас active на нову дату.

// const table = document.querySelector(".calendar");
// table.addEventListener("click", handleClick);
// function handleClick(e) {
//   if (e.target.nodeName === "TD") {
//     if (e.target.textContent === "") return;
//     const activeClass = table.querySelectorAll(".active");
//     activeClass.forEach((activeEl) => activeEl.classList.remove("active"));

//     e.target.classList.add("active");
//   }
// }

/* При відправці форми записуй дані з інпутів у об'єкт під назвою formData і роби перевірку, якщо інпут емейла чи пароля був не заповнений, то вішай клас error на emailError і passwordError відповіно. Якщо ж все було заповнено, то видаляй ці класи. */
/* Використовуй html з файлу form.html. */

// const form = document.querySelector("form");
// const emailError = document.querySelector(".field.email");
// const passwordError = document.querySelector(".field.password");
// form.addEventListener("submit", onSubmit);
// function onSubmit(e) {
//   e.preventDefault();

/*  1 version */
// const result = {};
// const email = e.currentTarget.elements.email.value;
// const password = e.currentTarget.elements.password.value;
// if (!email) {
//   emailError.classList.add("error");
// } else {
//   emailError.classList.remove("error");
// }
// if (!password) {
//   passwordError.classList.add("error");
// } else {
//   passwordError.classList.remove("error");
// }
// if (email && password) {
//   result.email = email;
//   result.password = password;
//   console.log(result);
// }

/* 2 version */
//   const formData = [...e.currentTarget.elements].reduce((acc, elem) => {
//     if (elem.name) acc[elem.name] = elem.value;
//     return acc;
//   }, {});

//   !formData.email
//     ? emailError.classList.add("error")
//     : emailError.classList.remove("error");

//   !formData.password
//     ? passwordError.classList.add("error")
//     : passwordError.classList.remove("error");
//   console.log(formData);
// }

/* 
Напиши скрипт, який дозволить обирати бажану сторінку на сайті. Є список з класом pagination, на який потрібно повісити слухача подій "click". У списку є 3 типи кнопок, на які може нажати користувач: */
/* data-type="prev" - повертається до попередньої сторінки, якшо сторінка і так перша, то кнопка не активна.
data-type="page" - переходить до тієї сторінки на яку було нажато ("data-page="3"" до прикладу)
data-type="next" - переходить до наступної сторінки, якшо сторінка остання, то кнопка не активна.
Відповідно до типу кнопки виконуй ту чи іншу дію, можеш створити 3 допоміжних функції по типу: handleNext, handlePrev, handleClick

Створи змінну, яка буде слідкувати, яка сторінка є поточною.
 На поточну сторінку вішай клас active, якшо було перейдено до наступної чи попередньої сторінки чи до будь-якої іншої, то знімай клас active і вішай його на актуальний номер сторінки. */
// const pagination = document.querySelector("ul");
// const allPage = document.querySelectorAll("[data-page]");
// let currentPage = 1;
// pagination.addEventListener("click", (e) => {
//   const type = e.target.dataset.type;
//   switch (type) {
//     case "page":
//       handleClick(e);
//       break;

//     case "next":
//       handleNext();
//       break;

//     case "prev":
//       handlePrev();
//       break;

//     default:
//       break;
//   }
// });
// function handleNext() {
//   if (allPage.length <= currentPage) return;
//   currentPage += 1;
//   updateActivePage();
// }
// function handlePrev() {
//   if (currentPage <= 1) return;
//   currentPage--;
//   updateActivePage();
// }
// function handleClick(e) {
//   currentPage = +e.target.dataset.page;
//   updateActivePage();
// }

// function updateActivePage() {
//   const listActive = pagination.querySelectorAll(".active");
//   listActive.forEach((actveEl) => actveEl.classList.remove("active"));
//   const page = document.querySelector(`[data-page='${currentPage}']`);
//   page.classList.add("active");
// }

/*  Зарендери розмітку піц у список. Використовуй шаблон карточки піци, який наведений нижче. У кожної піци є своя категорія, тому зроби масив категорій, які є унікальними на основі масиву об'єктів піц і зарендери категорії у список контейнера categories, просто огорнувши назву категорії у елемент списку. Тепер ти можеш додати динаміку і зробити фільтр по категоріях, показуй ті піци, які співпали з обраною категорією. */

const pizzas = [
  {
    id: 0,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg',
    title: 'Pepperoni Fresh with pepper',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 80.3,
    category: 'Meat',
    rating: 4,
  },
  {
    id: 1,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg',
    title: 'Cheese',
    types: ['thin'],
    sizes: [26, 40],
    price: 24.5,
    category: 'Vegetarian',
    rating: 6,
  },
  {
    id: 2,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg',
    title: 'Barbecue chicken',
    types: ['thin'],
    sizes: [26, 40],
    price: 29.5,
    category: 'Grill',
    rating: 4,
  },
  {
    id: 3,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
    title: 'Sweet and sour chicken',
    types: ['thin'],
    sizes: [26, 30, 40],
    price: 27.5,
    category: 'Meat',
    rating: 2,
  },
  {
    id: 4,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
    title: 'Cheeseburger pizza',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 41.5,
    category: 'Grill',
    rating: 8,
  },
  {
    id: 5,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg',
    title: 'Crazy pepperoni',
    types: ['thin'],
    sizes: [30, 40],
    price: 58,
    category: 'Meat',
    rating: 2,
  },
  {
    id: 6,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg',
    title: 'Pepperoni',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 67.5,
    category: 'Meat',
    rating: 9,
  },
  {
    id: 7,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
    title: 'Margarita',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 45,
    category: 'Vegetarian',
    rating: 10,
  },
  {
    id: 8,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg',
    title: 'Four seasons',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 39.5,
    category: 'Meat',
    rating: 10,
  },
  {
    id: 9,
    imageUrl:
      'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg',
    title: 'Vegetables and mushrooms 🌱',
    types: ['thin', 'traditional'],
    sizes: [26, 30, 40],
    price: 28.5,
    category: 'Vegetarian',
    rating: 7,
  },
];

const pizzaList = document.querySelector('.cards-list');
function createMarkup(data) {
  return data
    .map(({ id, title, imageUrl }) => {
      return `<li class="card" id="${id}">
  <div class="card__image">
    <img src="${imageUrl}" alt="${title}" />
  </div>
  <div class="card__info">
    <div class="car__info--title">
      <h3>${title}</h3>
    </div>
    <div class="card__info--button">
      <div data-heart>&#x2764;</div>
    </div>
  </div>
</li>`;
    })
    .join('');
}
pizzaList.insertAdjacentHTML('beforeend', createMarkup(pizzas));
const cardList = document.querySelector('.categories>ul');
const categories = pizzas.map(({ category }) => category);
const uniqueCategories = [...new Set(categories)];
const categoriesItemMarkup = uniqueCategories
  .map(category => `<li>${category}</li>`)
  .join('');
cardList.insertAdjacentHTML('afterbegin', categoriesItemMarkup);
cardList.addEventListener('click', filterPizza);
function filterPizza(e) {
  if (e.target.nodeName === 'LI') {
    const categoryName = e.target.textContent;
    const filterArrPizza = pizzas.filter(
      pizza => pizza.category === categoryName
    );
    pizzaList.innerHTML = '';
    pizzaList.insertAdjacentHTML('beforeend', createMarkup(filterArrPizza));
  }
}
