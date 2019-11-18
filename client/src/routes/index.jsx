import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppContainer from '../containers/App';
import UsersPage from '../pages/Users';

const Routes = () => (
  <AppContainer>
    <Switch>
      <Route component={UsersPage} path="/users" />

      <Redirect from="/" to="/users" />
      <Redirect to="/error" />
    </Switch>
  </AppContainer>
);

export default Routes;
