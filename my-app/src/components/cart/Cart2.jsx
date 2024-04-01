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
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
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

 
  

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
        const products = response.data.products.map(product=>({
          ...product,
          quantity: product.quantity ||1 // Set default quantity to 1 if it's missing
        }));

        setCartItems(products);

        calculateTotalPriceAndQuantity(products); 
      } catch (error) {
        console.error('Error fetching cart items:', error);
        setError('Error fetching cart items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user.email]);

 
  // const calculateTotalPriceAndQuantity = (items) => {
  //   let totalPrice = 0;
  //   let totalQuantity = 0;
  
  //   items.forEach(item => {
  //     totalPrice += item.price * item.quantity;
  //     totalQuantity += item.quantity;
  //   });
  
  //   setTotalPrice(totalPrice);
  //   setTotalQuantity(totalQuantity);
  // };
  const calculateTotalPriceAndQuantity = (items) => {
    let totalPrice = 0;
    let totalQuantity = 0;
  
    items.forEach(item => {
      // Extract the numerical value from the price string and convert it to a number
      const itemPrice = parseFloat(item.price.replace('₹', ''));
      totalPrice += itemPrice * item.quantity;
      totalQuantity += item.quantity;
    });
  
    // Update state variables with calculated values
    setTotalPrice(totalPrice);
    setTotalQuantity(totalQuantity);
  };
  
  

  // const updateQuantity = (productId, newQuantity) => {
  //   // Update the quantity of the product in the cartItems state
  //   const updatedCartItems = cartItems.map(item => {
  //     if (item.id === productId) {
  //       return { ...item, quantity: newQuantity };
  //     }
  //     return item;
  //   });
  //   setCartItems(updatedCartItems);
  //   calculateTotalPriceAndQuantity(updatedCartItems); 
    
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/deletecart/${id}/${user.email}`);
  //     // After successful deletion on the server, update the cart items displayed in the UI
  //     const updatedCartItems = cartItems.filter(item => item._id !== id);
  //     setCartItems(updatedCartItems);
  //   } catch (error) {
  //     console.error('Error deleting product:', error);
  //   }
  // };
 
  const updateQuantity = (productId, newQuantity) => {
    // Update the quantity of the product in the cartItems state
    const updatedCartItems = cartItems.map(item => {
      if (item._id === productId) { // Update to item._id
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    calculateTotalPriceAndQuantity(updatedCartItems); 
  };
  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/deletecart/${id}/${user.email}`);
      // After successful deletion on the server, update the cart items displayed in the UI
      const updatedCartItems = cartItems.filter(item => item._id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log('cartItems:', cartItems);
 
  return (

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
              <input type="number" value={product.quantity} onChange={(e) => updateQuantity(product._id, parseInt(e.target.value))} />
              
            </div>
            {/* <button onClick={()=>handleDelete(product._id)}>remove</button> */}
            <button onClick={() => handleDelete(product._id)}>Remove</button>
          </div>
        </div>
      </section>
    </div>
  ))}
</ul>

<div>Total Price: ${totalPrice}</div>
<div>Total Quantity: {totalQuantity}</div>
{/* <Button onClick={handleOrderNow}>Order Now</Button> */}
</div>

  );
};

export default Cart2;



