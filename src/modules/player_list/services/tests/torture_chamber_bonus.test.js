import tortureChamberBonus from '../bonuses/torture_chamber_bonus';
import { REMOVE_POINTS } from '../../actionTypes';

describe("TORTURE CHAMBER BONUS tests :", () => {

  const configuredAmount = 10;

  it("should return REMOVE_POINTS action with configured amount of points", () => {

    const expectedRemoveAction = {
      type : REMOVE_POINTS,
      points : {
        amount : 10,
        player : 'player 1'
      }
    };

    expect(tortureChamberBonus({ amount : configuredAmount, player : 'player 1'})).toEqual(expectedRemoveAction);
  });
});
