import {Record} from 'immutable';
import {threadsCursor, messagesCursor} from '../state';

export const Author = Record({
  name: '',
  avatarUrl: ''
});

export const Message = Record({
  id: '',
  author: new Author(),
  text: '',
  date: new Date(),
  isRead: false
});

export const Thread = Record({
  id: '',
  name: '',
  avatarUrl: '',
  lastMessage: new Message()
});

function reviveMessage(message) {
  return new Message({
    id: message.get('id'),
    author: new Author(message.get('author').toJS()),
    text: message.get('text'),
    date: new Date(message.get('date'))
  });
}

export function reviveThreads(threads) {
  return threads.map(thread => {
    return new Thread({
      id: thread.get('id'),
      name: thread.get('name'),
      avatarUrl: thread.get('avatarUrl'),
      lastMessage: reviveMessage(thread.get('lastMessage'))
    });
  }).toMap();
}

export function reviveMessages(value) {
  return value.map(messages => {
    return messages.map(message => reviveMessage(message)).toList();
  }).toMap();
}

export function getThreads() {
  return threadsCursor();
}

export function getThreadsChrono() {
  return threadsCursor().valueSeq().sort((tA, tB) => {
    const dA = +tA.lastMessage.date;
    const dB = +tB.lastMessage.date;
    return dB - dA;
  }).toList();
}

export function getThread(id) {
  return threadsCursor().get(id);
}

export function getMessaggesForThread(threadId) {
  return messagesCursor().get(threadId);
}
