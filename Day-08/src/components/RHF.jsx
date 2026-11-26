import React from 'react'
import {useForm} from 'react-hook-form'

const RHF = () => {
    let {register,
        handleSubmit,
        reset,
        formState:{errors}
        } = useForm()

    const formSubmit = (e)=>{
        console.log(e)
        reset()
    }

  return (
    <div className='w-80 bg-white p-4 rounded'>

      <form onSubmit={handleSubmit(formSubmit)} className='flex flex-col gap-4'>

        <input
          {...register("productName")}
          className='border rounded p-2 border-gray-600'
          type="text"
          placeholder="Product Name"
        />

        <input
          {...register("price")}
          className='border rounded p-2 border-gray-600'
          type="number"
          placeholder="Price"
        />

        <span>Select category:</span>

        <select
          {...register("category")}
          className='border rounded p-2 border-gray-600'
        >
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KID">Kid</option>
        </select>

        <input
         {...register("image")}
          className='border rounded p-2 border-gray-600'
          type="url"
          placeholder="Image"
        />

        <button
          type="submit"
          className='bg-blue-600 text-white p-2 rounded'
        >
          CREATE
        </button>

      </form>
    </div>
  )
}

export default RHF
