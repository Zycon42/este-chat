import PureComponent from '../components/purecomponent.react';
import React from 'react';
import {Link} from 'react-router';
import {Thread} from './store';

export default class ThreadListItem extends PureComponent {

  render() {
    const thread = this.props.thread;
    const lastMessage = thread.lastMessage;
    console.log(lastMessage);
    return (
      <li className="thread-list-item">
        <Link params={{threadId: thread.id}} to="thread">
          <img className="avatar" height="40" src={thread.avatarUrl} />
          <div className="thread-info">
            <header>
              <div className="thread-name">{thread.name}</div>
              <div className="thread-time">
                {lastMessage.date.toLocaleTimeString()}
              </div>
            </header>
            <div className="thread-last-message">
              {lastMessage.author.name === this.props.userName ? 'You:' : ''} {lastMessage.text}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

ThreadListItem.propTypes = {
  thread: React.PropTypes.instanceOf(Thread),
  userName: React.PropTypes.string
};
