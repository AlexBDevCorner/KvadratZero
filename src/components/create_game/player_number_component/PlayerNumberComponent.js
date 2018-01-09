import React from 'react'

export default ({ players }) => (
  <div>
    {
      Object.values(players).map((pl) => <div key={pl}>{`${pl} игроков`}</div>)
    }
  </div>
)
