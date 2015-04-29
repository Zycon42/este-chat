import React from 'react';
import {FontIcon} from 'material-ui';
import {logout} from './actions';
import {msg} from '../intl/store';

export default class Logout extends React.Component {

  render() {
    return (
      <div className="menu-item logout" onClick={logout}>
        <FontIcon className="mdi mdi-exit-to-app" />
        <div>
          {msg('auth.logout.button')}
        </div>
      </div>
    );
  }

}
