// import React from 'react'
// import Contact from './Contact'
// //import one from './Contact' -> sudhu export thake tahole amra eivabe jodi import kori tahole jei file theke import korchi sekhane jeta export default thakbe setai import hobe
// import Contact, {one, two} from './Contact'
// const App = () => {
//   one()
//   two()
  
//   return (
//     <div>
//       <h1>Hello I am from App.jsx </h1>
//       <Contact/>
//     </div>
//   )
// }

// export default App
// //export vs defaul export 
//reload vs rerender
//what is react hooks
//useState 

// import React from 'react'
// import Contact, { one, two } from './Contact'

// const App = () => {

//     one()
//     two()

//     return (
//         <div>
//             <h1>Hello I am from App.jsx</h1>
//             <Contact />
//         </div>
//     )
// }

// export default App
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { useState } from 'react'

const App = () => {
let [count,setCount] = useState(0)

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>
    </div>
  )
}

export default App
