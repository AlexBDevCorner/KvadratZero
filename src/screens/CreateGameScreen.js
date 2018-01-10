import React from 'react'

import CreateGameComponents from '../components/create_game'
import Buttons from '../components/core/buttons'

export default () => (
  <div>
    <CreateGameComponents.GridFormatContainer />
    <CreateGameComponents.PlayerNumberContainer />
    <Buttons.NavButton path="#" text="Продолжить" />
  </div>
)
