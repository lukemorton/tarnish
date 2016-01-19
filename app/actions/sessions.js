import { actions } from 'tarnish';

function handleResponse(form) {
  return function ({ token, errors }) {
    if (errors) {
      return actions.form.validationErrors(form, errors);
    } else {
      return actions.state.merge({ page: 'home#Index', token });
    }
  };
}

export function createSession(form) {
  return actions.http.post('https://api/sessions.json', form.values).then(handleResponse(form));
}
