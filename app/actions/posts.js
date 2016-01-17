import { actions } from 'tarnish';
const { json, convertKeysToSnakeCase, convertKeysToCamelCase } = actions.middleware;

export function loadPostSummaries() {
  return actions.get('https://api/post_summaries.json', [json, convertKeysToCamelCase]);
}

export function createPost(post) {
  const url = 'https://api/post_summaries.json';
  return actions.post(url, post, [convertKeysToSnakeCase, json],
                                 [json, convertKeysToCamelCase]);
}
