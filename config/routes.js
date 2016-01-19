import { routes, pageRoute } from 'tarnish';

export default routes([
  ['/', pageRoute('home#Index', ['loadPostSummaries'])],
  ['/sessions/new', pageRoute('sessions#New')],
  ['/toggling', pageRoute('toggling#Index')],
  ['/todo', pageRoute('todo#Index')],
]);
