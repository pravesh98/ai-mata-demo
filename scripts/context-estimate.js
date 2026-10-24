const withoutAimataPrompt = `
Build a React weather dashboard app in a standard Vite project.
The app should have a root App.jsx file, a main.jsx file, an App.css file, and a shared CSS file.
Use useState for city query, weather object, loading flag, error message, and recent history array.
Use useEffect to trigger a default city load on mount.
Use useMemo for derived highlight cards like feels-like temperature, humidity, and wind.
Create a search form with a text box and a button that calls the geocoding API with the city name.
Then resolve the city coordinates and fetch the weather forecast for the location.
Normalize the response into a weather object containing city, country, summary, current temperature, humidity, wind speed, and a forecast array.
Render a hero section showing the city name, condition summary, and main temperature.
Render highlight cards for feels-like temperature, humidity, and wind speed.
Render a 5-day forecast grid with each day showing label, condition text, high value, and low value.
Persist the last visited cities in localStorage so they appear as clickable chips below the search bar.
Handle loading states by disabling the button and showing the text Loading...
Handle invalid input and not-found cases by showing an error banner.
Keep the data model explicit and verbose, with separate state values for each concept.
Describe every part of the app in a conventional, long-form way so the AI has to parse all fields and state transitions individually.
This is a generic project description for the normal app structure and is intentionally repetitive because the workflow does not use project-level compression.
The app should feel like a standard weather dashboard built without a compact schema or repo-level context file.
The AI has to understand scattered state variables, multiple handlers, repeated field names, and a longer project story to make change safely.
The result is a verbose explanation because the project is not expressed as a compact app contract.
The task should remain the same as the Aimata version, but the standard project context is larger and noisier.
`

const withAimataPrompt = `
Build the same weather dashboard using a compact Aimata project model.
The app contract is small: weather(city) -> summary + current + forecast + history + cache.
Keep the same feature set and output, but express the app as a single compact schema instead of many verbose state definitions.
Use project-level rules to explain the app once rather than repeating field names across many sections.
The AI can reason from a shorter, structured contract with less noise and less repeated context.
This is the Aimata benefit: same app, lower project-level prompt overhead, clearer project understanding, and less context bloat.
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
