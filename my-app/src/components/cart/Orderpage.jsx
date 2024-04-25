
import React, { useState, useEffect, useContext } from 'react';


import Paymentmethod from './Paymentmethod';
import UserInfo from './UserInfo';
import axios from 'axios';
import { userData } from '../../App';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './Cart2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Orderpage.css'


function Orderpage() {

  const{state} = useLocation();
  const {user}=useContext(userData);
  const navigate = useNavigate();
  console.log(state,'state');

 
  
console.log(user,'user');
console.log(user.email,'email');

    const [userInfo, setUserInfo] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');
   
   
    const [alldelete, setAlldelete] = useState([])

const [order, setOrder] = useState("")
    // const {email}=useParams();
    // console.log(email);

  
  


  // const handleAllDeleteAndPlaceOrder = async (id) => {
  //   if (!paymentMethod) {
  //     alert("Please select a payment method before placing the order.");
  //     return;
  //   }
  
  //   try {
  //     if (!user || !user.email) {
  //       console.error("User email is missing or undefined");
  //       return;
  //     }
  
  //     await axios.delete(`http://localhost:5000/deleteall/${user.email}`);
  
  //     const updatedCartItems = alldelete.filter((item) => item._id !== id);
  //     setAlldelete(updatedCartItems);
     
  //   } catch (error) {
  //     console.error("Error deleting products:", error);
  //   }
  // };

  const handleAllDeleteAndPlaceOrder = async (id) => {
    if (!paymentMethod && paymentMethod !== 'cash_on_delivery') {
      alert("Please select a payment method before placing the order.");
      return;
    }
  
    try {
      if (!user || !user.email) {
        console.error("User email is missing or undefined");
        return;
      }
  
      await axios.delete(`http://localhost:5000/deleteall/${user.email}`);
  
      const updatedCartItems = alldelete.filter((item) => item._id !== id);
      setAlldelete(updatedCartItems);
  
      if (paymentMethod === 'cash_on_delivery') {
        await placeOrder();
      }
    } catch (error) {
      console.error("Error deleting products:", error);
    }
  };
  

    // Function to handle user info submission
    const handleUserInfoSubmit = (data) => {
        setUserInfo(data);
    };
console.log(userInfo,'userinfo');
    // Function to handle payment method selection
    const handlePaymentMethodSelect = (method) => {
        setPaymentMethod(method);
    };
console.log(paymentMethod);
    // Function to place the order
   
      
   


      const placeOrder = async () => {
        try {
          // Prepare the order data to send to the backend
          const orderData = {
            userInfo: userInfo,
            cartItems: state.cartItems.map(item => ({
              _id: item._id,
              name: item.foodname,
              image: item.foodimge,
              price: item.price,
              quantity: item.quantity
            })),
            totalPrice: state.totalPrice,
            paymentMethod: paymentMethod,
            email: userInfo.email
          };
      
          // Log the order data for debugging
          console.log("Order data:", orderData);
      
          // Send the request to the server
          const response = await axios.post(
            "http://localhost:5000/createorder",
            orderData
          );
      
          // Log the response from the backend
          console.log("Order placed successfully:", response.data);
      
          // Clear the cart items from local storage
          localStorage.removeItem("cartItems");
      
          // Set the order ID using the state variable
          setOrder(response.data._id);
      
          // Navigate to the order confirmation page
          navigate("/orderconfirmation");
        } catch (error) {
          console.error("Error placing order:", error);
      
          // Display an error message to the user
          toast.error("Failed to place order. Please try again.");
        }
      };
    return (
       <div>
       <h1 style={{textAlign:'center',fontSize:'36px'}}>Order Details</h1>
        <div className='main-order-div'>
           <div className='order-user-div'>
            <UserInfo onSubmit={handleUserInfoSubmit} />
            </div>
            <div className='order-payment-div'>
            <Paymentmethod onSelect={handlePaymentMethodSelect} />
           
       <h2 className='headof'>Order Summary</h2>
       <p>Total Items: {state?.totalQuantity}</p>
      <p>Total Price: ${state?.totalPrice}</p>
      
      <div style={{display:'flex'}}>{state?.cartItems.map(display =>(
        <div style={{marginLeft:'20px'}}>
        <img src={display.foodimage} style={{width:'100px',height:'80px'}}/>
        <p>Item: {display.foodname}</p>
        <p>Quantity: {display.quantity}</p>
        </div>
      ))} </div>
      {/* <button onClick={handleAllDeleteAndPlaceOrder} className='place-order' >Place Order</button> */}
      <button onClick={() => { handleAllDeleteAndPlaceOrder(state._id); placeOrder(); }} className='place-order' >Place Order</button>
      </div>

    </div>
          
         
        </div>
    );
}

export default Orderpage;




