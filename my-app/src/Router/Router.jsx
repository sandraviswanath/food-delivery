import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../Screens/Banner'
import Home from '../Screens/Home'

import CollectionCard from '../components/common/CollectionCard'
import Signup from '../Screens/Signup'

import Login2 from '../Screens/Login2'
import AddRestaurant from '../Screens/AddRestaurant'
import Addsignup from '../Screens/Addsignup'
import Addlogin from '../Screens/Addlogin'
import AddForm from '../Screens/AddForm'
import Home2 from '../Screens/Home2'
import NavBar2 from '../components/NavBar2'
import RestaurantForm from '../Screens/RestaurantForm'
import Cart from '../components/cart/CartPage'
import DetailedCard from '../components/common/Detailedpages/DetailedCard'
import GetPlace from '../components/common/Detailedpages/GetPlace'
import CartPage from '../components/cart/CartPage'

import Product from '../components/Card/Product'




function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Banner/></>}></Route>
        <Route path='/home' element={<><Home/></>}></Route>
        <Route path='/home2/:storename/:storeemail' element={<><NavBar2/>,<Home2/></>}></Route>
        <Route path='/login' element={<><Login2/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
        <Route path='/addrestaurant' element={<><AddRestaurant/></>}></Route>
        <Route path='/addsignup' element={<><Addsignup/></>}></Route>
        <Route path='/addlogin' element={<><Addlogin/></>}></Route>
        <Route path='/cart' element={<><CartPage/></>}></Route>
        <Route path='/addform' element={<><AddForm/></>}></Route>
        <Route path='/restuarantform' element={<><RestaurantForm/></>}></Route>
        <Route path='/detailed/:name' element={<><DetailedCard/></>}></Route>
        <Route path='place' element={<><GetPlace/></>}></Route>
        <Route path='card' element={<><Product/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
