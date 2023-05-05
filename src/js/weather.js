import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputField = document.querySelector('.search-bar');
const locationBtn = document.querySelector('#get_location_btn');
const searchBtn = document.querySelector('#search_btn');
const infoTxt = document.querySelector('.info_text');
const content = document.querySelector('.content');

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const END_POINT = '/weather';
const APP_ID = '522f7ec766b55c89fccbc47a4e7a72c0'; // SECRET API KEY

function handleSubmit() {
  const query = inputField.value;
  if (!query) return Notify.failure('Enter the data');
  fetchData(query);
}

function fetchData(query) {
  // перед запитом
  content.innerHTML = '';
  infoTxt.innerText = 'Getting weather details...';
  infoTxt.classList.add('pending');
  infoTxt.classList.remove('error');

  // якщо при запиті response приходить ok то запускай функцію createWeatherDetailsMarkup аби зарендерити у content розмітку погоди
  const PARAMS = `?q=${query}&units=metric&appid=${APP_ID}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;
  fetch(url)
    .then(res => {
      if (!res.ok) {
        content.innerHTML = '';
        infoTxt.classList.replace('pending', 'error');
        infoTxt.innerText = `❌ ${inputField.value} isn't a valid city name`;
        throw new Error('Enter invalid city');
      }
      return res.json();
    })
    .then(data => {
      infoTxt.innerHTML = '';
      createWeatherDetailsMarkup(data);
    })
    .catch(console.log);

  // якщо при запиті response приходить не ok то:
}

function createWeatherDetailsMarkup(data) {
  const {
    name,
    sys: { country },
    main: { temp, feels_like, humidity },
    wind: { speed },
  } = data;
  const { icon, description, main } = data.weather[0];
  content.innerHTML = ` <div class="weather">
        <h2 class="city">Weather in ${name}, ${country}</h2>
        <h1 class="temp">${temp.toFixed(0)} °C</h1>
        <div class="flex">
            <img
            src="https://openweathermap.org/img/wn/${icon}.png"
            alt="${description}"
            class="icon"
            />
            <div class="description">${main}</div>
        </div>
        <div class="feels_like">Feels like: ${feels_like.toFixed(0)}°C</div>
        <div class="humidity">Humidity:${humidity.toFixed(0)}</div>
        <div class="wind">Wind speed: ${speed}</div>
    </div>`;
}
searchBtn.addEventListener('click', handleSubmit);
