// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const Form = () => {

//   const formRef = useRef({})
//   const nameRef = useRef(null)
//   const priceRef = useRef(null)
//   const categoryRef = useRef(null)
//   const imageRef = useRef(null)
  
//   const submit= (e)=>{
//     e.preventDefault()

//     const formData = {
//       name:nameRef.current.value,
//       price:priceRef.current.value,
//       category:categoryRef.current.value,
//       image:imageRef.current.value,
//     }
//     console.log(formData)
//   }

//   return (
//     <div className='w-80 bg-white p-4 rounded'>

//       <form onSubmit={submit} className='flex flex-col gap-4 '>
//         <input ref={nameRef}  className='border rounded p-2 border-gray-600' type="text" placeholder="Product Name" />

//         <input ref={priceRef}  className='border rounded p-2 border-gray-600' type="number" placeholder="Price" />

//         <span>Select category: </span>

//         <select ref={categoryRef}  className='border rounded p-2 border-gray-600'>
//           <option value="MEN">Men</option>
//           <option value="WOMEN">Women</option>
//           <option value="KID">Kid</option>
//         </select>

//         <input ref={imageRef} className='border rounded p-2 border-gray-600' type="url" placeholder="Image" />
//         <button className='bg-blue-600 text-white p-2 rounded'>CREATE</button>
//       </form>
//     </div>
//   )
// }

// export default Form


import React, { useRef } from 'react'

const Form = () => {

  const formRef = useRef({})

  const submit = (e) => {
    e.preventDefault()

    const formData = {
      name: formRef.current.name.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value
    }

    console.log(formData)
  }

  return (
    <div></div>
  )
}

export default Form
