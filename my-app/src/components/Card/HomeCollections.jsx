import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import HomeBannerCard from './HomeBannerCard'


// import './CollectionCard.css'


 function HomeCollections() {
    const [first, setfirst] = useState([])
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/foodlist')
               
     setfirst(response.data)
     console.log(first);
     }
     catch{
       
     }
   
   }
   handleitems()
    
   return (
<div className='max-width explore-section'>
        <div className='collection-title'></div>
     <div className='explore-grid'>
     {first.map((display)=>
        <HomeBannerCard display={display}/>
     
     )}
     </div>
    </div>
   )
 }
 
 export default HomeCollections
 