import React, { useEffect, useState } from 'react'

import axios from 'axios'

function Product() {
    const [first, setfirst] = useState([])
    useEffect(() => {
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
}, []);
    
  return (
    <div>
        <div className='row'>
        {first.map((product)=>
     <div className='col-md-4'>
            <div>
            <h1>{product.title}</h1>
      <img src={product.cover} className='img-fluid'style={{height:'200px',width:'200px'}} />
      <div className='flex-container'>
        <div className='w-100'>
        <p>heyy</p>
        </div>
     <div className='w-100'>
        <p>quantity</p>
        <select name="" id="">
            {[...Array(10).keys()].map((x,i)=>{
                return <option value={i+1}>{i+1}</option>
            })}
        </select>
     </div>
      </div>
      <div className='flex-container'>

      </div>
     </div>
     </div>
        )}

        </div>
      
    </div>
  )
}

export default Product
