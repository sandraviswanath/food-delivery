import React, { useState } from 'react'
import './Banner.css'
import { Container, Modal, Nav, Navbar } from 'react-bootstrap'

import { Link } from 'react-router-dom'


function Banner() {

  return (
    <div className='banner-image'>
      <Navbar>
        <Container>
    
          <Nav className="ms-auto banner-nav">
            <Nav.Link className='banner-nav-text' href="#home"><Link to="/addrestaurant">Add restaurant</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#features" ><Link to="/login"> Login</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing"><Link to="/signup">Sign Up</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='banner-title'>
        <p>Good food is the foundation of genuine happiness</p>
        </div>

    </div>
  )
}

export default Banner
