# With Aimata

This project is the compact, project-aware version of the same weather dashboard.

It demonstrates the value of Aimata-style project structure: the app keeps the same user-facing behavior, but the context needed to explain the project to an AI agent is cleaner, smaller, and easier to reuse.

## How this version was created

This app was intentionally created to illustrate the real project-level Aimata workflow, not just an import or a library code snippet.

1. Start with a fresh app idea: a weather dashboard with search, recent cities, loading/error states, and a 5-day forecast.
2. Initialize the project with the Aimata repo-level setup flow.
3. Add the repo-wide AI instructions for the tools you are using, such as Cursor rules, Claude rules, and Copilot guidance.
4. Add a compact project definition that tells the AI the app contract in a small, reusable format:
   - weather(city) -> summary + current + forecast + history + cache
5. Ask the AI to generate the app based on that project-level understanding instead of a long, repeated feature narrative.
6. Keep the product behavior and UI intent identical to the verbose baseline while reducing the amount of project context the model needs to hold.
7. Let the generated app use the same weather data flow, but under a smaller and cleaner repo-level contract.
8. Compare the output with the standard version to show that the project-level workflow reduces prompt size and token usage without changing the product outcome.

This is the important shift: the app is not fundamentally different, but the project context that describes it is much smaller and more reusable.

In a real repo, the flow is:

```bash
npx aimata-dsl init
```

Then the repo gets AI instructions for Cursor, Claude, or Copilot, and the AI works from that shared project-level guidance instead of re-learning the same structure across every file.

That is the actual project-level value: configure the repo once, then let the agent generate and update the app using a smaller context footprint.

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
