import React from 'react';
import { Switch, Route } from 'react-router';

import MyProfile from '../components/MyProfile';
import Profile from '../components/Profile';
import Messages from '../components/Messages';
import Home from '../components/Home';
import Login from '../components/Login';
import PostView from '../components/PostView';

export default function Routes() {
  return (
    <Switch>
      <Route path="/my-profile">
        <MyProfile />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/user">
        <Profile />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route path="/post">
        <PostView />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
