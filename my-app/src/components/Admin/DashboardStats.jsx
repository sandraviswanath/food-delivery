


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminDashboard from './Admindashboard';

// import './AdminDashboard.css'
// import { useNavigate } from 'react-router-dom';

// const DashboardStats = () => {
//   const [restaurantCount, setRestaurantCount] = useState(0);
//   const [orderCount, setOrderCount] = useState(0);
//   const [userCount, setUserCount] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchRestaurantCount();
//     fetchOrderCount();
//     fetchUserCount();
//   }, []);

//   const fetchRestaurantCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/foodlist');
//       setRestaurantCount(response.data.length);
//     } catch (error) {
//       console.error('Error fetching restaurant count:', error);
//     }
//   };

//   const fetchOrderCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/getallorder');
//       setOrderCount(response.data.length);
//     } catch (error) {
//       console.error('Error fetching order count:', error);
//     }
//   };

//   const fetchUserCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/getallsignup');
//       setUserCount(response.data.length);
//     } catch (error) {
//       console.error('Error fetching user count:', error);
//     }
    
//   };
  
 
 
 
//   return (
//     <div>
//     <AdminDashboard/>
//     <div className='main-head section-p1'>
//       <h2 className='head-restaurants'>Admin Dashboard</h2>
//       <table className='dashboard-border' style={{width:'700px',marginLeft:'20%',border:'1px solid #dc3545'}}>
//         <tr className='table'>
//         <td className='table-head'style={{padding:'10px'}}>Total number of restaurants:</td>
       
//         <td className='table-head'style={{padding:'10px'}}> {restaurantCount}</td>
//         </tr>
//       <tr className='table'>
//       <td className='table-head' style={{padding:'10px'}}>Total number of orders:</td>
//       <td className='table-head' style={{padding:'10px'}}>{orderCount}</td> 
//       </tr>
//       <tr className='table'>
//         <td className='table-head' style={{padding:'10px'}}>Total number of users: </td>
//         <td className='table-head' style={{padding:'10px'}}>{userCount}</td>
//         </tr>
//       </table>
//     </div>
//     </div>
//   );
// };

// export default DashboardStats;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminDashboard from './Admindashboard';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';

const DashboardStats = () => {
  const [restaurantCount, setRestaurantCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [restaurantResponse, orderResponse, userResponse] = await Promise.all([
          axios.get('http://localhost:5000/foodlist'),
          axios.get('http://localhost:5000/getallorder'),
          axios.get('http://localhost:5000/getallsignup')
        ]);
        setRestaurantCount(restaurantResponse.data.length);
        setOrderCount(orderResponse.data.length);
        setUserCount(userResponse.data.length);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCounts();
  }, []);

  // You can check admin authentication here
  // For simplicity, assuming the admin is authenticated if restaurantCount is greater than 0
  const isAdminAuthenticated = () => restaurantCount > 0;

  if (!isAdminAuthenticated()) {
    return null; // Or you can render a message like "Access denied" or redirect to a login page
  }

  return (
    <div>
      <AdminDashboard />
      <div className='main-head section-p1'>
        <h2 className='head-restaurants'>Admin Dashboard</h2>
        <table className='dashboard-border' style={{ width: '700px', marginLeft: '20%', border: '1px solid #dc3545' }}>
          <tbody>
            <tr className='table'>
              <td className='table-head' style={{ padding: '10px' }}>Total number of restaurants:</td>
              <td className='table-head' style={{ padding: '10px' }}> {restaurantCount}</td>
            </tr>
            <tr className='table'>
              <td className='table-head' style={{ padding: '10px' }}>Total number of orders:</td>
              <td className='table-head' style={{ padding: '10px' }}>{orderCount}</td>
            </tr>
            <tr className='table'>
              <td className='table-head' style={{ padding: '10px' }}>Total number of users: </td>
              <td className='table-head' style={{ padding: '10px' }}>{userCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardStats;
