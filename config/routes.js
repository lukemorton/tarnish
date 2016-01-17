import { routes, pageRoute } from 'tarnish';
export default routes({ '/': pageRoute('home#Index', ['loadPostSummaries']) });
