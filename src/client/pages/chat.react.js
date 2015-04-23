import DocumentTitle from 'react-document-title';
import React from 'react';
import {RouteHandler} from 'react-router';
import requireAuth from '../auth/requireauth.react';
import ThreadList from '../chat/threadlist.react';
import {getThreadsChrono} from '../chat/store';
import {state} from '../state';

// Leverage webpack require goodness for feature toggle based dead code removal.
require('./chat.styl');

class Chat extends React.Component {

  componentDidMount() {
    document.addEventListener('keypress', this.onDocumentKeypress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onDocumentKeypress);
  }

  onDocumentKeypress(e) {
    // Press shift+ctrl+s to save app state and shift+ctrl+l to load.
    if (!e.shiftKey || !e.ctrlKey) return;
    switch (e.keyCode) {
      case 19:
        window._appState = state.save();
        window._appStateString = JSON.stringify(window._appState);
        /*eslint-disable no-console */
        console.log('app state saved');
        console.log('copy the state to your clipboard by calling copy(_appStateString)');
        console.log('or type _appState and press enter');
        /*eslint-enable */
        break;
      case 12:
        const stateStr = window.prompt('Path the serialized state into the input'); // eslint-disable-line no-alert
        const newState = JSON.parse(stateStr);
        if (!newState) return;
        state.load(newState);
        break;
    }
  }

  render() {
    const threads = getThreadsChrono();

    return (
      <DocumentTitle title="Chat">
        <div className="chat">
          <ThreadList threads={threads}/>
          <RouteHandler />
        </div>
      </DocumentTitle>
    )
  }
}

export default requireAuth(Chat);
