import React from 'react'

export const one = ()=>{
    console.log("one")
}

export const two = ()=>{
    console.log("two")
}

const Contact = () => {
  console.log("I am defualt export")
    return (
    <div>
      <h1>Hey I am from Contact.jsx</h1>
    </div>
  )
}

export default Contact
