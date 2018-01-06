import reducer from '../reducer';
import * as actionTypes from '../actionTypes';

describe('Players reducer tests :', () => {
  describe('ADD_PLAYER action handling tests :', () => {
      const { ADD_PLAYER } = actionTypes;
      const addFirstPlayerAction = {
        type : ADD_PLAYER,
        name : 'test name 1'
      };
      const addSecondPlayerAction = {
        type : ADD_PLAYER,
        name : 'test name 2'
      };

      it('should return initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
      });

      it('should add one player', () => expect(reducer([], addFirstPlayerAction).length).toBe(1));

      it('should be able to add multiple players', () => {
        const tempState = reducer([], addFirstPlayerAction);
        expect(reducer(tempState, addSecondPlayerAction).length).toBe(2);
      });

      it('should return array with one player with correct name and 0 points', () => {
        const state = reducer([], addFirstPlayerAction);

        expect(state.length).toBe(1);

        expect(state[0]).toHaveProperty('name', 'test name 1');
        expect(state[0]).toHaveProperty('points', 0);
      });

      it('should return array with two players with correct name and 0 points', () => {
        const tempState = reducer([], addFirstPlayerAction);
        const finalState = reducer(tempState, addSecondPlayerAction);

        expect(finalState.length).toBe(2);

        expect(finalState[0]).toHaveProperty('name', 'test name 1');
        expect(finalState[0]).toHaveProperty('points', 0);

        expect(finalState[1]).toHaveProperty('name', 'test name 2');
        expect(finalState[1]).toHaveProperty('points', 0);
      });
  });

  describe('REMOVE_PLAYER action handling tests :', () => {
    const { REMOVE_PLAYER } = actionTypes;
    const initialState = [
      {
        name : 'test name 1',
        points : 10,
        isCurrent : false
      },
      {
        name : 'test name 2',
        points : 17,
        isCurrent : false
    }];

    const removePlayerAction = {
      type : REMOVE_PLAYER,
      name : 'test name 1'
    };

    const state = reducer(initialState, removePlayerAction);
    it('should remove player 1', () => {
      expect(state.length).toBe(1);
      expect(state[0].name).toBe('test name 2');
    });
  });

  describe('CHANGE_PLAYER_NAME action handling:', () => {
    const { CHANGE_PLAYER_NAME } = actionTypes;
    const initialState = [
      {
        name : 'test name 1',
        points : 10,
        isCurrent : false
    }];

    const changePlayerNameAction = {
      type : CHANGE_PLAYER_NAME,
      player : {
        currentName : 'test name 1',
        newName : 'new test name'
      }
    };

    it('should rename player',
      () => expect(reducer(initialState, changePlayerNameAction)[0].name).toBe('new test name'));
  });

  describe('ADD_POINTS action handling tests :', () => {
    const { ADD_POINTS } = actionTypes;
    const initialState = [
      {
        name : 'test name 1',
        points : 0,
        isCurrent : false
      }
    ];

    const addPointsAction = {
      type : ADD_POINTS,
      points : {
        amount : 10,
        name : 'test name 1'
      }
    };

    const state = reducer(initialState, addPointsAction);
    it('should add correct amount of points to player', () => expect(state[0].points).toBe(10));
  });

  describe('REMOVE_POINTS action handling tests :', () => {
    const { REMOVE_POINTS } = actionTypes;
    const initialState = [
      {
        name : 'test name 1',
        points : 25,
        isCurrent : false
      }
    ];

    const removePointsAction = {
      type : REMOVE_POINTS,
      points : {
        amount : 10,
        name : 'test name 1'
      }
    };

    const removePointsBelowZeroAction = {
      type : REMOVE_POINTS,
      points : {
        amount : 26,
        name : 'test name 1'
      }
    };

    it('should remove correct amount of points to player',
      () => expect(reducer(initialState, removePointsAction)[0].points).toBe(15));

    it('should set point amount to zero if it becomes negative',
      () => expect(reducer(initialState, removePointsBelowZeroAction)[0].points).toBe(0));
  });

  describe('SET_POINTS action handling tests :', () => {
    const { SET_POINTS } = actionTypes;
    const initialState = [
      {
        name : 'test name 1',
        points : 25,
        isCurrent : false
      }
    ];

    const setPointsAction = {
      type : SET_POINTS,
      points : {
        amount : 10,
        name : 'test name 1'
      }
    };

    const state = reducer(initialState, setPointsAction);
    it('should set correct amount of points to player', () => expect(state[0].points).toBe(10));
  });

  describe('SET_CURRENT_PLAYER action handling tests:', () => {
    const { SET_CURRENT_PLAYER } = actionTypes;

    const setCurrentPlayerAction = {
        type : SET_CURRENT_PLAYER,
        player : 'test name 2'
    }

    describe('Game start initial state:', () => {
      const initialState = [
        {
          name : 'test name 1',
          points : 10,
          isCurrent : false
        },
        {
          name : 'test name 2',
          points : 17,
          isCurrent : false
      }];

      const state = reducer(initialState, setCurrentPlayerAction);

      it('should set player 2 as current', () => expect(state[1].isCurrent).toBeTruthy());

      it('should not set player 1 as current', () => expect(state[0].isCurrent).toBeFalsy());
    });

    describe('Game already started initial state:', () => {
      const initialState = [
        {
          name : 'test name 1',
          points : 10,
          isCurrent : true
        },
        {
          name : 'test name 2',
          points : 17,
          isCurrent : false
      }];

      const state = reducer(initialState, setCurrentPlayerAction);

      it('should set player 2 as current', () => expect(state[1].isCurrent).toBeTruthy());

      it('should not set player 1 as current', () => expect(state[0].isCurrent).toBeFalsy());
    });

    describe('RESET_RIGHT_TO_MOVE action handling tests', () => {
      const { RESET_RIGHT_TO_MOVE } = actionTypes;
      const initialState = [
        {
          name : 'test name 1',
          rightToMove : false
        }
      ];

      const resetRightToMoveAction = {
        type : RESET_RIGHT_TO_MOVE,
        player : 'test name 1'
      };

      it('should give player right to move',
        () => expect(reducer(initialState, resetRightToMoveAction)[0].rightToMove).toBeTruthy());
    });

    describe('REMOVE_RIGHT_TO_MOVE action handling tests', () => {
      const { REMOVE_RIGHT_TO_MOVE } = actionTypes;
      const initialState = [
        {
          name : 'test name 1',
          rightToMove : true
        }
      ];

      const removeRightToMoveAction = {
        type : REMOVE_RIGHT_TO_MOVE,
        player : 'test name 1'
      };

      it('should remove right to move from player',
        () => expect(reducer(initialState, removeRightToMoveAction)[0].rightToMove).toBeFalsy());
    });

    describe('RESET_RIGHT_TO_MOVE_TO_ALL action handling tests', () => {
      const { RESET_RIGHT_TO_MOVE_TO_ALL } = actionTypes;
      const initialState = [
        {
          name : 'test name 1',
          rightToMove : false
        },
        {
          name : 'test name 2',
          rightToMove : false
      }];

      const resetRightToMoveToAllAction = {
        type : RESET_RIGHT_TO_MOVE_TO_ALL,
        except : []
      };

      const resetRightToMoveToAllExceptAction = {
        type : RESET_RIGHT_TO_MOVE_TO_ALL,
        except : ['test name 2']
      };

      it('should give right to move to all players', () => {
        const state = reducer(initialState, resetRightToMoveToAllAction);

        expect(state[0].rightToMove).toBe(true);
        expect(state[1].rightToMove).toBe(true);
      });

      it('should give right to move to all players except of second player', () => {
        const state = reducer(initialState, resetRightToMoveToAllExceptAction);

        expect(state[0].rightToMove).toBe(true);
        expect(state[1].rightToMove).toBe(false);
      });

    });

    describe('ADD_BONUS action handling tests', () => {
      const { ADD_BONUS } = actionTypes;

      const initialState = [
        {
          name : 'test name 1',
          points : 10,
          isCurrent : false,
          bonuses : []
      }];

      const addBonusAction = {
        type : ADD_BONUS,
        player : 'test name 1',
        bonus : {
          actionType : 'action type',
          name : 'some bonus',
          turns : 4,
          modifier : ((x) => x)
        }
      };

      it('should add one bonus to player', () => {
        const state = reducer(initialState, addBonusAction);
        expect(state[0].bonuses.length).toBe(1);
      });

    });

    describe('REMOVE_BONUS action handling tests', () => {
      const { REMOVE_BONUSES } = actionTypes;

      const initialState = [
        {
          name : 'test name 1',
          points : 10,
          isCurrent : false,
          bonuses : [
            {
              bonus : 'some bonus',
              turns : 0
            }
          ]
      }];

      const removeBonusAction = {
        type : REMOVE_BONUSES
      };

      it('should remove one bonus from player', () => {
        const state = reducer(initialState, removeBonusAction);
        expect(state[0].bonuses.length).toBe(0);
      });

    });
  });
});
