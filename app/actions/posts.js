import { actions } from 'tarnish';

export function loadPostSummaries() {
  return actions.http.get('https://api/post_summaries.json')
                     .then(postSummaries => actions.state.merge({ postSummaries }));
}

export function createPost(post) {
  return actions.http.post('https://api/post_summaries.json').then(function (postSummary) {
    return actions.state.merge(function ({ postSummaries }) {
      return [...postSummaries, postSummary];
    });
  });
}
