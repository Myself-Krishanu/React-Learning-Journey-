
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({users, setUsers, setToggle }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: "onChange"
  })

  const formData = (data) => {
    let arr = [...users, data]
    setUsers((arr))
    localStorage.setItem("users",JSON.stringify(arr))
    reset()

    setToggle(true)
  }

  return (
    <div className='flex flex-col items-center gap-6'>

      <h1 className='text-white text-xl font-semibold'>
        Create Straw-hat
      </h1>

      <form
        onSubmit={handleSubmit(formData)}
        className='bg-gray-600 w-80 flex flex-col gap-2 p-4 rounded border'
      >

        <input
          {...register("Name", {
            required: "Name is required!",
            // pattern: {
            //   value: /^\S+$/,
            //   message: "Blank space not allowed"
            // }
          })}
          className="bg-white outline-none rounded p-2"
          type="text"
          placeholder='Name'
        />

        {errors.Name && <p className='text-red-300'>{errors.Name.message}</p>}


        <input
          {...register("Role", {
            required: "Role is required!"
          })}
          className="bg-white outline-none rounded p-2"
          type="text"
          placeholder='Role'
        />

        {errors.Role && <p className='text-red-300'>{errors.Role.message}</p>}


        <input
          {...register("Bounty", {
            required: "Bounty is required!",
            valueAsNumber: true,
            min: {
              value: 100001,
              message: "Bounty must be greater than 100000"
            }
          })}
          className="bg-white outline-none rounded p-2"
          type="number"
          placeholder='Bounty'
        />

        {errors.Bounty && <p className='text-red-300'>{errors.Bounty.message}</p>}


        <input
          {...register("image", {
            required: "Image is required!"
          })}
          className="bg-white outline-none rounded p-2"
          type="url"
          placeholder='Image URL'
        />

        {errors.image && <p className='text-red-300'>{errors.image.message}</p>}


        <button
          type="submit"
          className='bg-blue-700 text-white p-2 rounded'
        >
          Create Member
        </button>

      </form>
    </div>
  )
}

export default Form
