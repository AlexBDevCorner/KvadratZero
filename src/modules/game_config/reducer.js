import * as actionTypes from './actionTypes'

const INITIAL_STATE = {
  gridFormat : 0,
  playerNumber : 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case actionTypes.SET_GRID_FORMAT :
      return { ...state, gridFormat : action.format }

    case actionTypes.SET_PLAYER_NUMBER :
      return { ...state, playerNumber : action.playerNumber }

    default :
      return state

  }
}
