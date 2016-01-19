import { actions } from 'tarnish';

export function loadPostSummaries() {
  return actions.http.get('https://api/post_summaries.json');
}

export function createPost(post) {
  return actions.http.post('https://api/post_summaries.json');
}
