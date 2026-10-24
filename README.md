# Aimata Demo Comparison

This repo is a practical proof of the Aimata value proposition.

The same weather dashboard is built twice: once in a standard verbose project style and once in a compact Aimata-style project structure. The app behavior stays the same, but the project context needed to explain it to an AI agent is materially smaller.

This is the right comparison because the real value of Aimata is not just a UI library feature. It is project-level AI efficiency: less repeated context, less noise, and faster understanding across the repo.

In this demo, the compact version used substantially less project context than the verbose baseline. In larger real projects, the exact reduction depends on repo size, task scope, and model behavior, but the same pattern generally translates into lower prompt overhead, lower token usage, and less time spent on repeated context reloading.

## Projects

- `without-aimata/` — a conventional React weather app with an explicit, verbose project structure.
- `with-aimata/` — the same app using a compact project contract and AIMATA-style project context.

## Why this demo is better

This version is designed to show the real-world distribution of complexity in a standard repo:

- data fetching and state spread across multiple concerns
- explanatory project docs that repeat the same app contract
- longer prompts needed to explain the same feature to an AI agent

The Aimata version keeps the same outcome but reduces the explanation burden by using a more compact project schema and a clearer app contract.

## How this project was created

This repo is meant to prove the project-level Aimata workflow, not to import the Aimata package directly into the app itself.

1. Build the same weather dashboard twice in a simple React + Vite setup.
2. Keep both versions functionally identical so the comparison stays fair.
3. In the verbose version, add a long-form project context file that describes all state, data flow, fetch logic, and rendering responsibilities in a conventional way.
4. In the Aimata version, replace that long narrative with a compact project contract that explains the application at the repo level instead of repeating the same explanations in every section.
5. Measure the prompt footprint using a deterministic script that compares the same task with two different project briefs.
6. Show that the compact project structure reduces context overhead without changing the actual product behavior.

This is the core project-level idea: the repo itself tells the AI what the app is, instead of forcing the AI to rediscover the same structure repeatedly across files.

That is why you do not see an `@aimata-dsl/core` dependency in the app package.json. This demo is not meant to be a direct library consumer; it is a proof that repo-level structure and guidance can reduce AI context burden.

## Token comparison method

The repo includes a deterministic measurement script.

### What it measures

It keeps the task fixed and compares:

1. the verbose project briefing for the standard app
2. the compact project briefing for the Aimata-style app
3. the approximate prompt length using a simple normalized text estimate

This is a practical proxy for context size and model efficiency. For real provider-side billing, the actual benchmark should use the model's reported `prompt_tokens` value.

### Command

```bash
npm run measure:tokens
```

### Current result

```json
{
  "withoutAimata": {
    "promptLength": 1152,
    "label": "Verbose project briefing"
  },
  "withAimata": {
    "promptLength": 376,
    "label": "Compact Aimata project briefing"
  },
  "reductionPercent": 67
}
```

This demo is showing a clear project-level reduction of roughly 67% in the explanation footprint for the same app task.

## Weather app task

Both apps include the same core functionality:

- city search
- live weather lookup
- current conditions and highlights
- 5-day forecast
- recent searches in localStorage
- loading and error states

## Run locally

```bash
cd without-aimata && npm install && npm run dev
# or
cd with-aimata && npm install && npm run dev
```

## Why this is a solid proof

This repo demonstrates the exact value proposition behind Aimata:

- same app behavior
- same business goal
- less context noise
- better AI readability at the project level
- lower explanation overhead for agents that work across multiple files

This is the right story to show publicly because it explains the actual win in a way people can understand quickly.

---

The next step in a production benchmark would be to run the same prompt through a model provider and compare `usage.prompt_tokens` directly. This demo gives the same logic and makes the project-level efficiency story easy to explain and defend.
