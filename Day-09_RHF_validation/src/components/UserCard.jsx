
import React from 'react'

const UserCard = ({ users, onDelete, onEdit }) => {
  return (
    <div className='flex flex-col border border-white bg-black rounded p-2 gap-4'>

      <div className='h-60 w-70'>
        <img
          className='object-cover h-full w-full rounded-xl'
          src={users.image}
          alt={users.Name}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <h1 className='text-white'>Name - {users.Name}</h1>
        <p className='text-white'>Role - {users.Role}</p>
        <h1 className='text-white'>Bounty - {users.Bounty}</h1>
      </div>

      <div className='flex justify-between p-4'>

        <button
          onClick={onEdit}
          className='text-white bg-yellow-700 px-3 py-2 rounded'
        >
          Update
        </button>

        <button
          onClick={onDelete}
          className='text-white bg-red-500 px-3 py-2 rounded'
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default UserCard
