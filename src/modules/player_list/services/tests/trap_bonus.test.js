import trapBonus from '../bonuses/trap_bonus';
import { RESET_RIGHT_TO_MOVE_TO_ALL } from '../../actionTypes';

describe("TRAP BONUS tests :", () => {

  const resetRightToMoveToAllAction = {
    type : RESET_RIGHT_TO_MOVE_TO_ALL,
    except : []
  };

  const resetRightToMoveToAllExceptAction = {
    type : RESET_RIGHT_TO_MOVE_TO_ALL,
    except : ["player 1"]
  };

  it("should add player 1 to 'except' property of resetRightToMoveToAllAction", () => {
    const updatedAction = trapBonus(resetRightToMoveToAllAction, ["player 1"]);
    expect(updatedAction.except).toEqual(["player 1"]);
  });

  it("should not change 'except' property of resetRightToMoveToAllExceptAction", () => {
    const updatedAction = trapBonus(resetRightToMoveToAllExceptAction, ["player 1"]);
    expect(updatedAction.except).toEqual(["player 1"]);
  });

  it("should add player 2 to 'except' property of resetRightToMoveToAllExceptAction", () => {
    const updatedAction = trapBonus(resetRightToMoveToAllExceptAction, ["player 1", "player 2"]);
    expect(updatedAction.except).toEqual(["player 1", "player 2"]);
  });

  it("should add player 2 'except' property of resetRightToMoveToAllExceptAction", () => {
    const updatedAction = trapBonus(resetRightToMoveToAllExceptAction, ["player 2"]);
    expect(updatedAction.except).toEqual(["player 1", "player 2"]);
  });

});
