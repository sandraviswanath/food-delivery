import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Restaurantdetails.css'
import { CiStar } from 'react-icons/ci'
import { BsFillCartFill } from 'react-icons/bs'
import { Button, Col, Container, Row } from 'react-bootstrap'


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

    const newemail=email;
    console.log(newemail)
    const namedetails=first.filter((item)=>item.email===newemail)
    // console.log(namedetails)
    const food = namedetails[0];

 console.log(food)
    

return (
  <div>
 <section id="product1">

         <div class="ban-restaurant">
         <Button className='openbut'><Link to="/addform"  className='openli'>Add food items</Link></Button>
        
        </div>
    <div>{namedetails.length > 0 && namedetails.map((details) => (
        <section id="prodetails" class="section-p1" key={details?._id}>
       {details && (
        <div>
    {details.fooditems && details.fooditems.map((menu) => (
<div className=" pro-container" >
   
    <div className="pro"style={{height:'310px'}}>
       
        <img key={menu?._id} src={menu && menu.foodimage} alt={menu && menu.foodname} style={{height:'150px',width:'220px'}}/>
        <div className='res-row'>
        <div className='res-name'>{menu && menu.foodname}</div>
       
        {menu && menu.itemrating && (
                         <div className='res-rating absolute-center'>{menu && menu.itemrating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
                         </div>)}
         </div>
         <div className="des">
         <span></span>
            <h4>{menu && menu.price}</h4>
        </div>
       

    </div>
   
</div>
))}
</div>
       )}
</section>
))}
  </div>
  </section>
  
  </div>

)
}

export default Restaurantdetails
