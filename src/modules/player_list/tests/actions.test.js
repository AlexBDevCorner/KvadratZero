import * as actions from '../actions';
import * as actionTypes from '../actionTypes';
import bonusList from '../services/bonusList';
import { createPlayer, createBonus } from '../models';

describe('Player actions tests :', () => {

  describe('ADD_PLAYER action tests :', () => {

    const player = 'player';

    const expectedAction ={
      type : actionTypes.ADD_PLAYER,
      name : 'player'
    };

    it('should create simple ADD_PLAYER action', () => {
      expect(actions.createAddPlayerAction(player)).toEqual(expectedAction);
    });

  });

  describe('REMOVE_PLAYER action tests :', () => {

    const player = 'player';

    const expectedAction ={
      type : actionTypes.REMOVE_PLAYER,
      name : 'player'
    };

    it('should create simple REMOVE_PLAYER action', () => {
      expect(actions.createRemovePlayerAction(player)).toEqual(expectedAction);
    });

  });

  describe('CHANGE_PLAYER_NAME action tests :', () => {

    const currentName = 'player';
    const newName = 'player1';

    const expectedAction ={
      type : actionTypes.CHANGE_PLAYER_NAME,
      currentName,
      newName
    };

    it('should create simple CHANGE_PLAYER_NAME action', () => {
      expect(actions.createChangePlayerNameAction(currentName, newName)).toEqual(expectedAction);
    });

  });

  describe('ADD_POINTS action tests :', () => {

    const amount = 5;
    const playerName = 'player';

    it('should create simple add points action', () => {

      const expectedAction = {
        type : actionTypes.ADD_POINTS,
        points : {
          amount : 5,
          name : 'player'
        }
      }

      expect(actions.createAddPointsAction(amount, playerName)).toEqual(expectedAction);
    });

    it('should build add points action with 2x amount of points', () => {

      const bonus1 = createBonus({
        actionType : actionTypes.ADD_POINTS,
        name : 'strikeBonus',
        turns : 2,
        modifier : bonusList.strikeBonus
      });

      const player = createPlayer({
        name : playerName,
        bonuses : [
          bonus1
        ]
      });

      const expectedAction = {
        type : actionTypes.ADD_POINTS,
        points : {
          amount : 10,
          name : 'player'
        }
      }

      expect(actions.buildAddPointsAction(amount, player)).toEqual(expectedAction);

    });

    it('should build add point action with 4x amount of points', () => {

      const bonus1 = createBonus({
        actionType : actionTypes.ADD_POINTS,
        name : 'strikeBonus',
        turns : 2,
        modifier : bonusList.strikeBonus
      });

      const bonus2 = createBonus({
        actionType : actionTypes.ADD_POINTS,
        name : 'strikeBonus',
        turns : 2,
        modifier : bonusList.strikeBonus
      });

      const player = createPlayer({
        name : playerName,
        bonuses : [
          bonus1,
          bonus2
        ]
      });

      const expectedAction = {
        type : actionTypes.ADD_POINTS,
        points : {
          amount : 20,
          name : 'player'
        }
      }

      expect(actions.buildAddPointsAction(amount, player)).toEqual(expectedAction);

    });
  });

  describe('REMOVE_POINTS action tests :', () => {

    const playerName = 'player';
    const amount = 10;

    it('should create simple remove points action', () => {
      const expectedAction = {
        type : actionTypes.REMOVE_POINTS,
        points : {
          amount : 10,
          name : 'player'
        }
      }

      expect(actions.createRemovePointsAction(amount, playerName)).toEqual(expectedAction);
    })

  });

  describe('SET_POINTS action tests', () => {

    const playerName = 'player';
    const amount = 10;

    it('should create simple set point action', () => {
      const expectedAction = {
        type : actionTypes.SET_POINTS,
        points : {
          amount : 10,
          name : 'player'
        }
      };

      expect(actions.createSetPointsAction(amount, playerName)).toEqual(expectedAction);
    });
  });

  describe('SET_CURRENT_PLAYER action tests', () => {

    const playerName = 'player';

    it('should create simple set current player action', () => {
      const expectedAction = {
          type : actionTypes.SET_CURRENT_PLAYER,
          player : 'player'
      }

      expect(actions.createSetCurrentPlayerAction(playerName)).toEqual(expectedAction);
    });

  });

  describe('RESET_RIGHT_TO_MOVE action tests', () => {

    const playerName = 'player';

    it('should create simple reset right to move action', () => {
      const expectedAction = {
          type : actionTypes.RESET_RIGHT_TO_MOVE,
          player : 'player'
      }

      expect(actions.createResetRightToMoveAction(playerName)).toEqual(expectedAction);
    });

  });

  describe('REMOVE_RIGHT_TO_MOVE action tests', () => {

    const playerName = 'player';

    it('should create simple remove right to move action', () => {
      const expectedAction = {
          type : actionTypes.REMOVE_RIGHT_TO_MOVE,
          player : 'player'
      }

      expect(actions.createRemoveRightToMoveAction(playerName)).toEqual(expectedAction);
    });

  });

  describe('RESET_RIGHT_TO_MOVE_TO_ALL action tests', () => {

    const playerName = 'player';

    it('should create simple reset right to move action to all action without exception players', () => {
      const expectedAction = {
          type : actionTypes.RESET_RIGHT_TO_MOVE_TO_ALL,
          except : []
      }

      expect(actions.createResetRightToMoveToAllAction()).toEqual(expectedAction);
    });

    it('should create simple reset right to move action to all action with one exception', () => {
      const expectedAction = {
          type : actionTypes.RESET_RIGHT_TO_MOVE_TO_ALL,
          except : [playerName]
      }

      expect(actions.createResetRightToMoveToAllAction([playerName])).toEqual(expectedAction);
    });

  });

  describe('ADD_BONUS action tests', () => {

    const playerName = 'player';

    it('should create simple add bonus action', () => {
      const expectedAction = {
        type : actionTypes.ADD_BONUS,
        player : 'player',
        bonus : {
          actionType : 'action type',
          name : 'some bonus',
          turns : 4,
          modifier : 'function replacer'
        }
      };

      const newBonus = {
        actionType : 'action type',
        name : 'some bonus',
        turns : 4,
        modifier : 'function replacer'
      };

      expect(actions.createAddBonusAction(playerName, newBonus)).toEqual(expectedAction);
    });

  });

  describe('REMOVE_BONUSES action test', () => {

    it('should create simple remove bonuses action', () => {
      const expectedAction = {
        type : actionTypes.REMOVE_BONUSES
      };

      expect(actions.createRemoveBonusAction()).toEqual(expectedAction);
    });
  });

});
