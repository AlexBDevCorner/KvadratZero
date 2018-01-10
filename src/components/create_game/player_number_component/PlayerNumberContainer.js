import React, { Component } from 'react'
import PlayerNumberComponent from './PlayerNumberComponent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import GameConfigModule from '../../../modules/game_config'
import { players } from '../../../config'

const { selectors, actions } = GameConfigModule

class PlayerNumberContainer extends Component {

  render() {
    const { playerNumber, setPlayerNumber } = this.props
    return <PlayerNumberComponent players={players} playerNumber={playerNumber} action={setPlayerNumber} />
  }

}

const matchDispatchToProps = dispatch => bindActionCreators(
  { setPlayerNumber : actions.createSetPlayerNumberAction }, dispatch
)

export default connect(selectors.getPlayerNumber, matchDispatchToProps)(PlayerNumberContainer)
