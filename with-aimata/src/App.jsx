import { useEffect, useMemo, useState } from 'react'
import './App.css'

const CACHE_KEY = 'aimata-weather-cache-demo-v1'

const weatherCodes = {
  0: 'Clear sky',
  1: 'Mostly clear',
  2: 'Partly cloudy',
  3: 'Cloudy',
  45: 'Foggy',
  48: 'Foggy',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Heavy showers',
  82: 'Violent showers',
  95: 'Thunderstorm',
}

function formatTemperature(value) {
  return `${Math.round(value)}°C`
}

function formatDayLabel(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { weekday: 'short' })
}

function buildAimataShape(payload) {
  const current = payload.current
  const daily = payload.daily

  return {
    city: payload.city,
    region: payload.region,
    country: payload.country,
    summary: weatherCodes[current.weather_code] ?? 'Conditions',
    current: {
      temp: current.temperature_2m,
      feels: current.apparent_temperature,
      humidity: current.relative_humidity_2m,
      wind: current.wind_speed_10m,
      time: current.time,
    },
    forecast: daily.time.map((day, index) => ({
      day: formatDayLabel(day),
      hi: daily.temperature_2m_max[index],
      lo: daily.temperature_2m_min[index],
      kind: weatherCodes[daily.weather_code[index]] ?? 'Conditions',
    })),
    meta: {
      source: 'open-meteo',
      cache: 'localStorage',
      pattern: 'aimata',
    },
  }
}

async function fetchWeatherForCity(cityName) {
  const encodedCity = encodeURIComponent(cityName)
  const geoResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}&count=1&language=en&format=json`,
  )

  if (!geoResponse.ok) {
    throw new Error('Could not find that city.')
  }

  const geoData = await geoResponse.json()
  const result = geoData.results?.[0]

  if (!result) {
    throw new Error('City not found. Try another location.')
  }

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${result.latitude}&longitude=${result.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=5`,
  )

  if (!weatherResponse.ok) {
    throw new Error('Weather data could not be loaded.')
  }

  const weatherData = await weatherResponse.json()

  return buildAimataShape({
    city: result.name,
    country: result.country,
    region: result.admin1 ?? 'Area',
    current: weatherData.current,
    daily: weatherData.daily,
  })
}

function getCachedCities() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCachedCities(entries) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(entries.slice(0, 6)))
}

function App() {
  const [query, setQuery] = useState('Tokyo')
  const [weather, setWeather] = useState(null)
  const [history, setHistory] = useState(() => getCachedCities())
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const highlights = useMemo(() => {
    if (!weather) return []

    return [
      { label: 'Feels like', value: formatTemperature(weather.current.feels) },
      { label: 'Humidity', value: `${weather.current.humidity}%` },
      { label: 'Wind', value: `${Math.round(weather.current.wind)} km/h` },
    ]
  }, [weather])

  useEffect(() => {
    const initialCity = history[0] ?? 'Tokyo'
    setQuery(initialCity)
    void loadWeather(initialCity)
  }, [])

  const loadWeather = async (cityName) => {
    const cleaned = cityName.trim()
    if (!cleaned) return

    setLoading(true)
    setError('')

    try {
      const data = await fetchWeatherForCity(cleaned)
      setWeather(data)
      setQuery(data.city)

      const nextHistory = [data.city, ...history.filter((item) => item !== data.city)].slice(0, 6)
      setHistory(nextHistory)
      saveCachedCities(nextHistory)
    } catch (err) {
      setError(err.message || 'Something went wrong while loading weather.')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await loadWeather(query)
  }

  return (
    <div className="weather-shell aimata-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Weather dashboard</p>
          <h1>City Forecast</h1>
        </div>
        <span className="badge aimata-badge">With Aimata</span>
      </header>

      <form className="search-row" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search city"
          aria-label="Search city"
        />
        <button type="submit" disabled={loading}>{loading ? 'Loading...' : 'Search'}</button>
      </form>

      {error && <div className="error-box">{error}</div>}

      <div className="history-row">
        {history.map((city) => (
          <button key={city} type="button" onClick={() => void loadWeather(city)} className="chip aimata-chip">
            {city}
          </button>
        ))}
      </div>

      {weather && (
        <main className="weather-layout">
          <section className="card hero-card aimata-card">
            <div>
              <p className="location-label">{weather.city}, {weather.country}</p>
              <h2>{weather.summary}</h2>
            </div>
            <div className="temperature-block">
              <span className="current-temp">{formatTemperature(weather.current.temp)}</span>
              <small>Source: {weather.meta.source}</small>
            </div>
          </section>

          <section className="card highlights-card aimata-card">
            <h3>Highlights</h3>
            <div className="highlights-grid">
              {highlights.map((item) => (
                <div key={item.label} className="highlight-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </section>

          <section className="card forecast-card aimata-card">
            <h3>5-day forecast</h3>
            <div className="forecast-grid">
              {weather.forecast.map((day) => (
                <div key={`${day.day}-${day.kind}`} className="forecast-item">
                  <span>{day.day}</span>
                  <strong>{day.kind}</strong>
                  <div className="range-row">
                    <span>{formatTemperature(day.hi)}</span>
                    <span>{formatTemperature(day.lo)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </div>
  )
}

export default App
