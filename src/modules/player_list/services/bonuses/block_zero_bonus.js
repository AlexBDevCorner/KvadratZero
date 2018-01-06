export default (removePointsAction) => (
  {
    ...removePointsAction,
    points : {
      ...removePointsAction.points,
      amount : 0
    }
  }
);
