import State from '../lib/state';
import Immutable from 'immutable';
import {Thread, Message} from './chat/store';
import {loadDataFromJS} from './user/store';

const initialState = process.env.IS_BROWSER
  ? window._appState
  : require('../server/initialstate');

export const state = new State(initialState, function(key, value) {
  if (key === 'threads')
    return value.map(thread => {
      return new Thread({
        id: thread.get('id'),
        name: thread.get('name'),
        lastMessage: new Message({
          id: thread.getIn(['lastMessage', 'id']),
          authorName: thread.getIn(['lastMessage', 'authorName']),
          text: thread.getIn(['lastMessage', 'text']),
          date: new Date(thread.getIn(['lastMessage', 'date']))
        })
      });
    }).toMap();

  if (this === initialState && key === 'messages')
    return value.map(messages => {
      return messages.map(message => {
        return new Message({
          id: message.get('id'),
          authorName: message.get('authorName'),
          text: message.get('text'),
          date: new Date(message.get('date'))
        });
      }).toList();
    }).toMap();

  if (key === 'authData')
    return loadDataFromJS(value.toJS());

  var isIndexed = Immutable.Iterable.isIndexed(value);
  return isIndexed ? value.toList() : value.toMap();
});

export const $pendingActionsCursor = state.cursor(['$pendingActions']);
export const authCursor = state.cursor(['auth']);
export const i18nCursor = state.cursor(['i18n']);
export const newTodoCursor = state.cursor(['newTodo']);
export const todosCursor = state.cursor(['todos']);
export const userCursor = state.cursor(['user']);
export const threadsCursor = state.cursor(['threads']);
export const messagesCursor = state.cursor(['messages']);
