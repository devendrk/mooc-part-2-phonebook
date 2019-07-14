import React from 'react'

export default function ContactList({ person, handleDelete }) {
  return (
    <div>


      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{person.name}</td>
            <td>{person.number} </td>
            <td><button className="btn btn-danger " onClick={() => handleDelete(person.id, person.name)}>delete</button></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}
