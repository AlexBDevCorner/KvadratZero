import React from 'react';
import './BonusesPanelComponent.css';

export default ({ color }) => (
  <div className={`bonus-panel-grid-wrapper white-text ${color}-4`}>
    <div className="bonus-panel-item header">БЗ</div>
    <div className="bonus-panel-item header">СТ</div>
    <div className="bonus-panel-item header">КП</div>
    <div className="bonus-panel-item header">ЛВ</div>
    <div className="bonus-panel-item item">0</div>
    <div className="bonus-panel-item item">0</div>
    <div className="bonus-panel-item item">0</div>
    <div className="bonus-panel-item item">0</div>
  </div>
);
