import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  async function getWeather(event) {
    event.preventDefault();
    setError("");
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch {
      setError("Could not find weather for that city.");
    }
  }

  return (
    <main className="app">
      <section className="container">
        <h1>Weather App</h1>
        <form onSubmit={getWeather}>
          <label htmlFor="city">Enter a city name</label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="For example, London"
            required
          />
          <button type="submit">Get Weather</button>
        </form>

        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-info">
            <h2>{weather.name}</h2>
            <p>Temperature: {Math.round(weather.main.temp)}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;