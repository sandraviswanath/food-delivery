
import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import OrderSummary from './OrderSummary';
import Paymentmethod from './Paymentmethod';
import UserInfo from './UserInfo';

function Orderpage() {
    const [cartItems, setCartItems] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');
  // Fetch product data
  useEffect(() => {
    // Fetch product data from API and set cartItems state
  }, []);

  // Function to handle adding items to the cart
  const addToCart = (item) => {
    // Add item to cartItems state
  };

  // Function to handle removing items from the cart
  const removeFromCart = (itemId) => {
    // Remove item from cartItems state
  };

  // Function to handle user info submission
  const handleUserInfoSubmit = (data) => {
    // Set userInfo state
  };

  // Function to handle payment method selection
  const handlePaymentMethodSelect = (method) => {
    // Set paymentMethod state
  };

  // Function to place the order
  const placeOrder = () => {
    // Implement order placement logic
  };

  return (
    <div>
      <ProductList
        products={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <UserInfo onSubmit={handleUserInfoSubmit} />
      <Paymentmethod onSelect={handlePaymentMethodSelect} />
      <OrderSummary
        cartItems={cartItems}
        userInfo={userInfo}
        paymentMethod={paymentMethod}
        placeOrder={placeOrder}
      />
    </div>
  );
}


export default Orderpage
