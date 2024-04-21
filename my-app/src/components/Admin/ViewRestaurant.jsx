import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import './AdminDashboard.css'
import AdminDashboard from './Admindashboard';
function ViewRestaurant() {
    
 const [restaurant, setRestaurant] = useState([])
 
    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:5000/foodlist');
            setRestaurant(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);

      const handleDeleteRestaurant = async (userId) => {
        try {
            await axios.delete(`http://localhost:5000/delete/${userId}`);
            setRestaurant(restaurant.filter(user => user._id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

  return (
    <div>
    <AdminDashboard/>
         <div className="main-head section-p1">
         <h3 className='head-restaurants'>Restaurants List</h3>
    <table width="100%" className='table-border '>
   
<thead style={{padding:'20px'}}>
    <tr className='table'>
       <td className='table-head'>Restaurant Id</td>
        <td className='table-head'>Image</td>
        <td className='table-head'>Restaurant Name</td>
        <td className='table-head'>Remove</td>
        
    </tr>
</thead>
<tbody style={{padding:'20px'}}>
{restaurant.map(display =>(
    <tr className='table'>
        {/* <button onClick={mycontext.id}></button> */}
       
        <td>{display._id}</td>
        <td><img src= {display.cover} alt="" width={'150px'} height={'150px'}  style={{marginBottom:'10px',maxHeight:'150px'}}/></td>
        <td>{display.title}</td>
        <td><MdDelete className='delete-icon' onClick={() => handleDeleteRestaurant(display._id)}/> </td>
       
        
    </tr>
    
    ))}
</tbody>
    </table>
    <div className='normal-btn'>
    {/* <Link to={'/create'}><button class="normal">Add To Cart</button></Link> */}
    </div>
    </div>
    </div>
  )
}

export default ViewRestaurant
