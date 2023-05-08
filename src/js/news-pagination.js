/* Pagination Libraries
Використовуючи одну з запропонованих бібліотек для створення пагінації, виконай завдання по сторененню простого пошуку новин за query параметром.

TUI.pagination

Pagination.js

Використовуй NewsAPI

Використовуй html з файлу news.html. */
import Pagination from 'tui-pagination';

const form = document.querySelector('form');
const newsContainer = document.getElementById('news');

let query = '';

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '94e7350e65ba433baccbec406066c2bd';

let totalPages = 0;
let page = 1;

function createNewsCardMarkup(newsArray) {
  const newsCards = newsArray.map(news => {
    return `
      <div class="news-card">
        <div class="news-card-image" style="background-image: url(${news.urlToImage})"></div>
        <div class="news-card-content">
          <h2 class="news-card-title">${news.title}</h2>
          <p class="news-card-description">${news.description}</p>
        </div>
      </div>
    `;
  });
  return newsCards.join('');
}

function fetchNews(e) {
  e.preventDefault();

  newsContainer.innerHTML = '';
  page = 1;

  query = form.elements.search.value;

  if (!query) return;
  fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`)
    .then(r => {
      if (!r.ok) {
        throw new Error(r.status);
      }
      return r.json();
    })
    .then(data => {
      totalPages = Math.ceil(data.totalResults / 100);
      createPagination(totalPages);
      newsContainer.innerHTML = createNewsCardMarkup(data.articles);
    });
}
function createPagination(value) {
  const options = {
    // below default value of options
    totalItems: value,
    itemsPerPage: 100,
    visiblePages: 10,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  };
  const pagination = new Pagination(container, options);
  pagination.on('afterMove', event => {
    page = event.page;
    fetch(`${BASE_URL}/everything?q=${query}&apiKey=${API_KEY}`)
      .then(r => {
        if (!r.ok) {
          throw new Error(r.status);
        }
        return r.json();
      })
      .then(data => {
        totalPages = Math.ceil(data.totalResults / 100);
        createPagination(totalPages);
        newsContainer.insertAdjacentHTML(
          'beforeend',
          createNewsCardMarkup(data.articles)
        );
      });
  });
}

const container = document.getElementById('tui-pagination-container');

form.addEventListener('submit', fetchNews);
