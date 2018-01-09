import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../routes';
import { connect } from 'react-redux';

import store from '../rootReducer';

import { ipcRenderer as ipc } from 'electron';

import Toolbar from './Toolbar'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
              <Toolbar />
              <Routes />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
