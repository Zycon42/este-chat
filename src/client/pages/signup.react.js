import React from 'react';
import {Paper} from 'material-ui';
import {msg} from '../intl/store';
import SignUpForm from '../auth/signupform.react';

export default class SignUp extends React.Component {

  render() {
    return (
      <div className="container-fluid page-container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-3 col-md-6">
            <Paper className="content">
              <SignUpForm />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.displayName = msg('page.signup.title');
