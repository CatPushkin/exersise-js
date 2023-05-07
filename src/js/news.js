import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('form');
const newsContainer = document.getElementById('news');
const calendarEl = form.elements.date;
calendarEl.setAttribute('max', new Date().toISOString().split('T')[0]);

const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '94e7350e65ba433baccbec406066c2bd';

function createNewsCardMarkup(newsArray) {
  const newsCards = newsArray.map(news => {
    const data = formatData(news);
    const { title, description, urlToImage } = data;
    return `
      <div class="news-card">
        <div class="news-card-image" style="background-image: url(${urlToImage})"></div>
        <div class="news-card-content">
          <h2 class="news-card-title">${title}</h2>
          <p class="news-card-description">${description}</p>
        </div>
      </div>
    `;
  });
  return newsCards.join('');
}

function fetchNews(e) {
  e.preventDefault();

  const query = form.elements.search.value;
  const date = form.elements.date.value;
  const sortBy = form.elements.sort.value;

  if (query === '') return Notify.failure('Enter the data');

  getNews({ query, sortBy, date })
    .then(res => {
      const markup = createNewsCardMarkup(res.articles);
      newsContainer.insertAdjacentHTML('afterbegin', markup);
    })
    .catch(err => console.log(err));
}

function getNews({ query, sortBy, date }) {
  const url = `${BASE_URL}/everything?q=${query}&sortBy=${sortBy}&from=${date}&apiKey=${API_KEY}`;
  return fetch(url).then(res => res.json());
}

function formatData({ title, urlToImage, description }) {
  const formatedTitle = title.length > 40 ? title.slice(0, 40) + '...' : title;
  const formatedDescription = description === '' ? 'unknown' : description;
  const formatedUrlToImage = !urlToImage
    ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgsxj0bCDD0I6uKota2Pma1doW0GyrEIFQYjGU4ZIvvA&s'
    : urlToImage;

  return {
    urlToImage: formatedUrlToImage,
    title: formatedTitle,
    description: formatedDescription,
  };
}

form.addEventListener('submit', fetchNews);
