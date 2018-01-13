import React from 'react'

export default ({ id, text, events, points }) => (
  <div>
    <div className="question-text">{text}</div>
    <div className="question-points">{points}</div>
  </div>
)
