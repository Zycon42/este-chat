import React from 'react';
import {RouteHandler, Link} from 'react-router';
import exposeRouter from '../components/exposerouter.react';
import FlatButtonLink from '../components/flatbuttonlink.react';
import {AppCanvas, AppBar, LeftNav} from 'material-ui';
import {msg} from '../intl/store';

class Public extends React.Component {

  getAppBarTitle() {
    const routes = this.props.router.getCurrentRoutes();
    const breadCrumbs = routes.map(route => {
      return route.handler.displayName ? route.handler.displayName : null;
    }).filter(crumb => !!crumb);

    return breadCrumbs.join(' > ');
  }

  render() {
    const menuItems = [
      {text: <Link to="login">{msg('auth.form.button.login')}</Link>},
      {text: <Link to="signup">{msg('auth.form.button.signup')}</Link>}
    ];

    const header = (
      <Link className="logo" onTouchTap={() => this.refs.leftNav.close()} to="/" >
        Este.js
      </Link>
    );

    return (
        <AppCanvas>
          <AppBar
            className="app-bar app-bar-extended icon-hidden-xs"
            onMenuIconButtonTouchTap={() => this.refs.leftNav.toggle() }
            title={this.getAppBarTitle()}
            zDepth={0}
          >
            <ul className="right hidden-sm">
              <li><FlatButtonLink label={msg('auth.form.button.login')} to="login" /></li>
              <li><FlatButtonLink label={msg('auth.form.button.signup')} to="signup" /></li>
            </ul>
          </AppBar>

          <LeftNav className="left-nav" docked={false}
            header={header}
            menuItems={menuItems}
            ref="leftNav"
          />

          <RouteHandler />
        </AppCanvas>
    );
  }
}

Public.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(Public);
