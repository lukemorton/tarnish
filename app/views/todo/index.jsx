import { views } from 'tarnish';

export default function Index(state) {
  return views.Form(state, function ({ Form, Field, Button }) {
    return (
      <Form action="addTask">
        <Field name="task" />
        <Submit>Add</Submit>
      </Form>
    )
  });
}
