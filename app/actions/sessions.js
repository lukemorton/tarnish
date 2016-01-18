import { actions } from 'tarnish';

function handleResponse(form) {
  return function (session) {
    if (session.errors) {
      return actions.form.validationErrors(form, session.errors);
    } else {
      return actions.router.redirectTo('home#Index');
    }
  };
}

export function createSession(form) {
  return actions.chain(actions.http.postJson('https://api/sessions.json', form.values),
                       handleResponse(form));
}

// actions.http.postJson would be composition of following:
//
//   actions.chain(actions.json.stringify(form.values),
//                 actions.http.post('https://api/sessions.json'));
//                 actions.json.parse);
//
