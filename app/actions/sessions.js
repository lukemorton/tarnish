import { actions, actionMiddleware } from 'tarnish';
const { json } = actionMiddleware;

export function createSession({ values }) {
  return actions.post('https://api/sessions.json', values, [json], [json]);
}
