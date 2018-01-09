import React from 'react'

export default ({ formats, gameConfig, action }) => (
  <div>
    {
      Object.values(formats).map(
        (form) => <div key={form} onClick={() => action(form)}>{`${form} X ${form} current : ${gameConfig.gridFormat}`}</div>)
    }
  </div>
)
