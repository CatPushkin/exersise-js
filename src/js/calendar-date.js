/* Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй new Date() для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.
Викоритовуй шаблон календаря з файлу calendar.html. */
const monthNameEl = document.querySelector('#month-name');
const dayNameEl = document.querySelector('#day-name');
const dayNumEl = document.querySelector('#day-number');
const yearEl = document.querySelector('#year');

const date = new Date();

yearEl.textContent = date.getFullYear();
monthNameEl.textContent = date.toLocaleString('en', { month: 'long' });
dayNumEl.textContent = date.getDay();
dayNameEl.textContent = date.toLocaleString('en', { weekday: 'long' });
