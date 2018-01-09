import React from 'react'

import CreateGameComponents from '../components/create_game'
import Buttons from '../components/core/buttons'

const { GridFormatContainer, PlayerNumberContainer } = CreateGameComponents
const { NavButton } = Buttons

export default () => (
  <div>
    <GridFormatContainer />
    <PlayerNumberContainer />
    <NavButton path="#" text="Продолжить" />
  </div>
)
