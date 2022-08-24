/* const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    names = Object.values(this.pizzas);
    console.log(names);
    if (names.includes(pizzaName)) {
      return onError;
    } else {
      return onSuccess;
    }
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
 */

/* const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students.filter(({ score }) => score >= HIGH_SCORE);
console.log(best);

const worst = students.filter(({ score }) => score < LOW_SCORE);
console.log(worst);

// В колбек-функції зручно деструктуризувати властивості об'єкта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); */

/* const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const option = colorPickerOptions.find(({ label }) => label === "blue");
console.log(option);
colorPickerOptions.find((option) => option.label === "pink");
const findColor = colorPickerOptions.find((option) => option.label === "white");
console.log(findColor); */

/* const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

// every поверне true тільки, якщо усіх фруктів буде більше 0 штук
const allAvailable = fruits.every(({ amount }) => amount > 0);
console.log(allAvailable);

// some поверне true, якщо хоча б одного фрукту буде більше 0 штук
const anyAvailable = fruits.some((fruits) => fruits.amount > 0);
 */

/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Пройдемо по всіх елементах колекції і додамо значення властивості tags
// до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// для збирання тегів з колекції
const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));
 */

/* const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAlphabeticalOrder); */

/* function changeEven(numbers, value) {
  // Change code below this line
  const newArray = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newArray.push(number + value);
    } else newArray.push(number);
  });

  return newArray;
  // Change code above this line
}

console.log(changeEven([1, 2, 3, 4, 5], 10));
 */

/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line
const planetsLengths = planets.map((planet) => planet.length);
console.log(planetsLengths);
 */
/*  const getUserNames = (users) => {
  const userNames = users.map((user) => user.name);
  // console.log(userNames);
  return userNames;
};
 */

/* const getUsersWithEyeColor = (users, color) => {
  const userByColor = users.filter((user) => user.eyeColor === color);
  console.log(userByColor);
  return userByColor;
}; */
/* const getFriends = (users) => {
  const allFriends = users.flatMap((user) => user.friends);
  console.log(allFriends);
  const filterFriends = allFriends.filter(
    (friend, index, array) => array.indexOf(friend) === index
  );
  console.log(filterFriends);
}; */
/* const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
 */
/* const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => b.friends.length - a.friends.length)
    .map((user) => user.name);
};
console.log(
  getNamesSortedByFriendCount(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
      },
    ],
    "brown"
  )
);
 */
/* 
const books = [
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
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));
console.log(names); */
