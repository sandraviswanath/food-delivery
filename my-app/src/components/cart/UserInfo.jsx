import React, { useState } from 'react';

const UserInfo = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address });
  };

  return (
    <div>
      <h2>Delivery Address</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="phone" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
