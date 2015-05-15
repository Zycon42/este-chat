import {Record} from 'immutable';
import {threadsCursor, messagesCursor} from '../state';

export const Message = Record({
  id: '',
  authorName: '',
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
