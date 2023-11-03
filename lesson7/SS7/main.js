// async function getData(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
//   }
  
//   async function run() {
//     const datas2 = await getData(`https://jsonplaceholder.typicode.com/posts`);
  
  
//     var top1 = datas2
//     .sort(function (a, b) {
//       return a.Variable1 < b.Variable1 ? 1 : -1;
//     })
//     .slice(0, 8);
  
//   console.log(top1);
//   }
  
//   run();

const API_KEY = "4269652c5e1b6a66a34f9d3d16ecc098";
const DEFAULT_VALUE = "--";
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("change", (event) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cityName.innerHTML = data.name || DEFAULT_VALUE
      weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE
      temperature.innerHTML = data.main.temp ||DEFAULT_VALUE
      sunrise.innerHTML = data.sys.sunrise || DEFAULT_VALUE
      sunset.innerHTML = data.sys.sunset || DEFAULT_VALUE
      humidity.innerHTML = data.main.humidity || DEFAULT_VALUE
      windSpeed.innerHTML = data.wind.speed || DEFAULT_VALUE
    });
});