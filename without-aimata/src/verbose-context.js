export const verboseProjectContext = {
  appName: 'Weather Dashboard',
  purpose: 'Show current weather, forecast, and search history for locations requested by the user.',
  stack: ['React', 'Vite', 'Open-Meteo geocoding API', 'Open-Meteo weather API', 'localStorage'],
  stateShape: {
    searchQuery: 'string',
    weatherData: 'object | null',
    history: 'string[]',
    loading: 'boolean',
    error: 'string',
  },
  behaviors: {
    initialLoad: 'When the page opens, it resolves a default city and calls the weather fetch flow.',
    cityLookup: 'When the user submits the search form, the app looks up geocoding information and then fetches the forecast.',
    cache: 'Each city is pushed into a recent list and stored in localStorage to improve return visits.',
    errorHandling: 'If the city does not exist or the fetch fails, a visible error message is shown.',
  },
  uiSections: {
    header: 'Contains page title and project label.',
    searchBar: 'Contains input and submit button.',
    recentHistoryChips: 'Displays the last cities visited as shortcut buttons.',
    weatherSummary: 'Shows current city, summary text, and main temperature.',
    highlightCards: 'Shows feels-like, humidity, and wind values.',
    forecastGrid: 'Shows the next five days with high and low temperature values.',
  },
  dataContracts: {
    geocodeResponse: 'Contains city metadata such as name, country, latitude, and longitude.',
    forecastResponse: 'Contains current weather values and daily forecast arrays.',
    normalizedWeather: 'An app-specific object with city, country, summary, current values, and forecast list.',
  },
}
