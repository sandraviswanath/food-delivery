import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
