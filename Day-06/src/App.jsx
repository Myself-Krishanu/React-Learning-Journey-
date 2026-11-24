import React, { useState } from 'react'

const App = () => {

  console.log("App rendering...")
  const [count, setCount] = useState(0)
  const [user,setUser]=useState({
    name:"Krishanu"
  })
  return (
    <div>
      <h1>Count - {count}</h1>
      <h1>Name - {user.name}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment count</button>

      <button onClick={()=>{
        
        setUser({name : "Sujay"})
      }}>Change Name</button>
    </div>
  )
}

export default App
