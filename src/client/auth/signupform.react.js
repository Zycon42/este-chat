import React from 'react';
import {TextField, FlatButton} from 'material-ui';
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
            disabled={register.pending}
            floatingLabelText="Name"
            hintText="Your name"
            name="name"
            onChange={updateSignUpFormField}
            value={form.fields.name}
          />
          <TextField
            className="form-field"
            disabled={register.pending}
            floatingLabelText="Email"
            hintText="your@email.com"
            name="email"
            onChange={updateSignUpFormField}
            type="email"
            value={form.fields.email}
          />
          <TextField
            className="form-field"
            disabled={register.pending}
            floatingLabelText="Password"
            hintText="password"
            name="password"
            onChange={updateSignUpFormField}
            type="password"
            value={form.fields.password}
          />
          <TextField
            className="form-field"
            disabled={register.pending}
            floatingLabelText="Confirm your password"
            hintText="password"
            name="passwordConfirmation"
            onChange={updateSignUpFormField}
            type="password"
            value={form.fields.passwordConfirmation}
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
