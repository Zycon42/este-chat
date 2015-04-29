import DocumentTitle from 'react-document-title';
import React from 'react';
import {RouteHandler, Link} from 'react-router';
import {AppCanvas, AppBar, LeftNav} from 'material-ui';
import requireAuth from '../auth/requireauth.react';
import ThreadList from '../chat/threadlist.react';
import UserItem from '../chat/useritem.react';
import {getUser} from '../user/store';
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

    const menuItems = [
      { text: <div>Foo</div> },
    ];

    const header = (
      <Link
        to="home" className="logo"
        onTouchTap={() => this.refs.leftNav.close()}
        >
        Chat
      </Link>
    );

    return (
      <DocumentTitle title="Este.js - Chat">
        <AppCanvas>
          <AppBar
            className="app-bar"
            title={<div className="mui-app-bar-title"><UserItem user={getUser()} /></div>}
            zDepth={0}
            onMenuIconButtonTouchTap={() => this.refs.leftNav.toggle() }
            >
          </AppBar>

          <LeftNav className="left-nav" ref="leftNav"
            docked={false}
            menuItems={menuItems}
            header={header}
          />

          <div className="page-container chat">
            <ThreadList threads={threads}/>
            <RouteHandler />
          </div>
        </AppCanvas>
      </DocumentTitle>
    )
  }
}

export default requireAuth(Chat);
