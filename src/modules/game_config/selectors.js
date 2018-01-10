export const getGameConfig = (state) => ({
  gameConfig : state.gameConfig
})

export const getGridFormat = (state) => ({
  gridFormat : state.gameConfig.gridFormat
})

export const getPlayerNumber = (state) => ({
  playerNumber : state.gameConfig.playerNumber
})
