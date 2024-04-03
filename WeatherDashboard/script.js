const apiKey = "fffb6dc4461f4fefbb801250240304"; 
const form = document.getElementById("weather-form");
const weatherDataDiv = document.getElementById("weather-data");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const city = document.getElementById("city").value;
  fetchWeatherData(city);
});

function fetchWeatherData(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5`; 
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayWeatherData(data);
    })
    .catch(error => {
      console.error(error);
      alert("Error fetching weather data!");
    });
}

function displayWeatherData(data) {
  const currentLocation = data.location.name;
  const currentTime = new Date().toLocaleTimeString();
  const currentTemp = data.current.temp_c; 
  const weatherIcon = data.current.condition.icon; 
  const weatherDesc = data.current.condition.text;
  const humidity = data.current.humidity;


  let weatherInfo = `
    <h2>${currentLocation}</h2>
    <p>${currentTime}</p>
    <img src="${weatherIcon}" alt="${weatherDesc}">
    <p>Current Temperature: ${currentTemp}°C</p>
    <p>Weather: ${weatherDesc}</p>
    <p>Humidity: ${humidity}%</p>
  `;

  weatherInfo += `<h2>5-Day Forecast</h2>`;
  for (let i = 0; i < 5; i++) {
    const forecastDay = data.forecast.forecastday[i];
    const date = new Date(forecastDay.date).toLocaleDateString();
    const highTemp = forecastDay.day.maxtemp_c; 
    const lowTemp = forecastDay.day.mintemp_c; 
    const weatherIcon = forecastDay.day.condition.icon; 
    const weatherDesc = forecastDay.day.condition.text;

    weatherInfo += `
      <div class="forecast-day">
        <p>${date}</p>
        <img src="${weatherIcon}" alt="${weatherDesc}">
        <p>High: ${highTemp}°C, Low: ${lowTemp}°C</p>
        <p>Weather: ${weatherDesc}</p>
      </div>
    `;
  }

  weatherDataDiv.innerHTML = weatherInfo;
}