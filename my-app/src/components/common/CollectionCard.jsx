import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import CardCollection from './CardCollection'
import './CollectionCard.css'

 function CollectionCard() {
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
        <CardCollection display={display}/>
     
     )}
     </div>
    </div>
   )
 }
 
 export default CollectionCard
 