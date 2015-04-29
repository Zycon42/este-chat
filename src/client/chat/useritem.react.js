import React from 'react';
import PureComponent from '../components/purecomponent.react';
import User from '../user/store';
import md5 from 'MD5';

function getProfilePicUrl(email) {
  const hash = md5(email.trim().toLowerCase());
  return `http://www.gravatar.com/avatar/${hash}?d=identicon`;
}

export default class UserItem extends PureComponent {
  render() {
    return (
      <div className="user-item">
        <img className="avatar" height="44" src={getProfilePicUrl(this.props.user.email)} />
        <div className="user-info">
          <div className="user-name">{this.props.user.name}</div>
          <div className="user-email">{this.props.user.email}</div>
        </div>
      </div>
    );
  }
}

UserItem.propTypes = {
  user: React.PropTypes.instanceOf(User)
}
