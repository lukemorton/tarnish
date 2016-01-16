import { routes, pageRoute } from 'tarnish';
const routes = routes({ '/': pageRoute('home#Index', [loadPostSummaries]) });
export default routes;
