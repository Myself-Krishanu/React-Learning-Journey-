import React from 'react'

const Navbar = ({ setToggle }) => {
  return (
    <div className='p-3 rounded flex items-center bg-black justify-between'>

      <h1>
        <img
          className='rounded-full'
          width={60}
          src="https://wallpapercave.com/wp/wp2276346.jpg"
          alt=""
        />
      </h1>

      <div className='flex gap-6 font-semibold'>
        <p className='text-white'>Home</p>
        <p className='text-white'>About</p>
        <p className='text-white'>Contact</p>
      </div>

      <button
        onClick={() => setToggle(prev => !prev)}
        className='p-2 bg-blue-600 text-white rounded cursor-pointer'
      >
        Create users
      </button>

    </div>
  )
}

export default Navbar