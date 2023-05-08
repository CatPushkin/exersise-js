/* 1. Load more button
Використовуй html з файлу load_more.html.
Використовуй {JSON} Placeholder API
Створи змінну limit і задай їй значення 20, це буде кількість постів на сторінку.

Щоб динамічно змінювати номер групи на кожний наступний запит, достатньо оголосити глобальну змінну, назвемо її page і встановимо початкове значення 1 - перша група елементів. Після кожного успішного запиту, в колбек методу then() будемо збільшувати значення page на одиницю. Складаючи параметри запиту, використовуємо її значення.

Після завантаження першої групи елементів, текст на кнопці зміниться, а сама кнопка опуститься під список постів. Коли користувач прокрутить сторінку і знову клікне по ній - виконається запит за другою групою елементів, яка додасться до вже існуючої розмітки списку постів. У разі відсутності постів для завантаження під час кліку на кнопку «Fetch posts» - показуємо повідомлення

Потрібно додали перевірку кінця колекції на фронтенді, тому що JSONPlaceholder API не реалізує цей функціонал на бекенді. У нашому випадку достатньо розділити загальну кількість елементів в колекції на кількість елементів в одній групі. Це схоже на випадок, коли бекенд повертає не кількість доступних сторінок, а загальну кількість елементів в колекції.
 */
const fetchPostsBtn = document.querySelector('.btn');
const userList = document.querySelector('.posts');
const alertPopup = document.querySelector('.alert');

let isAlertVisible = false;
const limit = 20;
let page = 1;
let totalPage = Math.ceil(100 / limit);

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const END_POINT = '/posts';
// const params = new URLSearchParams({
//   limit,
//   page,
// });

function fetchPosts() {
  const url = `${BASE_URL}${END_POINT}?_limit=20&_page=${page}`;
  return fetch(url).then(r => r.json());
}
function handleClick() {
  fetchPosts().then(data => {
    userList.insertAdjacentHTML('beforeend', renderPosts(data));
  });
  if (page === totalPage) {
    fetchPostsBtn.style.display = 'none';
    toggleAlertPopup();
  } else {
    fetchPostsBtn.textContent = 'Load more';
    page += 1;
  }
}

function renderPosts(posts) {
  const markup = posts
    .map(({ id, title, body, userId }) => {
      return `<li>
                <h2 class="post-title">${title.slice(0, 30)}</h2>
                <p><b>Post id</b>: ${id}</p>
                <p><b>Author id</b>: ${userId}</p>
                <p class="post-body">${body}</p>
            </li>`;
    })
    .join('');

  return markup;
}

function toggleAlertPopup() {
  if (isAlertVisible) {
    return;
  }
  isAlertVisible = true;
  alertPopup.classList.add('is-visible');
  setTimeout(() => {
    alertPopup.classList.remove('is-visible');
    isAlertVisible = false;
  }, 3000);
}
fetchPostsBtn.addEventListener('click', handleClick);
