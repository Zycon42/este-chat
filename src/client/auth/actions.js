import Promise from 'bluebird';
import setToString from '../../lib/settostring';
import {ValidationError} from '../../lib/validation';
import {dispatch} from '../dispatcher';
import {validate} from '../validation';
import request from 'superagent';

export function updateFormField({target: {name, value}}) {
  // Both email and password max length is 100.
  value = value.slice(0, 100);
  dispatch(updateFormField, {name, value});
}

export function login(fields) {
  return dispatch(login, validateForm(fields)
    .then(() => {
      return validateCredentials(fields);
    })
    .catch(error => {
      loginError(error);
      throw error;
    })
    .then((authData) => logged(authData))
  );
}

function validateForm(fields) {
  return validate(fields)
    .prop('username').required()
    .prop('password').required().simplePassword()
    .promise;
}

function validateCredentials(fields) {
  return new Promise((resolve, reject) => {
    request
      .post('/api/auth').send({username: fields.username, password: fields.password})
      .end((err, res) => {
        if (!res.ok)
          reject(new ValidationError('Wrong password', 'password'));
        else
          resolve(res.body);
      });
  });
}

export function loginError(error) {
  dispatch(loginError, error);
}

export function logged(authData) {
  dispatch(logged, authData);
}

export function logout() {
  // Always reload app on logout for security reasons.
  location.href = '/';
}

setToString('auth', {
  updateFormField, login, loginError, logged, logout
});
