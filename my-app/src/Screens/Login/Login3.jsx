import React, { useContext, useState } from 'react'
import './Login3.css'
import './styles.css'
// import add from './addbanner.webp'
// import foodban from './foodban.jpg'
// import hungry from './hungry.jpg'
import ban from './ban3.jpg'
import image from './img-12.avif'
import { Link, useNavigate } from 'react-router-dom'
import { userData } from '../../App'
import axios from 'axios'
function Login3() {

   const navigate=useNavigate()
   const [show, setShow] = useState(false);
const {user,setUser} = useContext(userData);
 
 const [email, setemail] = useState('')
 const [password, setpassword] = useState('')
 const[name, setname]=useState('')

 const handleEmail=(event)=>{
   setemail(event.target.value)
 }
 const handlePassword =(event)=>{
  //  setpassword(event.target.value)
  const trimmedPassword = event.target.value.trim();
  setpassword(trimmedPassword);
 }
 const handleName =(event)=>{
   setname(event.target.value)
 }



const handleSubmit = async (event) => {
   event.preventDefault();
 
   try {
     const response = await axios.post('http://localhost:5000/login', { email, password, name });
     
     // Log the response data using console.dir()
     console.dir(response.data);
 
     // Check if the response contains user data
     if (response.data.user) {
       setUser(response.data.user);
       console.log('User data in useContext:', response.data.user);
       navigate(`/home2/${response.data.user.email}`);
     } else {
       console.log('Login failed:', response.data);
       // Handle login failure here, such as displaying an error message to the user
     }
   } catch (error) {
     console.log('Login error:', error);
     // Handle network errors or other exceptions here
   }
 };
 
 
 

  return (
    <div>
    {user ? (
      navigate(`/home2/${user.email}`)
    ): (
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

            <div className="login__check">
               <div className="login__check-box">
                  <input type="checkbox" class="login__check-input" id="user-check"/>
                  <label for="user-check" class="login__check-label">Remember me</label>
               </div>

               <a href="" className="login__forgot"><Link to={`/forgotpassword`} style={{textDecoration:'none',color:'white'}}>Forgot Password?</Link></a>
            </div>

            <button type="submit" class="login__button">Login</button>

            <div className="login__register">
               Don't have an account? <Link to="/signup"style={{color: 'red',textDecoration:'none'}}>Register</Link>
            </div>
         </form>
      </div>
      )}
    </div>
  )
}

export default Login3
