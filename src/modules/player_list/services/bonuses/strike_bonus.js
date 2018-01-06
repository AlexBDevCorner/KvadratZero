export default (addPointsAction) => (
  {
    ...addPointsAction,
    points : {
      ...addPointsAction.points,
      amount : addPointsAction.points.amount * 2
    }
  }
);
