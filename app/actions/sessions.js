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
  return actions.chain(actions.http.post('https://api/sessions.json', form.values),
                       handleResponse(form));
}

// actions.http.post would notice .json and then be composition of following:
//
//   actions.chain(actions.json.stringify(form.values),
//                 actions.http.post('https://api/sessions.json'));
//                 actions.json.parse);
//
