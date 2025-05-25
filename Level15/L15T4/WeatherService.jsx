import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export async function fetchWeather() {
  const { WEATHER_API_KEY, LOCATION } = process.env;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&units=metric&appid=${WEATHER_API_KEY}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      location: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
      weather: data.weather[0].main,
      timestamp: new Date()
    };
  } catch (err) {
    console.error("❌ Failed to fetch weather data:", err.message);
    return null;
  }
}
