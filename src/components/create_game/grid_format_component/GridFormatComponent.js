import React from 'react'

export default ({ formats, gridFormat, action }) => (
  <div>
    {
      Object.values(formats).map(
        (form) => <div key={form} onClick={() => action(form)}>{`${form} X ${form} current : ${gridFormat}`}</div>)
    }
  </div>
)
