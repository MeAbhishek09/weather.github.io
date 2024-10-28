// script.js

// Get the input field, button, and weather elements
const inputField = document.querySelector('input[type="text"]');
const searchButton = document.querySelector('.search button');
const weather_imga = document.querySelector('.weather-icon');
const weatherContainer = document.querySelector('.weather');
const cityElement = document.querySelector('.city');
const tempElement = document.querySelector('.temp');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

// API endpoint and API key
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
const API_KEY = 'a014dd7b84a5cb268bccb748b6a748b6';

// Function to get the weather data from the API
async function getWeatherData(city) {
  
    // const weather_data = await fetch(API_URL+ city+ `&appid=${API_KEY}`).then(response =>response.josn());
    const weather_data = await fetch(`${API_URL}`).then(response =>response.josn());
    // return data;
    console.log(weather_data);

    cityElement.innerHTML=data.name;
    tempElement.innerHTML=`${math.round(weather_data.main.temp-273.15)}°c`;
    humidityElement.innerHTML=`${weather_data.main.humidity}%`;
    windElement.innerHTML=`${weather_data.wind.speed}km/h`;
    descriptionElement.innerHTML= `${weather_data.weather[0].description}`;

    const descriptionElement =  document.querySelector('.description');
    const location_not_found = document.querySelector('.location-not-found');

    if(weather_data.cod === `404`){
      location_not_found.style.display ="flex";
      weatherContainer.style.display ="none";
      return;
    }

    location_not_found.style.display ="none";
    weatherContainer.style.display ="flex";


    switch(weather_data.weather[0].main){
      case 'Clouds':
          weather_imga.src = "imgs/cloud.png";
          break;
      case 'Clear':
          weather_imga.src = "imgs/clear.png";
          break;
      case 'Rain':
          weather_imga.src = "imgs/rain.png";
          break;
      case 'Mist':
          weather_imga.src = "imgs/mist.png";
          break;
      case 'Snow':
          weather_imga.src = "imgs/snow.png";
          break;
    
    }
}

// Add event listener to the search button
searchButton.addEventListener('click', () => {
  getWeatherData(inputField.value);
  // if (city) {
  //   const data = await getWeatherData(city);
  //   if (data) {
  //     updateUI(data);
  //   } else {
  //     alert('Failed to fetch weather data. Please try again.');
  //   }
  // } else {
  //   alert('Please enter a city name.');
  // }
});