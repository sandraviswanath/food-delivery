import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import add from './addbanner.webp'
import image from './img-12.avif'
import './Login3.css'
import './styles.css'
import { userData } from '../../App';

function Signup2() {

    const navigate=useNavigate()
   

    const {setUser}=useContext(userData);

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
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
      const storename=name;
      const storeemail=email;
      event.preventDefault()
      
     
        try{
          const {data} =await axios.post('http://localhost:5000/signup',{name,email,phone,password})
        
          console.log(data.user)
          setUser(data.user)
                  
        }
        catch{
          
        }
        
        
        navigate(`/home2/${storename}/${storeemail}`)
  
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
        Already have an account? <Link to="/signup"style={{color: 'red',textDecoration:'none'}}>Log in</Link>
        </div>
     </form>
  </div>
</div>
  )
}

export default Signup2
