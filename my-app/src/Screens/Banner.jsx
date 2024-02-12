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
            {/* <Nav.Link className='banner-nav-text' href="#home"><Link to="/addrestaurant"className='banner-nav-text'>Add restaurant</Link></Nav.Link> */}
            <Nav.Link className='banner-nav-text' href="#features"><Link to="/login"className='banner-nav-text'> Login</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing"><Link to="/signup"className='banner-nav-text'>Sign Up</Link></Nav.Link>
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
