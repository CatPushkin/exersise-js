/* Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.
Важливі деталі: На кожного користувача повинен бути один запит fetch. Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше. Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о користувачеві немає, то функція повина повертати null в масиві результатів.
 */
const usersLogins = [
  'luxplanjay',
  'SofiaProtsiv',
  'qweeqer',
  'Maxwelllife',
  'xWinst',
  'AleksZhov',
  'gsmoff',
  //   '658%',
];

function getUsers(logins) {
  const BASE_URL = 'https://api.github.com';
  const END_POINT = '/users';
  const promiseArr = logins.map(login => {
    const url = `${BASE_URL}${END_POINT}/${login}`;
    return fetch(url).then(res => {
      if (!res.ok) {
        throw new Error('Ooops');
      }
      return res.json();
    });
  });

  return Promise.all(promiseArr);
}
getUsers(usersLogins).then(console.log).catch(console.log);
