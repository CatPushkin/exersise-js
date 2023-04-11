/* const bestBts = {
  count: 7,
  members: ["Joongook", "Jimin", "Jin", "RM", "Suga", "J - Hope", "V"],
};
console.log(bestBts);
 */

/* const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(key);
}

console.log(values);
 */

/* const apartment = {
  descr: 56,
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);
let totalSalary = 0;
for (const value of values) {
  totalSalary += value;
}

console.log(values);
console.log(totalSalary);
 */

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (let color of colors) {
  console.log(color);
  if (color.hex) {
    hexColors.push(color.hex);
  }
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors); */

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];
let allAuthors = [];
for (const book of books) {
  allAuthors.push(book.author);
}
console.log(allAuthors); */

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
function getProductPrice(productName) {
  for (const product of products) {
    console.log(product);
    console.log(productName === product.name);
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
}

// getProductPrice("Droid");
console.log(getProductPrice("Scanner")); */

/* const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  let newArray = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      newArray.push(product[propName]);
    }
  }
  return newArray;

  // Change code above this line
}
console.log(getAllPropValues("name")); */
/* 
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      if (potionName === potions[i]) {
        potions.splice([i], 1);
      }
    }

    // Change code above this line
  },
};
 */
/* 
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  //   addPotion(newPotion) {
  //     if (this.potions.includes(newPotion)) {
  //       return `Error! Potion ${newPotion} is already in your inventory!`;
  //     }

  //     this.potions.push(newPotion);
  //   },
  removePotion(potionName) {
    for (let potion of this.potions) {
      console.log(potion);
    }
  },
  //   updatePotionName(oldName, newName) {
  //     const potionIndex = this.potions.indexOf(oldName);

  //     if (potionIndex === -1) {
  //       return `Potion ${oldName} is not in inventory!`;
  //     }

  //     this.potions.splice(potionIndex, 1, newName);
  //   },

  // Change code above this line
};
 */

/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  //   getPotions() {
  //     return this.potions;
  //   },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      console.log(potions);
      //   if (potion === newPotion) {
      //     return `Error! Potion ${newPotion} is already in your inventory!`;
      //   }

      //   this.potions.push(newPotion);
    }
  },
}; */
/* const potions = [
  { name: "Speed potion", price: 460 },
  { name: "Dragon breath", price: 780 },
  { name: "Stone skin", price: 520 },
];
for (const potion of potions) {
  console.log(potion);
}
 */

