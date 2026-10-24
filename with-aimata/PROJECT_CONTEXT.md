# Project Context: Aimata-Style Weather App

This project keeps the same weather dashboard behavior as the baseline project, but exposes a compact project contract instead of a verbose app description.

The app contract is simple: `weather(city)` -> `summary`, `current`, `forecast`, `history`, `cache`. The UI behavior stays the same, but the project context is shorter and more reusable.

The real benefit is not visual. It is structural. The developer or AI agent can understand the app through a smaller project model and reuse the same contract across fetch logic, state handling, and rendering.

The project is built around fewer repeated explanations, less context drift, and a clearer relationship between app intent and implementation. This reduces noise and makes it easier for AI systems to reason over the shape of the project without repeatedly parsing large sections of verbose definitions.

This is the value of Aimata: the same workflow, lower context overhead, and clearer project-level understanding.
