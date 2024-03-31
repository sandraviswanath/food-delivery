import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { userData } from '../../App';
import { Button, Table } from 'react-bootstrap';
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from 'react-icons/io';

const Cart2 = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const {email}=useParams();
  // console.log(email);
const {user}=useContext(userData);

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
  //       // const response = await axios.get('http://localhost:5000/getcart');
  //       setCartItems(response.data);
  //     } catch (error) {
  //       console.error('Error fetching cart items:', error);
  //     }
  //   };

  //   fetchCartItems();
  // }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
        const products = response.data.products;
        setCartItems(products);

        calculateTotalPrice(products); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Error fetching cart items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user.email]);

  const calculateTotalPrice = (items) => {
    // Calculate total price by summing up the price of each item
    const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);
    setTotalPrice(totalPrice);
  };

  const updateQuantity = (productId, newQuantity) => {
    // Update the quantity of the product in the cartItems state
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    calculateTotalPrice(updatedCartItems); // Recalculate total price when quantity is updated
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('cartItems:', cartItems);
 
  return (
//     <div>
//       <h1>Cart</h1>
//       <ul>
//       {cartItems.map(product => (
//     <div key={product.id} style={{ display: 'flex', flexWrap: 'wrap' }}>
        
        
//                 <section id="product1" className="section-p1" style={{ width: '23%', marginTop: '-100px' }} key={product.id}>
//                     <div className="pro-container" style={{ display: 'flex' }}>
//                         <div className="pro" style={{ height: '310px' }}>
//                             <img src={product.foodimage} alt={product.foodname} style={{ height: '150px', width: '220px' }} />
//                             <div className='res-row'>
//                                 <div className='res-name'>{product.foodname}</div>
//                             </div>
//                             <div className="des">
//                                 <span></span>
//                                 <h4>{product.price}</h4>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
          
       
//     </div>
// ))}
        
      


//       </ul>
//     </div>
<div>
<h1>Cart</h1>
<ul>
  {cartItems.map(product => (
    <div key={product.id} style={{ display: 'flex', flexWrap: 'wrap' }}>
      <section id="product1" className="section-p1" style={{ width: '23%', marginTop: '-100px' }} key={product.id}>
        <div className="pro-container" style={{ display: 'flex' }}>
          <div className="pro" style={{ height: '310px' }}>
            <img src={product.foodimage} alt={product.foodname} style={{ height: '150px', width: '220px' }} />
            <div className='res-row'>
              <div className='res-name'>{product.foodname}</div>
            </div>
            <div className="des">
              <span></span>
              <h4>{product.price}</h4>
              <input type="number" value={product.quantity} onChange={(e) => updateQuantity(product.id, parseInt(e.target.value))} />
            </div>
          </div>
        </div>
      </section>
    </div>
  ))}
</ul>
<div>Total Price: ${totalPrice}</div>
</div>

  );
};

export default Cart2;
