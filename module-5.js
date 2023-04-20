/* const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");

console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
 */
/* class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    if (this.items === itemToRemove) {
      this.items.splice(this.items.indexOf(itemToRemove), 1);
    }
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"] */

/* class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value += `${str}`;
  }
  padStart(str) {
    this.value = `${str}` + this.value;
  }
  padBoth(str) {
    this.value = `${str}` + this.value + `${str}`;
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */

/* class Car {
  // Change code below this line
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (Car.MAX_PRICE >= newPrice) {
      this.#price = newPrice;
    }
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000 */

/* class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };
  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
  }
  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser" */

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }
  blacklistedEmails = [];
  blacklist(email) {
    this.blacklistedEmails.push(email);
  }
  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
 */

/* 3. Виправ помилки, які будуть в консолі, щоб скрипт запрацював. */
// const car = {
//   registrationNumber: "GA12345",
//   brand: "Toyota",
// };

// function displayDetails(ownerName) {
//   console.log(
//     `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
//   );
// }
// const fn = displayDetails.bind(car, "Sofia");
// // displayDetails.call(car, "Sofia");
// fn()

// const directRoute = function (to = "Chop") {
//   console.log(`${this.from} => ${to}`);
// };

// const train1 = {
//   from: "Kyiv",
//   directRoute,
// };
// const train2 = {
//   from: "Lviv",
//   directRoute,
// };

// directRoute.apply(train1, ["Vinnytsia"]);
// directRoute.call(train1);
// train2.directRoute();
// train1.directRoute.call(train2, "Odessa");

// const yourDirectRoute = directRoute.bind(train1);
// yourDirectRoute();
// yourDirectRoute("Kharkiv");

// const theirDirectRoute = directRoute.bind(train2, "Poltava");
// theirDirectRoute();
// theirDirectRoute("Cherkasy");
// theirDirectRoute.call(train1);

// const anotherDirectRoute = train1.directRoute;
// console.log(anotherDirectRoute());

/* 6. Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій. */
/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   // Останній id транзакції
//   lastTransactionId: 0,

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму, id та тип транзакції.
//    */
//   createTransaction(amount, type, id) {
//     const transaction = {
//       amount,
//       type,
//       id,
//     };
//     return transaction;
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */

