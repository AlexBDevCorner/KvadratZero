import React from 'react'
import { Route, Switch } from 'react-router-dom'

import playerListModule from './modules/player_list'
import Screens from './screens'

const {
  MainMenuScreen,
  CreateGameScreen
 } = Screens

export default () => (
  <Switch>
    <Route exact path="/" component={MainMenuScreen} />
    <Route path="/create_game" component={CreateGameScreen} />
    <Route path="/new_game" component={CreateGameScreen} />
    <Route path="/load_game" component={CreateGameScreen} />
  </Switch>
);
