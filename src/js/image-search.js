const form = document.querySelector('#search-form');
const btn = document.querySelector('button');
const galleryEl = document.querySelector('.gallery');

function handleSubmit(e) {
  e.preventDefault();

  const valueInput = e.target.elements.searchQuery.value;
  fetchImages(valueInput).then(res => console.log(res.hits));
}
//https://pixabay.com/api/?key=29876171-467d2b4c1ee85715865faf87a&q=yellow+flowers&image_type=photo
function fetchImages(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '29876171-467d2b4c1ee85715865faf87a',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}?${params.toString()}`;
  return fetch(url).then(res => res.json());
}
function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {}

form.addEventListener('submit', handleSubmit);
