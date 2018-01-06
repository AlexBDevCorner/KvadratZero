import React, { Component } from 'react';
import { getPlayerList } from '../selectors';
import { connect } from 'react-redux';

class TestPlayerListComponent extends Component {

  render() {
    return (
      <div>
        <div>Hey!</div>
        <h1>{this.props.playerList[0]}</h1>
      </div>
    );
  }

}

export default connect(getPlayerList)(TestPlayerListComponent);
