import React from 'react'

export default function ConformationMessage({ updateConformation }) {
  if (!updateConformation) {
    return null
  }
  return (
    <div className="container">
      <p className="border rounded  border-info py-2 mx-auto px-5 bg-light text-info">
        <span className="h5 pr-4">{updateConformation}</span> number is updated
       </p>
    </div>
  )

}
