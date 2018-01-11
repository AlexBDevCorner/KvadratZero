export const createPlayer = (player = {}) => ({
  name : player.name || 'default player name',
  points : player.points || 0,
  isCurrent : player.isCurrent || false,
  rightToMove : player.rightToMove || false,
  bonuses : player.bonuses || []
});

export const createBonus = (bonus = {}) => ({
  actionType : bonus.actionType || 'default bonus action type',
  name : bonus.name || 'default bonus name',
  turns : bonus.turns || 0,
  modifier : bonus.modifier || function modifier(x) { return x }
});
