import * as actionTypes from '../actionTypes'
import reducer from '../reducer'

describe('Game Config reducer tests', () => {

  const initialState = {
    gridFormat : 0,
    playerNumber : 0
  }

  it('should return initial state', () => expect(reducer(undefined, {})).toEqual(initialState))

  describe('SET_GRID_FORMAT action handling tests', () => {

    const setGridFormatAction = {
      type : actionTypes.SET_GRID_FORMAT,
      format : 8
    }

    expect(reducer(initialState, setGridFormatAction).gridFormat).toBe(8)

  })

  describe('SET_PLAYER_NUMBER action handling tests', () => {

    const setPlayerNumberAction = {
      type : actionTypes.SET_PLAYER_NUMBER,
      playerNumber : 8
    }

    expect(reducer(initialState, setPlayerNumberAction).playerNumber).toBe(8)

  })

})