/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (let potion of this.potions) {
      if (potion === newPotion) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }

      this.potions.push(newPotion);
    }
  },
  removePotion(potionName) {
    for (let potion of this.potions) {
      const potionIndex = this.potions.indexOf(potionName);

      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }

      this.potions.splice(potionIndex, 1);
    }
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (oldName === potion.name) {
        let posionIndex = potion.indexOf(oldName);
        potion.splice(posionIndex, 1, newName);
      }
    }
  },
  // Change code above this line
}; */
/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return Object.values(this.potions);
  },
  addPotion(newPotion) {
    const potions = this.potions;
    const potionsNames = [];
    for (const potion of potions) {
      potionsNames.push(potion.name);
      if (potionsNames.includes(newPotion.name)) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    potions.push(newPotion);
  },
  removePotion(potionName) {
    const potions = this.potions;
    const potionsNames = [];
    for (const potion of potions) {
      potionsNames.push(potion.name);
    }
    const potionIndex = potionsNames.indexOf(potionName);
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
    potions.splice(potionIndex, 1);

    const potionIndex = this.potions.indexOf(potionName);
    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potions = this.potions;
    for (const potion in potions) {
      if (potions[potion].name === oldName) {
        return (potions[potion].name = newName);
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};
 */
/* ----------------LESSON-1------------------ */

/* 2. Практика базових дій над об'єктом
Створи 2 окремі змінні firstName і lastName і задопомогою promt попроси користувача ввести дані.
Зміни значення властивості firstName на якесь інше
Створи об'єкт user і занеси в нього дані які ти отримав у користувача, після цієї дії в об'єкті user має бути 2 властивості.
Виедети значення властивості lastName у консоль 2 способами.
Створи змінну const login = test@gmail.com
Створи змінну const password = test123
Створи властивість auth, її значенням має бути об'єкт з 2 властивостями login i password. Скоритайся короткими властивостями
Виедети значення властивості auth у консоль.
Створи у об'єкті user 2 методи: showUser() - який виводить у консоль поточний об'єкт showFullName()- який виводить у консоль повне ім'я користувача */
/* const firstName = prompt("Input your name");
const lastName = prompt("Input your surname");
const user = {
  firstName,
  lastName,
  showUser() {
    console.log(this);
    console.log(user);
  },
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
user.firstName = "Liubov";
// user["firstName"] = "Liubov";

const login = "test@gmail.com";
const password = "test123";
user.auth = {
  login,
  password,
};
// console.log(user);
// console.log(user.auth);
user.showUser();
user.showFullName(); */

// Напишіть функцію isBookAlreadyRead для відображення статусу читання (тобто відображення назви книги, імені автора та статусу читання) наступних книг.Наприклад "Already read " + "book" by author або "You still need to read " + "book" by author
// const library = [
//   {
//     title: "Bill Gates",
//     author: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     title: "Steve Jobs",
//     author: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     author: "Suzanne Collins",
//     readingStatus: false,
//   },
// ];

// function isBookAlreadyRead(books) {
//   for (const book of books) {
//     /* if (book.readingStatus) {
//       console.log(`Already read ${book.title}  by author ${book.author}`);
//       continue;
//     }
//     console.log(
//       `You still need to read ${book.title}  by author ${book.author}`
//     ); */

//     return book.readingStatus
//       ? console.log(`Already read ${book.title}  by author ${book.author}`)
//       : console.log(
//           `You still need to read ${book.title}  by author ${book.author}`
//         );
//   }
// }
// isBookAlreadyRead(library);

// 4. Обнови значення кожної властивості так, що перед сумою стояв знак долара.
// Виводь результат у форматі name: $salary

// const salaries = {
//   Jack: 24000,
//   Paul: 34000,
//   Monica: 55000,
// };

// 6. Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів та ім'я ключа. Повертає масив значень певного поля prop кожного об'єкта в масиві.
/* const users = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    age: 19,
    language: "Java",
  },
];

function getAllPropValues(arr, prop) {
  const result = [];
  for (const item of arr) {
    if (item[prop]) {
      result.push(item[prop]);
    }
  }
  return result;
}

console.log(getAllPropValues(users, "firstName")); // ["Mark", "Victoria", "Emma"]
console.log(getAllPropValues(users, "language")); // ["JavaScript", "Python", "Java"]
console.log(getAllPropValues(users, "hobby")); // [] */

// 7. Є масив data і в ньому дублюються елементи. Створи функцію sumUpTheInstances, яка буде повертати об'єкт, який буде місти властивість, де ключем буде унікальне значення, а значенням буде число, скільки раз воно повторювалось у масиві.
// Очікуваний результат: const obj = { apple: 2, banana: 2, avocado: 1, cherry:1 }

/* const products = ["apple", "apple", "banana", "banana", "avocado", "cherry"];

function umUpTheInstances(products) {
  // const obj = Object.create({});
  const result = {};
  for (const product of products) {
    // if (result[product]) {
    //   result[product] += 1;
    // } else {
    //   result[product] = 1;
    // }
    result[product] ? (result[product] += 1) : (result[product] = 1);
  }
  return result;
}

console.log(umUpTheInstances(products)); */

/* --------------- АВТОПЕРЕВІРКА---------------- */

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   // for (const key in object) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   // const keys = Object.keys(object);
//   // for (const key of keys) {
//   //   if (object.hasOwnProperty(key)) {
//   //     propCount += 1;
//   //   }
//   // }

//   let key = Object.keys(object).length;
//   propCount += key;
//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
/* function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const arrSalary = Object.values(salaries);
  for (const salary of arrSalary) {
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}
console.log(countTotalSalary({}));
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); */

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

/* const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  // console.log(color.hex);
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);
 */

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
/* 
function getProductPrice(productName) {
  // Change code below this line
  for (const product of products) {
    console.log(product);
    if (productName === product.name) {
      return product.price;
    }
  }
  return null;
  // Change code above this line
} */

/* function calculateTotalPrice(productName) {
  // Change code below this line
  for (const product of products) {
    if (productName === product.name) {
      // console.log(product.name);
      return product.price * product.quantity;
    }
  }
  return 0;
  // Change code above this line
} */

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
// console.log(calculateTotalPrice("Engine"));
