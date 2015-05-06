import React from 'react';
import {Paper} from 'material-ui';
import LoginForm from '../auth/loginform.react';
import {msg} from '../intl/store';

export default class Login extends React.Component {

  render() {
    return (
      <div className="container-fluid page-container">
        <div className="row">
          <div className="col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6">
            <Paper className="form-container">
              <img src="assets/img/logo.png" />
              <LoginForm />
            </Paper>
          </div>
        </div>
      </div>
    );
  }

}

Login.displayName = msg('page.login.title');