//   addTransaction(amount, type, id) {
//     const newTransaction = this.createTransaction(amount, type, id);
//     this.transactions.push(newTransaction);
//   },
//   deposit(amount) {
//     this.balance += amount;
//     this.lastTransactionId += 1;
//     this.addTransaction(amount, "deposit", this.lastTransactionId);
//   },
//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (this.balance <= amount) {
//       console.log("Недостатньо коштів");
//       return;
//     }
//     this.balance -= amount;
//     this.lastTransactionId += 1;
//     this.addTransaction(amount, "withdraw", this.lastTransactionId);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find((transaction) => transaction.id === id);
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     return this.transactions.reduce(
//       (total, transaction) =>
//         transaction.type === type ? total + transaction.amount : total,
//       0
//     );
//   },
// };

// account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log("Transaction 1: ");
// console.log(account.getTransactionDetails(1));
// console.log("Transaction 2: ");
// console.log(account.getTransactionDetails(2));
// console.log("Transaction 3: ");
// console.log(account.getTransactionDetails(3));
// console.log("Transaction 4: ");
// console.log(account.getTransactionDetails(4));

// console.log(
//   "Withdrawals: " + account.getTransactionTotal(Transaction.WITHDRAW)
// );
// console.log("Deposits: " + account.getTransactionTotal(Transaction.DEPOSIT));

/* 5. Корзина товарів
getItems() - отримати корзину товарів, усі товари
add(product) - додати у корзину об'єкт продукта
remove(productName) - повністю видалити продукт під назвою productName
clear() - повністю очистити корзину товарів
countTotalPrice() - порахувати суму замовлення
increaseQuantity(productName) - збільшити кількість продукта під назвою productName
decreaseQuantity(productName) - зменшити кількість продукта під назвою productName */
// const cart = {
//   items: [],

//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     const existingProduct = this.items.find(
//       (item) => item.name === product.name
//     );
//     if (!existingProduct) {
//       product.quantity = 1;
//       this.items.push(product);
//     } else {
//       product.quantity += 1;
//     }
//   },
//   remove(productName) {},
//   clear() {},
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// const apple = { name: "🍎", price: 50 };
// const grape = { name: "🍇", price: 70 };
// const lemon = { name: "🍋", price: 60 };
// const strawberry = { name: "🍓", price: 110 };

// console.table(cart.getItems());

// cart.add(apple);
// cart.add(apple);
// cart.add(lemon);

// console.table(cart.getItems());

// cart.remove("🍎");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());

// cart.add(apple);
// cart.add(apple);
// cart.add(grape);
// cart.add(grape);
// cart.add(grape);
// cart.add(lemon);
// cart.add(strawberry);
// cart.add(strawberry);

// cart.increaseQuantity("🍎");

// console.table(cart.getItems());

// console.log("Total: ", cart.countTotalPrice());

/* 3. Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.
Для цього потрібно реалізувати клас Order, який містить такі приватні властивості:
tableNumber - номер столика, де зроблено замовлення
items - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
isPaid - позначає, чи оплачене замовлення (default = false)
Для класу Order потрібно реалізувати такі методи:
calculateTotal() - повертає загальну суму замовлення і "чек".
markAsPaid() - позначає замовлення як оплачене
Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення
Також потрібно створити клас MenuItem, який містить властивості name та price для предметів замовлення. */

// class MenuItem {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }
// class Order {
//   #tableNumber;
//   #items;
//   #isPaid;
//   constructor({ tableNumber, items }) {
//     this.#tableNumber = tableNumber;
//     this.#items = items;
//     this.#isPaid = false;
//   }
//   calculateTotal() {
//     const totalPrice = this.#items.reduce(
//       (total, item) => (total += item.price),
//       0
//     );
//     const items = this.#items
//       .map((item) => `${item.name} - ${item.price}`)
//       .join("\n");
//     return `Table ${
//       this.#tableNumber
//     }\n Items:\n ${items} \n Total:${totalPrice} \n Status: ${
//       this.#isPaid ? "Paid" : "Not paid"
//     }`;

//     // console.log(this.#items);
//   }
//   markAsPaid() {
//     this.#isPaid = true;
//   }
//   get isPaid() {
//     return this.#isPaid;
//   }
// }
// const pizza = new MenuItem("Pizza", 10);
// const salad = new MenuItem("Salad", 5);
// const burger = new MenuItem("Burger", 8);
// const fries = new MenuItem("Fries", 3);
// const soda = new MenuItem("Soda", 2);
// console.log(pizza);
// const order1 = new Order({ tableNumber: 3, items: [pizza, salad] });
// const order2 = new Order({ tableNumber: 5, items: [burger, fries, soda] });

// console.log(order1.calculateTotal());
// /*
// Table 3
// Items:
// Pizza - 10
// Salad - 5
// Total: 15
// Status: Not paid
// */

// order2.markAsPaid();
// console.log(order2.isPaid); // Output: true

/* 5. Вам потрібно розробити систему керування бібліотекою. Система має включати класи для книг, користувачів та бібліотеки, з можливістю взаємодії між ними. */
// 1. Клас Book має мати наступні властивості:
// Назва книги (title)
// Автор книги (author)
// Статус наявності (available) (булевий тип даних, true - якщо книга є в наявності, false - якщо книга взята користувачем)
// Клас має також мати методи:
// getDetails() - повертає рядок з деталями книги в форматі "Назва автора (Рік видання)"
// toggleAvailability() - змінює статус наявності книги з true на false або навпаки.
// class Book {
//   constructor({ title, author }) {
//     this.title = title;
//     this.author = author;
//     this.available = true;
//   }
//   getDetails() {
//     return `Title: ${this.title}, Author: ${this.author}`;
//   }
//   toggleAvailability() {
//     this.available = !this.available;
//   }
// }
// const book1 = new Book({
//   title: "Harry Potter and the Philosopher's Stone",
//   author: "Joanne Rowling",
// });
// const book2 = new Book({
//   title: "The Hobbit",
//   author: "John Ronald Reuel Tolkien",
// });
// const book3 = new Book({
//   title: "The Clean Coder",
//   author: "Robert C. Martin",
// });
// 2. Клас User має мати наступні властивості:
// Повне ім'я користувача (fullName)
// Масив книг, які користувач взяв у бібліотеці (books)
// Клас має також мати методи:
// getDetails() - повертає об`єкт з деталями користувача
// borrowBook(book) - додає книгу в масив книг користувача, якщо книга вільна (available === true) та повертає повідомлення про успішне позичення, або повідомлення про неможливість позичити книгу, якщо вона вже взята.
// class User {
//   constructor(fullname) {
//     this.fullname = fullname;
//     this.book = [];
//   }
//   getDetails() {
//     return this;
//   }
//   borrowBook(book) {
//     console.log(book);
//     if (book.available) {
//       console.log("Success");
//     } else {
//       console.log("Error");
//     }
//   }
// }

// // Створення користувачів
// const user1 = new User("Ethan Anderson");
// const user2 = new User("Olivia Johnson");

// 3. Клас Library має мати наступні властивості:
// Масив всіх книг в бібліотеці (books)
// Масив зареєстрованих користувачів (users)
// Клас має також мати методи:
// addBook(book) - додає книгу до масиву книг бібліотеки
// removeBook(book) - видаляє книгу з масиву книг бібліотеки
// addUser(user) - додає користувача до масиву зареєстрованих користувачів бібліотеки
// removeUser(user) - видаляє користувача з масиву зареєстрованих користувачів бібліотеки
// findAvailableBooks() - повертає масив книг, які є в наявності (available === true)
// findUserBooks(user) - повертає масив книг, взятих користувачем (user), якщо користувач зареєстрований, або повідомлення про незареєстрованого користувача, якщо користувач не знайдений.
// class Library {
//   constructor() {
//     this.books = [];
//     this.users = [];
//   }
//   addBook(book) {
//     this.books.push(book);
//   }
//   removeBook(bookName) {
//     const book = this.books.find((book) => book.title === bookName);
//     if (book) {
//       const index = this.books.indexOf(book);
//       this.books.splice(index, 1);
//       console.log(this.books);
//     } else {
//       console.log("Absent book");
//     }
//   }
//   addUser(user) {
//     this.users.push(user);
//   }

//   removeUser(userName) {
//     // const user = this.users.find((user) => user.name === userName);
//     // if (user) {
//     //   const index = this.users.indexOf(user);
//     //   this.users.splice(index, 1);
//     //   console.log(this.users);
//     // } else {
//     //   console.log("Absent user");
//     // }
//     this.users = this.users.filter((user) => user.fullName !== userName);
//   }
//   findAvailableBooks() {
//     return this.books.filter((book) => book.available);
//   }
//   findUserBooks(userName) {
//     const user = this.users.find((user) => user.fullName === userName);
//     if (user) {
//       return user.book;
//     }
//     return "Absent user";
//   }
// }
// // Створення бібліотеки
// const library = new Library();

// // Додавання книг до бібліотеки
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// // Додавання користувачів до бібліотеки
// library.addUser(user1);
// library.addUser(user2);

// library.removeBook("The Hobbit");

// // Позичення книг
// user1.getDetails();

// user1.borrowBook({
//   title: "The Fault in Our Stars",
//   author: "John Green",
// });
// user1.borrowBook(book1);

// user1.getDetails();

// // Пошук книг які позичив користувач
// library.findUserBooks("Sofia Protsiv");
// library.findUserBooks("Ethan Anderson");

// // Пошук книг які ще доступні
// library.findAvailableBooks();

/* ------------АВТОПЕРЕВІРКА---------------- */
/* class Storage {
  constructor(params) {
    this.items = params;
  }
  getItems() {
    return this.items;
  }
  addItem(newItem) {
    this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
 */
/* ====================================== */
/* 
Виведіть всі назви продуктів.
Виведіть всі продукти з категорії "Fruit".
Знайдіть кількість всіх продуктів у категорії "Dairy".
Виведіть всі продукти, які коштують менше, ніж 2.5.
Виведіть всі продукти, які є в наявності.
Виведіть всі продукти в алфавітному порядку.
Виведіть всі продукти в порядку зменшення ціни.
Виведіть назви всіх продуктів в верхньому регістрі.
Виведіть всі продукти в зворотньому порядку.
Знайдіть продукт з найвищою ціною.
Знайдіть загальну вартість всіх продуктів.
Перетворіть масив продуктів у масив об'єктів з полями name та price.
Знайдіть індекс продукту з назвою "Milk".
Перевірте, чи всі продукти з категорії "Fruit".
Перевірте, чи є хоча б один продукт з категорії "Meat".
Відсортувати продукти в порядку збільшення ціни.
Знайти індекс продукту "Croissant". */
// const products = [
//   { name: "Banana", category: "Fruit", price: 1.5, stock: 15 },
//   { name: "Apple", category: "Fruit", price: 2, stock: 8 },
//   { name: "Orange", category: "Fruit", price: 1, stock: 0 },
//   { name: "Milk", category: "Dairy", price: 3, stock: 20 },
//   { name: "Cheese", category: "Dairy", price: 5, stock: 5 },
//   { name: "Bread", category: "Bakery", price: 2.5, stock: 10 },
//   { name: "Croissant", category: "Bakery", price: 1.5, stock: 3 },
//   { name: "Eggs", category: "Dairy", price: 2.5, stock: 12 },
//   { name: "Carrot", category: "Vegetable", price: 1, stock: 7 },
//   { name: "Potato", category: "Vegetable", price: 0.5, stock: 0 },
// ];

// const allNames = products.map((product) => product.name);
// console.log(allNames);
// const category = products.filter((product) => product.category === "Fruit");
// console.log(category);
// const quantity = products.filter(
//   (product) => product.category === "Dairy"
// ).length;
// console.log(quantity);
// const lessPrice = products.filter((product) => product.price < 2.5);
// console.log(lessPrice);
// const inStock = products.filter((product) => product.stock > 0);
// console.log(inStock);
// const sortAZ = [...products].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortAZ);
// const sortPrice = [...products].sort((a, b) => b.price - a.price);
// console.log(sortPrice);
// // products.forEach((product) => {
// //   console.log(product.name.toUpperCase());
// // });
// const reverse = [...products].reverse();
// console.log(reverse);
// const highPrice = [...products].sort((a, b) => b.price - a.price)[0];
// console.log(highPrice);
// const totalPrice = products.reduce(
//   (total, product) => (total += product.price * product.stock),
//   0
// );
// console.log(totalPrice);
// const newArray = products.map(({ name, price }) => ({
//   name,
//   price,
// }));
// console.log(newArray);
// const findIndex = products.findIndex((product) => product.name === "Milk");
// console.log(findIndex);
// const everyFruits = products.every((product) => product.category === "Fruit");
// console.log(everyFruits);
// const some = products.some((product) => product.category === "Meat");
// console.log(some);

/* НАСЛІДУВАННЯ. Практика створення класів, наслідування, приватний змінних.
Створіть клас User, який буде мати приватні властивості name та password, а також методи login та logout.

Далі створіть підклас Admin, який наслідуватиме властивості та методи з класу User, а також матиме свої унікальні методи та властивості, що відповідають конкретному типу користувача.

У підкласі Admin додайте приватну властивість accessLevel, яка буде мати значення administrator за замовчуванням. Також додайте метод deleteUser, який буде приймати name користувача як аргумент та видаляти його з бази даних (в цьому випадку просто виводити повідомлення про видалення).

Після створення класів, створіть екземпляр класу User та екземпляр класу Admin, а потім спробуйте виконати методи логін та логаут для кожного з них, а також викликати метод видалення користувача у підкласі Admin. Переконайтеся, що приватні властивості та методи не доступні з зовнішнього коду. */
// class User {
//   #name;
//   #password;
//   constructor(name, password, email) {
//     this.#name = name;
//     this.#password = password;
//     this.email = email;
//   }
//   login() {
//     console.log(`${this.email} login`);
//   }
//   logout() {
//     console.log(`${this.#name} logout`);
//   }
// }
// class Admin extends User {
//   #accessLevel = "administrator";
//   constructor(name, password, email = "example") {
//     super(name, password, email);
//   }
//   deleteUser(name) {
//     console.log(`${name} was deleted`);
//   }
// }
// const user1 = new User("Liubov", "1234", "test@gmail.com");
// const admin1 = new Admin("Sofia", "4321");
// console.log(user1);
// console.log(admin1);
// const newUser = user1.login.bind({ email: "Volodymyr" });
// admin1.logout();
// newUser();
