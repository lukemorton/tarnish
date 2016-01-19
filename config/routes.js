import { routes, pageRoute } from 'tarnish';

export default routes([
  pageRoute('/',             { to: 'home#Index', actions: ['loadPostSummaries'] }),
  pageRoute('/sessions/new', { to: 'sessions#New' }),
  pageRoute('/toggling',     { to: 'toggling#Index' }),
  pageRoute('/todo',         { to: 'todo#Index' }),
]);
