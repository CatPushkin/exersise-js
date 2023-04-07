// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price`;

//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50);

// function isAdult(age) {
//   // Change code below this line
//   const passed = 18;

//   // Change code above this line
//   return passed;
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if ((ordered === 0)) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }
// const totalSpent = 135789;
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (50000 <= totalSpent) {
//     discount === GOLD_DISCOUNT;
//   } else if (50000 > totalSpent && 20000 <= totalSpent) {
//     discount === SILVER_DISCOUNT;
//   } else if (5000 >= totalSpent && 2000 < totalSpent) {
//     discount === BRONZE_DISCOUNT;
//   } else {
//     discount === BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount);
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Australia":
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }
/* ------------------  leson 1   -------------------------  */
// 1. Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.
// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

/* function timeConvertor(number) {
  const hours = Math.floor(number / 60);
  const minutes = number % 60;
  const doubleDigitHours = String(hours).padStart(2, "0");
  const doubleDigitMinutes = String(minutes).padStart(2, "0");
  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}
console.log(timeConvertor("70"));
console.log(timeConvertor("450"));
console.log(timeConvertor("1441")); */

// 2. Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;
/* 
function calculateBMI(weight, height) {
  const bmi = (
    Number.parseFloat(weight) /
    Number.parseFloat(height) ** 2
  ).toFixed(2);
  return bmi;
}

console.log(calculateBMI("88,3", "1.75")); // 28.7 */

// 3. Перше століття охоплює період з 1-го по 100-й рік включно, друге - з 101-го по 200-й рік включно і т.д. За заданим роком повернути століття, в якому він знаходиться.
/* function centuryFromYear(year) {
  let century = year / 100;
  //   console.log(century);
  return century % 100 === 0 ? (century += 1) : Math.ceil(century);
  //   if (century % 100 === 0) {
  //     console.log((century += 1));
  //     return century;
  //   } else {
  //     return Math.ceil(century);
  //   }
}
console.log(centuryFromYear(1705)); // 18
console.log(centuryFromYear(1900)); // 19
console.log(centuryFromYear(1601)); // 17
console.log(centuryFromYear(2000)); // 20
console.log(centuryFromYear(2023)); // 21 */

// 1. Перевірь чи param є рядком. Результатом виконання функції має бути true або false
/* function isString(param) {
  //   console.log(typeof param);
  //   let isString = typeof param;

  //   if (isString === string) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //   return isString === "string" ? true : false;

  return typeof param === "string";
}

console.log(isString("hello world"));
console.log(isString("undefined"));
console.log(isString([1, 2, 4, 0]));
console.log(isString({ course: "GoIT" }));
console.log(isString(+"5")); */

// 2. Напишіть функцію для перетворення імені в ініціали. Ви отримаєтеім'я з прізвищем розділені пробілом. В результаті це має виглядати так:
// `Sam Harris => S.H`
// `Patrick Feeney => P.F`
/* function abbrevName(name) {
  const fullName = name.split(" ");
  //   console.log(fullName);
  const firstName = fullName[0][0];
  const lastName = fullName[1][0];
  return `${firstName}.${lastName}.`;
}

console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feeney")); */

// 3. Напиши функцію protectEmail, щоб захистити свій емейл від неавторизованого користувача. Половина емейла (до @) повинна замінитися на три крапки.
// Input: robin_singh@example.com Expected result: robin...@example.com

/* function protectEmail(email) {
  const splitEmail = email.split("@");
  const fisrtPart = splitEmail[0];
  const visibleEmailLength = fisrtPart.length / 2;
  const visibleMail = fisrtPart.slice(0, visibleEmailLength);
  return `${visibleMail}...@${splitEmail[1]}`;
}

console.log(protectEmail("robin_singh@gmail.com"));
console.log(protectEmail("jimmyMc@gmail.com"));
console.log(protectEmail("spr@yahoo.com"));
 */

// 1. Напиши функцію, яка просить користувача ввести 2 числа і додає їх, результат вивести в алертом.
/* function calculateSum() {
  const number1 = prompt("Input first number");
  const number2 = prompt("Input second number");
  alert(Number(number1) + Number(number2));
}
calculateSum(); */

