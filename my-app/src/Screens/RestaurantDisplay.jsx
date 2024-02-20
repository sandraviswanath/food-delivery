import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Restaurantdetails.css'

function RestaurantDisplay() {
  const {email}=useParams()
  const [first, setfirst] = useState([]);
  useEffect(()=>{
    const restaurantitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/foodlist')
               
     setfirst(response.data)
    //  console.log(first);
     }
     catch{
       
     }
   
   };
   restaurantitems();
},[]);

const newname=email;
    // console.log(newname)
    const namedetails=first.filter((item)=>item.email===newname)

  return (
    <div>
       <div>
    {namedetails.length > 0 && namedetails.map((details) => (
      <section id="prodetails" class="section-p1" key={details?._id}>
        {/* <div style={{display:'flex'}}> */}
        {/* <div class="single-pro-image">
          <img src={details?.cover} id="mainImg" width='686px'height='370px' alt=""/>
        
        </div> */}
       
        <Row>
          <Col sm={6}>
          <img src={details?.cover} id="mainImg"  alt="" style={{width:'100%',height:'400px'}}/>
          </Col>
          <Col sm={6} style={{textAlign:'left',marginTop:'50px'}}>
           
            {details && (
           <div class="single-pro-details">
              <h4>{details.title}</h4>
              <h6>{details.subtitle}</h6>
              <h6 style={{color:'rgb(105, 105, 105)'}}>{details.place}</h6>
              <p style={{color:'rgb(105, 105, 105)'}}>{details.time}</p>
              <a href={details.location} className='direcion'>Directions</a>
              <h2>{details.price}</h2>
           
         <Button className='openbut'><Link to="/addform"  className='openli'>Add food items</Link></Button>
        
       
              </div>
              )}
          </Col>
         
     
         
        </Row>
       
     
               
            
            
      </section>
   ))}
  </div>
    </div>
  )
}

export default RestaurantDisplay
