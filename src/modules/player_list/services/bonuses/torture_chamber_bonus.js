import { REMOVE_POINTS } from '../../actionTypes';

export default (points) => (
  {
      type: REMOVE_POINTS,
      points
  }
);