/* console.log(5 > 4); // true

console.log(10 >= "7"); // true

console.log("2" > "12"); // false ==> true порівняння за таблицею юнікода 1 < 2 в стрінгах первіряється перший символ 

console.log("2" < "12"); // true ==> false див. вище

console.log("4" == 4); // true

console.log("6" === 6); // false

console.log("false" === false); // false

console.log(1 == true); // true

console.log(1 === true); // false

console.log("0" == false); // true

console.log("0" === false); // false

console.log("Papaya" < "papaya"); // false ==> true велика літера по юнікоду йде попереду маленької літери тому P < p 

console.log("Papaya" === "papaya"); // false

console.log(undefined == null); // false ==> true  undefined приведеться до false , як і null

console.log(undefined === null); // false  null - задаємо ми і є пустота, undefined - не визначено

console.log(typeof null); // object

console.log(typeof NaN); //Number

console.log(typeof Infinity); // Number

console.log(typeof +"1"); // Number

console.log(typeof "undefined"); // string */
/* 
console.log(true && 3); // 3

console.log(false && 3); // false

console.log(true && 4 && "kiwi"); // "kiwi"

console.log(true && 0 && "kiwi"); //false , правильно але відповідь має бути 0

console.log(true && true); //true;

console.log(false && true); //false

console.log(true && false); //false

console.log(false && false); //false

console.log(true || true); //true

console.log(false || true); // true

console.log(true || false); // true

console.log(false || false); //false

console.log(true || 3); // true

console.log(true || 3 || 4); // true

console.log(true || false || 7); // true

console.log(null || 2 || undefined); //2

console.log((1 && null && 2) > 0); // false

console.log(null || (2 && 3) || 4); //3 */

/* ----------------------------------------------------------- */

/*  ---------------------- lesson-2  --------------------------*/
// 1. Напишіть функцію bmi, яка обчислює індекс маси тіла (bmi = weight / height ^ 2)
// якщо менше аніж 18.5 => "Недостатня вага"
// якщо менше або дорівнює 25.0 => "Норма"
// якщо менше або дорівнює 30.0 return => "Надмірна вага"
// якщо більше 30 return => "Ожиріння"

// function calculateBMI(weight, height) {
//   const bmi = (weight / height ** 2).toFixed(2);
//   console.log(bmi);
//   if (bmi < 18.5) {
//     return "Недостатня вага";
//   } else if (bmi >= 18.5 && bmi <= 25) {
//     return "Норма";
//   } else if (bmi > 25 && bmi <= 30) {
//     return "Надмірна вага";
//   } else {
//     return "Ожиріння";
//   }
// }
// console.log(calculateBMI(75, 173));
// console.log(calculateBMI(40, 178));
// console.log(calculateBMI(120, 158));

/* 2. Cтворити функцію, яка обчислюватиме потрібну кількість калорій на день, для тих, хто хоче набрати або скинути вагу.
Формула для розрахунку денної норми калорій: Для жінок: (10 × вага в кілограмах) + (6,25 × зріст в сантиметрах) − (5 × вік у роках) − 161 - (10 × (вага - бажана вага)). Для чоловіків: (10 × вага у кілограмах) + (6,25 × зріст в сантиметрах) − (5 × вік у роках) + 5 - (10 × (вага - бажана вага)). */

// function calculateDailyCalorieRate(weight, height, gender, age, desiredWeight) {
//   if (gender === "female") {
//     return (
//       10 * weight +
//       6.25 * height -
//       5 * age -
//       161 -
//       10 * (weight - desiredWeight)
//     );
//   }
//   return gender === "female"
//     ? 10 * weight +
//         6.25 * height -
//         5 * age -
//         161 -
//         10 * (weight - desiredWeight)
//     : 10 * weight + 6.25 * age + 5 - 10 * (weight - desiredWeight);
// }
// console.log(calculateDailyCalorieRate(55, 167, "female", "25", 52));
// console.log(calculateDailyCalorieRate(93, 180, "male", "34", 87));

