import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './AddRestaurant.css'
import { Link } from 'react-router-dom'

function AddRestaurant() {
  return (
    <div className='add-restaurant'>
      <Navbar>
        <Container>
    
          <Nav className="ms-auto banner-nav">
        
            <Nav.Link className='banner-nav-text' href="#features" ><Link to="/addlogin"> Login</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing"><Link to="/addsignup">Create account</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='secion-2'>
        <div className='btn-div1'>
            <Button className='btn'><Link to="/addsignup">Register your restaurant</Link></Button>
        </div>
        <div className='btn-div2'>
            <Button className='btn'><Link to="/addlogin">Login to view your existing restaurants</Link> </Button>
        </div>
        </div>
    </div>
  )
}

export default AddRestaurant
