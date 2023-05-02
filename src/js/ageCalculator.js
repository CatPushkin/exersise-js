/* Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що Your age is 25 years old; Якщо нічого не введено, то виводь alert("Please enter your birthday")Використовуй доповіжні функції для роботи.
Викоритовуй шаблон форми з файлу ageCalculator.html. */
const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById('birthday');
const resultEl = document.getElementById('result');
const date = new Date();

function calculateAge() {
  if (!birthdayEl.value) return alert('Please enter your birthday');
  const age = getAge(birthdayEl.value);
  resultEl.textContent = `Your age is ${age} years old`;
}

function getAge(birthdayValue) {
  const birthDate = new Date(birthdayValue);
  const diff = date.getFullYear() - birthDate.getFullYear();

  return diff;
}

btnEl.addEventListener('click', calculateAge);
