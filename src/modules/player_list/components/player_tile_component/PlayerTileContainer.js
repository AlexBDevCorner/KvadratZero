import React, { Component } from 'react';
import PlayerTileComponent from './PlayerTileComponent';
import BonusesPanelContainer from '../bonuses_panel_component/BonusesPanelContainer';

class PlayerTileContainer extends Component {

  constructor() {
    super();
    this.pickTileColor = this.pickTileColor.bind(this);
  }

  pickTileColor({isCurrent, rightToMove}) {
    return isCurrent ? "light-green darken" : rightToMove ? "teal darken" : "grey darken";
  }

  render() {
    const color = this.pickTileColor({isCurrent : false, rightToMove : false});

    return (
        <div>
          <PlayerTileComponent name="Вова" points="25"
            color={color} bonuses={[1, 2, 3]} />
            <BonusesPanelContainer color={color} />
        </div>
    );
  }

}

export default PlayerTileContainer;
