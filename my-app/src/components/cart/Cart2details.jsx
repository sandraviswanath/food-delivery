import React, { useState } from 'react';
import axios from 'axios';

const Cart2details = ({ productId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addToCart = async () => {
    setLoading(true);
    try {
      // Send a POST request to the backend API to add the product to the cart
      const response = await axios.post('http://localhost:5000/createCart', {
        productId: productId,
        quantity: 1 // Assuming the default quantity is 1
      });
      console.log('Item added to cart:', response.data);
      // Handle success, e.g., show a success message or update the UI
    } catch (error) {
      setError('Failed to add item to cart');
      console.error('Error adding item to cart:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={addToCart} disabled={loading}>
        {loading ? 'Adding to cart...' : 'Add to Cart'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Cart2details;
