import { actions } from 'tarnish';

export function addTask(form) {
  return actions.form.validator(form, function ({ validate }) {
    validate('task', { present: true });
  });
}
