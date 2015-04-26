import React from 'react';
import {TextField, FlatButton} from 'material-ui';
import {msg} from '../intl/store';
import exposeRouter from '../components/exposerouter.react';
import {focusInvalidField} from '../../lib/validation';
import {getSignUpForm} from './store';
import {updateSignUpFormField, register} from './actions';

class SignUpForm extends React.Component {

  onFormSubmit(e) {
    e.preventDefault();
    const fields = getSignUpForm().toJS().fields;
    register(fields)
      .then(() => {
        this.props.router.replaceWith('/');
      })
      .catch(focusInvalidField(this));
  }

  render() {
    const form = getSignUpForm().toJS();
    return (
      <form onSubmit={e => this.onFormSubmit(e)}>
        <fieldset>
          <TextField
            className="form-field"
            floatingLabelText="Name"
            hintText="Your name"
            name="name"
            value={form.fields.name}
            onChange={updateSignUpFormField}
            disabled={register.pending}
          />
          <TextField
            className="form-field"
            floatingLabelText="Email"
            hintText="your@email.com"
            name="email"
            type="email"
            value={form.fields.email}
            onChange={updateSignUpFormField}
            disabled={register.pending}
          />
          <TextField
            className="form-field"
            floatingLabelText="Password"
            hintText="password"
            type="password"
            name="password"
            value={form.fields.password}
            onChange={updateSignUpFormField}
            disabled={register.pending}
          />
          <TextField
            className="form-field"
            floatingLabelText="Confirm your password"
            hintText="password"
            type="password"
            name="passwordConfirmation"
            value={form.fields.passwordConfirmation}
            onChange={updateSignUpFormField}
            disabled={register.pending}
          />
          <FlatButton
            label="Sign up"
            primary={true}
          />
          {form.error &&
            <span className="error-message">{form.error.message}</span>
          }
        </fieldset>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(SignUpForm);
