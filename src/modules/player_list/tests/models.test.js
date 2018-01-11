import * as models from '../models'

describe('player list models test :', () => {

  describe('player model tests :', () => {

    it('should create default new player object', () => {

      const expectedObject = {
        name : 'default player name',
        points : 0,
        isCurrent : false,
        rightToMove : false,
        bonuses : []
      }

      expect(models.createPlayer()).toEqual(expectedObject)

    })

    it('should create new player object with input data', () => {

      const bonus = models.createBonus()

      const expectedObject = {
        name : 'player1',
        points : 34,
        isCurrent : true,
        rightToMove : true,
        bonuses : [ bonus ]
      }

      expect(models.createPlayer({
        name : 'player1',
        points : 34,
        isCurrent : true,
        rightToMove : true,
        bonuses : [ bonus ]
      })).toEqual(expectedObject)

    })

  })

  describe('player model tests :', () => {

    it('should create default new bonus object', () => {

      const expectedObject = {
        actionType : 'default bonus action type',
        name : 'default bonus name',
        turns : 0,
        modifier : function(x) { return x }
      }

      const newBonus = models.createBonus()

      expect(newBonus).toEqual({
        ...expectedObject,
        modifier : expect.any(Function)
      })

      expect(newBonus.modifier.toString())
        .toBe(expectedObject.modifier.toString())

    })

    it('should create new bonus object with input data', () => {

      const newBonus = models.createBonus({
        actionType : 'ACTION_TYPE',
        name : 'NAME',
        turns : 5,
        modifier : function(x) { x * x }
      })

      const expectedObject = {
        actionType : 'ACTION_TYPE',
        name : 'NAME',
        turns : 5,
        modifier : function(x) { x * x }
      }

      expect(newBonus).toEqual({
        ...expectedObject,
        modifier : expect.any(Function)
      })

      expect(newBonus.modifier.toString())
        .toBe(expectedObject.modifier.toString())

    })

  })


})
