// src/L15T4/App4.jsx
import React, { useEffect, useState } from 'react';

const App4 = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=eb85ea2d9fa59ddd7dcec16efbfc3cb6'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌤 Weather Data Logger</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p><strong>Temperature:</strong> {weatherData.main.temp}°C</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
          <p><strong>Logged at:</strong> {new Date().toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default App4;
