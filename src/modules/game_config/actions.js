import * as actionTypes from './actionTypes'

export const createSetGridFormatAction = (format) => ({
  type : actionTypes.SET_GRID_FORMAT,
  format
})

export const createSetPlayerNumberAction = (playerNumber) => ({
  type : actionTypes.SET_PLAYER_NUMBER,
  playerNumber
})
