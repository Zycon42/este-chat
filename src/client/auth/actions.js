import setToString from '../../lib/settostring';
import {ValidationError} from '../../lib/validation';
import {dispatch} from '../dispatcher';
import {validate} from '../validation';
import {authenticate, createUser} from '../api';

export function updateFormField({target: {name, value}}, form) {
  // Both email and password max length is 100.
  value = value.slice(0, 100);
  dispatch(updateFormField, {form, name, value});
}

export function updateLoginFormField(field, form) {
  updateFormField(field, 'login');
}

export function updateSignUpFormField(field, form) {
  updateFormField(field, 'signUp');
}

export function login(fields) {
  return dispatch(login, validateLoginForm(fields)
    .then(() => {
      return validateCredentials(fields);
    })
    .catch(error => {
      loginError(error);
      throw error;
    }).then(authData => logged(authData))
  );
}

function validateLoginForm(fields) {
  return validate(fields)
    .prop('username').required()
    .prop('password').required().simplePassword()
    .promise;
}

function validateCredentials(fields) {
  return authenticate(fields.username, fields.password).catch(e => {
    throw new ValidationError('Invalid username or password', 'password');
  });
}

export function loginError(error) {
  dispatch(loginError, error);
}

export function logout() {
  dispatch(logout);
  // Always reload app on logout for security reasons.
  location.href = '/';
}

export function logged(authData) {
  dispatch(logged, authData);
}

export function register(fields) {
  return dispatch(register, validateSignUpForm(fields)
    .then(() => {
      return createUser(fields.name, fields.email, fields.password)
        .catch(res => {
          if (res.badRequest) throw new ValidationError(res.body.message, res.body.prop);
          throw res;
        });
    }).catch(error => {
      registerError(error);
      throw error;
    }).then(authData => logged(authData))
  );
}

export function registerError(error) {
  dispatch(registerError, error);
}

function validateSignUpForm(fields) {
  return validate(fields)
    .prop('name').required()
    .prop('email').required().email()
    .prop('password').required().simplePassword()
    .prop('passwordConfirmation').required().equals('password')
    .promise;
}

setToString('auth', {
  updateFormField, login, loginError, logged, logout, register, registerError
});
