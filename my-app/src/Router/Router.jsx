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


import Crudadd from '../components/cart/Crudadd'
import Mainpage from '../components/cart/Mainpage'
import Crudpage from '../components/cart/Crudpage'
import Order from '../components/order/Order'
import Restaurantdetails from '../Screens/Restaurantdetails'
import Addcart from '../components/cart/Addcart'
import Cart2details from '../components/cart/Cart2details'
import Cart2 from '../components/cart/Cart2'
import Chat from '../chat/Chat'
import HomeCollections from '../components/Card/HomeCollections'
import HomeDetailCard from '../components/Card/HomeDetailCard'




function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Banner/><HomeCollections/></>}></Route>
        <Route path='homedetails/:email' element={<><HomeDetailCard/></>}></Route>
        <Route path='/home' element={<><Home/></>}></Route>
        <Route path='/home2/:storeemail' element={<><NavBar2/>,<Home2/></>}></Route>
        <Route path='/login' element={<><Login2/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
        <Route path='/addrestaurant/:email' element={<><AddRestaurant/></>}></Route>
        <Route path='/addsignup' element={<><Addsignup/></>}></Route>
        <Route path='/addlogin' element={<><Addlogin/></>}></Route>
        <Route path='/cart/:id/:mail' element={<><CartPage/></>}></Route>
        <Route path='/crud' element={<><Crudadd/></>}></Route>
        <Route path='/crudpage' element={<><Crudpage/></>}></Route>
        <Route path='/addform' element={<><AddForm/></>}></Route>
        <Route path='/restaurantform' element={<><RestaurantForm/></>}></Route>
        <Route path='/restaurantdetails/:email' element={<><Restaurantdetails/></>}></Route>
        
        <Route path='/detailed/:email' element={<><DetailedCard/></>}></Route>
        <Route path='place' element={<><GetPlace/></>}></Route>
        
        <Route path='order' element={<><Order/></>}></Route>
        <Route path='addcart' element={<><Addcart/></>}></Route>
        <Route path='cart2details' element={<><Cart2details/></>}></Route>
        <Route path='cart2' element={<><Cart2/></>}></Route>
        <Route path='chat' element={<><Chat/></>}></Route>





     


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
