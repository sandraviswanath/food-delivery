
import React, { useState, useEffect, useContext } from 'react';


import Paymentmethod from './Paymentmethod';
import UserInfo from './UserInfo';
import axios from 'axios';
import { userData } from '../../App';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './Cart2';

import './Orderpage.css'


function Orderpage() {
    // const [cartItem, setCartItem] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');
    // const { cartItems, totalPrice, totalQuantity } = props.location.state || {};
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);


    // const {email}=useParams();
    // console.log(email);
  const {user}=useContext(userData);
  const navigate = useNavigate();
  
  

  
    useEffect(() => {
      const fetchCartItems = async () => {
        try {
  
          if (!user) {
            // Redirect to login page with a message
            navigate('/log', { state: { message: 'Please log in to view your cart' } });
            return;
          }
  
          const response = await axios.get(`http://localhost:5000/getcart/${user.email}`);
          const products = response.data.products.map(product=>({
            ...product,
            quantity: product.quantity ||1 // Set default quantity to 1 if it's missing
          }));
  const updatedCartItems = cartItems.map(item =>{
    const existingIndex = products.findIndex(product=>product._id === item._id);
    if (existingIndex !== -1) {
      return{...item,quantity:products[existingIndex].quantity};
      }
     return item;
    });
    const newProducts =products.filter(product => !cartItems.some(item => item._id === product._id));
  
  const mergedCartItems = [...updatedCartItems,...newProducts];
  
  
          setCartItems(mergedCartItems);
  
          calculateTotalPriceAndQuantity(mergedCartItems); 
        } catch (error) {
          console.error('Error fetching cart items:', error);
          setError('Error fetching cart items. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  
    //   fetchCartItems();
    // }, [user.email]);
    if (user && user.email) { 
      fetchCartItems();
    }
  }, [user]);
  
  
  
  
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
   

   
   
 
    

    // Function to handle user info submission
    const handleUserInfoSubmit = (data) => {
        setUserInfo(data);
    };

    // Function to handle payment method selection
    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
    };

    // Function to place the order
   
      // const placeOrder  = async () => {
      //   try {
      //     const orderData = {
      //       userInfo: userInfo,
      //       cartItems: cartItems,
      //       totalPrice: totalPrice, // Extract price from string and convert to number
      //       paymentMethod: paymentMethod
      //       }
            
      //     const response = await axios.post('http://localhost:5000/createorder', orderData);
      //     console.log('Order placed successfully:', response.data);
       
          
      //     // navigate('/createorder');
      //   } catch (error) {
      //     console.error('Error placing order:', error);
      //   }
      
      // };

      const placeOrder = async () => {
        try {
          // Validate user info before placing the order
          if (!userInfo || !userInfo.email) {
            // Handle the case where email is missing from user info
            console.error('Email is required');
            return;
          }
      
          // Prepare the order data to send to the backend
          const orderData = {
            userInfo: userInfo,
            cartItems: cartItems,
            totalPrice: totalPrice,
            paymentMethod: paymentMethod
          };
      
          // Send the order data to the backend
          const response = await axios.post('http://localhost:5000/createorder', orderData);
      
          // Log the response from the backend
          console.log('Order placed successfully:', response.data);
      
          // Redirect the user to the order confirmation page
          // setShowMessage(true);
          window.alert('This is the message!');
          navigate('/createorder');

        } catch (error) {
          console.error('Error placing order:', error);
        }
      };
      
        console.log('Order Summary:', { cartItems, userInfo, paymentMethod });
    

      const handleClick = () => {
        setShowMessage(true);
        
      };
    return (
        <div style={{margin:'5% 35% 5% 35%',border:'1px solid red',padding:'10px'}}>
           
            <UserInfo onSubmit={handleUserInfoSubmit} />
            <Paymentmethod onSelect={handlePaymentMethodSelect} />
            

<div style={{paddingTop:'20px'}}>
       <h2 className='headof'>Order Summary</h2>
       <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>

    
    </div>


            <button onClick={placeOrder} >Place Order</button>
            {/* <button onClick={handleClick}>Place Order</button>
      {showMessage && <p>Your Order is placed!</p>} */}
        </div>
    );
}

export default Orderpage;