/* 3. Напиши скрипт, який виконує наступний функціонал:
На рахунку користувача є 23580 кредитів, значення зберігається в змінній credits (створи і привласни). Користувач вирішує купити ремонтних дроїд, які коштують по 3000 кредитів за штуку. Ціна одного дроїда зберігається в змінній pricePerDroid (створи і привласни).

При відвідуванні сторінки, використовуючи prompt, необхідно запитати кількість дроїдів, які користувач хоче купити і зберегти в змінну.

Напиши скрипт який:

Якщо в prompt була натиснута кнопка Cancel, виводить в консоль повідомлення 'Скасовано користувачем!'.
В іншому випадку, розраховує загальну ціну замовлення і зберігає в змінній totalPrice.
Перевіряє чи зможе користувач оплатити замовлення:
якщо сума до оплати перевищує кількість кредитів на рахунку, виводь в консоль повідомлення 'Недостатньо коштів на рахунку!'.
в іншому випадку необхідно порахувати залишок кредитів на рахунку і вивести повідомлення 'Ви купили [число] дроїдів, на рахунку залишилося [число] кредитів.'. */
// const credits = 23500;
// const pricePerDroid = 3000;
// const numsOfDroids = prompt("Input nums of Droid do you want");
// if (numsOfDroids === null) {
//   console.log("Скасовано користувачем!");
// } else {
//   let totalPrice = numsOfDroids * pricePerDroid;
//   if (totalPrice > credits) {
//     console.log("Недостатньо коштів на рахунку!");
//   } else {
//     let restCredits = credits - totalPrice;
//     console.log(
//       `Ви купили ${numsOfDroids} дроїдів, на рахунку залишилося ${restCredits} кредитів.`
//     );
//   }
// }

/* 4. Напиши функцію, яка виконує арифметичні дії над двома числами. Використовуй switch */
// function evalNumbers(num1, num2, operation) {
//   switch (operation) {
//     case "add":
//       return num1 + num2;
//     case "subtract":
//       return num1 - num2;
//     case "multiply":
//       return num1 * num2;
//     case "divide":
//       return num1 / num2;
//     default:
//       return "Невідомий оператор";
//   }
// }

// console.log(evalNumbers(1, 2, "add")); // cума чисел = 3
// console.log(evalNumbers(2, 8, "subtract")); // різниця чисел = -6
// console.log(evalNumbers(2, 4, "multiply")); // добуток чисел = 8
// console.log(evalNumbers(28, 7, "divide")); // ділення чиел = 4

/* 1. Вивести числа у зворотньому порядку починаючи з 10, коли цикл дійде до нуля, показати повідомлення "Час вийшов" */

// for (let i = 10; i >= 0; i -= 1) {
//   if (i === 0) {
//     console.log("Час вийшов");
//     break;
//   }
//   console.log(i);
// }

/* 4. Порахуй скільки голосних букв у реченні. */
// function countVowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let totalVowel = 0;

//   for (let i = 0; i < str.length; i += 1) {
//     const letter = str[i].toLowerCase();

//     if (vowels.includes(letter)) {
//       totalVowel += 1;
//     }
//   }
//   return totalVowel;
// }
// console.log(countVowel("HELLO WORLD")); // 3
// console.log(countVowel("Junior Web Developer")); // 8
// console.log(countVowel("knowlage is a power")); // 7

/* HOMEWORK */

// 5. Напиши скрипт, який імітує авторизацію адміністратора в панелі управління.
// Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується login через prompt:

// Якщо відвідувач вводить "ADMIN", то prompt запитує password
// Якщо нічого не введено - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Користувача з таким логіном [введений логін] не існує"
// Пароль перевіряти так:

// Якщо введено пароль "jqueryismyjam", то вивести рядок "Привіт ADMIN!"
// Інакше виводити рядок "Невірний пароль"
// Якщо 3 рази поспіль було введено направильно пароль, виводчити повідомлення що "Ваш акаунт тимчасово заблокований!"
// const ADMIN_LOGIN = "ADMIN";
// const ADMIN_PASSWORD = "jqueryismyjam";

/* 2. Щоб людина заснула вона повинна порахувати до 100 овечок, але наші герої засинають швидше. Напиши цикл, який буде рахувати овеок до того моменту поки передане число не співпаде з числом, на якому герой засинає. На кожній ітерації виводь [число] sheep, якщо буде співпадіння то 😴💤 */
// function countSheep(number) {}
// console.log(countSheep(28));
// console.log(countSheep(13));

/* 3. Напишіть цикл for, який виконуватиме ітерацію від 0 до 15. Для кожної ітерації він перевірятиме, парне чи непарне поточне число, і виводитиме повідомлення на екран.
Зразок результату: "0 is even" "1 is odd" "2 is even" */