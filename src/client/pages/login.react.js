import React from 'react';
import exposeRouter from '../components/exposerouter.react';
import {focusInvalidField} from '../../lib/validation';
import {getForm} from '../auth/store';
import {msg} from '../intl/store';
import {updateFormField, login} from '../auth/actions';
import {Paper, TextField, FlatButton, AppCanvas, AppBar} from 'material-ui';

require('./login.less');

class Login extends React.Component {

  onFormSubmit(e) {
    e.preventDefault();
    const fields = getForm().toJS().fields;
    login(fields)
      .then(() => {
        this.redirectAfterLogin();
      })
      .catch(focusInvalidField(this));
  }

  redirectAfterLogin() {
    // TODO: Probably use hard reload for Chrome to remember password.
    // https://code.google.com/p/chromium/issues/detail?id=43219#c56
    const nextPath = this.props.router.getCurrentQuery().nextPath;
    this.props.router.replaceWith(nextPath || '/');
  }

  renderForm(form) {
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <fieldset>
          <TextField
            className="form-field"
            floatingLabelText="Email"
            hintText={msg('auth.form.placeholder.email')}
            value={form.fields.email}
            onChange={updateFormField}
            disabled={login.pending}
            name="email"
          />
          <TextField
            className="form-field"
            floatingLabelText="Password"
            hintText={msg('auth.form.placeholder.password')}
            disabled={login.pending}
            name="password"
            onChange={updateFormField}
            type="password"
            value={form.fields.password}
          />
          <FlatButton
            className="btn-login"
            label={msg('auth.form.button.login')}
            disabled={login.pending}
            type="submit"
            primary={true}
          />
          {form.error &&
            <span className="error-message">{form.error.message}</span>
          }
        </fieldset>
      </form>
    );
  }

  render() {
    const form = getForm().toJS();

    return (
      <AppCanvas>
        <AppBar
          className="app-bar"
          title={msg('auth.form.legend')}
          zDepth={0}>
        </AppBar>

        <div className="container-fluid login-page">
          <div className="row">
            <div className="col-xs-12 col-md-offset-3 col-md-6">
              <Paper className="login">
                <div className="content">
                  <img src="assets/img/logo.png" />
                  {this.renderForm(form)}
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </AppCanvas>
    );
  }

}

Login.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(Login);
