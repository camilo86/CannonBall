import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './containers/HomePage';
import NotFoundPage from './containers/NotFoundPage';

import 'normalize.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default App;
