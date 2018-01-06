// import bonusList from '../bonusList';
//
// const strikeBonus = (addPointsAction) => (
//   {
//     ...addPointsAction,
//     points : {
//       ...addPointsAction.points,
//       amount : addPointsAction.points.amount * 2
//     }
//   }
// );
//
// const player = {
//   name : 'Bobby',
//   points : 10,
//   bonuses : [
//     {
//       type : 'ADD_POINTS',
//       bonusName : 'strikeBonus',
//       turns : 2,
//       action : strikeBonus
//     },
//     {
//       type : 'ADD_POINTS',
//       bonusName : 'strikeBonus',
//       turns : 2,
//       action : strikeBonus
//     }
//   ]
// }
//
// const playerList = [player];
//
// const createAddPointsAction = (amount, player) => (
//   {
//     type : 'add_points',
//     points : {
//       amount,
//       player
//     }
//   }
// );
//
// const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
//
// const buildAddPointsAction = (amount, {name, bonuses}) => {
//   const playerBonuses = bonuses
//     .filter((bonus) => bonus.type === 'ADD_POINTS')
//     .map((bonus) => bonus.action);
//   const composeCalc = [...playerBonuses, createAddPointsAction];
//   return compose.apply(null, composeCalc)(amount, name);
// }
//
//
// it('blabla', () => {
//   expect(bonusList.blockZeroBonus({points : { amount : 10 } }).points.amount).toBe(0);
// })
