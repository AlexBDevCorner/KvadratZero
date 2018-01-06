import strikeBonus from '../bonuses/strike_bonus';
import { ADD_POINTS } from '../../actionTypes';

describe('STRIKE BONUS tests :', () => {

  const addPointsAction = {
    type : ADD_POINTS,
    points : {
      amount : 10,
      player : 'test name 1'
    }
  };

  it('should double points in addPointsAction',
    () => {
      const updatedAction = strikeBonus(addPointsAction);
      expect(updatedAction.points.amount).toBe(20);
    });
});
