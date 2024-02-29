import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import './Login2.css'
import {userData} from '../App'

function Login2() {
  const navigate=useNavigate()
    const [show, setShow] = useState(false);
const {setUser}=useContext(userData);
    const handleClose = () => setShow(false);
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const[name, setname]=useState('')

  const handleEmail=(event)=>{
    setemail(event.target.value)
  }
  const handlePassword =(event)=>{
    setpassword(event.target.value)
  }
  const handleName =(event)=>{
    setname(event.target.value)
  }
  const handleSubmit =async(event)=>{
    const storename=name;
      const storeemail=email;
    event.preventDefault()
    try{
    const {data} =await axios.post('http://localhost:5000/login',{email,password,name})
    console.log(data.user)
    setUser(data.user)
    }
    catch{
      
    }
    // alert(` ${email} login successed..!!!`)
    navigate(`/home2/${storeemail}`)

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
    
        <div style={{backgroundImage: 'url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")', height: '100vh', backgroundSize: 'cover'}}>
      <div>
      <Navbar>
        <Container>
    
          <Nav className="ms-auto banner-nav">
            {/* <Nav.Link className='banner-nav-text' href="#home">Add restaurant</Nav.Link> */}
            <Nav.Link className='banner-nav-text' href="#features" > Login</Nav.Link>
            <Nav.Link className='banner-nav-text' href="#pricing">Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <center>
      <div className='con'>
        <form className='w-50 m-auto mt-5 border   rounded login-form' onSubmit={handleSubmit}>
       
        <div className="m-3 login-close"style={{display:'flex'}}>
            <div style={{textAlign:'center',fontSize:'30px'}} className='login-form-title'>Login</div>
            <div className='cur-po closeicon'>
            <IoMdClose onClick={back}/>
            
            </div>
            </div> 
           
          <div className="m-3 wrap-input">
            {/* <label htmlFor="exampleInputEmail1" className="form-label">Email address</label> */}
            <input type="email" className="place" name='email' placeholder="Email" value={email} onChange={handleEmail} aria-describedby="emailHelp" style={{color:'white'}}/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div> */}
            {/* <span class="focus-input100"></span> */}
          </div>
          <div className="m-3 wrap-input">
            {/* <label htmlFor="exampleInputPassword1" className="form-label">Password</label> */}
            <input type="password" className="place" value={password} placeholder="Password" onChange={handlePassword} name='password' style={{color:'white'}}/>
          </div>
          <div className="m-3">
          <button type="submit" className="m-3 mx-1 btn btn-danger" style={{paddingLeft:'50px',paddingRight:'50px'}}>Login</button>
          </div>
          <div className="m-3">
          <a style={{}}>New to here?<span style={{color: 'red',textDecoration:'none'}}><Link to="/signup"style={{color: 'red',textDecoration:'none'}}>Create account</Link></span></a>
          </div>
          
        </form>
      
      </div>
      </center>
    </div>
    </div>
  )
}

export default Login2
