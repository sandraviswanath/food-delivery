import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../Screens/Banner'
import Home from '../Screens/Home'

import CollectionCard from '../components/common/CollectionCard'
import Signup from '../Screens/Signup'

import Login2 from '../Screens/Login2'
import AddRestaurant from '../Screens/AddRestaurant'
import Addsignup from '../Screens/Login/Addsignup'
import Addlogin from '../Screens/Login/Addlogin'
import AddForm from '../Screens/createRestaurants/AddForm'
import Home2 from '../Screens/Home2'
import NavBar2 from '../components/NavBar2'
import RestaurantForm from '../Screens/createRestaurants/RestaurantForm'
import Cart from '../components/cart/CartPage'
import DetailedCard from '../components/common/Detailedpages/DetailedCard'
import GetPlace from '../components/common/Detailedpages/GetPlace'
import CartPage from '../components/cart/CartPage'


import Order from '../components/order/Order'
import Restaurantdetails from '../Screens/Restaurantdetails'
import Addcart from '../components/cart/Addcart'

import Cart2 from '../components/cart/Cart2'
import Chat from '../chat/Chat'
import HomeCollections from '../components/Card/HomeCollections'
import HomeDetailCard from '../components/Card/HomeDetailCard'
import Login3 from '../Screens/Login/Login3'
import Signup2 from '../Screens/Login/Signup2'
import Form1 from '../Screens/createRestaurants/Form1'
import HomeBannerCard from '../components/Card/HomeBannerCard'
import Customerlogin from '../Screens/Login/CustomerLogin'
import Customersignup from '../Screens/Login/Customersignup'




function Router() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<><Banner/><HomeBannerCard/></>}></Route>
        {/* <Route path='/' element={<><Banner/><HomeCollections/></>}></Route> */}
        <Route path='homedetails/:email' element={<><HomeDetailCard/></>}></Route>
        <Route path='/home' element={<><Home/></>}></Route>
        <Route path='/home2/:storeemail' element={<><NavBar2/>,<Home2/></>}></Route>
        <Route path='/login' element={<><Login2/></>}></Route>
        <Route path='/signup' element={<><Signup2/></>}></Route>
        <Route path='/addrestaurant/:email' element={<><AddRestaurant/></>}></Route>
        <Route path='/addsignup' element={<><Addsignup/></>}></Route>
        <Route path='/addlogin' element={<><Addlogin/></>}></Route>
        <Route path='/customerlogin' element={<><Customerlogin/></>}></Route>
        <Route path='/customersignup' element={<><Customersignup/></>}></Route>
        <Route path='/cart/:email' element={<><CartPage/></>}></Route>
        
        
        <Route path='/addform' element={<><AddForm/></>}></Route>
        <Route path='/restaurantform' element={<><RestaurantForm/></>}></Route>
        <Route path='/restaurantdetails/:email' element={<><Restaurantdetails/></>}></Route>
        
        <Route path='/detailed/:email' element={<><DetailedCard/></>}></Route>
        <Route path='place' element={<><GetPlace/></>}></Route>
        
        <Route path='order' element={<><Order/></>}></Route>
        <Route path='addcart' element={<><Addcart/></>}></Route>
      
        <Route path='cart2/:email' element={<><Cart2/></>}></Route>
        <Route path='chat' element={<><Chat/></>}></Route>
        <Route path='log' element={<Login3/>}></Route>
        <Route path='form1' element={<Form1/>}></Route>





     


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
