import React, { useEffect, useState } from 'react'
import './NavBar.css'
import food from './food.jpg'
import {Container, Nav, NavDropdown, Navbar} from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
function NavBar2() {
    const{storename,storeemail}=useParams();
    const [first, setfirst] = useState([])
    let navigate = useNavigate();
    const handleLogout = () => {
      localStorage.removeItem('token')

      navigate("/")
  }

    // useEffect(()=>{
    //   const cartitems =async()=>{
       
    //    try{
    //      const signup = await axios.get('http://localhost:5000/signup')
                 
    //    setfirst(signup.data)
    //    console.log(first);
    //    }
    //    catch{
         
    //    }
     
    //  };
    //  cartitems();
    // },[]);


  return (
    <div>
      
      <Navbar bg="white" data-bs-theme="light" className= 'shadow-lg p-3 mb-5 bg-white rounded'style={{height:'70px'}}>
      
        <Container>
        
          <Navbar.Brand className='food' href="#home"></Navbar.Brand>
          <img src={food} alt="" style={{width:'80px',height:'70px'}}/>
         
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home" className='nav-link'>{storename} */}
           
            <NavDropdown title='profile'  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cart</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><Link to={`/addrestaurant/${storeemail}`}style={{textDecoration:'none'}}> Add Restaurants</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={handleLogout}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            
            
         
          </Nav>
          
        </Container>
       
      </Navbar>
     
    </div>
  )
}

export default NavBar2
