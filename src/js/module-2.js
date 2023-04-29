// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[length - 1];

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     length > message.maxLength
//       ? `${message.slice(0, maxLength)} + '...'`
//       : message;
//   /// Change code above this line
//   return result;
// }

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }
// const array = ["Polly", "Liuba", "tina", "george"];
// function getExtremeElements(array) {
//   // Change code below this line
//   const result = [];
//   result.push(array[0], array[array.length - 1]);

//   return result;
//   // Change code above this line
// }
// getExtremeElements();

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1);
// const lastThreeEls = fruits.slice(-3);
// console.log(nonExtremeEls);
// let total = 0;
// for (let i = 7 % 1; i <= 7; i += 1) {
//   // Change this line

//   total += i;
//   console.log(total);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   for (let value of order) {
//     total += value;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(order);

// const string = [2, 4, 68, 24, 90];
// function findLongestWord(string) {
//   // Change code below this line
//   let longestWord = string[0];
//   for (let word of string) {
//     console.log(word);
//   }

//   // Change code above this line
// }
// function findLongestWord(string) {
//   // Change code below this line
//   let longestWord = string.length[0];
//   for (let i = 0; i < string.length; index += 1) {
//     if (string.length[i] > string.length[0]) {
//       longestWord = string.length[i];
//     }
//   }

//   // Change code above this line
// }

// const string = "The quick brown fox jumped over the lazy dog";
// function findLongestWord(string) {
//   // Change code below this line

//   const words = string.split(" ");
//   let longestWord = words[0];
//   // for (let word of words) {
//   //   if (word.length > word.length[0]) {
//   //     longestWord = word;
//   //   }
//   //    return longestWord;
//   // }
//   for (let i = 0; i < words.length; index += 1) {
//     if (words.length[i] > words[0]) {
//       longestWord = words.length[i];
//     }
//     return longestWord;
//   }
//   // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line

