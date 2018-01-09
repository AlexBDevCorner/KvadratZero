import React, { Component } from 'react'
import PlayerNumberComponent from './PlayerNumberComponent'

import { players } from '../../../config'

class PlayerNumberContainer extends Component {

  render() {
    return <PlayerNumberComponent players={players} />
  }

}

export default PlayerNumberContainer
