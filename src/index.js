import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './rootReducer';

import playerListModule from './modules/player_list';

const { PlayerPanelContainer } = playerListModule.components;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
          <PlayerPanelContainer playerCount="6"/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
