import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import Banner from './Banner';

function Signup() {
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
  
    }



  return (
   
    <div>
    <Button variant="primary" onClick={handleDisplay}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>SignUp</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
      
          <input
            className="input"
            type="text"
            value={name}
            id=""
            name="name"
            onChange={handleName}
            
          />
         
          <br />
         
          <input
            className="input"
            type="email"
            value={email}
            id=""
            name="email"
            onChange={handleEmail}
           
          />
          <br />
         
          <input
            className="input"
            type="password"
            value={password}
            id=""
            name="password"
            onChange={handlePassword}
            
          />
          <br />
          <br />
          <button type='submit' onClick={handleSubmit}>Create account</button>
          
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
         <a style={{}}>Already have an account?<span style={{color: 'black'}}> Log in</span></a>
      </Modal.Footer>
    </Modal>
    <Banner value={handleDisplay}/>
  </div>
  )
}

export default Signup
