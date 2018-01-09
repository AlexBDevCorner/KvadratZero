import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import playerListModule from './modules/player_list'
import gameConfigModule from './modules/game_config'

const rootReducer = combineReducers({
    playerList : playerListModule.reducer,
    gameConfig : gameConfigModule.reducer
})

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(thunk)
)

export default store
