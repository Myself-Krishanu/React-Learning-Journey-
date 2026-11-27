
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'
import Form from './components/Form'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || []
  })
  const [editingUser, setEditingUser] = useState(null)

  // DELETE USER
  const handleDelete = (index) => {
    let filterUser = users.filter((Value,indexID) => {
      return indexID !== index
    })
    setUsers(filterUser)
    localStorage.setItem("users",JSON.stringify(filterUser))
  }

  // EDIT USER
  const handleEdit = (index, user) => {
    setEditingUser({ index, user })
    setToggle(false)
  }

  return (
    <div className='flex flex-col bg-gray-900 gap-4 min-h-screen p-4'>

      <Navbar setToggle={setToggle} />

      {toggle ?
        <div className='flex flex-wrap gap-4'>
          {users.map((elem, index) => (
            <UserCard
              key={index}
              users={elem}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index, elem)}
            />
          ))}
        </div>
        :
        <div className="flex justify-center items-center">
          <Form
            users = {users}
            setUsers={setUsers}
            setToggle={setToggle}
            editingUser={editingUser}
            setEditingUser={setEditingUser}
          />
        </div>
      }

    </div>
  )
}

export default App
