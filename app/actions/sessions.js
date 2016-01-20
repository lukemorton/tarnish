import { actions } from 'tarnish';

export function createSession(form) {
  return actions.http.post('https://api/sessions.json', form).then(function ({ token }) {
    return actions.state.merge({ page: 'home#Index', token })
  });
}
