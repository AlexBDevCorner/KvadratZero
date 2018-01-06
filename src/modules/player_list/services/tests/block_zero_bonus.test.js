import blockZeroBonus from '../bonuses/block_zero_bonus';
import { REMOVE_POINTS } from '../../actionTypes';

describe("BLOCK ZERO BONUS tests :", () => {

  const removePointsAction = {
    type : REMOVE_POINTS,
    points : {
      amount : 10,
      player : 'test name 1'
    }
  };

  it("should not change amount to 0", () => {
    const updatedAction = blockZeroBonus(removePointsAction);
    expect(updatedAction.points.amount).toBe(0);
  });
});
