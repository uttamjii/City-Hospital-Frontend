import Header from "./Components/Layout/Header/Header.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from 'react'
import Home from "./Pages/Home.js"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App