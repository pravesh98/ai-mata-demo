# Project Context: Standard Weather Dashboard

This project is a conventional React application created to fetch live weather data and render a dashboard for city-based forecasts. The stack is intentionally explicit and verbose so that the project reads like a default application built without any structural compression layer.

The repository contains a single app entry with a layout that includes a top bar, a search input, recent city chips, a summary panel for current weather, a highlight block showing relevant metrics, and a 5-day forecast section. The state is managed in a straightforward way using React `useState`, `useEffect`, and `useMemo` patterns.

The app begins by fetching a default city, which is normally "New York". Once the page loads, it resolves the city using the geocoding API, then calls the forecast API to access current weather and daily forecast values. The resulting data is normalized into a plain JavaScript object that includes city name, country, summary, temperature, humidity, wind, and a forecast list.

A search action triggers a new fetch cycle. It validates the input, clears stale error states, and handles not-found cases gracefully. When the city is found, the app updates the weather data, refreshes the search history, and stores the most recent entries in `localStorage` so the same cities appear as quick-access chips on the next visit.

The UI is intentionally separated into specific responsibilities. There is a page header, a city search bar, a history row, a main card with the current weather summary, a highlights section, and a forecast grid. Each element handles its own result mapping and formatting. The code works well, but this structure is volume-heavy because the app is explained with explicit field names, repeated data mapping, and large state definitions.

This can be helpful when the project is simple, but in larger AI-assisted codebases it causes prompt overhead. Every time a model needs to understand the app, it must parse multiple values and repeated logic patterns. That is where a compressed project-level structure becomes useful: the same functionality is preserved, but the intent is expressed more succinctly and consistently.

The app is designed to resemble a conventional project that does not use project-level rules or a compact mental model for the app contract. This makes it a good baseline for comparison.

The architecture is intentionally explicit so that the difference from the Aimata version is visible. In the verbose repo, the app describes its own state shape in detail, repeats weather field names across sections, and requires more context for an AI to reason about how the whole project fits together.

This file documents the baseline behavior and is meant to be compared against the same app expressed in a compressed project context.
