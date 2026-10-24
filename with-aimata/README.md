# With Aimata

This project is the compact, project-aware version of the same weather dashboard.

It demonstrates the value of Aimata-style project structure: the app keeps the same user-facing behavior, but the context needed to explain the project to an AI agent is cleaner and more compact.

## What this demonstrates

This version is intentionally structured around a smaller, more reusable app schema:

- weather(city) -> summary + current + forecast + cache
- compact feature contract
- reduced repeated field explanations
- lower context overhead for AI-assisted project work

## Run locally

```bash
npm install
npm run dev
```

## Project-level comparison

This repo is meant to be compared directly with the `without-aimata` version. The same task and same UI are kept consistent while the project briefing and structure become more compressed and AI-friendly.
