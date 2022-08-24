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
