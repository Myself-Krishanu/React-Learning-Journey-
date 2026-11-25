import React, { useState } from 'react'

const Register = ({ setToggle }, {setUser}) => {

    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: ""
    })

    

    const handleChange = (e) => {
        let { name, value } = e.target

        setformData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser((prev)=>[...prev, formData])
        setformData({
            username:"",
            email:"",
            password:""
        })
    }

    return (
        <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>

            <h1>New User</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                <input 
                    required
                    value = {formData.username}
                    name="username"
                    onChange={handleChange}
                    className='p-2 border border-gray-400 rounded'
                    type="text"
                    placeholder='Name'
                />

                <input
                    required
                    value = {formData.email}
                    name="email"
                    onChange={handleChange}
                    className='p-2 border border-gray-400 rounded'
                    type="email"
                    placeholder='Email'
                />

                <input
                    required
                    value = {formData.password}
                    name="password"
                    onChange={handleChange}
                    className='p-2 border border-gray-400 rounded'
                    type="password"
                    placeholder='Password'
                />

                <button type="submit" className='p-2 bg-blue-600 text-white rounded'>
                    Register
                </button>

            </form>

            <p>
                Already have an account?
                <span onClick={() => setToggle(prev => !prev)}
                    className='text-blue-600 cursor-pointer'>
                    Login
                </span>
            </p>

        </div>
    )
}

export default Register