import React from 'react'

export default function DeleteConformation({ deleteConformation }) {
  if (!deleteConformation) {
    return null
  }
  return (
    <div className="container">
      <p className="border rounded  border-danger py-2 mx-auto px-5 bg-light text-danger">
        {deleteConformation} Deleted from your Phone book
      </p>
    </div>
  )
}