//   const words = string.split(" ");
//   let longestWord = words[0];
//   for (let word of words) {
//     if (word.length > word.length[0]) {
//       longestWord = word;
//     }
//     return longestWord;
//   }
//   // for (let i = 0; i < words.length; index += 1) {
//   //   if (words.length[i] > words[0]) {
//   //     longestWord = words.length[i];
//   //   }
//   //   return longestWord;
//   // }
//   // Change code above this line
// }

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   for (let i = 0; i > value; i++) {
//     newArray.push(i);
//   }
//   return newArray;

//   // Change code above this line
// }

/* function includes(array, value) {
  // Change code below this line

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;

  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);
console.log(includes(["apple", "plum", "pear", "orange"], "plum")); */
/* -----------------------lesson-1---------------------------- */

// 4. Напишіть функцію, яка перевіряє екзамен у студентів. Перший вхідний масив містить правильні відповіді на іспиті, наприклад, ["a", "a", "b", "d"]. Другий масив називається "answers" і містить відповіді студента. Обидва масиви не порожні і мають однакову довжину. Поверніть оцінку для цього масиву відповідей, виводячи +4 за кожну правильну відповідь, -1 за кожну неправильну відповідь і +0 за кожну пропущену відповідь (порожній рядок). Якщо оцінка < 0, виведіть 0.

// function checkExam(answers, responses) {
//   let result = 0;
//   for (let i = 0; i < answers.length; i += 1) {
//     if (responses[i] === "") {
//       continue;
//     } else if (answers[i] === responses[i]) {
//       result += 4;
//     } else {
//       result -= 1;
//     }
//   }
//   return result < 0 ? 0 : result;
// }
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // → 6
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // → 7
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // → 16
// console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // → 0
/*  ------  HOMEWORK ---------*/
// 1. Виконай базові операції над масивом. Після кожної дії робити console.log щоб слідкувати як змінюється масив.
// Створіть масив products1 з елементами «apple», «orange» і «melon».
// Додайте «pear» до кінця.
// Виведіть у консоль довжина масиву
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Видаліть останній елемент та виведіть його в консоль.
// Вставте «cherry» та «lemon» на початок масиву.
// Замініть «lemon» на «grapes»
// Видаліть «orange» з масиву products1
// Об'єднайте масив products1 з масивом products2 = ["melon", "watermelon", "pineapple"];
// Видаліть дублікати з новоствореного масива (products3)
// Обріж новостворений масив без дублікатів (products3NoDubs) від першого до третього елемента
// Створіть новий масив products4 = ["grapes", "pineapple", "cherry"] і зробіть його копію у змінну products4Copy
// Чи рівні між собою products4 і products4Copy? Чому? Якщо додати новий елемент у products4 чи додасться він у products4Copy?

/* const products1 = ["apple", "orange", "melon"];
console.log(products1.push("pear"));
console.log(products1);
console.log(products1.length);
console.log(products1[0]);
console.log(products1[products1.length - 1]);
console.log(products1.shift());
console.log(products1);
console.log(products1.pop());
products1.unshift("cherry", "lemon");
console.log(products1);
const indexLemon = products1.indexOf("lemon");
products1.splice(indexLemon, 1, "grapes");
console.log(products1);
const indexOrange = products1.indexOf("orange");
products1.splice(indexOrange, 1);
console.log(products1);
const products2 = ["melon", "watermelon", "pineapple"];
const products3 = products1.concat(products2);
const products3NoDubs = Array.from(new Set(products3));
console.log(products3NoDubs);
console.log(products3NoDubs.splice(0, 3));
console.log(products3NoDubs);
const products4 = ["grapes", "pineapple", "cherry"];
const products4Copy = products4.slice();
console.log("products4:", products4, "products4Copy:", products4Copy);
console.log(products4 === products4Copy); */

// 2. Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.
/* function printContactsInfo(names, phones) {
  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]} - ${phonesArr[i]}`);
  }
}

console.log(
  printContactsInfo(
    "Jacob,William,Solomon,Artemis",
    "89001234567,89001112233,890055566377,890055566300"
  )
); */
// 3. Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і пробіли) і повертає найдовше слово в цьому рядку.
/* function findLongestWord(string) {
  const words = string.split(" ");
  //  let longestWord = "";
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
console.log(findLongestWord("Google do a roll")); // 'Google'
console.log(findLongestWord("May the force be with you")); // 'force' */

// 5. Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.
/* function formatString(str) {
  const strArr = str.split(" ");
  // const newStr = strArr.slice(1, strArr.length - 1);
  const deleteFirst = strArr.splice(0, 1);
  const deleteLast = strArr.splice(-1);

  return strArr;
}
console.log(formatString("   Welcome to the future   "));
console.log(formatString("Hello World"));
console.log(formatString("Knowlage is a power")); */

// 6. Напишіть код, який очищає масив від небажаних значень, таких як false undefined, пусті рядки, нуль, null.

// function filterArray(arr) {
//   let newArr = [];
//   for (const item of arr) {
//     if (item) {
//       newArr.push(item);
//     }
//   }
//   // const newArr = arr.filter(Boolean);
//   return newArr;
// }
// console.log(filterArray([0, 1, false, 2, undefined, "", 3, null])); // [1, 2, 3]
// console.log(filterArray([NaN, 0, 15, false, -22, "", undefined, 47, null])); // [15, -22, 47]

// 7. Напишіть код, який повертає новий масив без наданих значень.
// Очікуваний результат: [1, 2, 3, 1, 2] без 1 => [2, 3, 2]
/* function deleteSpecificCharacter(arr, charToDelete) {
  // const newArr = arr.filter((number) => number !== charToDelete);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === charToDelete) {
      let indexFind = arr.indexOf(arr[i]);
      arr.splice(indexFind, 1);
    }
  }
  return arr;
}
console.log(deleteSpecificCharacter([1, 2, 3, 1, 2], 1)); // [2, 3, 2]
console.log(deleteSpecificCharacter([5, 6, 2, 9, 2])); // [5, 6, 2, 9, 2]
console.log(deleteSpecificCharacter([4, 3, 2, 1, 0], 9)); // [4, 3, 2, 1, 0]
 */
// 8. Напишіть код, який поверне суму рядка
/* function digitSum(data) {
  let array = ("" + data).split("");
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    const number = +array[i];
    total += number;
  }

  return total;
}
console.log(digitSum(4367)); // 20
console.log(digitSum(56349)); // 27 */

/* -----------------lesson-2------------------- */

// Порахуй суму чисел, які були передані аргументом у вигляді набору значень
// Виклич функції для перевірки працездатності твоєї реалізації.
/* function countSum(...arrNumber) {
  // const arr = Array.from(arguments);
  let sum = 0;
  for (const arg of arrNumber) {
    sum = +arg;
  }
  return sum;
}
console.log(countSum(1, 2, 3, 4, 5, 6)); // 21
console.log(countSum(32, 8, 5, 6, 9)); // 60
 */

// 2. Напиши функцію consoleMessage, яка виводитиме у консоль повідомлення, яке було передане при виклику функції ту кількість раз, яку також передали аргументом при виклику. Якщо ж щось не передано, то число по дефолту має дорівнювати 10, а повідомлення має бути "Default message".
// Виклич функції для перевірки працездатності твоєї реалізації.

/* function consoleMessage(message = "Default message", count = 10) {
  for (let i = 0; i < count; i++) {
    console.log(message);
  }
}

console.log("До виклика consoleMessage"); // навіщо тут ця стрічкв?
console.log(consoleMessage("Hello world", 3));
console.log(consoleMessage("Java Script"));
console.log(consoleMessage(undefined, 5));
console.log("Після виклика consoleMessage"); // навіщо тут ця стрічкв? */

/* 4. Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив
logins. Логін, який додається повинен:

Проходити перевірку на довжину від 4 до 16-ти символів включно бути унікальним, тобто бути відсутнім в масиві logins Розбий завдання на підзадачі за допомогою функцій.

Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.

Напиши функцію addLogin(allLogins, login) яка:

Приймає новий логін і масив всіх логінів як параметри
Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid:
Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів.
Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique:
Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.

Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій - isLoginUnique і isLoginValid. */
/* const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const addLogin = function (logins, newLogin) {
  const array = [...logins];
  const isUnique = array.includes(newLogin);

  if (!isUnique) {
    if (newLogin.length >= 4 && newLogin.length <= 16) {
      array.push(newLogin);
      return "Логін успішно доданий!";
    }
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  return "Такий логін вже використовується!";
};
// Виклич функції для перевірки працездатності твоєї реалізації.
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути в */

// 5. Напишіть функції для роботи з колекцією todos(завдання/плани):
// showTodos() - повертає всю колекцію
// addTodo(todo) - додає завдання до кінця колекції
// removeTodo(todo) - видаляє завдання із колекції
// updateTodo(oldTodo, newTodo) – оновлює старий текст завдання на нове (повністю новий текст або ж була помилка в слові і тд)
// const todos = ["Прочитати конспект по модулю 2", "Зробити ДЗ"];
/**
 * повертає всю колекцію
 * @return array of Todos{array}
 */
// function showTodos() {
//   return todos;
// }

// function addTodo(toDo) {
//   todos.push(toDo);
//   return showTodos();
// }
// function removeTodo(toDoRemove) {
//   const indexRemove = todos.indexOf(toDoRemove);
//   todos.splice(indexRemove, 1);
//   return showTodos();
// }
// function updateTodo(oldToDo, newToDo) {
//   const indexToUpdate = todos.indexOf(oldToDo);
//   todos.splice(indexToUpdate, 1, newToDo);
//   return showTodos();
// }
// // Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(addTodo("Подивитися Майстер Шеф"));
// console.log(addTodo("Купити молоко"));

// console.log(
//   updateTodo("Подивитися Майстер Шеф", "Подивитися додатковий матеріал по JS")
// );

// console.log(removeTodo("Купити молоко"));

// Напишіть функцію createGroups, яка розбиває отриманий масив на групи з заданою довжиною і виводить бажану частину. (аналогія: пагінація на сторінці, на кожну сторінку показується певна кількість товарів, натискаючи на певну сторінку користувачеві показується обрана група товарів ).
// Вхідні дані: const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const per_page = 2; const page = 1; Очікуваний резульат: [1, 2]

// Вхідні дані: const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const per_page = 6; const page = 2; Очікуваний резульат: [7, 8, 9, 10]

// Вхідні дані: const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; const per_page = 4; const page = 3; Очікуваний резульат: [9, 10]

// function createGroups(data, per_page, page) {
//   return [...data].splice((page - 1) * per_page, per_page);
// }

// // Виклич функції для перевірки працездатності твоєї реалізації.
// console.log(createGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 1));
// console.log(createGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6, 2));
// console.log(createGroups([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 3));
