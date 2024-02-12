

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const CartPage = () => {
  const [first, setfirst] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const handleitems =async()=>{
     try{
       const response = await axios.get('http://localhost:5000/getfooditems')
                setfirst(response.data)
    //  console.log(first);
     }
     catch{ 
     }
   };
   handleitems();
},[]);
 
const {_id}= useParams();
const newid= parseInt(_id, 10);
const details = first.find((item)=> item._id===newid);
console.log(details);



  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalPrice(total);

  };

  // const handleQuantityChange = async (itemId, newQuantity) => {
  //   // Validate newQuantity
  //   if (!Number.isInteger(parseInt(newQuantity)) || parseInt(newQuantity) <= 0) {
  //     setError('Quantity must be a positive integer.');
  //     return;
  //   }
  //   try {
  //     await axios.patch(`http://localhost:5000/updatecart/${itemId}`, { quantity: newQuantity });
  //     fetchCartItems(); // Refresh cart items after update
  //   } catch (error) {
  //     console.error('Error updating quantity:', error);
  //     setError('Error updating quantity. Please try again later.');
  //   }
  // };
  const handleQuantityChange = async (itemId, newQuantity) => {
    // Validate newQuantity
    if (!Number.isInteger(parseInt(newQuantity)) || parseInt(newQuantity) <= 0) {
      setError('Quantity must be a positive integer.');
      return;
    }
    try {
      // Update the quantity of the item in the cartItems state
      const updatedCartItems = cartItems.map(item => {
        if (item._id === itemId) {
          return { ...item, quantity: parseInt(newQuantity) };
        }
        return item;
      });
      setCartItems(updatedCartItems);
      
      // Call the calculateTotalPrice function to recalculate the total price
      calculateTotalPrice(updatedCartItems);
      
      // Send request to update quantity in the backend
      await axios.patch(`http://localhost:5000/updatecart/${itemId}`, { quantity: newQuantity });
    } catch (error) {
      console.error('Error updating quantity:', error);
      setError('Error updating quantity. Please try again later.');
    }
  };
  

  // const handleRemoveItem = async (itemId) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/deletecart/${itemId}`);
  //     fetchCartItems(); // Refresh cart items after deletion
  //   } catch (error) {
  //     console.error('Error removing item:', error);
  //     setError('Error removing item. Please try again later.');
  //   }
  // };


 


  return (
    <div>
    <h1> Cart</h1>
   
    <div>
      {details && (
        <div key={details._id}>
          <p>{details.foodname} - ${details.price}</p>
          <input
            type="number"
            value={details.quantity}
            onChange={(e) => handleQuantityChange(details._id, e.target.value)}
          />
          <button>Remove</button>
          <h1>{details.price}</h1>
        </div>
      )}
    </div>
    <h2>Total Price: ${totalPrice}</h2>
  </div>
  );
};

export default CartPage;
