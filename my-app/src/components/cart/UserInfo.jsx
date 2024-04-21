
import React, { useState } from 'react';
import './UserInfo.css'

const UserInfo = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userData);
  };

  return (
    <div style={{paddingTop:'20px'}}>
      <h2 className='headof'>User Information</h2>
      <form onSubmit={handleSubmit}style={{paddingTop:'30px'}}>
        <div style={{paddingBottom:'20px'}}>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={userData.name} 
            onChange={handleChange} 
            required 
            style={{marginLeft:'20px',width:'350px',height:'40px'}}
          />
        </div>
        <div style={{paddingBottom:'20px'}}>
          <label htmlFor="address">Address:</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={userData.address} 
            onChange={handleChange} 
            required 
            style={{marginLeft:'5px',width:'350px',height:'40px'}}
          />
        </div>
        <div style={{paddingBottom:'20px'}}>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            required 
            style={{marginLeft:'27px',width:'350px',height:'40px'}}
          />
        </div>
        <button type="submit" className='userinfo-submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;


