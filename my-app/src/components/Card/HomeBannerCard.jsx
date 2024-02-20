import React from 'react'
import { CiStar } from 'react-icons/ci'
// import './CardCollection.css'
import { Card, Row } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function HomeBannerCard({display}) {
  
 
  return (
    
    


    <section id="product1" style={{width:'23%'}}>
{/* <h2>featured products</h2>
<p>Summer Collection New Modern Design</p> */}
<div className=" pro-container" >
   <Link to={`/homedetails/${display.email}`} style={{textDecoration:'none'}}>
    <div className="pro"style={{height:'310px'}}>
        <img src={display.cover} alt={display.title} style={{height:'150px',width:'220px'}}/>
        <div className='res-row'>
        <div className='res-name'>{display.title}</div>
       
        {display.rating && (
         <div className='res-rating absolute-center'>{display.rating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
         </div>)}
         </div>
         <div className="des">
         <span>{display.subtitle}</span>
            <h4>{display.place}</h4>
        </div>
       

    </div>
    </Link> 
</div>
</section>
  )
}

export default HomeBannerCard
