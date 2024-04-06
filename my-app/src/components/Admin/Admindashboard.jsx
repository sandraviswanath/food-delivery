// src/components/AdminDashboard.js

import React, { useState } from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


const AdminDashboard = () => {

  const [user, setUser] = useState('')
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication state
    // setUser(null);

    navigate("/")
};

  return (
      <div>
      <Navbar  className='shadow-lg p-3 mb-5 bg-white rounded'>
        <Container>
        <Navbar.Brand className='food-title' href="#home">Food</Navbar.Brand>
        
          <Nav className="ms-auto banner-nav">
          
            <Nav.Link className='banner-nav-text' href="#features"><Link to="/restaurantview"className='banner-nav-text'> Restaurants</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing"><Link to="/userview"className='banner-nav-text'>Users</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing" onClick={handleLogout}>LogOut</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
};

export default AdminDashboard;
