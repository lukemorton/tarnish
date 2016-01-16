export default function Application({ Page, state }) {
  return (
    <html>
      <body>
        {Page(state)}
      </body>
    </html>
  );
}
