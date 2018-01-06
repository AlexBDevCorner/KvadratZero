import React, { Component } from 'react';
import BonusesPanelComponent from './BonusesPanelComponent';

class BonusesPanelContainer extends Component {

  render() {
    return (
      <BonusesPanelComponent color={this.props.color}/>
    );
  }

}

export default BonusesPanelContainer;
