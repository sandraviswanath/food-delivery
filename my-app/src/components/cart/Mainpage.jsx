// import React, { useEffect, useState } from 'react'
// import Crudpage from './Crudpage';
// import axios from 'axios';

// function Mainpage() {
//     const [first, setfirst] = useState([])
//     useEffect(()=>{
//         const handleitems =async()=>{
//          try{
//            const response = await axios.get('http://localhost:5000/foodlist')    
//          setfirst(response.data)
//          console.log(first);
//          }
//          catch{
           
//          }
       
//        }
//        handleitems()
//     },[]);
//   return (
//     <div>
//          {first.map((cart)=>
//       <Crudpage cart={cart}/>
//          )}
//     </div>
//   )
// }

// export default Mainpage
// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch cart items from the backend when the component mounts
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/getcart');
//       setCartItems(response.data);
//       calculateTotalPrice(response.data);
//       console.log(response.data)
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//       setError('Error fetching cart items. Please try again later.');
//     }
//   };

// // const heyy=cartItems[0].procar;


// // console.log(heyy);

//   const calculateTotalPrice = (items) => {
//     const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//     setTotalPrice(total);

//   };

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



















//   const handleQuantityChange = async (itemId, newQuantity) => {
//     // Validate newQuantity
//     if (!Number.isInteger(parseInt(newQuantity)) || parseInt(newQuantity) <= 0) {
//       setError('Quantity must be a positive integer.');
//       return;
//     }
//     try {
//       // Update the quantity of the item in the cartItems state
//       const updatedCartItems = cartItems.map(item => {
//         if (item._id === itemId) {
//           return { ...item, quantity: parseInt(newQuantity) };
//         }
//         return item;
//       });
//       setCartItems(updatedCartItems);
      
//       // Call the calculateTotalPrice function to recalculate the total price
//       calculateTotalPrice(updatedCartItems);
      
//       // Send request to update quantity in the backend
//       await axios.patch(`http://localhost:5000/updatecart/${itemId}`, { quantity: newQuantity });
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       setError('Error updating quantity. Please try again later.');
//     }
//   };
  

//   const handleRemoveItem = async (itemId) => {
//     try {
//       await axios.delete(`http://localhost:5000/deletecart/${itemId}`);
//       fetchCartItems(); // Refresh cart items after deletion
//     } catch (error) {
//       console.error('Error removing item:', error);
//       setError('Error removing item. Please try again later.');
//     }
//   };


 


//   return (
//     <div>
//       <h1> Cart</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div>
//         {cartItems.map((item) => (
//           <div key={item._id}>
//             <p>{item.title} - ${item.price}</p>
//             <input
//               type="number"
//               value={item.quantity}
//               onChange={(e) => handleQuantityChange(item._id, e.target.value)}
//             />
//             <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
//             <h1>{item.price}</h1>
//           </div>
//         ))}
//       </div>
//       <h2>Total Price: ${totalPrice}</h2>
//     </div>
//   );
// };

// export default CartPage;
