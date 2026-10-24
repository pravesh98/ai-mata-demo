# Aimata Demo Comparison

This repo is a project-level proof of the Aimata value proposition: the same weather dashboard is built twice, once with a normal verbose project briefing and once with a compact Aimata style structure.

The goal is to demonstrate that the same app can be understood with less AI context overhead, fewer repeated explanations, and more consistent project-level reasoning.

## Projects

- `without-aimata/` — standard React weather dashboard, verbose project structure and explicit state flow.
- `with-aimata/` — same weather app, but framed with a compact project schema and Aimata-style project context.

## Why this is the right comparison

This is not a component-library comparison. It is a project-level comparison.

The real win with Aimata is not that it changes the UI in a dramatic way. The real win is that it reduces the amount of context an AI agent needs to understand the project before making changes.

That matters when building with agentic workflows, repo-aware tooling, and large-scale app design where repeated explanations become expensive.

## Token comparison

The repo includes a reproducible estimator to compare the prompt size needed to describe the same weather app in both styles.

### Measurement method

We keep the task fixed and vary only the project briefing style.

1. Same weather app task on both projects.
2. Same requirements and same functional outcome.
3. Estimate the prompt length using a deterministic token approximation: roughly 1 token ≈ 4 characters of normalized text.
4. Compare the resulting prompt footprint for the standard verbose version versus the compact Aimata version.

This is intentionally a relative comparison and a practical proxy for context usage. For production billing, actual model APIs provide usage metadata such as `prompt_tokens` and `completion_tokens`.

### Current measured result

Running:

```bash
node scripts/context-estimate.js
```

produces this result:

```json
{
  "withoutAimata": {
    "promptLength": 456,
    "label": "Verbose project briefing"
  },
  "withAimata": {
    "promptLength": 232,
    "label": "Compact Aimata project briefing"
  },
  "reductionPercent": 49
}
```

This means the same app can be explained with roughly 49% fewer project-level prompt tokens when the context is compact and structured.

## Weather app task

Both apps include:

- weather search by city
- live Open-Meteo data
- recent search history via localStorage
- loading and error states
- highlight cards
- 5-day forecast
- same user-facing functionality in both variants

## How to run locally

```bash
cd without-aimata && npm install && npm run dev
# or
cd with-aimata && npm install && npm run dev
```

## Use this as a launch proof

This repo is designed to make the product story visible in a concrete way:

- Same task
- Same output behavior
- Less context noise
- Higher clarity for AI agents
- Better project-level reasoning

This is the core Aimata story: not just syntax compression, but project-aware AI efficiency across real workflows.

---

For a real production API benchmark, the next step would be to run the same prompt through a model provider and compare the provider-reported `usage.prompt_tokens` values. This repo gives you the stable local comparison and the same methodology needed to explain the project-level token story clearly.
