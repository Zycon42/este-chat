import immutable from 'immutable';
import MessageComposer from './messagecomposer.react';
import MessageListItem from './messagelistitem.react';
import PureComponent from '../components/purecomponent.react';
import React from 'react';

export default class MessageSection extends PureComponent {

  componentDidUpdate() {
    const ul = this.refs.messageList.getDOMNode();
    ul.scrollTop = ul.scrollHeight;
  }

  render() {
    const messages = this.props.messages;
    return (
      <div className="message-section row">
        <div className="col-xs-12">
          <ul className="message-list" ref="messageList">
            {messages.map(message => {
              return <MessageListItem key={message.id} message={message}/>;
            })}
          </ul>
          <MessageComposer />
        </div>
      </div>
    );
  }
}

MessageSection.propTypes = {
  messages: React.PropTypes.instanceOf(immutable.List)
};
