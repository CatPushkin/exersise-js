import { Notify } from 'notiflix';

class UnsplashAPI {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  #page;
  #searchQuery;
  #totalPages;

  #searchParams = new URLSearchParams({
    per_page: 30,
    client_id: this.#API_KEY,
    color: 'black',
    orientation: 'portrait',
  });

  constructor() {
    this.#page = 1;
    this.#searchQuery = '';
    this.#totalPages = 0;
  }

  async getImages() {
    const res = await fetch(
      `${this.#BASE_URL}?query=${this.#searchQuery}&page=${this.#page}&${
        this.#searchParams
      }`
    );

    if (res.ok) {
      return res.json();
    }
    throw new Error(res.statusText);
  }

  get page() {
    return this.#page;
  }

  set page(newPage) {
    this.#page = newPage;
  }

  set searchQuery(newQuery) {
    this.#searchQuery = newQuery;
  }

  get searchQuery() {
    return this.#searchQuery;
  }

  get totalPages() {
    return this.#totalPages;
  }
  set totalPages(newTotalPage) {
    this.#totalPages = newTotalPage;
  }
}

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-gallery'),
  loadMoreBlock: document.querySelector('.target-element'),
};

const { form, list, loadMoreBlock } = refs;

const unsplashApi = new UnsplashAPI();
// let isMoreItems = false;

function createGalleryCards(images) {
  return images
    .map(
      ({ urls, alt_description }) => `<li class="gallery__item">
        <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
    </li>`
    )
    .join('');
}
const handleSubmit = event => {
  event.preventDefault();

  const { query } = event.currentTarget.elements;
  unsplashApi.searchQuery = query.value.trim();

  if (unsplashApi.searchQuery === '') {
    Notify.warning('Enter some data!');
    return;
  }

  list.innerHTML = '';
  unsplashApi.page = 1;

  scrollAndLoadMore();
};

const scrollAndLoadMore = async () => {
  try {
    const { results, total_pages } = await unsplashApi.getImages();

    if (!results) {
      Notify.warning('Sorry no images were found');
      query.value = '';
      return;
    }

    list.insertAdjacentHTML('beforeend', createGalleryCards(results));

    if (total_pages <= unsplashApi.page) {
      Notify.warning('The end!');
      return;
    }

    // const lastChild = list.querySelector(".gallery__item:last-child")
    const lastChild = list.lastElementChild;
    if (lastChild) {
      infiniteScroll.observe(lastChild);
      unsplashApi.page += 1;
    }
  } catch (error) {
    Notify.failure(error.message);
  }
};

const infiniteScroll = new IntersectionObserver(
  ([entry], obsorver) => {
    if (entry.intersectionRatio <= 0) return;
    obsorver.unobserve(entry.target);
    scrollAndLoadMore();
  },
  { threshold: 0.8 }
);

form.addEventListener('submit', handleSubmit);
