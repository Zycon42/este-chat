import {Record, fromJS} from 'immutable';
import Cookies from 'cookies-js';
import {logged, logout} from '../auth/actions';
import {register} from '../dispatcher';
import {userCursor} from '../state';

const getIn = (path) => userCursor().getIn(path);

export const User = Record({
  id: null, name: null, email: null, avatarUrl: null
});

const dataKey = 'authData';

function unserializeDataFromStorage() {
  // local storage is available only on client
  if (process.env.IS_BROWSER) {
    return JSON.parse(localStorage.getItem(dataKey));
  }
  return null;
}

function serializeDataToStorage(json) {
  // local storage is available only on client
  if (process.env.IS_BROWSER) {
    localStorage.setItem(dataKey, JSON.stringify(json));
  }
}

export function loadDataFromJS(json) {
  return fromJS(json, (key, value) => {
    if (key === '') return new User(value);
  })
}

function storeData(data) {
   userCursor(user => { return user.setIn([dataKey], data); });
}

function getAuthData() {
  const cached = getIn([dataKey]);
  if (!cached) {
    const fromStorage = loadDataFromJS(unserializeDataFromStorage());
    storeData(fromStorage);
    return fromStorage;
  }
  return cached;
}

export const dispatchToken = register(({action, data}) => {

  switch (action) {
    case logged:
      storeData(loadDataFromJS(data));
      serializeDataToStorage(data);
      break;

    case logout:
      storeData(null);
      serializeDataToStorage(null);
      Cookies.expire('token');
      break;
  }

});

export function isLoggedIn() {
  return !!getAuthData();
}

export function getToken() {
  return Cookies.get('token');
}

export function getUser() {
  return isLoggedIn() ? getAuthData() : null;
}
