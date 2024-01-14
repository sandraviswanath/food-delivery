import React from 'react'
import './Header.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

function Header() {
  return (
    <div className='header max-width'>
    <div className='header-right'>
       <div className='header-location-search-container shadow-lg p-3 mb-5 bg-white rounded'>
             <div className='location-wrapper'>
                <div className='location-icon-name'>
                <IoLocationOutline className='absolute-center location-icon'/>
                <div>malappuram</div>
                </div>
                <FaCaretDown className='absolute-center'/>
             </div>
             <div className='location-search-seperator'></div>
             <div className='header-searchbar'>
             <IoIosSearch className='absolute-center search-icon'/>
             <input placeholder='Search for restaurant, cusine or a dish' className='search-input' />
             </div>
         </div>
    </div>
    </div>
  )
}

export default Header
