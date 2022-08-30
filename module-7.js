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
