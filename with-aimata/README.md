# With Aimata Weather Demo

This project demonstrates the same weather dashboard as the companion `without-aimata` app, but with a compact, AI-friendly state shape inspired by Aimata DSL patterns.

## Features

- live weather search using Open-Meteo
- recent city history
- local cache with localStorage
- 5-day forecast
- compact data model and field grouping for better AI readability

## Run it locally

```bash
npm install
npm run dev
```

## Aimata framing

The UI remains equivalent to the non-Aimata version, while the underlying data shape is simplified and more compact. This is the kind of project-level context optimization Aimata is meant to help with.
