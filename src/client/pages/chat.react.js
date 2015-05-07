import DocumentTitle from 'react-document-title';
import React from 'react';
import {RouteHandler} from 'react-router';
import {AppCanvas, AppBar, LeftNav, Paper} from 'material-ui';
import requireAuth from '../auth/requireauth.react';
import ThreadList from '../chat/threadlist.react';
import AppBarTitle from '../chat/appbartitle.react';
import NavigationHeader from '../chat/navigationheader.react';
import Logout from '../auth/logout.react';
import {getUser} from '../user/store';
import {getThreadsChrono} from '../chat/store';
import {state} from '../state';

// Leverage webpack require goodness for feature toggle based dead code removal.
require('./chat.less');

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
      {text: <Logout/>}
    ];

    const user = getUser();
    return (
      <DocumentTitle title="Este.js - Chat">
        <AppCanvas>
          <AppBar
            className="app-bar"
            onMenuIconButtonTouchTap={() => this.refs.leftNav.toggle() }
            title={<AppBarTitle user={user} />}
            zDepth={0}
          />

          <LeftNav className="left-nav" docked={false}
            header={<NavigationHeader user={user} />}
            menuItems={menuItems} ref="leftNav"
          />

          <div className="page-container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <Paper className="flex-paper" innerClassName="row" rounded={false}>
                  <ThreadList threads={threads}/>
                </Paper>
              </div>
              <div className="col-xs-12 col-md-8">
                <Paper className="flex-paper" innerClassName="row" rounded={false}>
                  <RouteHandler />
                </Paper>
              </div>
            </div>
          </div>
        </AppCanvas>
      </DocumentTitle>
    );
  }
}

export default requireAuth(Chat);
