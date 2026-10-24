export const compactProjectContext = {
  app: 'weather-dashboard',
  schema: ['city', 'summary', 'current', 'forecast', 'history', 'cache'],
  dataFlow: 'search -> geo -> weather -> render',
  benefit: 'project-level AI clarity with lower context noise',
  rules: 'reuse one compact app model for state, fetches, and UI',
}
