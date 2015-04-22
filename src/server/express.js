/*eslint-disable no-console */

import compression from 'compression';
import bodyParser from 'body-parser';
import config from './config';
import express from 'express';
// import favicon from 'serve-favicon';
import routes from './routes';

export default function() {

  const app = express();

  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  // TODO: Add favicon.
  // app.use(favicon('assets/img/favicon.ico'))
  // TODO: Move to CDN.
  app.use('/build', express.static('build'));
  app.use('/assets', express.static('assets'));

  routes(app);

  app.listen(config.port);

  console.log(`App started on port ${config.port}`);

}
