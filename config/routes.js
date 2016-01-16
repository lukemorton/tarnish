import { routes, page } from 'tarnish';
const routes = routes({ '/': page('Index', [loadPostSummaries]) });
export default routes;
