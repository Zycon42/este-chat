import React from 'react';
import {AppBar} from 'material-ui';

export default class ChatHome extends React.Component {

  render() {
    return (
      <div className="col-xs-12 col-sm-7 col-md-8 hidden-xs">
        <AppBar
          className="app-bar"
          showMenuIconButton={false}
          zDepth={0}
        />
        Default Chat
      </div>
    );
  }
}
