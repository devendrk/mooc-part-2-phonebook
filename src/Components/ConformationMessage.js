import React from 'react'

export default function ConformationMessage({ conformationMessage }) {
  if (!conformationMessage) {
    return null
  }
  return (
    <div className="container">
      <p className="border rounded  border-success py-2 mx-auto px-5">
        <span className="h5 pr-4">{conformationMessage}</span> is added On in your phone book
      </p>
    </div >
  )

}
