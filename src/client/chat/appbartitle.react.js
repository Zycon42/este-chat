import React from 'react';
import PureComponent from '../components/purecomponent.react';
import {User} from '../user/store';

export default class AppBarTitle extends PureComponent {
  render() {
    return (
      <div className="mui-app-bar-title chat-title">
        <img className="avatar" height="44" src={this.props.user.avatarUrl} />
        <div className="user-info">
          <div className="user-name">{this.props.user.name}</div>
          <div className="user-email">{this.props.user.email}</div>
        </div>
      </div>
    );
  }
}

AppBarTitle.propTypes = {
  user: React.PropTypes.instanceOf(User)
}
