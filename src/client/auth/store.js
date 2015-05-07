import {authCursor} from '../state';
import * as actions from './actions';
import {register} from '../dispatcher';

export function getLoginForm() {
  return authCursor().getIn(['forms', 'login']);
}

export function getSignUpForm() {
  return authCursor().getIn(['forms', 'signUp']);
}

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    case actions.login:
      authCursor(auth => {
        return resetLoginForm(auth);
      });
      break;

    case actions.loginError:
      authCursor(auth => {
        const error = data;
        return auth.setIn(['forms', 'login', 'error'], error);
      });
      break;

    case actions.updateFormField:
      authCursor(auth => {
        const {form, name, value} = data;
        return auth.setIn(['forms', form, 'fields', name], value);
      });
      break;

    case actions.register:
      authCursor(auth => {
        return resetSignUpForm(auth);
      });
      break;

    case actions.registerError:
      authCursor(auth => {
        const error = data;
        return auth.setIn(['forms', 'signUp', 'error'], error);
      });
      break;
  }

});

function resetLoginForm(auth) {
  return auth
    .setIn(['forms', 'login', 'error'], null)
    .setIn(['forms', 'login', 'fields', 'username'], '')
    .setIn(['forms', 'login', 'fields', 'password'], '');
}

function resetSignUpForm(auth) {
  return auth
    .setIn(['forms', 'signUp', 'error'], null)
    .setIn(['forms', 'signUp', 'fields'], {
      name: '', email: '', password: '', passwordConfirmation: ''
    });
}
