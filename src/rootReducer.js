import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import playerListModule from './modules/player_list';

const rootReducer = combineReducers({
    playerList: playerListModule.reducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
