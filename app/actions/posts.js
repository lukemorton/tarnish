import { actions, actionMiddleware } from 'tarnish';
const { json, convertKeysToSnakeCase, convertKeysToCamelCase } = actionMiddleware;

export function loadPostSummaries() {
  return actions.http.get('https://api/post_summaries.json', [json, convertKeysToCamelCase]);
}

export function createPost(post) {
  const url = 'https://api/post_summaries.json';
  return actions.http.post(url, post, [convertKeysToSnakeCase, json],
                                      [json, convertKeysToCamelCase]);
}
