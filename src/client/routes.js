import App from './app/app.react';
import Login from './pages/login.react';
import NotFound from './pages/notfound.react';
import Chat from './pages/chat.react';
import ChatThread from './pages/chatthread.react';
import ChatHome from './pages/chathome.react';
import SignUp from './pages/signup.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route, Redirect} from 'react-router';

export default (
  <Route handler={App} path="/">
    <Route handler={Chat} path="thread">
        <Route name="thread" path=":threadId" handler={ChatThread} />
        <DefaultRoute name="home" handler={ChatHome} />
    </Route>
    <Redirect from="/" to="home" />
    <Route handler={Login} name="login" />
    <Route handler={SignUp} name="signup" />
    <NotFoundRoute handler={NotFound} name="not-found" />
  </Route>
);
