import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Button, Container, Modal, Nav, Navbar } from 'react-bootstrap';
import Banner from '../Banner';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

// import './Login2.css'
import './Login3.css'
import './styles.css'
import add from './addbanner.webp'
import image from './img-12.avif'
import { userData } from '../../App';

function Addsignup() {
  const navigate=useNavigate()
   

  const {setUser}=useContext(userData);

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [error, setError] = useState('');
  const handleName=(event)=>{
    setname(event.target.value)
  }
  const handleEmail=(event)=>{
    setemail(event.target.value)
  }
  const handlePhone=(event)=>{
    setphone(event.target.value)
  }
  const handlePassword =(event)=>{
    setpassword(event.target.value)
  }
  const isPasswordValid = (event)=>{
    return password.length >=6;
  };
    const handleSubmit =async(event)=>{
      event.preventDefault()

      if (!name || !email || !phone || !password) {
        setError('All fields are required');
        return;
    }

    if (password.length < 6) {
      setError('Password must contain a minimum of 6 characters');
      return;
  }

      try{
      const display =await axios.post('http://localhost:5000/signup',{name,email,password,phone})
    
      }catch{
        
      }
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
    <div className="login">
     <img src={image} alt="image" className="login__bg"/>

     <form action="" className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Sign Up</h1>

        <div className="login__inputs">
        <div className="login__box">
              <input type="name" placeholder="User name" required className="login__input" name='name' value={name} onChange={handleName}/>
              <i className="ri-mail-fill"></i>
           </div>

           <div className="login__box">
              <input type="email" placeholder="Email ID" required className="login__input" name='email' value={email} onChange={handleEmail}/>
              <i className="ri-mail-fill"></i>
           </div>
           <div className="login__box">
              <input type="phone" placeholder="phone" required className="login__input" name='phone' value={phone} onChange={handlePhone}/>
              <i className="ri-mail-fill"></i>
           </div>

           <div className="login__box">
              <input type="password" placeholder="Password" required className="login__input" value={password} onChange={handlePassword} name='password'/>
              <i className="ri-lock-2-fill"></i>
           </div>
        </div>

        <div className="login__check">
           <div className="login__check-box">
              <input type="checkbox" class="login__check-input" id="user-check"/>
              <label for="user-check" class="login__check-label">Remember me</label>
           </div>

           <a href="#" className="login__forgot">Forgot Password?</a>
        </div>

        <button type="submit" class="login__button">Create</button>

        <div className="login__register">
        Already have an account? <Link to="/addlogin"style={{color: 'red',textDecoration:'none'}}>Log in</Link>
        </div>
     </form>
  </div>
</div>
  
  )
}

export default Addsignup