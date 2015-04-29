import React from 'react';
import PureComponent from '../components/purecomponent.react';
import {User} from '../user/store';

export default class NavigationHeader extends PureComponent {

  render() {
    const user = this.props.user;
    return (
      <div className="navigation-header">
        <img className="avatar" height="64" src={this.props.user.avatarUrl} />
        <div className="subtitle">
          <div className="user-name">{this.props.user.name}</div>
          <div className="user-email">{this.props.user.email}</div>
        </div>
      </div>
    );
  }
}

NavigationHeader.propTypes = {
  user: React.PropTypes.instanceOf(User)
}
