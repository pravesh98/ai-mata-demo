# With Aimata

This project is the compact, project-aware version of the same weather dashboard.

It demonstrates the value of Aimata-style project structure: the app keeps the same user-facing behavior, but the context needed to explain the project to an AI agent is cleaner, smaller, and easier to reuse.

## How this version was created

This app was intentionally created in a step-by-step way to show how project-level structure leads to lower token usage.

1. Start with the same weather dashboard concept as the `without-aimata` version.
2. Keep the feature set identical: city search, current conditions, forecast cards, recent cities, loading state, and error handling.
3. Replace the long, repeated app narrative with a compact project contract.
4. Model the app as a smaller schema:
   - weather(city) -> summary + current + forecast + history + cache
5. Remove repeated explanations of state, fetch flow, and UI data mapping from the project brief.
6. Keep the product behavior and component logic intact, but express the project in a simpler, more reusable structure.
7. Use this smaller repo-level description when interacting with an AI assistant so the same task is explained with less prompt overhead.

This is the important shift: the app is not fundamentally different, but the amount of project context needed to describe it is smaller.

## Why this leads to lower token use

A verbose project description repeats the same concepts across many sections:

- state fields
- fetch logic
- weather object shape
- rendering responsibilities
- history tracking

The Aimata version compresses that into a reusable project contract. Less repeated language means lower prompt size and lower token consumption when the AI needs to understand the app.

The benefit is especially visible in larger repos where repeated context grows quickly.

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
