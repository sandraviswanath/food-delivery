import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import './AdminDashboard.css'
import AdminDashboard from './Admindashboard';
import { Button } from 'react-bootstrap';
function ViewOrder() {
    
 const [order,setOrder] = useState([]);

    useEffect(() => {
        const handleItems = async () => {
          try {
            const response = await axios.get('http://localhost:5000/getallorder');
            setOrder(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        handleItems();
      }, []);


   

      const handleDeleteorder = async (userId) => {
        try {
         
            await axios.delete(`http://localhost:5000/deleteorder/${userId}`);
            setOrder(order.filter(user => (user._id != userId)));
           
        }
         catch (error) {
            console.error('Error deleting user:', error);
        }
    };

  return (
    <div>
    <AdminDashboard/>
         <div className="main-head section-p1">
         <h3 className='head-restaurants'>Orders List</h3>
    <table width="100%" className='table-border'>
   
<thead>
    <tr className='table'>
       <td className='table-head'>User Id</td>
        <td className='table-head'>Email</td>
        <td className='table-head'>Date</td>
        <td className='table-head'>Products</td>
        <td className='table-head'>Total Price</td>
    </tr>
</thead>
<tbody>

{order.map(display =>(
    <tr className='table' key={display._id}>
        <td>{display._id}</td>
        <td>{display.email}</td>
        <td>{display.createdAt}</td>
    
        {/* <td><MdDelete className='delete-icon'onClick={() => handleDeleteorder(display._id)} /> </td> */}
       <td> {display.cartItems.map(demo => (
         <p> {demo.name}</p>
       ))}
        </td>
        <td>{display.totalPrice}</td>
    </tr>
    
    ))}
   
  
</tbody>
    </table>
    <div className='normal-btn'style={{textAlign:'center',paddingTop:'50px'}}>
   <button onClick={window.print} class="normal" style={{padding:'10px 20px 10px 20px',width:'100px' ,border:'none',borderRadius:'5px'}}>Print</button>
    </div>
    </div>
    </div>
  )
}

export default ViewOrder
