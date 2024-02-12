import React, { useState } from 'react';
import axios from 'axios';

function Order() {
  const [email, setEmail] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/orderdata', {
        email,
        order_date: orderDate,
        order_data: { product: productName, quantity, price }
      });
      setSuccessMessage('Order placed successfully!');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Failed to place order');
      console.error('Error placing order:', error);
    }
  };

  const handleFetchOrders = async () => {
    try {
      const response = await axios.post('http://localhost:5000/myorderdata', {
        email
      });
      console.log('My orders:', response.data.orderData);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Failed to fetch orders');
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleOrderSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="date" value={orderDate} onChange={(e) => setOrderDate(e.target.value)} placeholder="Order Date" required />
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Product Name" required />
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
        <button type="submit">Place Order</button>
      </form>
      <button onClick={handleFetchOrders}>Fetch My Orders</button>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Order;
