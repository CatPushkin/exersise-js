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
