import React from 'react';
import PureComponent from '../components/purecomponent.react';
import {Message} from './store';

export default class MessageListItem extends PureComponent {

  render() {
    const message = this.props.message;
    return (
      <li className="message-list-item">
        <h5 className="message-author-name">{message.authorName}</h5>
        <div className="message-time">
          {message.date.toLocaleTimeString()}
        </div>
        <div className="message-text">{message.text}</div>
      </li>
    );
  }
}

MessageListItem.propTypes = {
  message: React.PropTypes.instanceOf(Message)
}
