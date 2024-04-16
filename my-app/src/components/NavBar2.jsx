import React, { useContext, useEffect, useState } from 'react'
import './NavBar.css'
import food from './food.jpg'
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { userData } from '../App'
function NavBar2() {
  const { user,setUser } = useContext(userData);
    const{storename,storeemail}=useParams();
    const [first, setfirst] = useState([])
    let navigate = useNavigate();
    
  const handleLogout = () => {
    // Clear user authentication state
    setUser(null);

    navigate("/")
};


  return (
    <div>
      
      <Navbar bg="white" data-bs-theme="light" className= 'shadow-lg p-3 mb-5 bg-white rounded'style={{height:'70px'}}>
      
        <Container>
        
          <Navbar.Brand className='food' href="#home"></Navbar.Brand>
           <img src={food} alt="" style={{width:'80px',height:'70px'}}/>
         
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home" className='nav-link'>{storename} */}
           
            <NavDropdown title='profile'  id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"><Link to={`/profile/${user.email}`} style={{textDecoration:'none'}} className='navdropDown-items'>Account</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1"><Link to={`/wishlist/${user.email}`} style={{textDecoration:'none'}} className='navdropDown-items'>WishList</Link></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"><Link to={`/cart2/${user.email}`} style={{textDecoration:'none'}} className='navdropDown-items'>Cart</Link></NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item style={{textDecoration:'none'}} >
               
              <button onClick={handleLogout} className='navdropdownitems-logout'>Logout</button>
              {/* <button className='navdropdownitems-logout'>Logout</button> */}
              </NavDropdown.Item>
            </NavDropdown>
            
            
         
          </Nav>
          
        </Container>
       
      </Navbar>
     
    </div>
  )
}

export default NavBar2
