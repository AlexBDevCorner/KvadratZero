import * as actionTypes from './actionTypes';
import { compose } from '../../helpers/GeneralHelper';
import { createBonus } from './models';

//ADD_PLAYER ACTION CREATORS

export const createAddPlayerAction = (playerName) => ({
  type : actionTypes.ADD_PLAYER,
  name : playerName
})

// REMOVE_PLAYER ACTION CREATORS

export const createRemovePlayerAction = (playerName) => ({
  type : actionTypes.REMOVE_PLAYER,
  name : playerName
})

//CHANGE_PLAYER_NAME ACTION CREATORS

export const createChangePlayerNameAction = (currentName, newName) => ({
  type : actionTypes.CHANGE_PLAYER_NAME,
  currentName,
  newName
})

// ADD_POINTS ACTION CREATORS

export const createAddPointsAction = (amount, name) => (
  {
    type : actionTypes.ADD_POINTS,
    points : {
      amount,
      name
    }
  }
)

export const buildAddPointsAction = (amount, { name, bonuses }) => {
  const playerBonuses = bonuses
    .filter((bonus) => bonus.actionType === actionTypes.ADD_POINTS)
    .map((bonus) => bonus.modifier);
  return compose.apply(null, [...playerBonuses, createAddPointsAction])(amount, name);
}

//REMOVE_POINTS ACTION CREATORS

export const createRemovePointsAction = (amount, name) => ({
  type : actionTypes.REMOVE_POINTS,
  points : {
    amount,
    name
  }
})

//SET_POINTS ACTION CREATORS

export const createSetPointsAction = (amount, name) => ({
  type : actionTypes.SET_POINTS,
  points : {
    amount,
    name
  }
})

//SET_CURRENT_PLAYER ACTION CREATORS

export const createSetCurrentPlayerAction = (playerName) => ({
  type : actionTypes.SET_CURRENT_PLAYER,
  player : playerName
})

//RESET_RIGHT_TO_MOVE ACTION CREATORS

export const createResetRightToMoveAction = (playerName) => ({
  type : actionTypes.RESET_RIGHT_TO_MOVE,
  player : playerName
})

//REMOVE_RIGHT_TO_MOVE ACTION CREATORS

export const createRemoveRightToMoveAction = (playerName) => ({
  type : actionTypes.REMOVE_RIGHT_TO_MOVE,
  player : playerName
})

//RESET_RIGHT_TO_MOVE_TO_ALL ACTION CREATORS

export const createResetRightToMoveToAllAction = (except = []) => ({
  type : actionTypes.RESET_RIGHT_TO_MOVE_TO_ALL,
  except
})

//ADD_BONUS ACTION CREATORS

export const createAddBonusAction = (playerName, bonus) => {
  const newBonus = createBonus(bonus);

  return {
    type : actionTypes.ADD_BONUS,
    player : playerName,
    bonus : newBonus
  }
}

//REMOVE_BONUSES ACTION CREATORS

export const createRemoveBonusAction = () => ({
  type : actionTypes.REMOVE_BONUSES
})
