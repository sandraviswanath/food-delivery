import React from 'react';

const OrderSummary = ({ cartItems, userInfo, paymentMethod, placeOrder }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>User Information: {userInfo.name}, {userInfo.address}</p>
      <p>Payment Method: {paymentMethod}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
