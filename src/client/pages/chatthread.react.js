import React from 'react';
import exposeRouter from '../components/exposerouter.react';
import {getThread, getMessaggesForThread} from '../chat/store';
import MessageListItem from '../chat/messagelistitem.react';

class ChatThread extends React.Component {

  render() {
    const threadId = this.props.router.getCurrentParams().threadId;
    const thread = getThread(threadId);
    const messages = getMessaggesForThread(threadId);
    return (
      <div className="message-section">
        <h3>{thread.name}</h3>
        <ul className="message-list" ref="messageList">
          {messages.map(message => {
            return <MessageListItem key={message.id} message={message}/>
          })}
        </ul>
      </div>
    );
  }
}

ChatThread.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(ChatThread);
