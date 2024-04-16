import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import './AdminDashboard.css'
import AdminDashboard from './Admindashboard';
function ViewUser() {
    
 const [User,setUser] = useState([]);

    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:5000/getallsignup');
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);

      const handleDeleteUser = async (userId) => {
        try {
         
            await axios.delete(`http://localhost:5000/deleteuser/${userId}`);
            setUser(User.filter(user => (user._id != userId)));
           
        }
         catch (error) {
            console.error('Error deleting user:', error);
        }
    };

  return (
    <div>
    <AdminDashboard/>
         <div className="main-head section-p1">
         <h3 className='head-restaurants'>Users List</h3>
    <table width="100%" className='table-border shadow-lg p-3 mb-5 bg-white rounded'>
   
<thead>
    <tr className='table'>
       <td className='table-head'>User Id</td>
        <td className='table-head'>Name</td>
        <td className='table-head'>Email</td>
        <td className='table-head'>Remove</td>
        
    </tr>
</thead>
<tbody>

{User.map(display =>(
    <tr className='table' key={display._id}>
        
       
        <td>{display._id}</td>
        <td>{display.name}</td>
        <td>{display.email}</td>
        <td><MdDelete className='delete-icon'onClick={() => handleDeleteUser(display._id)} /> </td>
       
        
    </tr>
    
    ))}
    {/* {User ? (
    User.map(display => (
        <tr className='table' key={display._id}>
            <td>{display._id}</td>
            <td>{display.name}</td>
            <td>{display.email}</td>
            <td><MdDelete className='delete-icon' onClick={() => handleDeleteUser(display._id)} /></td>
        </tr>
    ))
) : (
    <tr>
        <td colSpan="4">Loading...</td>
    </tr>
)} */}
  
</tbody>
    </table>
    <div className='normal-btn'>
    {/* <Link to={'/create'}><button class="normal">Add To Cart</button></Link> */}
    </div>
    </div>
    </div>
  )
}

export default ViewUser
