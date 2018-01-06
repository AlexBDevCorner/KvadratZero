import React from 'react';
import './PlayerTileComponent.css';

export default ({ name, points, bonuses, color }) => (
  <div className={`card hoverable ${color}-2`}>
    <div className="card-content white-text">
      <span className="card-title center-align">{name}</span>
      <div className="center-align player-points">{points}</div>
    </div>
  </div>
);
