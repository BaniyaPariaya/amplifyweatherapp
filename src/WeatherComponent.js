import React, { useState } from 'react';
import axios from 'axios';
import awsconfig from './amplifyconfiguration.json';


const WeatherComponent = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`${awsconfig.aws_cloud_logic_custom[0].endpoint}/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };
return (
    <div style={{ backgroundColor: '#f8f8f8', padding: '20px', borderRadius: '8px', color: '#333' }}>
      <h2>Weather Information</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '8px', marginRight: '8px', border: 'none', borderRadius: '4px' }}
      />
      <button
        onClick={getWeatherData}
        style={{
          padding: '8px 16px',
          backgroundColor: '#091519',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Get Weather
      </button>

      {weatherData && (
        <div>
          <h3>{weatherData.city}</h3>
          <p>Temperature: {weatherData.temperature} °C</p>
          <p>Condition: {weatherData.condition}</p>
        </div>
      )}
    </div>
  );
};
export default WeatherComponent;

