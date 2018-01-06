import React, { Component } from 'react';
import PlayerTileContainer from '../player_tile_component/PlayerTileContainer';

import './PlayerPanelComponent.css';

class PlayerPanelContainer extends Component {

  render() {
    const style = { gridTemplateColumns: `repeat(${this.props.playerCount}, 1fr)` };

    return (
      <div className="wrapper" style={style}>
        <PlayerTileContainer />
        <PlayerTileContainer />
        <PlayerTileContainer />
        <PlayerTileContainer />
        <PlayerTileContainer />
        <PlayerTileContainer />
      </div>
    );
  }

}

export default PlayerPanelContainer;
