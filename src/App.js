// // src/App.js
import React from 'react';
import './App.css';
import WeatherComponent from './WeatherComponent'; // Import the WeatherComponent

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherComponent /> {/* Use the WeatherComponent here */}
      </header>
    </div>
  );
}

export default App;
