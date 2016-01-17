import { actions } from 'tarnish';
const { convertKeysToCamelCase } = actions.middleware;

export function loadPostSummaries() {
  return actions.fetchJson('https://api/post_summaries.json', [convertKeysToCamelCase]);
}
