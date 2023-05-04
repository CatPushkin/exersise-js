// Виведи у консоль тих людей, які старше 19 років. Використовуй перебираючі методи масива та роботу з датами.
const people = [
  {
    name: 'Wes',
    year: 2001,
    photoUrl:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'Max',
    year: 1986,
    photoUrl:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'Mike',
    year: 1970,
    photoUrl:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
  },
  {
    name: 'Lili',
    year: 2005,
    phptoURL:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
  },
];
const currentYear = new Date().getFullYear();
function isAdult(data) {
  return data.filter(person => currentYear - person.year >= 19);
}

console.log(isAdult(people));
