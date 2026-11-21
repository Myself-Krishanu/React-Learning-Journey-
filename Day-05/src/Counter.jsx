import React, { useState } from 'react'

const Counter = () => {

    console.log("Page is rerendering")
    let [count,setCount] = useState(0)

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={()=>{
    // setCount(count+1) //Batching same  set functions call gulo ke batch kore dei. Tai ekhane setCount 3bar call holeo output a count er value 1 korei barbe button click korle. 
    // setCount(count+1)
    // setCount(count+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    }}>Increment</button>
    </div>
  )
}

export default Counter

//setFunction er vetore previous o thake jake amra boli prev, ekhane previous er mane holo current state 
