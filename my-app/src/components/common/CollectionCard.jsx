import axios from 'axios'
import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

 function CollectionCard() {
    const [first, setfirst] = useState([])
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/collection')
               
     setfirst(response.data)
     console.log(first);
     }
     catch{
       
     }
   
   }
   handleitems()
    
   return (
     <div>
        <h1>helooo</h1>
        {first.map((display)=>
       
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    
    )}
     </div>
   )
 }
 
 export default CollectionCard
 