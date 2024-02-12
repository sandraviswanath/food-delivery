// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
// import Crudpage from './Crudpage'

// function Crudadd() {
//     const [first, setfirst] = useState(null)
  
// const navigate=useNavigate()
   
//     useEffect(()=>{
//     const handleitems =async()=>{
//      try{
//        const response = await axios.get('http://localhost:5000/foodlist')    
//      setfirst(response.data)
//      console.log(first);
//      }
//      catch{
       
//      }
//      const data ={
//         name:'heyy',
//         image:'hiii',
//         price:'124',
//      }
//      setfirst(data);
   
//    }
//    handleitems()
// },[]);
// const AddtoCart=()=>{
//    const cartItem={
//     name:first.name,
//     image:first.cover,
//     price:first.price,

//    }
//    let cartItems= JSON.parse(localStorage.getItem('cartItems')) || [];
//    cartItems.push(cartItem)
//    localStorage.setItem('cartItems', JSON.stringify(cartItems))
//    navigate.push('/main');
// };
//   return (
//     <div>
//       {first.map((show)=>(
    
//                <>
//                {first ? (
//                 <div>
//         <h1>{show.title}</h1>
//         <h2>${show.price}</h2>
//         <Button onClick={()=> AddtoCart(show)}>heyyyy</Button>
//         </div>
//         ) : (<p>loading....</p>)}
//         </>
//    ))} 
//     </div>
//   )
// }

// export default Crudadd




import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [first,setfirst]= useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      // Simulated API call
     
         try{
           const response = await axios.get('http://localhost:5000/foodlist')    
         setProduct(response.data)
         console.log(product);
         }
         catch{
           
         }
        
       
       
  
    //   const data = {
    //     id: 1,
    //     name: 'Sample Product',
    //     description: 'This is a sample product description.',
    //     price: 10.99,
    //   };
    //   setProduct(data);
    };

    fetchProductDetails();
},[]);

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
    };

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    history('/crudpage');
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;

