import * as actionTypes from '../actionTypes'
import * as actions from '../actions'

describe('Game Config action tests', () => {

  describe('SET_GRID_FORMAT action tests', () => {

    it('should create simple set grid format action', () => {

      const expectedAction = {
        type : actionTypes.SET_GRID_FORMAT,
        format : 8
      }

      expect(actions.createSetGridFormatAction(8)).toEqual(expectedAction)

    })
  })

  describe('SET_PLAYER_NUMBER action tests', () => {

    it('should create simple set player number action', () => {

      const expectedAction = {
        type : actionTypes.SET_PLAYER_NUMBER,
        playerNumber : 8
      }

      expect(actions.createSetPlayerNumberAction(8)).toEqual(expectedAction)

    })
  })
})
