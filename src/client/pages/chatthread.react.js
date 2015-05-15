import React from 'react';
import exposeRouter from '../components/exposerouter.react';
import {getThread, getMessaggesForThread} from '../chat/store';
import MessageListItem from '../chat/messagelistitem.react';
import MessageComposer from '../chat/messagecomposer.react';

class ChatThread extends React.Component {

  componentDidUpdate() {
    const ul = this.refs.messageList.getDOMNode();
    ul.scrollTop = ul.scrollHeight;
  }

  render() {
    const threadId = this.props.router.getCurrentParams().threadId;
    const thread = getThread(threadId);
    const messages = getMessaggesForThread(threadId);
    return (
      <div className="message-section row">
        <div className="col-xs-12">
          <h3 className="thread-name">{thread.name}</h3>
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

ChatThread.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(ChatThread);
