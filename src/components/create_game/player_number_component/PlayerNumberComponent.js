import React from 'react'

export default ({ players, playerNumber, action }) => (
  <div>
    {
      Object.values(players).map((pl) => <div key={pl} onClick={() => action(pl)}>{`${pl} игроков : ${playerNumber}`}</div>)
    }
  </div>
)
