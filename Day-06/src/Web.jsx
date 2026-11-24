import React from 'react'
import { useState } from 'react'

const Web = () => {

  let [formdata,setFormdata]=useState({
      name:"",
      email:"",
      password:""
    })
    console.log(formdata)

    const handleChange = (e)=>{
        setFormdata({...formdata, [e.target.name]: e.target.value})
      }
  return (
    <div className='flex flex-col w-70 gap-5 p-10'>
      <input name="name" onChange={handleChange} className='border-1' type="text" placeholder='Name' />
      <input name="email" onChange={handleChange} className='border-1' type="text" placeholder='Email' />
      <input name="password" onChange={handleChange} className='border-1' type="text" placeholder='Password' />
      <button>Submit</button>

      <h1>Name :{name}</h1>
    </div>
  )
}

export default Web
