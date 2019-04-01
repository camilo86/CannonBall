import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import P2P from './services/p2p';

import HomePage from './containers/HomePage';
import FilesharePage from './containers/FilesharePage';
import NotFoundPage from './containers/NotFoundPage';

import 'normalize.css';

// initializes p2p service redux integration
P2P(store.dispatch);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/fileshare/:fileshareId" component={FilesharePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App;
