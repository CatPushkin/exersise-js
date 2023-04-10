/* function invert(array) {
  let reverse = [];
  for (let i = 0; i < array.length; i += 1) {
    console.log(Math.abs(array[i]));
    reverse.push(Math.abs(array[i]));
  }
  return reverse;
}
console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
console.log(invert([0])); */
/* 
function highAndLow(numbers) {
  const arr = numbers.split(" ");
  console.log(arr);
  console.log(...arr);
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
 */
/* 
function validatePIN(pin) {
  const arr = pin.split("");
  console.log(arr);
  return (arr.includes(Number) && arr.length === 4) || arr.length === 6;
  //return true or false
}
console.log(validatePIN("1"));
console.log(validatePIN("1234"));
console.log(validatePIN("1.234"));
console.log(validatePIN("1234567"));
console.log(validatePIN("-1234")); */
