import React, { useState, useEffect } from 'react'
import axios from 'axios';

import ContactList from './ContactList'
import InputForm from './InputForm'
import ConformationMessage from './ConformationMessage';
import DeleteConformation from './DeleteConformation'
import UpdateConformation from './UpdateConformation';
import Search from './Search'

export default function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [conformationMessage, setConformationMessage] = useState('')
  const [deleteConformation, setDeleteConformation] = useState('')
  const [updateConformation, setUpdateConformation] = useState('')
  const [searchContact, setSearchContact] = useState('')

  const URL = "http://localhost:3001/persons"
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value)
  }

  // add new contact
  const handleSubmit = e => {
    e.preventDefault()
    //  new contcat list object

    let id
    const checkContact = persons.filter(person => {
      return newName === person.name ? id = person.id : null
    })

    //checks if new contactname is already exists in the list if not rurn flase.
    const isPersonAlreadyExist = checkContact.length > 0 ? true : false

    // alerts if input is empty
    if (newName.length < 1 || newNumber.length < 1) {
      return alert('Field cant be empty')

    } else if (isPersonAlreadyExist) {
      // if new contact name is already existed  
      if (window.confirm(newName + ' already exist do you want to update number ? ')) {
        // updated contact object
        const updatedContact = { name: newName, number: newNumber, id: id }

        // updates the database
        axios
          .put(`${URL}/${id}`, updatedContact)
          .then(res => {
            //remove array
            const indexOldContact = persons.findIndex(({ id }) => id === res.data.id);
            const updatedNumber = Object.assign([...persons], { [indexOldContact]: updatedContact });
            setPersons(updatedNumber)
            setUpdateConformation(res.data.name)
            setNewName('')
            setNewNumber('')
            setTimeout(() => {
              setUpdateConformation(null)
            }, 3000)

          })
      }

    } else {
      const newContact = { name: newName, number: newNumber }
      axios
        .post(URL, newContact)
        .then(res => {
          setPersons(persons.concat(res.data))
          setNewName('')
          setNewNumber('')
          setConformationMessage(res.data.name)
          setTimeout(() => {
            setConformationMessage(null)
          }, 3000)
        })
    }
  }

  //handle delete
  const handleDelete = (id, name) => {
    const result = persons.filter(person => person.id !== id)
    const deletedContact = persons.filter(person => (person.id === id) ? person.name : null)
    if (window.confirm('delete ' + name + ' ?')) {
      axios
        .delete(`${URL}/${id}`)
        .then(res => {
          setPersons(result)
          setDeleteConformation(deletedContact[0].name)
          setTimeout(() => {
            setDeleteConformation(null)
          }, 3000);
        })
    }
  }
  // filter search
  const handleSearch = (e) => {
    setSearchContact(e.target.value)
  }
  const searchFromContactList = persons.filter(person => {
    return person.name.toLowerCase().includes(searchContact.toLocaleLowerCase())
  })
  // edit 
  // render Phonebook components row by row
  const renderContactList = () => searchFromContactList.map(person => (
    < ContactList
      person={person}
      key={person.id}
      handleDelete={handleDelete}
    />
  ))

  return (
    <div>
      <Search handleSearch={handleSearch} />

      <div className="text-center">
        <ConformationMessage
          conformationMessage={conformationMessage}
        />
        < UpdateConformation updateConformation={updateConformation} />

        <DeleteConformation
          deleteConformation={deleteConformation}
        />
      </div>
      <div className=" d-flex flex-wrap justify-content-around my-5">
        <div >
          <InputForm
            handleNameInput={handleNameInput}
            handleNumberInput={handleNumberInput}
            handleSubmit={handleSubmit}
            handleSearch={handleSearch}
          />
        </div>
        <div >
          {renderContactList()}
        </div>
      </div>
    </div>
  )
}