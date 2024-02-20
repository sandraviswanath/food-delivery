import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Restaurantdetails.css'
import { CiStar } from 'react-icons/ci'
import { BsFillCartFill } from 'react-icons/bs'
import { Button, Col, Container, Row } from 'react-bootstrap'
import RestaurantDisplay from './RestaurantDisplay'


function Restaurantdetails() {
    
    const {name,email}=useParams()
    const [first, setfirst] = useState([]);
    
    useEffect(()=>{
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/getfooditems')
               
     setfirst(response.data)
    //  console.log(first);
     }
     catch{
       
     }
   
   };
   handleitems();
},[]);

    const newname=email;
   
    // const namedetails=first.filter((item)=>item.email===newemail)
    // // console.log(namedetails)
    // const food = namedetails[0];



 const prodetails=first.filter((item)=>item.email===newname)
 console.log(prodetails)
    

return (
 
 <section>
        <h4 class="section-p1"style={{fontSize:'40px',marginBottom:'-90px'}}>My Restaurant</h4>
     <RestaurantDisplay/>
     <h4 class="section-p1" style={{marginTop:'-70px'}}>Food items</h4>
  {prodetails.length > 0 && prodetails.map((data) => (
  <div key={data._id} style={{display:'flex'}}>
    
    {data.fooditems && data.fooditems.map((menu) => (
      menu && (
        <section id="product1" class="section-p1" style={{ width: '23%',marginTop:'-100px' }} key={menu._id}>
          <div className="pro-container" style={{ display: 'flex' }}>
            <div className="pro" style={{ height: '310px' }}>
              {menu.foodimage && <img src={menu.foodimage} alt={menu.foodname} style={{ height: '150px', width: '220px' }} />}
              <div className='res-row'>
                <div className='res-name'>{menu.foodname}</div>
                {menu.itemrating && (
                  <div className='res-rating absolute-center'>{menu.itemrating} <CiStar className='absolute-center' style={{ fontSize: '10px', marginLeft: '2px' }} />
                  </div>)}
              </div>
              <div className="des">
                <span></span>
                <h4>{menu.price}</h4>
              </div>
             
            </div>
          </div>
        </section>
      )
    ))}
  </div>
))}
  </section>
  
 

)
}

export default Restaurantdetails
