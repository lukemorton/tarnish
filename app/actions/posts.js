import { actions } from 'tarnish';

export function loadPostSummaries() {
  return actions.chain(actions.http.getJson('https://api/post_summaries.json'),
                       actions.convert.keysToCamelCase);
}

export function createPost(post) {
  return actions.chain(actions.convert.keysToSnakeCase(post),
                       actions.http.postJson('https://api/post_summaries.json'),
                       actions.convert.keysToCamelCase);
}
