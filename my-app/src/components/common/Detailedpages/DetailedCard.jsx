import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './DetailedCard.css'
// import '../CardCollection.css'

function DetailedCard() {
    const {name}=useParams()
    const [first, setfirst] = useState([]);
    useEffect(()=>{
    const handleitems =async()=>{
     
     try{
       const response = await axios.get('http://localhost:5000/foodlist')
               
     setfirst(response.data)
    //  console.log(first);
     }
     catch{
       
     }
   
   };
   handleitems();
},[]);

    const newname=name;
    // console.log(newname)
    const namedetails=first.filter((item)=>item.title===newname)
    // console.log(namedetails)


   
        const [addedToCart, setAddedToCart] = useState(false);
      
        // const handleAddToCart = async () => {
        //   try {
        //     await axios.post('http://localhost:5000/createcart', { productId: namedetails._id, quantity: 1 });
        //     // await axios.post('http://localhost:5000/createcart');
        //     setAddedToCart(true);
        //   } catch (error) {
        //     console.error('Error adding item to cart:', error);
        //   }
          
        // };

        const handleAddToCart = async () => {
          try {
            // Access _id of the first element in the namedetails array
            const productId = namedetails[0]._id;
            const procar = namedetails;
            console.log(procar);
            await axios.post('http://localhost:5000/createcart', { productId, quantity: 1,procar });
            setAddedToCart(true);
          } catch (error) {
            console.error('Error adding item to cart:', error);
          }
        };
        
    
  return (
    <div>
        {namedetails.map((details)=>(
      <section id="prodetails" class="section-p1">
    <div class="single-pro-image">
        <img src={details.cover} width="100%" id="mainImg"alt=""/>
        
    </div>
    <div class="single-pro-details">

<h4>{details.title}</h4>
<h6>{details.subtitle}</h6>
<h6 style={{color:'rgb(105, 105, 105)'}}>{details.place}</h6>
<p style={{color:'rgb(105, 105, 105)'}}>{details.time}</p>
<h2>$139.00</h2>
<select >
    <option>Select Size</option>
    {[...Array(10).keys()].map((x,i)=>{
                return <option value={i+1}>{i+1}</option>
            })}
    {/* <option>1</option>
    <option>2</option>
    <option>X</option>
    <option>XXL</option> */}
</select>
<input type="number" value="1"/>
{!addedToCart && <button onClick={handleAddToCart} class="normal">Add To Cart</button>}
{addedToCart && <p>Item added to cart!</p>}
<h4>Product Details</h4>
<span>Multicoloured printed casual shirt, has a spread collar, button placket, and curved hem.It's crafted from a soft woven fabric and boasts traditional details like a classic fit, Cuban collar, button-down front, and short sleeves.</span>
    </div>
</section>
))}  
    </div>
  )
}

export default DetailedCard
