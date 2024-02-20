import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import Banner from './Banner';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import './Login2.css'

function Addsignup() {
  const navigate=useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleDisplay = () => setShow(true);

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const handleName=(event)=>{
      setname(event.target.value)
    }
    const handleEmail=(event)=>{
      setemail(event.target.value)
    }
    const handlePassword =(event)=>{
      setpassword(event.target.value)
    }
    const handleSubmit =async(event)=>{
      event.preventDefault()
      const display =await axios.post('http://localhost:5000/signup',{name,email,password})
      console.log(display.data)
      navigate('/restaurantform')
  
    }

    const history=useNavigate()
    const previous=useNavigate()
  const sample=()=>{
  history('/banner')
  
  }
  const back=()=>{
  previous(-1)
  }

  return (
   
    <div>
    
    <div style={{backgroundImage: 'url("https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp")', height: '110vh', backgroundSize: 'cover' }}>
  <div>
  <Navbar>
    <Container>

      <Nav className="ms-auto banner-nav">
        {/* <Nav.Link className='banner-nav-text' href="#home">Add restaurant</Nav.Link> */}
        <Nav.Link className='banner-nav-text' href="#features" >Login</Nav.Link>
        <Nav.Link className='banner-nav-text' href="#pricing">Sign Up</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  <div className='container'>
    <form className='w-50 m-auto mt-5 border bg-white border-success rounded' onSubmit={handleSubmit}>
   
    <div className="m-3 login-close"style={{display:'flex'}}>
        <div style={{textAlign:'center',fontSize:'30px'}}>Signup</div>
        <div className='cur-po closeicon'>
        <IoMdClose onClick={back}/>
        
        </div>
        </div> 
        <div className="m-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name='name' value={name} onChange={handleName} aria-describedby="emailHelp" />
            </div>
      <div className="m-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' value={email} onChange={handleEmail} aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
      </div>
      <div className="m-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" value={password} onChange={handlePassword} name='password' />
      </div>
      <div className="m-3">
      <button type="submit" className="m-3 mx-1 btn btn-danger"onClick={handleSubmit} style={{paddingLeft:'50px',paddingRight:'50px'}}>Create account</button>
      </div>
      <div className="m-3">
      <a style={{}}>Already have an account?<span style={{color: 'red',textDecoration:'none'}}><Link to="/login"style={{color: 'red',textDecoration:'none'}}> Log in</Link></span></a>
      </div>
      
    </form>
  
  </div>
  
</div>
</div>
  
  )
}

export default Addsignup