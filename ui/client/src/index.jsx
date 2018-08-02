import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/entry/index';
import { Provider } from 'react-redux';
import store from './store/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from 'react-router-dom';
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
