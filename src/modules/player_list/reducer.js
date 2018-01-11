import * as actionTypes from './actionTypes';
import { createPlayer, createBonus } from './models';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {

    case actionTypes.ADD_PLAYER:
      return [...state, createPlayer({ name : action.name })]

    case actionTypes.REMOVE_PLAYER:
      return state.filter((player) => player.name !== action.name)

    case actionTypes.CHANGE_PLAYER_NAME:
      return state.map((player) => (player.name === action.player.currentName)
        ? { ...player, name : action.player.newName } : player)

    case actionTypes.ADD_POINTS:
      return state.map((player) => {
        if (player.name === action.points.name) {
          const newPointsAmount = player.points + action.points.amount;
          return { ...player, points : newPointsAmount };
        }
        return player;
      })

    case actionTypes.REMOVE_POINTS:
      return state.map((player) => {
        if (player.name === action.points.name) {
          const newPointsAmount = player.points > action.points.amount ? player.points - action.points.amount : 0;
          return { ...player, points : newPointsAmount };
        }
        return player;
      })

    case actionTypes.SET_POINTS:
      return state.map((player) => player.name === action.points.name
        ? { ...player, points : action.points.amount } : player)

    case actionTypes.SET_CURRENT_PLAYER:
      return state.map((player) => {
        if (player.name === action.player) return { ...player, isCurrent : true }
        else if (player.isCurrent) return { ...player, isCurrent : false }
        return player;
      })

    case actionTypes.RESET_RIGHT_TO_MOVE:
      return state.map((player) => player.name === action.player ? { ...player, rightToMove : true } : player)

    case actionTypes.REMOVE_RIGHT_TO_MOVE:
      return state.map((player) => player.name === action.player ? { ...player, rightToMove : false} : player)

    case actionTypes.RESET_RIGHT_TO_MOVE_TO_ALL:
      return state.map((player) => action.except.includes(player.name)
        ? player : { ...player, rightToMove : true });

    case actionTypes.ADD_BONUS:
      return state.map((player) => {
        if (player.name === action.player) {
          const bonus = createBonus({
            actionType : action.bonus.actionType,
            turns : action.bonus.turns,
            name : action.bonus.name,
            modifier : action.bonus.modifier
          });
          return { ...player, bonuses : [ ...player.bonuses, bonus]}
        };
        return player;
      })

    case actionTypes.REMOVE_BONUSES:
      return state.map((player) => {
        const bonuses = player.bonuses.filter((bonus) => bonus.turns > 0);
        return { ...player, bonuses }
      })

    default:
      return state;
  }
}
