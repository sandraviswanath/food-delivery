import React, { useState } from 'react'
import './Banner.css'
import { Container, Modal, Nav, Navbar } from 'react-bootstrap'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Banner({value}) {

 

  return (
    <div className='banner-image'>
      <Navbar>
        <Container>
    
          <Nav className="ms-auto banner-nav">
            <Nav.Link className='banner-nav-text' href="#home">Add restaurant</Nav.Link>
            <Nav.Link className='banner-nav-text' href="#features" ><Link to=""> Login</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing">Sign Up</Nav.Link>
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
