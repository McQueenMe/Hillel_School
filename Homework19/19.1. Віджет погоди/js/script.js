const apiKey = '0c7b96c8fbcd4a360baae3bf72bf0bbf';
let city = prompt('Enter name of city');

async function fetchWeather() {
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`);
      const data = await response.json();
      console.log(data);
      displayWeather(data);
   } catch (error) {
      document.getElementById('weather').innerHTML = '<h2>Не вдалося отримати дані про погоду</h2>';
   }
}

async function newCityReload() {
   city = prompt('Enter name of city');
   try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`);
      const data = await response.json();
      console.log(data);
      displayWeather(data);
   } catch (error) {
      document.getElementById('weather').innerHTML = '<h2>Не вдалося отримати дані про погоду</h2>';
   }
}

function displayWeather(data) {
   const weatherElement = document.getElementById('weather');
   const { name, main, weather, wind, timezone } = data;
   const temp = main.temp.toFixed(1);
   const feels_like = main.feels_like.toFixed(1);
   const description = weather[0].description;
   const humidity = main.humidity;
   const pressure = main.pressure;
   const windSpeed = wind.speed;
   const icon = weather[0].icon;

   const localTime = new Date((new Date().getTime()) + (timezone * 1000) - (3 * 60 * 60 * 1000));
   const localTimeString = localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   const localDateString = localTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

   const userTime = new Date();
   const userTimeString = userTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
   const userDateString = userTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });


   weatherElement.innerHTML = `
        <h2>${localDateString}</h2>
        <div class="time">${localTimeString}</div>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" class="icon" alt="weather icon">
        <div class="temperature">${temp}°C</div>
        <p>Відчувається як: ${feels_like}°C</p>
        <p>${description}</p>
        <p>Вологість: ${humidity}%</p>
        <p>Тиск: ${pressure} hPa</p>
        <p>Вітер: ${windSpeed} м/с</p>
        <p>${userDateString} ${userTimeString}</p>
        <button onclick="newCityReload()">Змінити місце</button>
    `;
}

fetchWeather();