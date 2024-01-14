import React from 'react'

import { Col, Container, Form, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap'
function NavBar() {
  return (
    <div>
      <Navbar bg="white" data-bs-theme="light" className= 'shadow-lg p-3 mb-5 bg-white rounded'>
        <Container>
          <Navbar.Brand href="#home">food</Navbar.Brand>

        
        
          <img src="" alt="" />
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
