import React from 'react'
import { CiStar } from 'react-icons/ci'
import './CardCollection.css'
import { Card, Row } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function CardCollection({display}) {
 
  return (
    // <div>
     
    // <div className='explore-card cur-po'>
    //  <div style={{ width: '18rem'}} className='explore-card-cover'>
    //    <img className='explore-card-image' variant="top" src={display.cover} alt={display.title}/>
    //    <div>
    //      <div className='delivery-time'></div>
    //     <div className='res-row'>
    //     <div className='res-name'>{display.title}</div>
    //     {display.rating && (
    //      <div className='res-rating absolute-center'>{display.rating} <CiStar className='absolute-center'style={{fontSize:'10px',marginLeft:'2px'}} />
    //      </div>)}
    //     </div>
    //     <div className='res-row'>
    //     <span className='res-cuisine-tag'>{display.subtitle}</span>
    //     </div>
    //     <div className='res-row'>
        
    //     </div>
    //    </div>
    //  </div>
    // </div>
    // </div>


    <section id="product1" style={{width:'23%'}}>
{/* <h2>featured products</h2>
<p>Summer Collection New Modern Design</p> */}
<div className=" pro-container" >
   <Link to={`/detailed/${display.email}`} style={{textDecoration:'none'}}>
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
        {/* <a href="#"><BsFillCartFill className='cart'/></a> */}
        {/* <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
        <a href="#"><i className='cart'>{display.time}</i></a> */}

    </div>
    </Link> 
</div>
</section>
  )
}

export default CardCollection
