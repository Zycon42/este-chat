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
      return route.handler.displayName ? route.handler.displayName : undefined;
    }).filter(crumb => crumb != undefined);

    return breadCrumbs.join(' > ');
  }

  render() {
    const menuItems = [
      { text: <Link to="login">{msg('auth.form.button.login')}</Link> },
      { text: <Link to="signup">{msg('auth.form.button.signup')}</Link> }
    ];

    const header = (
      <Link
        to="/" className="logo"
        onTouchTap={() => this.refs.leftNav.close()}
        >
        Este.js
      </Link>
    );

    return (
        <AppCanvas>
          <AppBar
            className="app-bar"
            title={this.getAppBarTitle()}
            zDepth={0}
            onMenuIconButtonTouchTap={() => this.refs.leftNav.toggle() }
          >
            <ul className="right hidden-sm">
              <li><FlatButtonLink to="login" label={msg('auth.form.button.login')} /></li>
              <li><FlatButtonLink to="signup" label={msg('auth.form.button.signup')} /></li>
            </ul>
          </AppBar>

          <LeftNav className="left-nav" ref="leftNav"
            docked={false}
            menuItems={menuItems}
            header={header}
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
