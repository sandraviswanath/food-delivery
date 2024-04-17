import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../Screens/Banner'
import Home from '../Screens/Home'

import CollectionCard from '../components/search-Bannercards/CollectionCard'



import AddRestaurant from '../Screens/AddRestaurant'
import Addsignup from '../Screens/Login/Addsignup'
import Addlogin from '../Screens/Login/Addlogin'
import AddForm from '../Screens/createRestaurants/AddForm'
import Home2 from '../Screens/Home2'
import NavBar2 from '../components/NavBar2'
import RestaurantForm from '../Screens/createRestaurants/RestaurantForm'

import DetailedCard from '../components/common/Detailedpages/DetailedCard'




import Order from '../components/order/Order'
import Restaurantdetails from '../Screens/Restaurantdetails'


import Cart2 from '../components/cart/Cart2'

import HomeCollections from '../components/Card/HomeCollections'
import HomeDetailCard from '../components/Card/HomeDetailCard'
import Login3 from '../Screens/Login/Login3'
import Signup2 from '../Screens/Login/Signup2'
import Form1 from '../Screens/createRestaurants/Form1'
import HomeBannerCard from '../components/Card/HomeBannerCard'
import AdminLogin from '../components/Admin/AdminLogin'
import AdminSignup from '../components/Admin/AdminSignup'

import Orderpage from '../components/cart/Orderpage'
import AdminDashboard from '../components/Admin/Admindashboard'
import ViewRestaurant from '../components/Admin/ViewRestaurant'
import ViewUser from '../components/Admin/ViewUser'
import WishList from '../components/Wishlist/WishList'
import Profile from '../components/profile/Profile'
import ExploreSection from '../components/search-Bannercards/ExploreSection'
import Delivery from '../components/search-Bannercards/Delivery'
import Searchview from '../components/search-Bannercards/Searchview'








function Router() {
  return (
    <div>
      <BrowserRouter>
      
      
      <Routes>
      <Route path='/' element={<><Banner/><HomeBannerCard/></>}></Route>

      

  
        {/* <Route path='/' element={<><Banner/><HomeCollections/></>}></Route> */}
        <Route path='/homedetails/:email' element={<><HomeDetailCard/></>}></Route>
        <Route path='/home' element={<><Home/></>}></Route>
        {/* <Route path='/home2/:storeemail' element={<><NavBar2/><Home2/></>}></Route> */}


        <Route path='/home2/:storeemail' element={<><NavBar2/><Searchview/></>}></Route>
       

       
        <Route path='/signup' element={<><Signup2/></>}></Route>
        <Route path='/addrestaurant/:email' element={<><AddRestaurant/></>}></Route>
        <Route path='/addsignup' element={<><Addsignup/></>}></Route>
        <Route path='/addlogin' element={<><Addlogin/></>}></Route>
        
      
        
        <Route path='/adminlogin' element={<><AdminLogin/></>}></Route>
        <Route path='/adminsignup' element={<><AdminSignup/></>}></Route>
        <Route path='/admin' element={<><AdminDashboard/></>}></Route>
        <Route path='/restaurantview' element={<><ViewRestaurant/></>}></Route>
        <Route path='/userview' element={<><ViewUser/></>}></Route>

        <Route path='/addform' element={<><AddForm/></>}></Route>
        <Route path='/restaurantform' element={<><RestaurantForm/></>}></Route>
        <Route path='/restaurantdetails/:email' element={<><Restaurantdetails/></>}></Route>
        
        <Route path='/detailed/:email' element={<><DetailedCard/></>}></Route>
  
        
        <Route path='/order/:email' element={<><Order/></>}></Route>
        <Route path='/orderpage' element={<><Orderpage/></>}></Route>

      
        <Route path='/cart2/:email' element={<><Cart2/></>}></Route>
        <Route path='/wishlist/:email' element={<><WishList/></>}></Route>
        <Route path='/profile/:email' element={<><Profile/></>}></Route>
       
       
        <Route path='/log' element={<Login3/>}></Route>
        <Route path='/form1' element={<Form1/>}></Route>
        <Route path='*' element={
        <div style={{paddingTop:'100px'}}>
          <h1 style={{fontSize:'68px',textAlign:'center'}}>Ooops....error 404</h1>
          <p style={{fontSize:'24px',textAlign:'center'}}>page not found!!!!</p>
          </div>
        }>

          </Route>

      </Routes>
     
       </BrowserRouter>
    </div>
  )
}

export default Router
