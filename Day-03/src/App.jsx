import React from "react"
import About from "./About"
let App = ()=>{
  // let component = React.createElement("div",
  //   {},
  //   [React.createElement("h1",{},"Hello"),
  //     React.createElement("h2",{},"bye"),
  //     React.createElement("h3",{},"wapas aoo")
  //   ])
  //opoer er code ta niche jeivabe return function er vetore pathano hoyeche seivabeo lekha jete pare ar nicher ta besi easy ar eisob ta possible hochhe bable er jonno
  return (<div>
      <h1>Hello</h1>
      <h2>bye</h2>
      <h3>vapas aoo</h3>
      <About id="about_section" element = {<h1>Hello I am H1</h1>}>
      <h1>Hello Good Morning</h1>
      </About>
      {/* {About("Krishanu")} */}
    </div>)  
}

export default App