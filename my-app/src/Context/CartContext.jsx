// import React, { createContext, useState } from 'react';

// // Create a new context
// const CartContext = createContext();

// // Create a provider component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalQuantity, setTotalQuantity] = useState(0);

//   // You can define functions to update the cartItems, totalPrice, and totalQuantity here

//   const calculateTotalPriceAndQuantity = (items) => {
//     let totalPrice = 0;
//     let totalQuantity = 0;
  
//     items.forEach(item => {
//       // Extract the numerical value from the price string and convert it to a number
//       const itemPrice = parseFloat(item.price.replace('₹', ''));
//       totalPrice += itemPrice * item.quantity;
//       totalQuantity += item.quantity;
//     });
  
//     // Update state variables with calculated values
//     setTotalPrice(totalPrice);
//     setTotalQuantity(totalQuantity);
//   };
  
//   const updateQuantity = (productId, newQuantity) => {
//     // Update the quantity of the product in the cartItems state
//     const updatedCartItems = cartItems.map(item => {
//       if (item._id === productId) { // Update to item._id
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//     calculateTotalPriceAndQuantity(updatedCartItems); 
//   };
  


//   return (
//     <CartContext.Provider value={{ cartItems, totalPrice, totalQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartContext;
