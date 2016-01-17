import { actions } from 'tarnish';
const { json, convertKeysToCamelCase } = actions.middleware;

export function loadPostSummaries() {
  return actions.fetch('https://api/post_summaries.json', [json, convertKeysToCamelCase]);
}
