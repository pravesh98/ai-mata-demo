# Aimata Demo Comparison

This repository contains two parallel React weather applications built to compare the same real-world task with and without Aimata-style project-level AI compression.

## Projects

- `without-aimata/` — a standard React weather dashboard with direct, verbose state/data structures.
- `with-aimata/` — the same dashboard using compact, schema-first data handling and Aimata-style structure conventions.

## Why this repo exists

The goal is simple: demonstrate that the same workflow can be expressed more efficiently for AI agents and human maintainers when the project uses an Aimata-aware structure.

## Example comparison

These values are illustrative and meant for demo purposes, not a benchmark claim.

| Metric | Without Aimata | With Aimata | Notes |
| --- | ---: | ---: | --- |
| Estimated prompt/context size | ~7.2k tokens | ~3.4k tokens | Roughly 53% reduction |
| Typical iteration time | 10–15 min | 5–8 min | Faster context reuse |
| Maintainability | Medium | High | More compact app schema |

## Weather app task

Both apps fetch live weather data from Open-Meteo and include:

- city search
- recent searches
- weather cards
- 5-day forecast
- cache layer using localStorage
- loading and error states

## Run locally

```bash
cd without-aimata && npm install && npm run dev
# or
cd with-aimata && npm install && npm run dev
```

## Public use case

This is meant to show the value of project-level AI structure in real workflows: the same problem can be solved with lower context overhead, less noise, and more consistent AI understanding.

---

This repo is a demo companion for Aimata DSL and is intended to make the value proposition easy to see in a real app scenario.
