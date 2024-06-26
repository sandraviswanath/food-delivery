import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './AddRestaurant.css'
import { Link, useParams } from 'react-router-dom'

function AddRestaurant() {
  const{email}=useParams();
  const eemail=email;
 
  return (
    <div className='add-restaurant'>
      <Navbar>
        <Container>
{/*     
          <Nav className="ms-auto banner-nav">
        
            <Nav.Link className='banner-nav-text' href="#features" ><Link to="/addlogin" style={{textDecoration:'none'}} className='banner-nav-text'> Login</Link></Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing"><Link to="/addsignup" style={{textDecoration:'none'}} className='banner-nav-text'>Create account</Link></Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <div className='secion-2'>
        <div className='btn-div1'>
            <button className='butn'><Link to="/addsignup" style={{textDecoration:'none',backgroundColor:'black'}}className='nav-text'>Register your restaurant</Link></button>
        </div>
        <div className='btn-div2'>
            {/* <Button className='butn'><Link to={`/restaurantdetails/${email}`} style={{textDecoration:'none',backgroundColor:'black'}}className='nav-text'>view your existing restaurants</Link> </Button> */}
            <button className='butn'><Link to='/addlogin' style={{textDecoration:'none',backgroundColor:'black'}}className='nav-text'>view your existing restaurants</Link> </button>
        </div>
        </div>
    </div>
  )
}

export default AddRestaurant
