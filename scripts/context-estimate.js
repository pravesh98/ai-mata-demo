const withoutAimataPrompt = `
Build a React weather dashboard app in a Vite project with the standard structure.
The app should have a root App.jsx file, an App.css file, an index.css file, and a main.jsx file.
Use useState for search query, weather result, loading state, error state, and history state.
Use useEffect to load the initial city when the page mounts.
Use useMemo for derived highlight cards such as feels-like temperature, humidity, and wind.
Create a search form with a text input and a button that triggers a fetch to the Open-Meteo geocoding API.
After a city is resolved, fetch forecast data with a second API call using latitude and longitude.
Normalize the response into a JavaScript object with city, country, summary, current temperature, humidity, wind, and a forecast array.
Display a hero section with location label, current condition, and current temperature.
Display highlight cards for feels-like temperature, humidity, and wind speed.
Render a 5-day forecast grid with each day showing label, condition text, high temp, and low temp.
Persist the last searched cities in localStorage so they appear as clickable chips below the search bar.
Handle loading state with a disabled button label of Loading...
Handle empty query and not-found states with an error message.
Keep the data model verbose and explicit: each field is described individually and each state update is separated.
Keep the UI logic split across multiple handlers and repeated conditional blocks.
The project should feel like a conventional React app with no compression layer and no project-level AI schema definition.
The explanation should be long because the app is described with repeated field names and explicit state flow.
This is a normal full project description with dispersed responsibilities and an expanded structure for AI tools to interpret.
`

const withAimataPrompt = `
Build the same React weather dashboard using an Aimata project-level structure.
The project definition should compress the app contract into a compact schema: weather(city) -> summary, current, forecast, cache, history.
Use project-level rules to describe the feature once, then let the app reuse the same structure across UI, state, and fetch logic.
The app can still render the same weather card layout, forecast grid, and search history, but the AI context should stay compact and readable.
Keep the canonical data model small: city, summary, current, forecast, cache.
Explain only the essential app contract instead of repeating all of the verbose state and field details.
Reduce prompt noise and reuse one shared structure so the AI understands the project faster with less context overhead.
This is the value of Aimata: the same app, fewer repeated explanations, lower token usage, and clearer project-level understanding.
`

function estimateTokens(text) {
  const normalized = text.replace(/\s+/g, ' ').trim()
  return Math.max(1, Math.ceil(normalized.length / 4))
}

const withoutTokens = estimateTokens(withoutAimataPrompt)
const withTokens = estimateTokens(withAimataPrompt)
const reductionPercent = Math.round(((withoutTokens - withTokens) / withoutTokens) * 100)

console.log('Project-level prompt estimate for the same weather app task')
console.log('')
console.log(JSON.stringify({
  withoutAimata: {
    promptLength: withoutTokens,
    label: 'Verbose project briefing',
  },
  withAimata: {
    promptLength: withTokens,
    label: 'Compact Aimata project briefing',
  },
  reductionPercent,
}, null, 2))
