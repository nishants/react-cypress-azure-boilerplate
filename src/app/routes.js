import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);
export default Routes;
