import React, { useState } from 'react'
import './Header.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function Header() {

  return (
    <div className='header max-width'>
    <div className='header-right'>
       <div className='header-location-search-container shadow-lg p-3 mb-5 bg-white rounded'>
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
  )
}

export default Header
