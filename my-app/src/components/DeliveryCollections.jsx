import React, { useEffect, useState } from 'react'
import './DeliveryCollections.css'
import Slider from "react-slick"
import Nextarrow from './common/carousel/Nextarrow';
import axios, {} from 'axios'
import DeliveryItem from './DeliveryItem';

const settings = {
  
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <Nextarrow />,
  prevArrow: <Nextarrow />
};


function DeliveryCollections() {
 
const [first, setfirst] = useState([])
 const handleitems =async()=>{
  
  try{
    const response = await axios.get('http://localhost:5000/getitems')
            
  setfirst(response.data)
 
  }
  catch{

  }

}
handleitems()
  return (
    <div className='delivery-collections'>
        <div className='max-width'>
           <div className='collection-title'>Eat what makes you happy</div>
           <Slider {...settings}>
           
            {first.map((item)=>
            <DeliveryItem item={item}/>
           
            )}
          
           </Slider>
        </div>
      
    </div>
  )
}

export default DeliveryCollections
