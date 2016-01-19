import { appConfig, actionMiddleware } from 'tarnish';

export default appConfig({
  root: `${__dirname}/../`,
  actions: { http: { middleware: [actionMiddleware.serverSideSnakeCaseKeys] } }
});
