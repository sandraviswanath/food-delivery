import axios from 'axios'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function Login() {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const handleEmail=(event)=>{
    setemail(event.target.value)
  }
  const handlePassword =(event)=>{
    setpassword(event.target.value)
  }
  const handleSubmit =async(event)=>{
    event.preventDefault()
    const display =await axios.post('http://localhost:5000/login',{email,password})
    console.log(display.data)

  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form>
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
          <button type='submit' onClick={handleSubmit}>Login</button>
          
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
         <a style={{}}>New to Zomato?<span style={{color: 'black'}}>Create account</span></a>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default Login
