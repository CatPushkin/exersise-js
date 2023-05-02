/* Напиши скрипт, який буде рахувати скільки часу залишилося до нового року. Напиши функцію updateCountdown(), яка буде оновлювати час. Коли наступить новий рік, зупини таймер.
Викоритовуй шаблон таймера зворотнього відліку з файлу countdown.html. */
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
let intervalId = null;
const newYearTime = new Date('Jan 1, 2024 00:00:00');

intervalId = setInterval(updateCountdown, 1000);

function updateCountdown() {
  /* Використовуй наступний код для підрахунку значень: */

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const newYear = newYearTime.getTime();
  const currentTime = Date.now();
  const gap = newYear - currentTime;

  // gap - різниця між кінцевою і поточною датою в мілісекундах.
  const days = Math.floor(gap / day)
    .toString()
    .padStart(2, '0');
  const hours = Math.floor((gap % day) / hour)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((gap % hour) / minute)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((gap % minute) / second)
    .toString()
    .padStart(2, '0');

  dayEl.textContent = days;
  hourEl.textContent = hours;
  minuteEl.textContent = minutes;
  secondEl.textContent = seconds;

  if (gap === 0) {
    clearInterval(intervalId);
  }
}
