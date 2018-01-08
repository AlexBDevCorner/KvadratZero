import React from 'react';
import { Route, Switch } from 'react-router-dom';

import playerListModule from './modules/player_list';

const { PlayerPanelContainer } = playerListModule.components;

export default () => (
  <Switch>
    <Route exact path="/" render={() => (<PlayerPanelContainer playerCount="6" />)} />
    <Route path="/create_game" component={PlayerPanelContainer} />
    <Route path="/new_game" component={PlayerPanelContainer} />
    <Route path="/load_game" component={PlayerPanelContainer} />
  </Switch>
);
