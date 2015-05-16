import exposeRouter from '../components/exposerouter.react';
import MessageSection from '../chat/messagesection.react.js';
import React from 'react';
import {AppBar} from 'material-ui';
import {getThread, getMessaggesForThread} from '../chat/store';

class ChatThread extends React.Component {

  render() {
    const threadId = this.props.router.getCurrentParams().threadId;
    const thread = getThread(threadId);
    const messages = getMessaggesForThread(threadId);
    return (
      <div className="col-xs-12 col-sm-7 col-md-8">
        <AppBar
          className="app-bar icon-visible-xs"
          iconClassNameLeft="mdi mdi-arrow-left"
          onMenuIconButtonTouchTap={() => this.props.router.transitionTo('home') }
          title={thread.name}
          zDepth={0}
        />
        <MessageSection messages={messages} />
      </div>
    );
  }
}

ChatThread.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(ChatThread);
