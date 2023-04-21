/* 1. Базові операції з DOM
отримай body елемент і виведи його в консоль;
отримай елемент id="title" і виведи його в консоль;
отримай елемент class="list" і виведи його в консоль;
отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
*/
// const title = document.querySelector("#title");
// const list = title.nextElementSibling;
// console.log(list);
// // який елемент є сусідом для h1? Знайти і виведи його в консоль;
// // по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titlesAll = list.querySelectorAll("h3");
// // для кожного елмента h3 додай class="active", який змінить колів заголовка на червоний колір
// titlesAll.forEach((title) => {
//   console.log(title);
//   console.log(title.textContent);
//   title.style.color = "red";
// });
// // знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const elemList = list.querySelector("[data-topic= 'navigation']");
// console.log(elemList);
// // додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// const backgrounColorElem = (elemList.style.backgroundColor = "yellow");
// // у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const paragraph = elemList.querySelector("p");
// paragraph.textContent = "Я змінив тут текст!";
// // створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const element = document.querySelector(`[data-topic = ${currentTopic}]`);
// console.log(element);
// // додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// element.style.backgroundColor = "aqua";
// // знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const classEl = document.querySelector(".completed");
// console.log(classEl);
// // видали елемент li в якому знаходиться заголовок, який має class="completed"
// classEl.parentNode.remove();
// // classEl.closest("li");
// // після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const titleHead = document.querySelector("h1");
// const text = document.createElement("p");
// text.textContent = "Об'єктна модель документа (Document Object Model)";
// titleHead.after(text);
// // додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const liElem = document.createElement("li");
// const headTitleElem = document.createElement("h3");
// const textElem = document.createElement("p");
// headTitleElem.textContent = "Властивість innerHTML";
// textElem.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// liElem.append(headTitleElem);
// liElem.append(textElem);

// const ulEl = document.querySelector(".list");
// // ulEl.append(liElem);
// // зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const markup = ` <li data-topic="props">
//         <h3>Властивість innerHTML</h3>
//         <p>
//           Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу
//         </p>
//       </li>`;
// ulEl.insertAdjacentHTML("beforeend", markup);
// // очисти список
// ulEl.innerHTML = "";

// 5. Вставте даний текст в html документ, а потім виділіть усі слова, які мають більше 8 символів у тексті абзацу (наприклад, жовтим фоном).
/* const text = `Об'єктна модель документа (Document Object Model) - незалежний від мови інтерфейс для роботи з HTML-документом. Містить набір властивостей і методів, що дозволяють шукати, створювати і видаляти елементи, реагувати на дії користувача і багато іншого. Тобто з'єднує сторінку з мовою програмування.`;
const newParagraph = document.createElement("p");

document.body.prepend(newParagraph);
const wordsArr = text.split(" ");
const newText = wordsArr
  .map((word) => {
    if (word.length > 8) {
      return `<span style='color:pink'>${word}</span>`;
    }
    return word;
  })
  .join(" ");
console.log(newText);
newParagraph.innerHTML = newText;
 */

/* 2. Вам надано кілька масивів з різними фруктами (назва масиві вказує на те, куди потрібно помістити елементи відносно ul). Створи html-елемент списку і додай його у розмітку. Попрактикуйся з методами append, prepend, after, before заповнивши ними список елементами з масивів. Для зручності створи допоміжну функцію elementsOfIngridients, яка повертатиме масив елементів (масив з лішками). */
// const appendFruitList = ["apple🍎", "banana🍌"];
// const prependFruitList = ["grapes🍇", "orange🍊"];
// const beforeFruitList = ["strawberry🍓", "cherry🍒"];
// const afterFruitList = ["peach🍑", "kiwi🥝"];

// const elementsOfIngridients = (fruitsList) => {
//   const newEl = fruitsList.map((fruit) => {
//     console.log(fruit);
//     const list = document.createElement("li");
//     list.textContent = fruit;
//     console.log(list);
//     return list;
//   });
//   return newEl;
// };
// const ulElem = document.createElement("ul");
// document.body.prepend(ulElem);
// ulElem.append(...elementsOfIngridients(appendFruitList));
// ulElem.prepend(...elementsOfIngridients(prependFruitList));
// ulElem.after(...elementsOfIngridients(afterFruitList));
// ulElem.before(...elementsOfIngridients(beforeFruitList));

// ulElem.firstElementChild.remove();
// ulElem.lastElementChild.remove();

// ulElem.innerHTML = "";

// elementsOfIngridients(appendFruitList);
// elementsOfIngridients(prependFruitList);
// elementsOfIngridients(afterFruitList);
// elementsOfIngridients(beforeFruitList);

/* 7. 
***Створи HTML список фільмів на основі масиву під назвою films. 

***Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. 
***Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). 
***Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. */
const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(films) {
  const markup = films.map(({ title, id, imgUrl }) => {
    return `<li data-id="${id}">
       <img src="${imgUrl}" alt="${title}" />
       <p>${title}</p>
    </li>`;
  });
  return markup;
}
// console.log(createMarkup(films));
const ulFilms = document.createElement("ul");

ulFilms.insertAdjacentHTML("afterbegin", createMarkup(films));
document.body.prepend(ulFilms);

const liSearch = document.querySelectorAll("[data-id]");
console.log(liSearch);
liSearch.forEach((li) => {
  if (watchedFilms.includes(li.dataset.id)) {
    li.style.opacity = 0.5;
  }
});
