import React, { Component } from 'react'
import GridFormatComponent from './GridFormatComponent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import GameConfigModule from '../../../modules/game_config'
import { formats } from '../../../config'

const { selectors, actions } = GameConfigModule

class GridFormatContainer extends Component {

  render() {
    const { gameConfig, setGridFormat } = this.props;
    return <GridFormatComponent formats={formats} gameConfig={gameConfig} action={setGridFormat} />
  }

}

const matchDispatchToProps = dispatch => bindActionCreators(
  { setGridFormat : actions.createSetGridFormatAction }, dispatch
)


export default connect(selectors.getGameConfig, matchDispatchToProps)(GridFormatContainer)
