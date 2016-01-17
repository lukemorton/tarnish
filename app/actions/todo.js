export function addTask(form) {
  return actions.form.validation(form, function ({ validate }) {
    validate('task', { present: true });
  });
}
