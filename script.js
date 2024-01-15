async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherInfo = document.getElementById('weatherInfo');
  
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityInput.value)}&appid=3045dd712ffe6e702e3245525ac7fa38`);
      const data = await response.json();
  
      if (response.ok) {
        const { name, main, weather } = data;
        const temperature = Math.round(main.temp - 273.15); // Convert temperature to Celsius
  
        weatherInfo.innerHTML = `
          <p>City: ${name}</p>
          <p>Temperature: ${temperature}°C</p>
          <p>Weather: ${weather[0].description}</p>
        `;
      } else {
        weatherInfo.innerHTML = 'City not found';
      }
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
      weatherInfo.innerHTML = 'Error fetching weather data';
    }
  }
  