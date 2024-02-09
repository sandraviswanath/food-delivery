import React, { useState } from 'react'
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

function AddForm() {

const [title, settitle] = useState('');
const [cover, setcover] = useState([]);
const [subtitle, setsubtitle] = useState('');
const [place, setplace] = useState('');
const [rating, setrating] = useState('');
const [fooditems, setfooditems] = useState([]);
const [email, setemail] = useState('');
const [address, setaddress] = useState('');
const [phone, setphone] = useState('');
const [ownername, setownername] = useState('');
const [time, settime] = useState('');

const handletitle =(event)=>{
    settitle(event.target.value);
  };
  const handleemail =(event)=>{
    setemail(event.target.value);
  };
  const handleaddress=(event)=>{
    setaddress(event.target.value);
  };
  
  const handletime=(event)=>{
    settime(event.target.value);
  };
  const handlefooditems=(event)=>{
    setfooditems(event.target.value);
  };
  
  const handlephone=(event)=>{
    setphone(event.target.value);
  };
  const handleownername=(event)=>{
    setownername(event.target.value);
  };
  const handlerating=(event)=>{
    setrating(event.target.value);
  };
  const handleplace=(event)=>{
    setplace(event.target.value);
  };
  const handlecover=(event)=>{
    setcover(event.target.value);
  };

  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const display = await axios.post('http://localhost:4008/createagent', { name,email, password,nationality,languages,experience,details,phone,profile});
//       console.log(display.data);
//     } catch (error) {
//       console.error('Axios Error:', error);
//     }
//   };
const handleSubmit =async(event)=>{
    event.preventDefault()
    const display =await axios.post('http://localhost:4008/createagent',{title,cover,phone,subtitle,place,rating,fooditems,email,address,phone,ownername,time})
    console.log(display.data)

  }
  return (
    <div>
      
      
      <Form>
<Form.Group className="mb-3" controlId="formBasicemail">
      <Form.Label>Restaurant details</Form.Label>
      <Form.Control
      type="text"
      placeholder="Restaurant name"
      value={title}
      onChange={handletitle}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicemail">
      
      <Form.Control
      type="text"
      placeholder="Restaurant complete address"
      value={address}
      onChange={handleaddress}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Contact number</Form.Label>
      <Form.Control
      type="text"
      placeholder="mobile number at restaurant"
      value={phone}
      onChange={handlephone}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Restaurant owner details</Form.Label>
      <Form.Control
      type="text"
      placeholder="Restaurant owner full name"
      value={ownername}
      onChange={handleownername}
      required
      
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
    
      <Form.Control
      type="text"
      placeholder="Restaurant owner email"
      value={email}
      onChange={handleemail}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
     
      <Form.Control
      type="text"
      placeholder="mobile number of owner"
      value={phone}
      onChange={handlephone}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Restaurant types & timings</Form.Label>
      <Form.Control
      type="text"
      placeholder="opening hours"
      value={time}
      onChange={handletime}
      required
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicname">
      
      <Form.Control
      type="text"
      placeholder="Restaurant name"
      value={title}
      onChange={handletitle}
      required
      />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicname">
    <Form.Label>Food items</Form.Label>
      <Form.Control
      type="text"
      placeholder="food items"
      value={fooditems}
      onChange={handlefooditems}
      required
      />
    </Form.Group>

   
    
    <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
        food images
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
           id="formFile"
           value={cover}
      onChange={handlecover}
      
          />
      </div>
    <Button 
    type="submit"
    onClick={handleSubmit}

    >
    Submit
    </Button>
  </Form>
    </div>
  )
}

export default AddForm