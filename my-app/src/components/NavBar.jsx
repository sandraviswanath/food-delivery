import React from 'react'
import './NavBar.css'
import food from './food.jpg'
import {Container, Nav, Navbar} from 'react-bootstrap'
function NavBar() {
  return (
    <div>
      <Navbar bg="white" data-bs-theme="light" className= 'shadow-lg p-3 mb-5 bg-white rounded'style={{height:'70px'}}>
        <Container>
          <Navbar.Brand className='food' href="#home"></Navbar.Brand>
          <img src={food} alt="" style={{width:'80px',height:'70px'}}/>
         
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='nav-link'>Login</Nav.Link>
            <Nav.Link href="#features" className='nav-link'>Cart</Nav.Link>
            
            
          </Nav>
         
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
