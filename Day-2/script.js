import React from "react"

let div = document.querySelector("#box")

let content = React.createElement("h1",{},"Hello I am from React")

ReactDOM.createRoot(div).render(content)
// let reactRoot = ReactDOM.createRoot(div)
// reactRoot.render(content)