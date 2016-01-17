import { views } from 'tarnish';

export default function New(state) {
  return (
    <div>
      <h1 className="type--page_title">Sign In</h1>

      {views.Form(state, function ({ Form, Field, Submit }) {
        return (
          <Form action="createSession">
            <Field name="email" />
            <Field name="password" />
            <Submit>Login</Submit>
          </Form>
        );
      })}
    </div>
  );
}
