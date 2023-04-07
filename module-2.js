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
