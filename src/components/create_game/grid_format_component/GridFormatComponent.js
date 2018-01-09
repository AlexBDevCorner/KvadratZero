import React from 'react'

export default ({ formats }) => (
  <div>
    {
      Object.values(formats).map((form) => <div key={form}>{`${form} X ${form}`}</div>)
    }
  </div>
)
