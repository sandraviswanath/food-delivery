// OrderConfirmation.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

function OrderConfirmation() {
   
  return (
    <div style={{ margin: '5% 35% 5% 35%', border: '1px solid green', padding: '10px' }}>
      <h2>Order Confirmation</h2>
      <div style={{textAlign:'center'}}>
      <TiTick style={{fontSize:'200px',color:'green'}}/>
      </div>
      <p>Your order has been successfully placed!</p>

      {/* You can add more information like order number, estimated delivery time, etc. */}
    </div>
  );
}

export default OrderConfirmation;

