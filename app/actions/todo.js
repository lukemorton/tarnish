import { actions } from 'tarnish';

function taskValid(form) {
  return actions.form.validator(form, function ({ validate }) {
    validate('task', { present: true });
  });
}

export function addTask(form) {
  return taskValid(form).then(function ({ values }) {
    return action.state.merge(function ({ todos }) {
      return { todos: [...todos, values] };
    });
  });
}
