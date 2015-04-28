import React from 'react';
import {RouteHandler} from 'react-router';
import exposeRouter from '../components/exposerouter.react';
import FlatButtonLink from '../components/flatbuttonlink.react';
import {AppCanvas, AppBar, FlatButton} from 'material-ui';
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
    return (
        <AppCanvas>
          <AppBar
            className="app-bar"
            title={this.getAppBarTitle()}
            zDepth={0}
            //showMenuIconButton={false}
          >
            <ul className="right">
              <li><FlatButtonLink to="login" label={msg('auth.form.button.login')} /></li>
              <li><FlatButtonLink to="signup" label={msg('auth.form.button.signup')} /></li>
            </ul>
          </AppBar>

          <RouteHandler />
        </AppCanvas>
    );
  }
}

Public.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(Public);
