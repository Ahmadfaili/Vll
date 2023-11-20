
import React from "react"
import {BrowserRouter} from "react-router-dom"

import Router from "./routes"

function App() {
  return (
    <div className="App text-center relative flex ">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App
