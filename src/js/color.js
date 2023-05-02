/* Напишіть changeBackground() встановлює фонове зображення на body. Викоритовуй масив картинок, які повинні кожні 5 секунд змінюватися, тобто через кожні 5 секунд має викликатися функція changeBackground. Якщо ми дійшли до кінця масива, то починай спочатку. Для цього створи лічильник, аби слідкувати, картинка зараз показується.
Стиль для body для плавного переходу */
/* 
body {
  background-repeat: no-repeat;
  transition: background-image 1s ease-in-out;
} */
const images = [
  'url("https://picsum.photos/id/1015/1920/1080")',
  'url("https://picsum.photos/id/1018/1920/1080")',
  'url("https://picsum.photos/id/1025/1920/1080")',
];
const body = document.body;
let imageNum = 0;
setInterval(changeBackground, 5000);

function changeBackground() {
  body.style.backgroundImage = images[imageNum];
  imageNum += 1;
  if (images.length === imageNum) imageNum = 0;
}
