import React, { useState } from 'react'
import './Banner.css'
import { Container, Modal, Nav, Navbar } from 'react-bootstrap'
import food from './food.jpg'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header';
import { IoLocationOutline } from 'react-icons/io5';
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from 'react-icons/io';


function Banner() {
  const{storename,storeemail}=useParams();
  return (
    <div className='banner-image'>
      <Navbar>
        <Container>
        <Navbar.Brand className='food-title' href="#home">Food</Navbar.Brand>
        
          <Nav className="ms-auto banner-nav">
          
            <Nav.Link className='banner-nav-text' href="#home"><Link to={`/addrestaurant/${storeemail}`} style={{textDecoration:'none'}} className='banner-nav-text'> Add Restaurants</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#features"><Link to="/login"className='banner-nav-text'> Login</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing"><Link to="/signup"className='banner-nav-text'>Sign Up</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='banner-title'>
        
        
       
        <div className='header max-width'>
    <div className='header-right'>
       <div className='header-location-search-container-banner shadow-lg p-3 mb-5 bg-white rounded'>
             <div className='location-wrapper'>
                <div className='location-icon-name'>
                <IoLocationOutline className='absolute-center location-icon'/>
                <div>malappuram
                  {/* <input type="text" placeholder='kochi,thrissur,plakad' value={searchQuery} onChange={handleinputchange}/> */}
                </div>
               
                {/* <select>
                  <option value="palakad">Palakad</option>
                  <option value="">thrissur</option>
                </select> */}
                </div>
                <FaCaretDown className='absolute-center'/>
             </div>
             <div className='location-search-seperator'></div>
             <div className='header-searchbar'>
             <IoIosSearch className='absolute-center search-icon'/>
             <input placeholder='Search for restaurant or a dish' className='search-input' />
             </div>
         </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Banner
