import React from 'react';
import {TextField, FlatButton} from 'material-ui';
import FlatButtonLink from '../components/flatbuttonlink.react';
import exposeRouter from '../components/exposerouter.react';
import {focusInvalidField} from '../../lib/validation';
import {getLoginForm} from './store';
import {msg} from '../intl/store';
import {updateLoginFormField, login} from './actions';

class LoginForm extends React.Component {

  onFormSubmit(e) {
    e.preventDefault();
    const fields = getLoginForm().toJS().fields;
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

  render() {
    const form = getLoginForm().toJS();
    return (
      <form onSubmit={(e) => this.onFormSubmit(e)}>
        <fieldset>
          <TextField
            className="form-field"
            floatingLabelText="Username"
            hintText={msg('auth.form.placeholder.username')}
            value={form.fields.username}
            onChange={updateLoginFormField}
            disabled={login.pending}
            name="username"
          />
          <TextField
            className="form-field"
            floatingLabelText="Password"
            hintText={msg('auth.form.placeholder.password')}
            disabled={login.pending}
            name="password"
            onChange={updateLoginFormField}
            type="password"
            value={form.fields.password}
          />
          <FlatButton
            label={msg('auth.form.button.login')}
            disabled={login.pending}
            primary={true}
          />
          <FlatButtonLink
            to="signup"
            label={msg('auth.form.button.signup')}
            secondary={true}
          />
          {form.error &&
            <span className="error-message">{form.error.message}</span>
          }
        </fieldset>
      </form>
    );
  }
}

LoginForm.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(LoginForm);
