import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Screens from './screens'

export default () => (
  <Switch>
    <Route exact path="/" component={Screens.MainMenuScreen} />
    <Route path="/create_game" component={Screens.CreateGameScreen} />
    <Route path="/start_game" component={Screens.StartGameScreen} />
    <Route path="/load_game" component={Screens.LoadGameScreen} />
    <Route path="/edit_game" component={Screens.EditGameScreen} />
  </Switch>
);
