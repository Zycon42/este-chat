import {Record, fromJS} from 'immutable';
import {logged} from '../auth/actions';
import {register} from '../dispatcher';
import {userCursor} from '../state';

const getIn = (path) => userCursor().getIn(path);

export const User = Record({
  id: null, name: null, email: null, avatarUrl: null
});

const AuthData = Record({
  token: null, user: new User()
});

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    case logged:
      userCursor(user => {
        return user.setIn(['authData'], fromJS(data, (key, value) => {
          if (key === 'user') return new User(value);
          if (key === '') return new AuthData(value);
        }));
      });
      break;
  }

});

export function isLoggedIn() {
  // TODO: Use sessionStorage and real redirect to fix Chrome.
  return !!getIn(['authData']);
}

export function getToken() {
  return isLoggedIn() ? getIn(['authData']).token : null;
}

export function getUser() {
  return isLoggedIn() ? getIn(['authData']).user : null;
}
