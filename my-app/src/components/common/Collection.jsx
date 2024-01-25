import React, { useState } from 'react'
import './Collection.css'
import axios from 'axios'
import { FaCaretRight } from "react-icons/fa";
// import Nextarrow from './common/carousel/Nextarrow';
import Slider from 'react-slick';
import Nextarrow from './carousel/Nextarrow';

function Collection() {
  
const [first, setfirst] = useState([])
const handleitems =async()=>{
 
 try{
   const response = await axios.get('http://localhost:5000/getitems')
           
 setfirst(response.data)
 console.log(first);
 }
 catch{

 }

}
handleitems()

const settings = {
  
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <Nextarrow/>,
  prevArrow: <Nextarrow/>
};
  return (
    <div className='collection-wrapper'>
      <div className='max-width collection'>
        <div className='collection-title'>Collections</div>
        <div className='collection-subtitle-row'>
         <div className='collection-subtitle-text'>
           Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends
         </div>
        
<div className='collection-location'>
<div>all collections in cochi</div>
<FaCaretRight className='absolute-center'/>
</div>
      </div>
      <Slider {...settings}>
      {first.map((item)=>
           <div>
            <div className='collection-cover'>
          <img src={item.cover} className='collection-image' alt={item.title}/>
             <div className='gradient-bg'></div>
             <div className='collection-card-title'>{item.title}</div>
             <div className='collection-card-subtitle'>
             <div>{item.places}</div>
             </div>
            </div>
           </div>
           
            )}
          
      </Slider>
    </div>
    </div>
  )
}

export default Collection
