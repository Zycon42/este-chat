import LinkComponent from '../components/linkcomponent.react';
import React from 'react';
import {Link} from 'react-router';
import {Thread} from './store';

export default class ThreadListItem extends LinkComponent {

  render() {
    const thread = this.props.thread;
    const lastMessage = thread.lastMessage;

    return (
      <li className="thread-list-item">
        <Link to="thread" params={{threadId: thread.id}}>
          <h5 className="thread-name">{thread.name}</h5>
          <div className="thread-time">
            {lastMessage.date.toLocaleTimeString()}
          </div>
          <div className="thread-last-message">
            {lastMessage.text}
          </div>
        </Link>
      </li>
    );
  }
}

ThreadListItem.propTypes = {
  thread: React.PropTypes.instanceOf(Thread)
};
