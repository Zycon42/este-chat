import State from '../lib/state';
import Immutable from 'immutable';
import {reviveThreads, reviveMessages} from './chat/store';
import {loadDataFromJS} from './user/store';

const initialState = process.env.IS_BROWSER
  ? window._appState
  : require('../server/initialstate');

export const state = new State(initialState, function(key, value) {
  if (key === 'threads')
    return reviveThreads(value);

  if (this === initialState && key === 'messages')
    return reviveMessages(value);

  if (key === 'authData')
    return loadDataFromJS(value.toJS());

  var isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toMap();
});

export const authCursor = state.cursor(['auth']);
export const i18nCursor = state.cursor(['i18n']);
export const newTodoCursor = state.cursor(['newTodo']);
export const pendingActionsCursor = state.cursor(['pendingActions']);
export const todosCursor = state.cursor(['todos']);
export const userCursor = state.cursor(['user']);
export const threadsCursor = state.cursor(['threads']);
export const messagesCursor = state.cursor(['messages']);
