import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../Screens/Banner'
import Home from '../Screens/Home'
import BannerLocations from '../Screens/BannerLocations'
import CollectionCard from '../components/common/CollectionCard'
import Signup from '../Screens/Signup'
import Login from '../Screens/Login'





function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Banner/>,<BannerLocations/></>}></Route>
        <Route path='/home' element={<><Home/>,<CollectionCard/></>}></Route>
        <Route path='/login' element={<></>}></Route>
       
       
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
