import React, { useContext, useState } from 'react'
import './admin.css'
import './adminstyle.css'
// import add from './addbanner.webp'
// import foodban from './foodban.jpg'
// import hungry from './hungry.jpg'

import image from './foodban.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { userData } from '../../App'
import axios from 'axios'
function AdminLogin() {

   const navigate=useNavigate()
   const [show, setShow] = useState(false);

 
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


const handleSubmit = async (event) => {
   event.preventDefault();
 
   try {
     const response = await axios.post('http://localhost:5000/adminlogin', { email, password, name });
     
      navigate(`/dashboard/${response.data.id}`);
     
     
   } catch (error) {
     console.log('Login error:', error);
     // Handle network errors or other exceptions here
   }
 };
 
 


  return (
    <div>
    
        <div className="login">
         <img src={image} alt="image" className="login__bg"/>

         <form action="" className="login__form" onSubmit={handleSubmit}>
            <h1 className="login__title">Login</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input type="email" placeholder="Email ID" required className="login__input" name='email' value={email} onChange={handleEmail}/>
                  <i className="ri-mail-fill"></i>
               </div>

               <div className="login__box">
                  <input type="password" placeholder="Password" required className="login__input" value={password} onChange={handlePassword} name='password'/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>


            <button type="submit" class="login__button">Login</button>

         </form>
      </div>
     
    </div>
  )
}

export default AdminLogin
