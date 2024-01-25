import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../Screens/Banner'
import Home from '../Screens/Home'
import BannerLocations from '../Screens/BannerLocations'
import CollectionCard from '../components/common/CollectionCard'
import Signup from '../Screens/Signup'

import Login2 from '../Screens/Login2'
import AddRestaurant from '../Screens/AddRestaurant'
import Addsignup from '../Screens/Addsignup'
import Addlogin from '../Screens/Addlogin'





function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Banner/>,<BannerLocations/></>}></Route>
        <Route path='/home' element={<><Home/>,<CollectionCard/></>}></Route>
        <Route path='/login' element={<><Login2/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
        <Route path='/addrestaurant' element={<><AddRestaurant/></>}></Route>
        <Route path='/addsignup' element={<><Addsignup/></>}></Route>
        <Route path='/addlogin' element={<><Addlogin/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
