import DocumentTitle from 'react-document-title';
import React from 'react';
import {Link, RouteHandler} from 'react-router';
import {AppCanvas, AppBar} from 'material-ui';
import exposeRouter from '../components/exposerouter.react';
import {isLoggedIn} from '../user/store';
import {state} from '../state';

// Leverage webpack require goodness for feature toggle based dead code removal.
require('./app.less');

class App extends React.Component {

  getAppBarTitle() {
    const routes = this.props.router.getCurrentRoutes();
    const breadCrumbs = routes.map(route => {
      return route.handler.displayName ? route.handler.displayName : undefined;
    }).filter(crumb => crumb != undefined);

    return breadCrumbs.join(' > ');
  }

  componentDidMount() {
    // Must be required here because there is no DOM in Node.js. Remember,
    // mocking DOM in Node.js is an anti-pattern, because it can confuse
    // isomorphic libraries. TODO: Wait for iOS fix, then remove.
    // http://developer.telerik.com/featured/300-ms-click-delay-ios-8/
    require('fastclick').attach(document.body);

    state.on('change', () => {
      /*eslint-disable no-console */
      console.time('whole app rerender');
      this.forceUpdate(() => {
        console.timeEnd('whole app rerender');
      });
      /*eslint-enable */
    });
  }

  render() {
    return (
      <DocumentTitle title='Este.js App'>
        <AppCanvas>
          <AppBar
            className="app-bar"
            title={this.getAppBarTitle()}
            zDepth={0}>
          </AppBar>

          <RouteHandler />
        </AppCanvas>
      </DocumentTitle>
    );
  }

}

App.propTypes = {
  router: React.PropTypes.func
};

export default exposeRouter(App);
