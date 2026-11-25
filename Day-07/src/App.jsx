import React, { useState } from 'react'
import Login from './components/login'
import Register from './components/Register'
const App = () => {
  let [toggle,setToggle]=useState(false)
  const [user, setUser] = useState([])

  return (
    <div className='bg-gray-300 h-screen flex justify-center items-center p-4'> 
      {toggle? <Login setToggle = {setToggle}/> : <Register setToggle = {setToggle} setUser={setUser}/>}
    </div>
  )
}

export default App
