import { actions } from 'tarnish';

export function loadPostSummaries() {
  return actions.fetchJson('https://api/post_summaries.json', { convertKeysToCamelCase: true });
}
