import React, { useState } from 'react';
import { CiStar } from 'react-icons/ci';
// import './CardCollection.css';
import { Card, Row } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios';

function GetPlace() {
    const [first, setfirst] = useState([])
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/collectionlist')
               
     setfirst(response.data)
     console.log(first);
     }
     catch{
       
     }
   
   }
   handleitems()
  // Filter the data based on the place property
  const filteredData = first.filter(item => item.place === 'thrissur');

  return (
    <section id="product1" style={{ width: '23%' }}>
      {/* <h2>featured products</h2>
      <p>Summer Collection New Modern Design</p> */}
      <div className=" pro-container" >
        {filteredData.map(display => (
          <Link to={`/detailed/${display.title}`} key={display.title} style={{ textDecoration: 'none' }}>
            <div className="pro">
              <img src={display.cover} alt={display.title} style={{ height: '50px !important' }} />
              <div className='res-row'>
                <div className='res-name'>{display.title}</div>

                {display.rating && (
                  <div className='res-rating absolute-center'>{display.rating} <CiStar className='absolute-center' style={{ fontSize: '10px', marginLeft: '2px' }} />
                  </div>)}
              </div>
              <div className="des">
                <span>{display.subtitle}</span>
                <h4>{display.place}</h4>
              </div>
              {/* <a href="#"><BsFillCartFill className='cart'/></a> */}
              <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
              <a href="#"><i className='cart'>{display.time}</i></a>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GetPlace;
