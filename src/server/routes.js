/*eslint-disable no-console */

import React from 'react';
import config from './config';
import render from './render';
import auth from './api/auth';
import {validateToken} from './api/auth/service';
import user from './api/user/';

export default function(app) {

  app.use('/api/auth', auth);
  app.use('/api/user', user);

  app.get('*', validateToken(), (req, res) => {
    const acceptsLanguages = req.acceptsLanguages(config.appLocales);
    render(req, res, acceptsLanguages || config.defaultLocale)
      .catch((error) => {
        const msg = error.stack || error;
        console.log(msg);
        res.status(500).send('500: ' + msg);
      });
  });
}
